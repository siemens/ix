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
        <IxMessageBar persistent type="error">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="danger">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="warning">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="caution">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="success">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="information">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="neutral">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="accent">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="critical">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="danger">
          <div className="message-bar-with-action">
            Message text <IxButton>Action</IxButton>
          </div>
        </IxMessageBar>
      </div>
    </>
  );
};
