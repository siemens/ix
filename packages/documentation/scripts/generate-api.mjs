/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { readFileSync } from 'fs';
import fse from 'fs-extra';
import path from 'path';

const __dirname = path.resolve();

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

(function () {
  const { components } = readComponents();

  components.forEach(writeApi);
})();
