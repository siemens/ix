/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxDrawer, IxInputGroup, IxIcon } from '@siemens/ix-react';
import { useState } from 'react';
import { iconSuccess } from '@siemens/ix-icons/icons';

export default () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <IxDrawer
      closeOnClickOutside={true}
      show={show}
      onDrawerClose={() => setShow(false)}
    >
      <IxInputGroup>
        <IxIcon
          slot="input-start"
          name={iconSuccess}
          color={'color-success'}
          size="16"
        />
        <input
          readOnly
          type="text"
          value="input text"
          placeholder="Enter text"
        />
      </IxInputGroup>
    </IxDrawer>
    <IxButton onClick={() => setShow(!show)}>
      Toggle drawer
    </IxButton>
    <IxInputGroup>
      <IxIcon
        slot="input-start"
        name={iconSuccess}
        color={'color-success'}
        size="16"
      />
      <input readOnly type="text" value="input text" />
    </IxInputGroup>
    </>
  );
};
