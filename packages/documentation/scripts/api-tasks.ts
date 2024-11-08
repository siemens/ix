/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  ApiTableEntry,
  ApiTableTag,
  ApiTableTagType,
} from '@site/src/components/ApiTable';
import fse from 'fs-extra';
import path from 'path';
import { escapeMarkdown } from './utils';

type DocsTag = { name: string; text: string };

function htmlFormReadyTag(value: string) {
  return `<span className="Api__Table Docs__Tag">Form-ready since ${value}</span>`;
}

function htmlSinceTag(value: string) {
  return `<span className="Api__Table Docs__Tag">Since ${value}</span>`;
}

function htmlDeprecatedTag(value: string) {
  return `<span className="Api__Table Docs__Tag Docs__Tag__Deprecated" title="${value}">Deprecated: ${value}</span>`;
}

export async function writeApi(component: any, folderPath: string) {
  const output = path.join(folderPath, component.tag);
  const promises = [];

  let data = [writeProps(component)].join('');
  promises.push(fse.outputFile(path.join(output, 'props.md'), data));

  data = [writeEvents(component)].join('');
  promises.push(fse.outputFile(path.join(output, 'events.md'), data));

  promises.push(
    fse.outputFile(path.join(output, 'overview.md'), writeOverview(component))
  );

  promises.push(
    fse.outputFile(path.join(output, 'tags.md'), writeTags(component))
  );

  promises.push(
    fse.outputFile(path.join(output, 'slots.md'), writeSlots(component.slots))
  );

  return Promise.all(promises);
}

export function writeSlots(slots: { name: string; docs: string }[]) {
  if (slots.length === 0) {
    return 'No events available for this component.';
  }

  const attributes: ApiTableEntry[] = [];

  slots.forEach((slot) => {
    attributes.push({
      name: slot.name,
      description: slot.docs,
      definition: [],
      tags: [],
    });
  });

  const staticCode = `import ApiTable from '@site/src/components/ApiTable';


  <ApiTable attributes={${JSON.stringify(attributes)}} />`;
  return staticCode;
}

function writeEvents(component: any) {
  const events: {
    docsTags: DocsTag[];
    event: string;
    docs: string;
    detail: string;
  }[] = component.events;

  if (events.length === 0) {
    return 'No events available for this component.';
  }

  const attributes: ApiTableEntry[] = [];

  events.forEach((event) => {
    const propTags: ApiTableTag[] = [];
    event.docsTags.forEach((tag) => {
      const type = tag.name;

      if (type === 'since' || type === 'deprecated') {
        propTags.push({
          type: tag.name as ApiTableTagType,
          message: tag.text,
        });
        return;
      }

      console.log(`DocsTag not supported ${tag.name} (${component.filePath})`);
    });

    attributes.push({
      name: event.event,
      description: event.docs,
      definition: [
        {
          name: 'Detail',
          value: event.detail,
        },
      ],
      tags: propTags,
    });
  });

  const staticCode = `import ApiTable from '@site/src/components/ApiTable';


  <ApiTable attributes={${JSON.stringify(attributes)}} />`;

  return staticCode;
}

function writeProps(component: any) {
  const properties: {
    name: string;
    docs: string;
    type: string;
    attr: string;
    default: string;
    docsTags: DocsTag[];
  }[] = component.props;

  if (properties.length === 0) {
    return 'No properties available for this component.';
  }

  const attributes: ApiTableEntry[] = [];

  properties.forEach((prop) => {
    const propName = prop.name;
    const propDescription = prop.docs;
    const propType = escapeMarkdown(prop.type);

    const propTags: ApiTableTag[] = [];
    prop.docsTags.forEach((tag) => {
      const type = tag.name;

      if (type === 'since' || type === 'deprecated') {
        propTags.push({
          type: tag.name as ApiTableTagType,
          message: tag.text,
        });
        return;
      }

      console.log(`DocsTag not supported ${tag.name} (${component.filePath})`);
    });

    const attributeEntry: ApiTableEntry = {
      name: propName,
      description: propDescription,
      definition: [
        {
          name: 'Attribute',
          value: prop.attr,
        },
        {
          name: 'Type',
          value: propType,
        },
        {
          name: 'Default',
          value: prop.default,
        },
      ],
      tags: propTags,
    };

    attributes.push(attributeEntry);
  });

  const staticCode = `import ApiTable from '@site/src/components/ApiTable';


  <ApiTable attributes={${JSON.stringify(attributes)}} />`;

  return staticCode;
}

function writeOverview(component: any) {
  const { docs } = component;
  return `${docs}`;
}

function writeTags(component: { docsTags: DocsTag[] }) {
  const { docsTags } = component;

  const renderedDocsTags = docsTags
    .map((tag) => {
      if (tag.name === 'form-ready') {
        return htmlFormReadyTag(tag.text);
      }

      if (tag.name === 'since') {
        return htmlSinceTag(tag.text);
      }

      if (tag.name === 'deprecated') {
        return htmlDeprecatedTag(tag.text);
      }

      return null;
    })
    .filter((tag) => tag !== null);

  return renderedDocsTags.join('');
}
