/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { renderHTML } from '@comark/html';
import {
  createParse,
  type ComarkComment,
  type ComarkElement,
  type ComarkNode,
  type ComarkTree,
} from 'comark';
import security from 'comark/plugins/security';
import { resolveAttributes, type NodeHandler, type State } from 'comark/render';
import {
  createMarkdownComponentRegistry,
  MarkdownRegistryError,
  publicIxComponentTags,
  safeHtmlTags,
  type MarkdownComponentRegistry,
} from '../components/markdown/markdown-registry';
import {
  blankTargetRelTags,
  isAllowedUrl,
  isBlankTarget,
  isForbiddenAttribute,
  propertyMarkerAttribute,
  urlAttributes,
} from '../components/markdown/markdown-security';
import type {
  MarkdownRenderRequest,
  MarkdownRenderErrorCode,
  MarkdownRenderer,
  MarkdownRenderResult,
  MarkdownPropertyAssignment,
} from '../components/markdown/markdown.types';

const blockedTags = [
  'audio',
  'base',
  'button',
  'embed',
  'form',
  'frame',
  'frameset',
  'iframe',
  'link',
  'math',
  'meta',
  'object',
  'option',
  'portal',
  'script',
  'select',
  'style',
  'svg',
  'textarea',
  'video',
];

const voidTags = new Set(['br', 'col', 'hr', 'img', 'source', 'wbr']);
const slotNamePattern = /^[A-Za-z0-9_.-]+$/;

const parseMarkdown = createParse({
  html: true,
  plugins: [
    security({
      blockedTags,
      allowedProtocols: ['http', 'https', 'mailto', 'tel'],
      allowDataImages: false,
    }),
  ],
});

export class MarkdownPipelineError extends Error {
  constructor(
    public readonly code: Exclude<
      MarkdownRenderErrorCode,
      'renderer-unavailable' | 'render-failed'
    >,
    message: string
  ) {
    super(message);
    this.name = 'MarkdownPipelineError';
  }
}

interface CustomRendererContext {
  markerPrefix: string;
  nextMarker: number;
  propertyAssignments: MarkdownPropertyAssignment[];
}

export interface MarkdownCodeHighlighter {
  highlight(code: string, language: string): string | undefined;
}

export interface MarkdownRendererOptions {
  highlighter?: MarkdownCodeHighlighter;
}

function isElement(node: ComarkNode): node is ComarkElement {
  return Array.isArray(node) && typeof node[0] === 'string';
}

function isComment(node: ComarkNode): node is ComarkComment {
  return Array.isArray(node) && node[0] === null;
}

