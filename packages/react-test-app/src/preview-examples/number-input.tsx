/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxNumberInput, IxButton } from '@siemens/ix-react';
import { useRef } from 'react';

export default () => {
  const numberInputRef = useRef<HTMLIxNumberInputElement>(null);

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
      <IxNumberInput required ref={numberInputRef} value={42}></IxNumberInput>
      <IxButton onClick={() => numberInputRef.current?.clear()}>Clear</IxButton>
    </div>
  );
};
