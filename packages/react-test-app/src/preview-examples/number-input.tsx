/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxInput } from '@siemens/ix-react';
import { useRef } from 'react';

export default () => {
  const inputRef = useRef<HTMLIxInputElement>(null);

  const handleClear = () => {
    inputRef.current?.clear();
  };

  return (
    <>
      <IxInput required ref={inputRef}></IxInput>
      <IxButton onClick={handleClear}>Clear</IxButton>
    </>
  );
};
