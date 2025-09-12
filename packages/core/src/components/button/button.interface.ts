/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface AnchorInterface {
  /**
   * The URL of the link.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/href)
   */
  href?: string;
  /**
   * The target browsing context for the link.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/target)
   */
  target?: AnchorTarget;
  /**
   * The relationship between the current document and the linked document.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/rel)
   */
  rel?: string;
}

export type AnchorTarget = '_self' | '_blank' | '_parent' | '_top';
