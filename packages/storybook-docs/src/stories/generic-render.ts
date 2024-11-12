/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { icons } from '@siemens/ix-icons/dist/sample.json';
import jsonFile from '@siemens/ix/component-doc.json';
import { ArgTypes } from '@storybook/web-components';

export function genericRender(selector: string, args: any) {
  const rootInner = document.createElement('div');
  rootInner.id = 'root-inner';
  const element = document.createElement(selector);

  if ('defaultSlot' in args) {
    element.textContent = args.defaultSlot;
    delete args.defaultSlot;
  }

  Object.keys(args).forEach((key) => {
    element.setAttribute(key, args[key]);
  });

  rootInner.appendChild(element);
  return rootInner;
}

export function getLoremIpsum() {
  return `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`;
}

type ExtractedInputType<T = unknown> = ArgTypes<T>[keyof T];

function getComponent(selector: string) {
  const { components } = jsonFile;
  const component = components.find((c) => c.tag === selector);

  if (!component) {
    throw new Error(`Component ${selector} not found in component-doc.json`);
  }

  return component;
}

export function makeArgTypes<T = unknown>(
  selector: string,
  overwriteArgTypes: T = {} as T,
  generateAll: boolean = true,
  ignore: string[] = []
) {
  const component = getComponent(selector);
  const props = component.props;
  const argTypes: Record<string, ExtractedInputType<T>> = {};

  if (generateAll) {
    props
      .filter((prop) => {
        return !ignore.includes(prop.name);
      })
      .forEach((prop) => {
        if (
          prop.values.length > 1 &&
          prop.values.every((value) => value.type === 'string')
        ) {
          argTypes[prop.name] = {
            name: `${prop.name}*`,
            control: { type: 'select' },
            options: (prop.values as { type: 'string'; value: string }[])
              .filter((v) => v.value !== '')
              .map((v) => v.value),
          };

          return;
        }

        if (prop.name.includes('icon')) {
          argTypes[prop.name] = {
            control: { type: 'select' },
            options: icons,
          };

          return;
        }

        argTypes[prop.name] = {
          control: switchTypes(prop.type),
        };
      });
  }
  return { ...argTypes, ...overwriteArgTypes };
}

function switchTypes(type: string): any {
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
