/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTextarea, IxButton } from '@siemens/ix-react';
import { useRef } from 'react';

export default () => {
  const textareaRef = useRef<HTMLIxTextareaElement>(null);

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <IxTextarea required ref={textareaRef} value="Sample text content"></IxTextarea>
      <IxButton onClick={() => textareaRef.current?.clear()}>Clear</IxButton>
    </div>
  );
};
