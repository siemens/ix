/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxButton } from '@siemens/ix-react';
import React, { useState } from 'react';

function ToggleMe(props: { toggle: boolean }) {
  return <IxButton>{props.toggle ? 'Test 1' : 'Test 2'}</IxButton>;
}

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <IxButton onClick={() => setToggle(!toggle)}>Toggle!</IxButton>
      <ToggleMe toggle={toggle} />
    </div>
  );
}

export default App;
