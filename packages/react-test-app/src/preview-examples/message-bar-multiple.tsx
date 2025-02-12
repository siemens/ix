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

type Variant = 'info' | 'warning' | 'danger';

export default () => {
  const [messageBars, setMessageBars] = useState<{ id: number; variant: Variant }[]>([
    { id: 1, variant: 'info' },
    { id: 2, variant: 'warning' },
    { id: 3, variant: 'danger' }
  ]);

  const handleCloseAnimationCompleted = (id: number) => {
    setMessageBars((prev) => prev.filter((bar) => bar.id !== id));
  };

  return (
    <div className="message-bar">
      {messageBars.map((bar) => (
        <IxMessageBar
          key={bar.id}
          type={bar.variant}
          onCloseAnimationCompleted={() => handleCloseAnimationCompleted(bar.id)}
        >
          Message text
        </IxMessageBar>
      ))}
    </div>
  );
};
