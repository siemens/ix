/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'example-styles/dist/icon-toggle-button.css';

import { IxIconToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxIconToggleButton variant="primary" outline></IxIconToggleButton>
      <IxIconToggleButton
        variant="primary"
        pressed
        outline
      ></IxIconToggleButton>
      <IxIconToggleButton
        variant="primary"
        disabled
        outline
      ></IxIconToggleButton>
      <IxIconToggleButton
        variant="primary"
        disabled
        loading
        outline
      ></IxIconToggleButton>
    </>
  );
};
