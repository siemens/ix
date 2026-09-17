/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxProgressIndicator } from '@siemens/ix-react';
import './progress-indicator.scoped.css';

export default () => {
  return (
    <>
      <h2 className="example-header">Status - Default</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helper-text="This is a help text for the progress indicator"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Success</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helper-text="This is a help text for the progress indicator"
        status="success"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Error</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helper-text="This is a help text for the progress indicator"
        status="error"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Info</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helper-text="This is a help text for the progress indicator"
        status="info"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Warning</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helper-text="This is a help text for the progress indicator"
        status="warning"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Paused</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helper-text="This is a help text for the progress indicator"
        status="paused"
      >
        75%
      </IxProgressIndicator>
    </>
  );
};
