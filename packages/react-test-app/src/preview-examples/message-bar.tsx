/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxMessageBar } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <IxMessageBar>Message text</IxMessageBar>
      <IxMessageBar type="warning">Message text</IxMessageBar>
      <IxMessageBar type="danger">
        <div className="d-flex align-items-center justify-content-between">
          Message text <IxButton>Action</IxButton>
        </div>
      </IxMessageBar>
    </>
  );
};
