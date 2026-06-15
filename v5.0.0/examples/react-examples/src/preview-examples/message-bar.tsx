/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './message-bar.scoped.css';

import { IxButton, IxMessageBar } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div className="message-bar">
        <IxMessageBar persistent>Message text</IxMessageBar>
        <IxMessageBar persistent>Message text</IxMessageBar>
        <IxMessageBar persistent type="alarm">
          <div className="message-bar-alarm">
            Message text <IxButton>Action</IxButton>
          </div>
        </IxMessageBar>
      </div>
    </>
  );
};
