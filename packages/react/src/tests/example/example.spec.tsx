/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import React from 'react';
import Content from './example';

describe(`example`, () => {
  it(`basic`, () => {
    const { getByText } = render(<Content />);

    const button = getByText('Hallo');
    button.click();
  });
});
