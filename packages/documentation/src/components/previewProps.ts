/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface PreviewProps {
  name: string;
  height: string;
  hideCode?: boolean;
  framework?: 'webcomponent' | 'angular' | 'react' | 'vue';
  activeTab?: string;
  theme?: string;
}
