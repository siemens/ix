/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import highlightJs from 'highlight.js/lib/common';
import { createMarkdownRenderer } from './markdown-renderer';

export const render = createMarkdownRenderer({
  highlighter: {
    highlight(code, language) {
      if (!highlightJs.getLanguage(language)) {
        return undefined;
      }

      return highlightJs.highlight(code, {
        language,
        ignoreIllegals: true,
      }).value;
    },
  },
});

export type {
  MarkdownComponentMap,
  MarkdownData,
  MarkdownPropertyAssignment,
  MarkdownRenderer,
  MarkdownRenderRequest,
  MarkdownRenderResult,
} from '../components/markdown/markdown.types';