function escapeAttribute(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeText(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getPlainText(nodes: ComarkNode[]): string {
  let text = '';

  for (const node of nodes) {
    if (typeof node === 'string') {
      text += node;
      continue;
    }

    if (isComment(node)) {
      continue;
    }

    if (node[0] === 'img' && typeof node[1].alt === 'string') {
      text += node[1].alt;
      continue;
    }

    text += getPlainText(node.slice(2) as ComarkNode[]);
  }

  return text.replace(/\s+/g, ' ').trim();
}

function toPropertyName(attributeName: string): string {
  return attributeName.replace(/-([a-z])/g, (_, character: string) =>
    character.toUpperCase()
  );
}

function serializeAttributes(
  tag: string,
  unsafeAttributes: Record<string, unknown>,
  customRendererContext?: CustomRendererContext
): string {
  const attributes =
    tag === 'ix-link-button' && isBlankTarget(unsafeAttributes.target)
      ? { ...unsafeAttributes, target: '_self' }
      : unsafeAttributes;
  const serialized: string[] = [];
  const propertyValues: Record<string, unknown> = {};

  for (const [name, value] of Object.entries(attributes)) {
    const normalizedName = name.toLowerCase();

    if (
      name === '$' ||
      normalizedName === propertyMarkerAttribute ||
      isForbiddenAttribute(name) ||
      value === null ||
      value === undefined
    ) {
      continue;
    }

    if (urlAttributes.has(normalizedName) && !isAllowedUrl(String(value))) {
      continue;
    }

    if (customRendererContext && typeof value === 'object') {
      propertyValues[toPropertyName(name)] = value;
      continue;
    }

    if (typeof value === 'object') {
      continue;
    }

    if (typeof value === 'boolean') {
      if (customRendererContext && !value) {
        propertyValues[toPropertyName(name)] = false;
      }

      if (value) {
        serialized.push(name);
      }
      continue;
    }

    serialized.push(`${name}="${escapeAttribute(String(value))}"`);
  }

  if (blankTargetRelTags.has(tag) && isBlankTarget(attributes.target)) {
    const rel = new Set(
      String(attributes.rel ?? '')
        .split(/\s+/)
        .filter(Boolean)
    );
    rel.delete('opener');
    rel.add('noopener');
    rel.add('noreferrer');
    const existingRelIndex = serialized.findIndex((value) =>
      value.startsWith('rel=')
    );
    const serializedRel = `rel="${escapeAttribute([...rel].join(' '))}"`;

    if (existingRelIndex >= 0) {
      serialized[existingRelIndex] = serializedRel;
    } else {
      serialized.push(serializedRel);
    }
  }

  if (customRendererContext && Object.keys(propertyValues).length > 0) {
    const marker = `${
      customRendererContext.markerPrefix
    }-${customRendererContext.nextMarker++}`;
    serialized.push(`${propertyMarkerAttribute}="${marker}"`);
    customRendererContext.propertyAssignments.push({
      marker,
      properties: propertyValues,
    });
  }

  return serialized.length > 0 ? ` ${serialized.join(' ')}` : '';
}

async function renderChildren(
  node: ComarkElement,
  state: State,
  children: ComarkNode[]
): Promise<string> {
  let content = '';

  for (const child of children) {
    content += await state.one(child, state, node);
  }

  return content;
}

function applySlot(node: ComarkNode, slotName: string): ComarkNode | undefined {
  if (typeof node === 'string') {
    return ['span', { slot: slotName }, node];
  }

  if (isComment(node)) {
    return undefined;
  }

  const [tag, attributes, ...children] = node;
  return [tag, { ...attributes, slot: slotName }, ...children];
}

function createNativeHandler(tag: string): NodeHandler {
  return async (node, state) => {
    const attributes = resolveAttributes(node[1], state.renderData, {
      parseJson: true,
    });
    const content = await renderChildren(
      node,
      state,
      node.slice(2) as ComarkNode[]
    );
    const serializedAttributes = serializeAttributes(tag, attributes);

    if (voidTags.has(tag)) {
      return `<${tag}${serializedAttributes}>`;
    }

    return `<${tag}${serializedAttributes}>${content}</${tag}>`;
  };
}

function createCodeHandler(
  highlighter: MarkdownCodeHighlighter | undefined
): NodeHandler {
  const nativeHandler = createNativeHandler('code');

  return async (node, state, parent) => {
    const language = parent?.[0] === 'pre' ? parent[1].language : undefined;
    const children = node.slice(2) as ComarkNode[];

    if (
      !highlighter ||
      typeof language !== 'string' ||
      !language ||
      !children.every((child) => typeof child === 'string')
    ) {
      return nativeHandler(node, state, parent);
    }

    const highlighted = highlighter.highlight(
      children.join(''),
      language.toLowerCase()
    );

    if (highlighted === undefined) {
      return nativeHandler(node, state, parent);
    }

    const attributes = resolveAttributes(node[1], state.renderData, {
      parseJson: true,
    });
    const classes = new Set(
      String(attributes.class ?? '')
        .split(/\s+/)
        .filter(Boolean)
    );
    classes.add('hljs');

    return `<code${serializeAttributes('code', {
      ...attributes,
      class: [...classes].join(' '),
    })}>${highlighted}</code>`;
  };
}

function getTaskCheckboxAttributes(
  node: ComarkElement,
  state: State
): Record<string, unknown> {
  validateInput(node);
  const attributes = resolveAttributes(node[1], state.renderData, {
    parseJson: true,
  });

  return {
    checked: attributes.checked === true,
    disabled: true,
  };
}

function createTaskCheckboxHandler(): NodeHandler {
  return async () => {
    throw new MarkdownPipelineError(
      'invalid-markdown-component',
      'Checkbox inputs are only allowed as Markdown task-list markers.'
    );
  };
}

function createListItemHandler(): NodeHandler {
  return async (node, state) => {
    const attributes = resolveAttributes(node[1], state.renderData, {
      parseJson: true,
    });
    const children = node.slice(2) as ComarkNode[];
    const firstChild = children[0];
    let taskCheckbox: ComarkElement | undefined;
    let labelChildren: ComarkNode[] = [];
    let trailingChildren: ComarkNode[] = [];

    if (isElement(firstChild) && firstChild[0] === 'input') {
      taskCheckbox = firstChild;
      const nestedListIndex = children.findIndex(
        (child, index) =>
          index > 0 &&
          isElement(child) &&
          (child[0] === 'ul' || child[0] === 'ol')
      );
      const labelEnd =
        nestedListIndex === -1 ? children.length : nestedListIndex;
      labelChildren = children.slice(1, labelEnd);
      trailingChildren =
        nestedListIndex === -1 ? [] : children.slice(nestedListIndex);
    } else if (isElement(firstChild) && firstChild[0] === 'p') {
      const paragraphChildren = firstChild.slice(2) as ComarkNode[];
      const paragraphCheckbox = paragraphChildren[0];

      if (isElement(paragraphCheckbox) && paragraphCheckbox[0] === 'input') {
        taskCheckbox = paragraphCheckbox;
        labelChildren = paragraphChildren.slice(1);
        trailingChildren = children.slice(1);
      }
    }

    if (!taskCheckbox) {
      const content = await renderChildren(node, state, children);
      return `<li${serializeAttributes('li', attributes)}>${content}</li>`;
    }

    const label = getPlainText(labelChildren);

    if (!label) {
      throw new MarkdownPipelineError(
        'invalid-markdown-component',
        'Markdown task-list items require a label.'
      );
    }

    const trailingContent = await renderChildren(node, state, trailingChildren);
    const checkboxAttributes = getTaskCheckboxAttributes(taskCheckbox, state);

    return `<li${serializeAttributes(
      'li',
      attributes
    )}><ix-checkbox${serializeAttributes(
      'ix-checkbox',
      checkboxAttributes
    )}>${escapeText(label)}</ix-checkbox>${trailingContent}</li>`;
  };
}

function createCustomElementHandler(
  targetTag: string,
  context: CustomRendererContext
): NodeHandler {
  return async (node, state) => {
    const attributes = resolveAttributes(node[1], state.renderData, {
      parseJson: true,
    });
    const children = node.slice(2) as ComarkNode[];
    let content = '';

    for (const child of children) {
      if (isElement(child) && child[0] === 'template') {
        const slotName = child[1].name;

        if (typeof slotName !== 'string' || !slotNamePattern.test(slotName)) {
          throw new MarkdownPipelineError(
            'invalid-markdown-component',
            `Invalid slot name in component "${node[0]}".`
          );
        }

        const templateChildren = child.slice(2) as ComarkNode[];
        const slottedChildren =
          slotName === 'default'
            ? templateChildren
            : templateChildren
                .map((slotChild) => applySlot(slotChild, slotName))
                .filter((slotChild): slotChild is ComarkNode => !!slotChild);

        content += await renderChildren(node, state, slottedChildren);
        continue;
      }

      content += await state.one(child, state, node);
    }

    const serializedAttributes = serializeAttributes(
      targetTag,
      attributes,
      context
    );

    return `<${targetTag}${serializedAttributes}>${content}</${targetTag}>`;
  };
}

function validateInput(node: ComarkElement) {
  if (node[0] !== 'input') {
    return;
  }

  const type = node[1].type;
  const disabled = node[1][':disabled'] ?? node[1].disabled;

  if (type !== 'checkbox' || (disabled !== true && disabled !== 'true')) {
    throw new MarkdownPipelineError(
      'invalid-markdown-component',
      'Only disabled task-list checkboxes are allowed in Markdown.'
    );
  }
}

function validateTree(
  nodes: ComarkNode[],
  registry: MarkdownComponentRegistry,
  parentIsCustomElement = false,
  allowTaskInput = false
) {
  for (const [index, node] of nodes.entries()) {
    if (!isElement(node)) {
      continue;
    }

    const tag = node[0];
    const isCustomElement =
      publicIxComponentTags.has(tag) || registry.aliases.has(tag);

    if (tag === 'template') {
      if (!parentIsCustomElement) {
        throw new MarkdownPipelineError(
          'invalid-markdown-component',
          'Named slots are only allowed inside registered components.'
        );
      }

      validateTree(node.slice(2) as ComarkNode[], registry);
      continue;
    }

    if (tag === 'input' && (!allowTaskInput || index !== 0)) {
      throw new MarkdownPipelineError(
        'invalid-markdown-component',
        'Checkbox inputs are only allowed as Markdown task-list markers.'
      );
    }

    if (!safeHtmlTags.has(tag) && !isCustomElement) {
      throw new MarkdownPipelineError(
        'invalid-markdown-component',
        `Unknown Markdown component "${tag}".`
      );
    }

    validateInput(node);
    const className = node[1].class;
    const isTaskListItem =
      tag === 'li' &&
      typeof className === 'string' &&
      className.split(/\s+/).includes('task-list-item');
    const forwardsTaskInput = allowTaskInput && index === 0 && tag === 'p';
    validateTree(
      node.slice(2) as ComarkNode[],
      registry,
      isCustomElement,
      isTaskListItem || forwardsTaskInput
    );
  }
}

function createHandlers(
  registry: MarkdownComponentRegistry,
  context: CustomRendererContext,
  highlighter: MarkdownCodeHighlighter | undefined
): Record<string, NodeHandler> {
  const handlers: Record<string, NodeHandler> = {};

  for (const tag of safeHtmlTags) {
    handlers[tag] = createNativeHandler(tag);
  }

  handlers.input = createTaskCheckboxHandler();
  handlers.li = createListItemHandler();
  handlers.code = createCodeHandler(highlighter);

  for (const tag of publicIxComponentTags) {
    handlers[tag] = createCustomElementHandler(tag, context);
  }

  for (const [alias, target] of registry.aliases) {
    handlers[alias] = createCustomElementHandler(target, context);
  }

  return handlers;
}

export function createMarkdownRenderer(
  options: MarkdownRendererOptions = {}
): MarkdownRenderer {
  return async ({
    markdown,
    components,
    data,
    markerPrefix,
  }: MarkdownRenderRequest): Promise<MarkdownRenderResult> => {
    let registry: MarkdownComponentRegistry;

    try {
      registry = createMarkdownComponentRegistry(components);
    } catch (error) {
      if (error instanceof MarkdownRegistryError) {
        throw new MarkdownPipelineError(
          'invalid-component-registration',
          error.message
        );
      }
      throw error;
    }

    const tree: ComarkTree = await parseMarkdown(markdown);
    validateTree(tree.nodes, registry);

    const context: CustomRendererContext = {
      markerPrefix,
      nextMarker: 0,
      propertyAssignments: [],
    };
    const html = await renderHTML(tree, {
      components: createHandlers(registry, context, options.highlighter),
      data,
    });

    return {
      html,
      propertyAssignments: context.propertyAssignments,
    };
  };
}

export const render = createMarkdownRenderer();
