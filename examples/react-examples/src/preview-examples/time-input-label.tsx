/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTimeInput } from '@siemens/ix-react';

export default () => {
  return (
    <IxTimeInput
      label="Time"
      name="time"
      helperText="Some helper text"
    ></IxTimeInput>
  );
};
