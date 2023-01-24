/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fse from 'fs-extra';
import path from 'path';
import { appendDocsTags, renderSinceTag } from '../docs-tags';
import { escapeMarkdown, formatMultiline, removeNewLines } from '../utils';

function renderTableCellWithDocsTags(name, docsTags) {
  let eventName = name;
  let tags = '';
  if (!!docsTags.length) {
    tags = appendDocsTags(tags, docsTags);
  }

  const eventNameContainer = `<div className="Api__Table"><div>${eventName}</div><div className="Api__Table Docs__Tags">${tags}</div></div>`;
  return removeNewLines(eventNameContainer);
}

export async function writeApi(component: any, folderPath: string) {
  const output = path.join(folderPath, component.tag);
  const promises = [];

  let data = [writeProps(component.props)].join('');
  promises.push(fse.outputFile(path.join(output, 'props.md'), data));

  data = [writeEvents(component.events)].join('');
  promises.push(fse.outputFile(path.join(output, 'events.md'), data));

  promises.push(
    fse.outputFile(path.join(output, 'overview.md'), writeOverview(component))
  );

  promises.push(
    fse.outputFile(path.join(output, 'tags.md'), writeTags(component))
  );

  return Promise.all(promises);
}

function writeEvents(events) {
  if (events.length === 0) {
    return 'No events available for this component.';
  }

  return `| Name       | Description                   | Type        |
|------------|-------------------------------|------------------|
${events
  .map((event) => {
    let eventDocs = renderTableCellWithDocsTags(
      formatMultiline(event.docs),
      event.docsTags
    );

    let detail = escapeMarkdown(event.detail);

    const eventEntry = `|${event.event}| ${eventDocs} | \`${detail}\``;

    return eventEntry;
  })
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
  .map((prop) => {
    const propName = prop.name;
    const propDescription = renderTableCellWithDocsTags(
      formatMultiline(prop.docs),
      prop.docsTags
    );

    const propType = escapeMarkdown(prop.type);

    return `|${propName}| ${propDescription} | \`${prop.attr}\` | \`${propType}\` | \`${prop.default}\` |`;
  })
  .join('\n')}
`;
}

function writeOverview(component: any) {
  const { docs } = component;
  return `${docs}`;
}

function writeTags(component: any) {
  const { docsTags } = component;

  const renderedDocsTags = docsTags
    .map((tag) => {
      if (tag.name === 'since') {
        return renderSinceTag(tag.text);
      }

      return null;
    })
    .filter((tag) => tag !== null);

  return renderedDocsTags.join('');
}
