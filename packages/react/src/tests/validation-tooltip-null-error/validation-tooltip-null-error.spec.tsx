/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Content from './validation-tooltip-null-error';

describe(`null-error`, () => {
  it(`basic`, () => {
    const { getByText } = render(<Content />);

    const input = getByText('Name');
    input.click();
  });
});
