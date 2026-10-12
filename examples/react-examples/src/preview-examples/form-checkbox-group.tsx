/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-react';

export default () => {
  return (
    <IxCheckboxGroup label="Terms of something">
      <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
      <IxCheckbox label="I agree with most of it" name="most"></IxCheckbox>
    </IxCheckboxGroup>
  );
};
