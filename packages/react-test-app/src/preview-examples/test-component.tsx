/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ClickEvent, TestComponentCustomEvent } from '@siemens/ix';
import { TestComponent } from '@siemens/ix-react';
import React from 'react';

export default () => {
  const onButtonClicked = (event: TestComponentCustomEvent<ClickEvent>) => {
    console.log('Button clicked count:', event.detail.clicks)
  }

  return (
    <TestComponent onButtonClicked={onButtonClicked}>Test</TestComponent>
  );
};
