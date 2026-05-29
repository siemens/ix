/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const html = String.raw;

export interface PopoverMarkupOptions {
  id?: string;
  triggerId?: string;
  triggerLabel?: string;
  placement?: string;
  closeOnClickOutside?: boolean;
  triggerMode?: string;
  hasSpike?: boolean;
  ariaLabel?: string;
  hideClose?: boolean;
  showFooterDismiss?: boolean;
}

/**
 * Generate markup for an interactive popover with header, content, and footer
 */
export function interactivePopoverMarkup(options?: PopoverMarkupOptions) {
  const {
    id = 'popover',
    triggerId = 'trigger',
    triggerLabel = 'Open popover',
    placement = 'bottom',
    closeOnClickOutside,
    triggerMode,
    hasSpike,
    ariaLabel,
    hideClose,
    showFooterDismiss = true,
  } = options ?? {};

  return html`
    <ix-button id="${triggerId}">${triggerLabel}</ix-button>
    <ix-popover
      id="${id}"
      trigger="${triggerId}"
      placement="${placement}"
      ${closeOnClickOutside ? 'close-on-click-outside' : ''}
      ${triggerMode ? `trigger-mode="${triggerMode}"` : ''}
      ${hasSpike ? 'has-spike' : ''}
      ${ariaLabel ? `aria-label="${ariaLabel}"` : ''}
    >
      <ix-popover-header ${hideClose ? 'hide-close' : ''}
        >Popover title</ix-popover-header
      >
      <ix-popover-content>Popover body content</ix-popover-content>
      ${showFooterDismiss
        ? html`<ix-popover-footer>
            <ix-button id="${id}-dismiss">Dismiss</ix-button>
          </ix-popover-footer>`
        : ''}
    </ix-popover>
  `;
}

/**
 * Generate markup for placement tests with centered layout
 */
export function placementTestMarkup(
  placement: 'top' | 'bottom' | 'left' | 'right'
) {
  return html`
    <div
      style="display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 12rem;"
    >
      ${interactivePopoverMarkup({
        placement,
        hasSpike: true,
        showFooterDismiss: false,
      })}
    </div>
  `;
}

/**
 * Nested popovers with a third unrelated popover for controller tests
 */
export function nestedPopoverMarkup() {
  return html`
    <div style="padding: 8rem 0 0 8rem;">
      <ix-button id="outer-trigger">Outer</ix-button>
      <ix-popover
        id="outer-popover"
        trigger="outer-trigger"
        close-on-click-outside
      >
        <ix-popover-header>Outer popover</ix-popover-header>
        <ix-popover-content>
          <ix-button id="inner-trigger">Inner</ix-button>
          <ix-popover
            id="inner-popover"
            trigger="inner-trigger"
            close-on-click-outside
          >
            <ix-popover-header>Inner popover</ix-popover-header>
            <ix-popover-content>Nested body</ix-popover-content>
          </ix-popover>
        </ix-popover-content>
      </ix-popover>
      <ix-button id="other-trigger">Other</ix-button>
      <ix-popover
        id="other-popover"
        trigger="other-trigger"
        close-on-click-outside
      >
        <ix-popover-header>Other popover</ix-popover-header>
        <ix-popover-content>Other body</ix-popover-content>
      </ix-popover>
    </div>
  `;
}
