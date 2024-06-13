/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxTextareaField } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <IxTextareaField
        resizeBehavior="dimensions"
        textareaHeight="100px"
        textareaWidth="300px"
        value="Some text"
        disabled
      ></IxTextareaField>
    </>
  );
};
