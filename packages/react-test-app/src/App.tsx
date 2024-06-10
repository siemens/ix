/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTextField } from '@siemens/ix-react';
import React from 'react';

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
      <IxTextField
        className={value ? 'ix-warning' : ''}
        warningText="test"
      ></IxTextField>
    </div>
  );
}

export default App;
