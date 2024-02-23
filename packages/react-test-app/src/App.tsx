/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxButton, IxTooltip } from '@siemens/ix-react';
import React, { useState } from 'react';

function ToggleMe(props: { toggle: boolean }) {
  return <IxButton>{props.toggle ? 'Test 1' : 'Test 2'}</IxButton>;
}

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <IxButton id="triggerId" ariaDescribedBy="tooltip1">
        Delete
      </IxButton>
      <IxTooltip for="#triggerId" id="tooltip1">
        Delete the user
      </IxTooltip>
    </div>
  );
}

export default App;
