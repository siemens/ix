/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxChip } from '@siemens/ix-react';
import React from 'react';

function App() {
  return (
    <div>
      <IxChip closable onClose={console.log}>
        test
      </IxChip>

      {/* <IxChip closable ref={(r) => r?.addEventListener('close', console.log)}>
        test
      </IxChip> */}
    </div>
  );
}

export default App;
