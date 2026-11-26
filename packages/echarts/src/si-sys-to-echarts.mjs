import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceDirectory = path.dirname(fileURLToPath(import.meta.url));
const tokenMapPath = path.join(sourceDirectory, 'si-sys-to-echarts.json');
const themes = [
  ['brand-dark.ts', 'Siemens Brand Dark'],
  ['brand-light.ts', 'Siemens Brand Light'],
  ['community-dark.ts', 'Community Dark'],
  ['community-light.ts', 'Community Light'],
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

const identifierChar = /[A-Za-z0-9_$]/;

function skipStringLiteral(source, index) {
  const quote = source[index];
  let i = index + 1;
  while (i < source.length && source[i] !== quote) {
    i += source[i] === '\\' ? 2 : 1;
  }
  return i + 1;
}

function skipComment(source, index) {
  if (source.startsWith('//', index)) {
    const end = source.indexOf('\n', index);
    return end === -1 ? source.length : end;
  }
  if (source.startsWith('/*', index)) {
    return source.indexOf('*/', index + 2) + 2;
  }
  return index;
}

function skipTrivia(source, index) {
  let i = index;
  while (i < source.length) {
    if (/\s/.test(source[i])) {
      i++;
      continue;
    }
    const next = skipComment(source, i);
    if (next === i) {
      return i;
    }
    i = next;
  }
  return i;
}

function findClosingBracket(source, openIndex) {
  let depth = 0;
  let i = openIndex;
  while (i < source.length) {
    const char = source[i];
    if (char === "'" || char === '"' || char === '`') {
      i = skipStringLiteral(source, i);
      continue;
    }
    const afterComment = skipComment(source, i);
    if (afterComment !== i) {
      i = afterComment;
      continue;
    }
    if ('{[('.includes(char)) {
      depth++;
    } else if ('}])'.includes(char) && --depth === 0) {
      return i;
    }
    i++;
  }
  return -1;
}

// Returns the start index of the value of `name`, considering only keys
// at the top level of the object body [start, end).
function findPropertyValue(source, { start, end }, name) {
  let i = start;
  let depth = 0;
  while (i < end) {
    const char = source[i];
    if (char === "'" || char === '"' || char === '`') {
      i = skipStringLiteral(source, i);
      continue;
    }
    const afterComment = skipComment(source, i);
    if (afterComment !== i) {
      i = afterComment;
      continue;
    }
    if ('{[('.includes(char)) {
      depth++;
    } else if ('}])'.includes(char)) {
      depth--;
    } else if (
      depth === 0 &&
      identifierChar.test(char) &&
      !identifierChar.test(source[i - 1] ?? '') &&
      source[i - 1] !== '.'
    ) {
      let wordEnd = i;
      while (wordEnd < end && identifierChar.test(source[wordEnd])) {
        wordEnd++;
      }
      const afterWord = skipTrivia(source, wordEnd);
      if (source.slice(i, wordEnd) === name && source[afterWord] === ':') {
        return skipTrivia(source, afterWord + 1);
      }
      i = wordEnd;
      continue;
    }
    i++;
  }
  return -1;
}

function findConstObject(source, identifier) {
  const match = new RegExp(`^const ${identifier}\\s*=\\s*\\{`, 'm').exec(
    source
  );
  if (!match) {
    return null;
  }
  const open = match.index + match[0].length - 1;
  return { start: open + 1, end: findClosingBracket(source, open) };
}

// Resolves an object-valued property, following references to top-level consts.
function resolveObjectScope(source, valueIndex) {
  if (source[valueIndex] === '{') {
    return {
      start: valueIndex + 1,
      end: findClosingBracket(source, valueIndex),
    };
  }
  const identifier = /^[A-Za-z_$][A-Za-z0-9_$]*/.exec(
    source.slice(valueIndex)
  )?.[0];
  return identifier ? findConstObject(source, identifier) : null;
}

function resolvePropertyValue(source, scope, parts) {
  let currentScope = scope;
  for (const [index, part] of parts.entries()) {
    if (!currentScope || currentScope.end === -1) {
      return -1;
    }
    const valueIndex = findPropertyValue(source, currentScope, part);
    if (valueIndex === -1 || index === parts.length - 1) {
      return valueIndex;
    }
    currentScope = resolveObjectScope(source, valueIndex);
  }
  return -1;
}

function replaceStringValue(source, valueIndex, value, tokenName) {
  const quote = source[valueIndex];
  if (quote !== "'" && quote !== '"') {
    return null;
  }
  const stringEnd = skipStringLiteral(source, valueIndex);
  const trailingComments = /^(?:\s*\/\*[^*]*?\*\/)*/.exec(
    source.slice(stringEnd)
  )[0];
  const valueEnd = stringEnd + trailingComments.length;
  return (
    source.slice(0, valueIndex) +
    `'${value}' /* ${tokenName} */` +
    source.slice(valueEnd)
  );
}

function replaceSingleItemArrayValue(source, valueIndex, value, tokenName) {
  if (source[valueIndex] !== '[') {
    return null;
  }
  const arrayEnd = findClosingBracket(source, valueIndex);
  const itemIndex = skipTrivia(source, valueIndex + 1);
  const itemEnd = skipStringLiteral(source, itemIndex);
  if (skipTrivia(source, itemEnd) !== arrayEnd) {
    return null;
  }
  return (
    source.slice(0, valueIndex) +
    `['${value}' /* ${tokenName} */]` +
    source.slice(arrayEnd + 1)
  );
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
      if (eChartsVariable.includes('[')) {
        continue;
      }
      const valueIndex = resolvePropertyValue(
        updatedSource,
        findConstObject(updatedSource, 'axisCommon'),
        eChartsVariable.split('.')
      );
      if (valueIndex === -1) {
        continue;
      }
      const result =
        replaceStringValue(updatedSource, valueIndex, newHexValue, tokenName) ??
        replaceSingleItemArrayValue(
          updatedSource,
          valueIndex,
          newHexValue,
          tokenName
        );
      if (result !== null && result !== updatedSource) {
        updatedSource = result;
        replacements++;
      }
    }
  }

  return { updatedSource, replacements };
}

function findThemeScope(source) {
  const exportMatch = /export default\s*\{/.exec(source);
  if (!exportMatch) {
    return null;
  }
  const open = exportMatch.index + exportMatch[0].length - 1;
  const exportScope = { start: open + 1, end: findClosingBracket(source, open) };
  const themeIndex = findPropertyValue(source, exportScope, 'theme');
  return themeIndex === -1 ? null : resolveObjectScope(source, themeIndex);
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
      eChartsVariable === 'graph.color' ||
      eChartsVariable.includes('[')
    ) {
      continue;
    }

    const valueIndex = resolvePropertyValue(
      updatedSource,
      findThemeScope(updatedSource),
      eChartsVariable.split('.')
    );
    if (valueIndex === -1) {
      continue;
    }
    const result = replaceStringValue(
      updatedSource,
      valueIndex,
      hexValue,
      tokenName
    );
    if (result !== null && result !== updatedSource) {
      updatedSource = result;
      replacements++;
    }
  }

  return { updatedSource, replacements };
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
  const result = {
    updatedSource: axisResult.updatedSource,
    replacements:
      paletteResult.replacements +
      pathResult.replacements +
      axisResult.replacements,
  };

  if (result.updatedSource !== source) {
    await writeFile(themePath, result.updatedSource, 'utf8');
  }

  console.log(`${themeFile}: ${result.replacements} token values updated`);
}
