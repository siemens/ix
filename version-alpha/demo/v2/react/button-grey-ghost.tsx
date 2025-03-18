/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './button-grey-ghost.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton ghost variant="secondary">
        Button
      </IxButton>
      <IxButton disabled ghost variant="secondary">
        Button
      </IxButton>
    </>
  );
};
