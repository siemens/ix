/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxMessageBar } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div style={{ padding: '0.5rem' }}>
        <IxMessageBar style={{ marginBottom: '0.5rem', display: 'block' }}>
          Message text
        </IxMessageBar>
        <IxMessageBar style={{ marginBottom: '0.5rem', display: 'block' }}>
          Message text
        </IxMessageBar>
        <IxMessageBar style={{ display: 'block' }} type="danger">
          <div className="d-flex align-items-center justify-content-between">
            Message text <IxButton>Action</IxButton>
          </div>
        </IxMessageBar>
      </div>
    </>
  );
};
