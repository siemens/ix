/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { FootnoteDefinition, FootnoteReference, Nodes, Root } from 'mdast';
import { normalizeIdentifier } from './markdown-identifier';

export type FootnoteInfo = {
  number: number;
  definition: FootnoteDefinition;
  references: number;
};

export type FootnoteReferenceInfo = { number: number; index: number };

/**
 * Numbers footnotes by first reference. References without definition are
 * left out so they keep their source text.
 */
export const collectFootnotes = (root: Root) => {
  const footnotes = new Map<string, FootnoteInfo>();
  const references = new WeakMap<FootnoteReference, FootnoteReferenceInfo>();
  const definitions = new Map<string, FootnoteDefinition>();
  const found: FootnoteReference[] = [];
  const visit = (node: Nodes) => {
    if (node.type === 'footnoteDefinition') {
      const id = normalizeIdentifier(node.identifier);
      if (!definitions.has(id)) {
        definitions.set(id, node);
      }
    } else if (node.type === 'footnoteReference') {
      found.push(node);
    }
    if ('children' in node) {
      (node.children as Nodes[]).forEach(visit);
    }
  };
  visit(root);

  for (const reference of found) {
    const id = normalizeIdentifier(reference.identifier);
    const definition = definitions.get(id);
    if (!definition) {
      continue;
    }
    let info = footnotes.get(id);
    if (!info) {
      info = { number: footnotes.size + 1, definition, references: 0 };
      footnotes.set(id, info);
    }
    references.set(reference, {
      number: info.number,
      index: info.references++,
    });
  }
  return { footnotes, references };
};
