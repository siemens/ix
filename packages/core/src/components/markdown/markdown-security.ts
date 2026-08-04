/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createMarkdownComponentRegistry,
  MarkdownRegistryError,
} from './markdown-registry';
import type {
  MarkdownComponentMap,
  MarkdownPropertyAssignment,
  MarkdownRenderErrorCode,
  MarkdownRenderResult,
} from './markdown.types';

export const forbiddenAttributes = new Set([
  'formaction',
  'innerhtml',
  'outerhtml',
  'ping',
  'srcdoc',
  'srcset',
  'style',
]);

export const urlAttributes = new Set([
  'action',
  'background',
  'cite',
  'href',
  'poster',
  'src',
  'url',
  'xlink:href',
]);

export const allowedProtocols = new Set(['http:', 'https:', 'mailto:', 'tel:']);

export const blankTargetRelTags = new Set([
  'a',
  'ix-breadcrumb-item',
  'ix-button',
  'ix-menu-item',
]);

export const propertyMarkerAttribute = 'data-ix-markdown-node';

const attributeNamePattern = /^[A-Za-z_][A-Za-z0-9_.:-]*$/;
const propertyNamePattern = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
const forbiddenProperties = new Set([
  '__proto__',
  'constructor',
  'innerhtml',
  'outerhtml',
  'prototype',
]);

export class MarkdownVerificationError extends Error {
  constructor(
    public readonly code: Exclude<
      MarkdownRenderErrorCode,
      'renderer-unavailable' | 'render-failed'
    >,
    message: string
  ) {
    super(message);
    this.name = 'MarkdownVerificationError';
  }
}

export function isAllowedUrl(value: string): boolean {
  const normalized = value.trim().replace(/[\u0000-\u0020]+/g, '');
  const protocol = /^([a-z][a-z0-9+.-]*):/i.exec(normalized)?.[1];

  if (!protocol) {
    return true;
  }

  return allowedProtocols.has(`${protocol.toLowerCase()}:`);
}

export function isBlankTarget(value: unknown): boolean {
  return typeof value === 'string' && value.trim().toLowerCase() === '_blank';
}

export function isForbiddenAttribute(name: string): boolean {
  const normalized = name.toLowerCase();
  return (
    normalized.startsWith('on') ||
    forbiddenAttributes.has(normalized) ||
    !attributeNamePattern.test(name)
  );
}

export function isForbiddenProperty(name: string): boolean {
  const normalized = name.toLowerCase();
  return (
    normalized.startsWith('on') ||
    forbiddenProperties.has(normalized) ||
    forbiddenAttributes.has(normalized) ||
    urlAttributes.has(normalized) ||
    normalized === 'xlinkhref' ||
    !propertyNamePattern.test(name)
  );
}

function validateAssignment(
  assignment: unknown,
  markerPrefix: string
): MarkdownPropertyAssignment {
  if (
    !assignment ||
    typeof assignment !== 'object' ||
    !('marker' in assignment) ||
    typeof assignment.marker !== 'string' ||
    !new RegExp(`^${markerPrefix}-\\d+$`).test(assignment.marker) ||
    !('properties' in assignment) ||
    !assignment.properties ||
    typeof assignment.properties !== 'object' ||
    Array.isArray(assignment.properties)
  ) {
    throw new MarkdownVerificationError(
      'invalid-markdown-component',
      'The Markdown renderer returned an invalid property assignment.'
    );
  }

  for (const property of Object.keys(assignment.properties)) {
    if (isForbiddenProperty(property)) {
      throw new MarkdownVerificationError(
        'invalid-markdown-component',
        `The Markdown renderer returned an unsafe property "${property}".`
      );
    }
  }

  return assignment as MarkdownPropertyAssignment;
}

export function verifyMarkdownRenderResult(
  result: unknown,
  components: MarkdownComponentMap | undefined,
  markerPrefix: string
): MarkdownRenderResult {
  if (
    !result ||
    typeof result !== 'object' ||
    !('html' in result) ||
    typeof result.html !== 'string' ||
    !('propertyAssignments' in result) ||
    !Array.isArray(result.propertyAssignments)
  ) {
    throw new MarkdownVerificationError(
      'invalid-markdown-component',
      'The Markdown renderer returned an invalid result.'
    );
  }

  let outputTags: ReadonlySet<string>;

  try {
    outputTags = createMarkdownComponentRegistry(components).outputTags;
  } catch (error) {
    if (error instanceof MarkdownRegistryError) {
      throw new MarkdownVerificationError(
        'invalid-component-registration',
        error.message
      );
    }
    throw error;
  }

  const assignments = result.propertyAssignments.map((assignment) =>
    validateAssignment(assignment, markerPrefix)
  );
  const assignmentMarkers = new Set(assignments.map(({ marker }) => marker));

  if (assignmentMarkers.size !== assignments.length) {
    throw new MarkdownVerificationError(
      'invalid-markdown-component',
      'The Markdown renderer returned duplicate property assignments.'
    );
  }

  if (typeof document === 'undefined') {
    return {
      html: result.html,
      propertyAssignments: assignments,
    };
  }

  const template = document.createElement('template');
  template.innerHTML = result.html;
  const markerElements = new Map<string, Element>();

  for (const element of Array.from(template.content.querySelectorAll('*'))) {
    const tag = element.localName;

    if (!outputTags.has(tag)) {
      element.remove();
      continue;
    }

    if (
      tag === 'input' &&
      (element.getAttribute('type') !== 'checkbox' ||
        !element.hasAttribute('disabled'))
    ) {
      element.remove();
      continue;
    }

    for (const attribute of Array.from(element.attributes)) {
      const name = attribute.name.toLowerCase();

      if (isForbiddenAttribute(name)) {
        element.removeAttribute(attribute.name);
        continue;
      }

      if (urlAttributes.has(name) && !isAllowedUrl(attribute.value)) {
        element.removeAttribute(attribute.name);
      }
    }

    if (
      blankTargetRelTags.has(tag) &&
      isBlankTarget(element.getAttribute('target'))
    ) {
      const rel = new Set(
        (element.getAttribute('rel') ?? '').split(/\s+/).filter(Boolean)
      );
      rel.delete('opener');
      rel.add('noopener');
      rel.add('noreferrer');
      element.setAttribute('rel', [...rel].join(' '));
    }

    const marker = element.getAttribute(propertyMarkerAttribute);

    if (!marker) {
      continue;
    }

    if (
      !assignmentMarkers.has(marker) ||
      !tag.includes('-') ||
      markerElements.has(marker)
    ) {
      element.removeAttribute(propertyMarkerAttribute);
      continue;
    }

    markerElements.set(marker, element);
  }

  for (const { marker } of assignments) {
    if (!markerElements.has(marker)) {
      throw new MarkdownVerificationError(
        'invalid-markdown-component',
        `The Markdown renderer returned an invalid property target "${marker}".`
      );
    }
  }

  return {
    html: template.innerHTML,
    propertyAssignments: assignments,
  };
}
