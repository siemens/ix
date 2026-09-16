/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './preview-examples/global.css';
// Imported second on purpose: it overrides the shared `#root` rule.
import './app.css';

import { mount } from 'svelte';
import Root from './Root.svelte';

mount(Root, {
  target: document.getElementById('root')!,
});
