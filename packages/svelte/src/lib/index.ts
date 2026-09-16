/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import './internal-components.js';

export * from './components/index.js';
export { default as IxIcon } from './IxIcon.svelte';
export { default as IxApplicationContext } from './context/IxApplicationContext.svelte';
export * from './context/context.js';
export * from './delegate.js';
export * from './message/index.js';
export * from './modal/index.js';
export * from './toast/index.js';
export type { ModelBinding, StencilSvelteProps } from './runtime/types.js';
