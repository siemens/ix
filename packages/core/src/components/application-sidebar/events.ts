import { createContext } from '../utils/context';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export class ApplicationSidebarToggleEvent extends Event {
  public constructor(public readonly force?: boolean) {
    super('application-sidebar-toggle', { bubbles: true, composed: true });
  }
}

export const TestContext = createContext('test-context');
