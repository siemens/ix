/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './message-bar.scoped.css';

import { IxMessageBar } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [messageBarVisible, setMessageBarVisible] = useState(true);

  const handleCloseAnimationCompleted = () => {
    setMessageBarVisible(false);
  };

  return (
    <div className="message-bar">
      {messageBarVisible && (
        <IxMessageBar
          onCloseAnimationCompleted={handleCloseAnimationCompleted}
        >
          Message text
        </IxMessageBar>
      )}
    </div>
  );
};
