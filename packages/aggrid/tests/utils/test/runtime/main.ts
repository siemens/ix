/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { defineCustomElement } from '@siemens/ix-icons/components/ix-icon.js';

defineCustomElement();

const searchParams = new URLSearchParams(location.search);

if (searchParams.has('theme')) {
  const theme = searchParams.get('theme');
  document.documentElement.dataset.ixTheme = theme!;
}

if (searchParams.has('colorSchema')) {
  const colorSchema = searchParams.get('colorSchema');
  document.documentElement.dataset.ixColorSchema = colorSchema!;
}
