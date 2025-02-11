/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *a
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './message-bar.scoped.css';

import { IxButton, IxMessageBar } from '@siemens/ix-react';
import { useState } from 'react';

type Variant = 'info' | 'warning' | 'danger';

export default () => {
  const [messageBars, setMessageBars] = useState<{ id: number; variant: Variant }[]>([]);
  const variants: Variant[] = ['info', 'warning', 'danger'];

  const handleCloseAnimationCompleted = (id: number) => {
    setMessageBars((prev) => prev.filter((bar) => bar.id !== id));
  };

  const handleShowMessageBar = () => {
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    setMessageBars((prev) => [...prev, { id: Date.now(), variant: randomVariant }]);
  };

  return (
    <>
      <IxButton onClick={handleShowMessageBar}>Show Message Bar</IxButton>
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
    </>
  );
};
