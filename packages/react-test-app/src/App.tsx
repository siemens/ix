/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTextField, MyTest } from '@siemens/ix-react';
import React, { createElement } from 'react';

function App() {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setValue(true);

      setTimeout(() => {
        setValue(false);
      }, 1000);
    }, 1000);
  }, []);

  return (
    <div>
      {createElement('ix-button')}
      {/* <IxTextField
        className={value ? 'ix-warning' : ''}
        warningText="test"
      ></IxTextField> */}

      <MyTest className={value ? 'is-red' : ''}>
        {value ? 'true' : 'false'}
      </MyTest>

      <button onClick={() => setValue(!value)}>t</button>
    </div>
  );
}

export default App;
