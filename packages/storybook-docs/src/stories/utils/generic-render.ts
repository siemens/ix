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
import type { JsonDocsProp } from '@stencil/core/internal';

export type GenericArgs<A = Record<string, any>> = {
  styles?: Partial<CSSStyleDeclaration>;
  defaultSlot?: string;
  previewWidth?: string;
} & A;

export type IxValidationComponent<A> = A & {
  validation: 'default' | 'info' | 'warning' | 'invalid' | 'valid';
};

export type GenericRenderComponent<T, A> = T & GenericArgs<A>;

export function genericValidationRender<T>(
  tag: string,
  args: IxValidationComponent<T>
) {
  const container = genericRender(tag, args, ['validation']);
  const input = container.querySelector(tag) as HTMLElement;

  input.classList.remove('ix-info', 'ix-warning', 'ix-invalid', 'ix-valid');

  if (args.validation !== 'default') {
    input.classList.add(`ix-${args.validation}`);
  }
  return container;
}

export function genericRender<A extends GenericArgs>(
  selector: string,
  args: A,
  ignoreArgs: string[] = [],
  afterRender?: (element: HTMLElement, args: A) => HTMLElement
) {
  const rootInner = document.createElement('div');
  rootInner.id = 'root-inner';
  let element = document.createElement(selector);

  // Create a copy to avoid mutating the original
  const processedArgs = { ...args };
  const specialKeys = ['defaultSlot', 'styles', 'previewWidth'];

  if (processedArgs.defaultSlot) {
    element.textContent = processedArgs.defaultSlot;
  }

  if (processedArgs.styles) {
    Object.assign(element.style, processedArgs.styles);
  }

  if (processedArgs.previewWidth) {
    element.style.width = processedArgs.previewWidth;
  }

  // Process remaining properties, excluding the special ones
  Object.keys(processedArgs)
    .filter((key) => !ignoreArgs.includes(key) && !specialKeys.includes(key))
    .forEach((key) => {
      const prop = getProp(selector, key);
      if (prop.type === 'boolean' && processedArgs[key] === false) {
        element.removeAttribute((prop as any).attr ?? prop.name);
        return;
      }
      element.setAttribute((prop as any).attr ?? prop.name, processedArgs[key]);
    });

  if (afterRender) {
    element = afterRender(element, args);
  }

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

function getProp(selector: string, propName: string) {
  const component = getComponent(selector);
  const prop = component.props.find((p) => p.name === propName);

  if (!prop) {
    throw new Error(`Prop ${propName} not found in component ${selector}`);
  }

  return prop;
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
        let attributeName = prop.name;

        if (
          prop.values.length > 1 &&
          prop.values.every((value) => value.type === 'string')
        ) {
          argTypes[attributeName] = {
            name: `${attributeName}*`,
            control: { type: 'select' },
            options: (prop.values as { type: 'string'; value: string }[])
              .filter((v) => v.value !== '')
              .map((v) => v.value),
          };

          return;
        }

        if (attributeName.includes('icon')) {
          argTypes[attributeName] = {
            control: { type: 'select' },
            options: icons,
          };

          return;
        }

        argTypes[attributeName] = {
          control: switchTypes(prop as JsonDocsProp),
        };
      });
  }
  return { ...argTypes, ...overwriteArgTypes };
}

function switchTypes(prop: JsonDocsProp): any {
  switch (prop.complexType?.original) {
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
