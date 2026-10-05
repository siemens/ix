import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceDirectory = path.dirname(fileURLToPath(import.meta.url));
const tokenMapPath = path.join(sourceDirectory, 'si-sys-to-echarts.json');
const themes = [
  ['brand-dark.ts', 'Siemens Brand Dark'],
  ['brand-light.ts', 'Siemens Brand Light'],
  ['classic-dark.ts', 'Classic Dark'],
  ['classic-light.ts', 'Classic Light'],
];

const hexPattern = /^#[0-9A-Fa-f]{6}$/;

function collectMappings(value, tokenName, mappings = new Map()) {
  if (!value || typeof value !== 'object') {
    return mappings;
  }

  if (value.hexValuesByMode && value.eChartsVariable && tokenName) {
    for (const [mode, hexValue] of Object.entries(value.hexValuesByMode)) {
      if (!hexPattern.test(hexValue) && hexValue !== 'transparent') {
        continue;
      }
      if (!mappings.has(mode)) {
        mappings.set(mode, []);
      }
      for (const eChartsVariable of value.eChartsVariable) {
        mappings.get(mode).push({
          eChartsVariable,
          hexValue,
          tokenName,
        });
      }
    }
  }

  for (const [key, child] of Object.entries(value)) {
    collectMappings(child, key, mappings);
  }

  return mappings;
}

function updatePalette(source, colorsMapping, mode) {
  const paletteEntries = Object.entries(colorsMapping).flatMap(
    ([tokenName, mapping]) => {
      const hexValue = mapping.hexValuesByMode?.[mode];
      return hexPattern.test(hexValue) ? [{ tokenName, hexValue }] : [];
    }
  );
  const paletteStart = source.indexOf('const colors = [');
  const paletteEnd = source.indexOf('];', paletteStart);
  if (paletteStart === -1 || paletteEnd === -1) {
    return { updatedSource: source, replacements: 0 };
  }

  let entryIndex = 0;
  const palette = source.slice(paletteStart, paletteEnd);
  const updatedPalette = palette.replace(
    /'#[0-9A-Fa-f]{6}'(?:\s*\/\*[^*]+?\*\/)?/g,
    () => {
      const entry = paletteEntries[entryIndex++];
      return entry ? `'${entry.hexValue}' /* ${entry.tokenName} */` : '';
    }
  );

  return {
    updatedSource:
      source.slice(0, paletteStart) +
      updatedPalette +
      source.slice(paletteEnd),
    replacements: entryIndex,
  };
}

function stripValueComments(source) {
  return source.replace(/\s*\/\*[^*]+?\*\/(?=\s*[,\]])/g, '');
}

function updateAxisCommon(source, axisMappings, mode) {
  let updatedSource = source;
  let replacements = 0;

  for (const [tokenName, mapping] of Object.entries(axisMappings)) {
    const newHexValue = mapping.hexValuesByMode?.[mode];
    if (!hexPattern.test(newHexValue)) {
      continue;
    }

    for (const eChartsVariable of mapping.eChartsVariable ?? []) {
      const propertyName = eChartsVariable.split('.')[0];
      const propertyPattern =
        propertyName === 'splitLine'
          ? new RegExp(
              `(splitLine:\\s*\\{[\\s\\S]*?color:\\s*\\[)'#[0-9A-Fa-f]{6}'(?:\\s*\\/\\*[^*]+?\\*\\/)*(\\])`
            )
          : new RegExp(
              `(${propertyName}:\\s*\\{[\\s\\S]*?color:\\s*)'#[0-9A-Fa-f]{6}'(?:\\s*\\/\\*[^*]+?\\*\\/)*`
            );
      const before = updatedSource;
      updatedSource = updatedSource.replace(
        propertyPattern,
        propertyName === 'splitLine'
          ? `$1'${newHexValue}' /* ${tokenName} */$2`
          : `$1'${newHexValue}' /* ${tokenName} */`
      );
      if (updatedSource !== before) {
        replacements++;
      }
    }
  }

  return { updatedSource, replacements };
}

