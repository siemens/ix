/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './button-grey-secondary.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton outline variant="secondary">
        Button
      </IxButton>
      <IxButton disabled outline variant="secondary">
        Button
      </IxButton>
    </>
  );
};
