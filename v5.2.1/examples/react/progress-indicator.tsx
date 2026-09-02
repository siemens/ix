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
    <IxProgressIndicator
      label="Download"
      value={75}
      helper-text="This is a help text for the progress indicator"
    >
      75%
    </IxProgressIndicator>
  );
};