function updateMappedPaths(source, mappings) {
  let updatedSource = source.replace(
    /(\s*\/\*[^*]+?\*\/)(?:\s*\/\*[^*]+?\*\/)+/g,
    '$1'
  );
  let replacements = 0;

  for (const { eChartsVariable, hexValue, tokenName } of mappings) {
    if (
      !eChartsVariable.includes('.') ||
      eChartsVariable === 'color' ||
      eChartsVariable === 'graph.color' ||
      eChartsVariable.includes('axisCommon') ||
      eChartsVariable.includes('[')
    ) {
      continue;
    }

    const parts = eChartsVariable.split('.');
    const propertyPath = parts
      .map((part, index) =>
        index === parts.length - 1
          ? `${part}:\\s*`
          : `${part}:\\s*\\{[\\s\\S]*?`
      )
      .join('');
    const propertyPattern = new RegExp(
      `(${propertyPath})'#[0-9A-Fa-f]{6}'(?:\\s*\\/\\*[^*]+?\\*\\/)*|(${propertyPath})'[^']*'`,
      'g'
    );
    const before = updatedSource;
    updatedSource = updatedSource.replace(
      propertyPattern,
      (_, hexPrefix, stringPrefix) =>
        `${hexPrefix ?? stringPrefix}'${hexValue}' /* ${tokenName} */`
    );
    if (updatedSource !== before) {
      replacements++;
    }
  }

  return { updatedSource, replacements };
}

function updateTimeline(source, timelineMappings, mode) {
  const timelineStart = source.indexOf('    timeline: {');
  if (timelineStart === -1) {
    return { updatedSource: source, replacements: 0 };
  }

  const timelineEnd = source.indexOf('\n    },\n    visualMap:', timelineStart);
  if (timelineEnd === -1) {
    return { updatedSource: source, replacements: 0 };
  }

  let timeline = source.slice(timelineStart, timelineEnd);
  let replacements = 0;
  const values = new Map();
  for (const [tokenName, mapping] of Object.entries(timelineMappings)) {
    const hexValue = mapping.hexValuesByMode?.[mode];
    if (hexPattern.test(hexValue) || hexValue === 'transparent') {
      for (const eChartsVariable of mapping.eChartsVariable ?? []) {
        values.set(eChartsVariable, { tokenName, hexValue });
      }
    }
  }

  const replaceColors = (property, value) => {
    const pattern = new RegExp(
      `(${property}:\\s*\\{\\s*color:\\s*)'[^']*'(?:\\s*\\/\\*[^*]+?\\*\\/)*`,
      'g'
    );
    timeline = timeline.replace(pattern, (_, prefix) => {
      replacements++;
      return `${prefix}'${value.hexValue}' /* ${value.tokenName} */`;
    });
  };

  replaceColors('lineStyle', values.get('timeline.lineStyle.color'));
  replaceColors('itemStyle', values.get('timeline.itemStyle.color'));
  replaceColors('checkpointStyle', values.get('timeline.checkpointStyle.color'));
  replaceColors('label', values.get('timeline.label.color'));
  replaceColors('controlStyle', values.get('timeline.controlStyle.color'));

  return {
    updatedSource: source.slice(0, timelineStart) + timeline + source.slice(timelineEnd),
    replacements,
  };
}

const tokenMap = JSON.parse(await readFile(tokenMapPath, 'utf8'));
const mappingsByMode = collectMappings(tokenMap);

for (const [themeFile, mode] of themes) {
  const themePath = path.join(sourceDirectory, 'themes', themeFile);
  const source = await readFile(themePath, 'utf8');
  const cleanedSource = stripValueComments(source);
  const paletteResult = updatePalette(cleanedSource, tokenMap.colors, mode);
  const pathResult = updateMappedPaths(
    paletteResult.updatedSource,
    mappingsByMode.get(mode) ?? []
  );
  const axisResult = updateAxisCommon(
    pathResult.updatedSource,
    tokenMap.axisCommon,
    mode
  );
  const timelineResult = updateTimeline(
    axisResult.updatedSource,
    tokenMap.timeline,
    mode
  );
  const result = {
    updatedSource: timelineResult.updatedSource,
    replacements:
      paletteResult.replacements +
      pathResult.replacements +
      axisResult.replacements +
      timelineResult.replacements,
  };

  if (result.updatedSource !== source) {
    await writeFile(themePath, result.updatedSource, 'utf8');
  }

  console.log(`${themeFile}: ${result.replacements} token values updated`);
}
