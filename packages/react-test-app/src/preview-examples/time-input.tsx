/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTimeInput, IxButton } from '@siemens/ix-react';
import { useRef } from 'react';

export default () => {
  const timeInputRef = useRef<HTMLIxTimeInputElement>(null);

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
      <IxTimeInput required ref={timeInputRef} value="12:30"></IxTimeInput>
      <IxButton onClick={() => timeInputRef.current?.clear()}>Clear</IxButton>
    </div>
  );
};
