/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type MarkdownComponentMap = Record<string, string>;

export type MarkdownData = Record<string, unknown>;

export type MarkdownRenderErrorCode =
  | 'invalid-component-registration'
  | 'invalid-markdown-component'
  | 'renderer-unavailable'
  | 'render-failed';

export interface MarkdownPropertyAssignment {
  marker: string;
  properties: Record<string, unknown>;
}

export interface MarkdownRenderRequest {
  markdown: string;
  components?: MarkdownComponentMap;
  data?: MarkdownData;
  markerPrefix: string;
}

export interface MarkdownRenderResult {
  html: string;
  propertyAssignments: MarkdownPropertyAssignment[];
}

export type MarkdownRenderer = (
  request: MarkdownRenderRequest
) => Promise<MarkdownRenderResult>;

export interface MarkdownRenderErrorEvent {
  code: MarkdownRenderErrorCode;
  message: string;
  markdown: string;
  cause?: unknown;
}
