/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

async function setupIcons() {
  if (typeof window === 'undefined') {
    return;
  }

  const iconComponent = window.customElements.get('ix-icon');
  if (iconComponent) {
    return;
  }

  console.warn(
    'ix-icon web component not loaded. Using local fallback version'
  );

  const ixIcons = await import('@siemens/ix-icons/loader');
  await ixIcons.defineCustomElements();
}

export default async function () {
  await setupIcons();
}
