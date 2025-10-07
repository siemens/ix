/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { addons } from 'storybook/manager-api';

addons.setConfig({
  sidebar: {
    filters: {
      patterns: (item: { tags?: string[] }): boolean => {
        return !(item.tags ?? []).includes('sidebar-hidden');
      },
    },
  },
});
