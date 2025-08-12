/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { InputType } from 'storybook/internal/csf';

export function getExampleResourcesInput(): InputType {
  return {
    control: {
      type: 'select',
    },
    options: ['/images/example-app-icon.svg', '/images/example-company.svg'],
  };
}
