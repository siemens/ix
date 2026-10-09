/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxInput } from '@siemens/ix-react';

export default () => {
  return (
    <IxInput
      placeholder="Some placeholder"
      value="Some example text"
      disabled
    ></IxInput>
  );
};
