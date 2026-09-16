/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getContext, setContext } from 'svelte';
import type { SvelteFrameworkDelegate } from '../delegate.js';

export type ApplicationContext = {
  delegate: SvelteFrameworkDelegate;
};

const applicationContextToken = Symbol('applicationContextToken');

export function defineApplicationContext(context: ApplicationContext) {
  setContext(applicationContextToken, context);
}

export function useApplicationContext(): ApplicationContext {
  const context = getContext<ApplicationContext | undefined>(
    applicationContextToken
  );

  if (!context) {
    throw new Error('Application context is not provided');
  }

  return context;
}
