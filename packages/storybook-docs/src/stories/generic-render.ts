/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import jsonFile from '@siemens/ix/component-doc.json';

export function genericRender(selector: string, args: any) {
  const element = document.createElement(selector);

  if ('textContent' in args) {
    element.textContent = args.textContent;
  }
  Object.assign(element, args);
  return element;
}

export function getLoremIpsum() {
  return `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`;
}

export function makeArgTypes<T = unknown>(
  selector: string,
  overwriteArgTypes: T = {} as T,
  generateAll: boolean = true
) {
  const { components } = jsonFile;
  const component = components.find((c) => c.tag === selector);

  if (!component) {
    throw new Error(`Component ${selector} not found in component-doc.json`);
  }

  const props = component.props;
  const argTypes: Record<string, unknown> = {};

  if (generateAll) {
    props.forEach((prop) => {
      console.log(prop.name, prop.type);

      argTypes[prop.name] = { control: switchTypes(prop.type) };
    });
  }
  return { ...argTypes, ...overwriteArgTypes };
}

function switchTypes(type: string) {
  switch (type) {
    case 'string':
      return { type: 'text' };
    case 'boolean':
      return { type: 'boolean' };
    case 'number':
      return { type: 'number' };
    case 'enum':
      return { type: 'select' };
    default:
      return { type: 'text' };
  }
}
