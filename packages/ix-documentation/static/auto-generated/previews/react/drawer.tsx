/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxDrawer } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <IxDrawer
        closeOnClickOutside={true}
        show={show}
        onDrawerClose={() => setShow(false)}
      >
        <span>Some content of drawer</span>
      </IxDrawer>
      <IxButton onClick={() => setShow(!show)}>Toggle drawer</IxButton>
    </>
  );
};
