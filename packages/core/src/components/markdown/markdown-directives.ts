/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Nodes, Parent } from 'mdast';
import { textOf } from './markdown-text';

export type DirectiveNode = Extract<
  Nodes,
  { type: 'textDirective' | 'leafDirective' | 'containerDirective' }
>;

/**
 * What built-in Directives need from the renderer.
 */
export interface DirectiveEnvironment {
  document: Document;
  createElement: <K extends keyof HTMLElementTagNameMap>(
    tagName: K
  ) => HTMLElementTagNameMap[K];
  text: (value: string) => Text;
  appendChildren: (target: Node, parent: Parent) => void;
  emitAction?: (name: string, attributes: Record<string, string>) => void;
}

const CALLOUT_TYPES: Record<string, string> = {
  info: 'info',
  note: 'info',
  success: 'success',
  tip: 'success',
  warning: 'warning',
  caution: 'warning',
  danger: 'alarm',
  critical: 'critical',
};

const BUTTON_ATTRIBUTES = ['variant', 'icon'];

const directiveAttributes = (node: DirectiveNode) => {
  const attributes: Record<string, string> = {};
  for (const [key, value] of Object.entries(node.attributes ?? {})) {
    attributes[key] = value ?? '';
  }
  return attributes;
};

const pick = (attributes: Record<string, string>, names: string[]) => {
  const picked: Record<string, string> = {};
  for (const name of names) {
    if (Object.hasOwn(attributes, name)) {
      picked[name] = attributes[name];
    }
  }
  return picked;
};

/** Built-in Directives only receive the attributes they list. */
const applyAllowedAttributes = (
  element: HTMLElement,
  attributes: Record<string, string>,
  allowed: string[]
) => {
  for (const [name, value] of Object.entries(pick(attributes, allowed))) {
    element.setAttribute(name, value);
  }
};

const renderCallout = (
  node: DirectiveNode,
  attributes: Record<string, string>,
  env: DirectiveEnvironment
) => {
  const bar = env.document.createElement('ix-message-bar');
  bar.setAttribute(
    'type',
    Object.hasOwn(CALLOUT_TYPES, attributes.type)
      ? CALLOUT_TYPES[attributes.type]
      : 'info'
  );
  bar.setAttribute('persistent', '');
  if (attributes.heading) {
    const heading = env.createElement('strong');
    heading.textContent = attributes.heading;
    bar.appendChild(heading);
  }
  const content = env.createElement('div');
  env.appendChildren(content, node);
  bar.appendChild(content);
  return bar;
};

/**
 * Renders `button`, `pill`, `icon` and `callout`. Returns `null` for any
 * other Directive or an unsupported Directive form.
 */
export const renderBuiltInDirective = (
  node: DirectiveNode,
  env: DirectiveEnvironment
): HTMLElement | null => {
  const attributes = directiveAttributes(node);
  switch (node.name) {
    case 'button': {
      if (node.type === 'containerDirective') {
        return null;
      }
      const button = env.document.createElement('ix-button');
      applyAllowedAttributes(button, attributes, BUTTON_ATTRIBUTES);
      button.appendChild(env.text(textOf(node)));
      const action = attributes.action;
      if (action) {
        const payload = pick(attributes, [...BUTTON_ATTRIBUTES, 'action']);
        button.addEventListener('click', () =>
          env.emitAction?.(action, payload)
        );
      }
      return button;
    }
    case 'pill': {
      if (node.type === 'containerDirective') {
        return null;
      }
      const pill = env.document.createElement('ix-pill');
      applyAllowedAttributes(pill, attributes, BUTTON_ATTRIBUTES);
      pill.appendChild(env.text(textOf(node)));
      return pill;
    }
    case 'icon': {
      if (node.type !== 'textDirective' || !attributes.name) {
        return null;
      }
      const icon = env.document.createElement('ix-icon');
      applyAllowedAttributes(icon, attributes, ['name', 'size']);
      if (attributes.label) {
        icon.setAttribute('aria-label', attributes.label);
      } else {
        icon.setAttribute('aria-hidden', 'true');
      }
      return icon;
    }
    case 'callout':
      return node.type === 'containerDirective'
        ? renderCallout(node, attributes, env)
        : null;
    default:
      return null;
  }
};
