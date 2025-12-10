/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDateInput, IxButton } from '@siemens/ix-react';
import { useRef } from 'react';

export default () => {
  const dateInputRef = useRef<HTMLIxDateInputElement>(null);

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
      <IxDateInput required ref={dateInputRef} value="1970/01/01"></IxDateInput>
      <IxButton onClick={() => dateInputRef.current?.clear()}>Clear</IxButton>
    </div>
  );
};
