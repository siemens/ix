/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { MarkdownComponentMap } from './markdown.types';

/**
 * Keep this catalog aligned with public `@Component` tags in packages/core.
 * Internal components and components excluded by stencil.config.ts do not
 * belong in this list.
 */
export const publicIxComponentTags: ReadonlySet<string> = new Set([
  'ix-action-card',
  'ix-application',
  'ix-application-header',
  'ix-avatar',
  'ix-blind',
  'ix-breadcrumb',
  'ix-breadcrumb-item',
  'ix-button',
  'ix-card',
  'ix-card-accordion',
  'ix-card-content',
  'ix-card-list',
  'ix-card-title',
  'ix-category-filter',
  'ix-chat',
  'ix-chat-ai-message',
  'ix-chat-attachment',
  'ix-chat-input',
  'ix-chat-user-message',
  'ix-checkbox',
  'ix-checkbox-group',
  'ix-chip',
  'ix-col',
  'ix-content',
  'ix-content-header',
  'ix-css-grid',
  'ix-css-grid-item',
  'ix-custom-field',
  'ix-date-dropdown',
  'ix-date-input',
  'ix-date-picker',
  'ix-date-time-card',
  'ix-datetime-input',
  'ix-datetime-picker',
  'ix-divider',
  'ix-dropdown',
  'ix-dropdown-button',
  'ix-dropdown-header',
  'ix-dropdown-item',
  'ix-dropdown-quick-actions',
  'ix-empty-state',
  'ix-event-list',
  'ix-event-list-item',
  'ix-expanding-search',
  'ix-field-label',
  'ix-filter-chip',
  'ix-flip-tile',
  'ix-flip-tile-content',
  'ix-group',
  'ix-group-context-menu',
  'ix-group-item',
  'ix-helper-text',
  'ix-icon-button',
  'ix-icon-toggle-button',
  'ix-input',
  'ix-key-value',
  'ix-key-value-list',
  'ix-kpi',
  'ix-layout-auto',
  'ix-layout-grid',
  'ix-link-button',
  'ix-markdown',
  'ix-menu',
  'ix-menu-about',
  'ix-menu-about-item',
  'ix-menu-about-news',
  'ix-menu-avatar',
  'ix-menu-avatar-item',
  'ix-menu-category',
  'ix-menu-expand-icon',
  'ix-menu-item',
  'ix-menu-settings',
  'ix-menu-settings-item',
  'ix-message-bar',
  'ix-modal',
  'ix-modal-content',
  'ix-modal-footer',
  'ix-modal-header',
  'ix-modal-loading',
  'ix-number-input',
  'ix-pagination',
  'ix-pane',
  'ix-pane-layout',
  'ix-pill',
  'ix-popover',
  'ix-popover-content',
  'ix-popover-footer',
  'ix-popover-header',
  'ix-popover-image',
  'ix-progress-indicator',
  'ix-push-card',
  'ix-radio',
  'ix-radio-group',
  'ix-range-field',
  'ix-row',
  'ix-select',
  'ix-select-item',
  'ix-slider',
  'ix-spinner',
  'ix-split-button',
  'ix-tab-item',
  'ix-tab-panel',
  'ix-tab-set',
  'ix-tabs',
  'ix-textarea',
  'ix-tile',
  'ix-time-input',
  'ix-time-picker',
  'ix-toast',
  'ix-toast-container',
  'ix-toggle',
  'ix-toggle-button',
  'ix-tooltip',
  'ix-tree',
  'ix-tree-item',
  'ix-typography',
  'ix-upload',
  'ix-workflow-step',
  'ix-workflow-steps',
]);

export const safeHtmlTags: ReadonlySet<string> = new Set([
  'a',
  'abbr',
  'article',
  'aside',
  'b',
  'bdi',
  'bdo',
  'blockquote',
  'br',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'dd',
  'del',
  'details',
  'dfn',
  'div',
  'dl',
  'dt',
  'em',
  'figcaption',
  'figure',
  'footer',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'hr',
  'i',
  'img',
  'input',
  'kbd',
  'label',
  'li',
  'main',
  'mark',
  'nav',
  'ol',
  'p',
  'picture',
  'pre',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'section',
  'small',
  'source',
  'span',
  'strong',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'time',
  'tr',
  'u',
  'ul',
  'var',
  'wbr',
]);

const reservedCustomElementNames = new Set([
  'annotation-xml',
  'color-profile',
  'font-face',
  'font-face-src',
  'font-face-uri',
  'font-face-format',
  'font-face-name',
  'missing-glyph',
]);

const componentAliasPattern = /^[a-z][a-z0-9-]*$/;
const customElementPattern = /^[a-z][.0-9_a-z]*-[.0-9_a-z-]*$/;

export class MarkdownRegistryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MarkdownRegistryError';
  }
}

export interface MarkdownComponentRegistry {
  aliases: ReadonlyMap<string, string>;
  outputTags: ReadonlySet<string>;
}

export function createMarkdownComponentRegistry(
  components: MarkdownComponentMap | undefined
): MarkdownComponentRegistry {
  const aliases = new Map<string, string>();

  for (const [alias, target] of Object.entries(components ?? {})) {
    if (!componentAliasPattern.test(alias)) {
      throw new MarkdownRegistryError(
        `Invalid Markdown component alias "${alias}".`
      );
    }

    if (safeHtmlTags.has(alias) || publicIxComponentTags.has(alias)) {
      throw new MarkdownRegistryError(
        `Markdown component alias "${alias}" conflicts with a built-in tag.`
      );
    }

    if (
      !customElementPattern.test(target) ||
      reservedCustomElementNames.has(target)
    ) {
      throw new MarkdownRegistryError(
        `Invalid custom-element tag "${target}" registered for "${alias}".`
      );
    }

    if (target.startsWith('ix-') && !publicIxComponentTags.has(target)) {
      throw new MarkdownRegistryError(
        `Unknown IX component "${target}" registered for "${alias}".`
      );
    }

    aliases.set(alias, target);
  }

  return {
    aliases,
    outputTags: new Set([
      ...safeHtmlTags,
      ...publicIxComponentTags,
      ...aliases.values(),
    ]),
  };
}
