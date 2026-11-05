/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRef } from 'react';
import { IxCustomField, IxIconButton, IxInput } from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import { iconOpenFile } from '@siemens/ix-icons/icons';
addIcons({ iconOpenFile });

export default () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <IxCustomField helperText="Choose file">
      <IxInput value="No file chosen" readonly></IxInput>
      <IxIconButton
        icon="open-file"
        variant="subtle-primary"
        onClick={() => {
          ref.current?.click();
        }}
      ></IxIconButton>
      <input
        ref={ref}
        id="file-upload"
        type="file"
        style={{ display: 'none' }}
        onInput={(e: any) => console.log(e.target.files)}
      />
    </IxCustomField>
  );
};
