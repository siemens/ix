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
import { useState } from 'react';

export default () => {
  const [showMessageBar, setShowMessageBar] = useState(false);

  const handleCloseAnimationCompleted = () => {
    setShowMessageBar(false);
  };

  const handleShowMessageBar = () => {
    setShowMessageBar(true);
  };

  return (
    <>
      <IxButton onClick={handleShowMessageBar}>Show Message Bar</IxButton>
      <div className="message-bar">
        {showMessageBar && (
          <IxMessageBar
            onCloseAnimationCompleted={handleCloseAnimationCompleted}
          >
            Message text
          </IxMessageBar>
        )}
      </div>
    </>
  );
};
