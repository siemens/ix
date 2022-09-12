import { readFileSync } from 'fs';
import fse from 'fs-extra';
import fs from 'fs';
import path, { join } from 'path';

const __dirname = path.resolve();

function autoGenerationWarning(previewPath) {
  // unix/win normalization
  previewPath = previewPath.replace(/\\/g, '/')

  const copyright = `<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  `

  return [
    copyright,
    `<!-- Auto generated! Please edit here: ${previewPath.substring(previewPath.indexOf('siemens-ix/packages/'))} -->`
  ].join('\n');
}

function generateMarkdown(previewPath, type, code) {
  return `${autoGenerationWarning(previewPath)}\n\`\`\`${type}\n${code.trimEnd()}\n\`\`\`\n`
}

function formatMultiline(str) {
  return str.split('\n\n').join('<br /><br />').split('\n').join(' ');
}

function readComponents() {
  const raw = readFileSync(
    path.join(__dirname, '..', 'core', 'component-doc.json')
  );

  return JSON.parse(raw);
}

function writeEvents(events) {
  if (events.length === 0) {
    return 'No events available for this component.';
  }

  return `| Name       | Description                   | Attribute        | Detail |
|------------|-------------------------------|------------------|--------|
${events
  .map(
    (event) =>
      `|${event.event}| ${formatMultiline(event.docs)} | \`${event.detail}\``
  )
  .join('\n')}
`;
}

function writeProps(properties) {
  if (properties.length === 0) {
    return 'No properties available for this component.';
  }

  return `| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
${properties
  .map(
    (prop) =>
      `|${prop.name}| ${formatMultiline(prop.docs)} | \`${
        prop.attr
      }\` | \`${prop.type.replace(/\|/g, '\uff5c')}\` | \`${prop.default}\` |`
  )
  .join('\n')}
`;
}

function writeApi(component) {
  const output = path.join(__dirname, 'docs', 'auto-generated', component.tag);

  let data = [writeProps(component.props)].join('');
  fse.outputFileSync(path.join(output, 'props.md'), data);

  data = [writeEvents(component.events)].join('');
  fse.outputFileSync(path.join(output, 'events.md'), data);
}

function writeWebComponentPreviews() {
  const previewsPath = path.join(__dirname, 'static', 'webcomponent-examples');
  const webComponentPreviews = fs.readdirSync(previewsPath)
    .filter((name) => name.includes('.html'))
    .map((name) => [
      name.replace('.html', ''),
      path.join(previewsPath, name),
    ]);

  webComponentPreviews.forEach(([name, previewPath]) => {
    const writePath = path.join(__dirname, 'docs', 'auto-generated', 'previews', 'web-component')
    fse.ensureDirSync(writePath);

    let code = fs.readFileSync(previewPath).toString();
    const CODE_SPLIT = '<!-- Preview code -->\n';
    const splitHtmlContent = code.split(CODE_SPLIT);
    if (splitHtmlContent?.length === 3) {
      code = splitHtmlContent[1]
        .split('\n')
        .map((line) => line.replace(/[ ]{4}/, ''))
        .join('\n')
        .trimEnd();
    }

    const markdown = generateMarkdown(previewPath, "html", code)
    fs.writeFileSync(path.join(writePath, `${name}.md`), markdown);
  });
}

function writeReactPreviews() {
  const webComponentPreviews = fs
    .readdirSync(path.join(__dirname, 'static', 'webcomponent-examples'))
    .filter((name) => name.includes('.html'))
    .map((name) => name.replace('.html', ''));

  const reactPreviewPath = path.join(
    __dirname,
    '../react-test-app/src/preview-examples'
  );

  const reactPreviews = fs.readdirSync(reactPreviewPath);
  const reactPreviewPaths = webComponentPreviews
    .filter((name) => {
      const exist = reactPreviews.includes(`${name}.tsx`);

      if (!exist) {
        console.warn(`React preview for ${name} is missing in react-test-app`);
      }

      return exist;
    })
    .map((name) => [
      name,
      path.join(reactPreviewPath, `${name}.tsx`),
    ]);

  reactPreviewPaths.forEach(([name, previewPath]) => {
    const writePath = path.join(__dirname, 'docs', 'auto-generated', 'previews', 'react')
    fse.ensureDirSync(writePath);
    const code = fs.readFileSync(previewPath).toString();
    const markdown = generateMarkdown(previewPath, "tsx", code)
    fs.writeFileSync(path.join(writePath, `${name}.md`), markdown);
  });
}

function writeAngularPreviews() {
  const webComponentPreviews = fs
    .readdirSync(path.join(__dirname, 'static', 'webcomponent-examples'))
    .filter((name) => name.includes('.html'))
    .map((name) => name.replace('.html', ''));

  const angularPreviewPath = path.join(
    __dirname,
    '../angular-test-app/src/preview-examples'
  );

  const angularPreviews = fs.readdirSync(angularPreviewPath);
  const angularPreviewPaths = webComponentPreviews
    .filter((name) => {
      const exist = angularPreviews.includes(`${name}.ts`);

      if (!exist) {
        console.warn(
          `Angular preview for ${name} is missing in angular-test-app`
        );
      }

      return exist;
    })
    .map((name) => [
      name,
      path.join(angularPreviewPath, `${name}.ts`),
    ]);

  angularPreviewPaths.forEach(([name, previewPath]) => {
    const writePath = path.join(__dirname, 'docs', 'auto-generated', 'previews', 'angular')
    fse.ensureDirSync(writePath);

    const code = fs.readFileSync(previewPath).toString();
    const markdown = generateMarkdown(previewPath, "typescript", code)
    fs.writeFileSync(
      path.join(writePath, `${name}.md`),
      markdown
    );
  });
}

(function () {
  const { components } = readComponents();
  components.forEach(writeApi);

  writeWebComponentPreviews();
  writeReactPreviews();
  writeAngularPreviews();
})();
