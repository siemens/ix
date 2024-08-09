/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxIcon, IxIconButton, IxInputGroup } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [message, setMessage] = useState('');

  function reset() {
    setMessage('');
  }

  let display = message === '' ? 'none' : 'block';

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  return (
    <form className="needs-validation m-2">
      <IxInputGroup>
        <span slot="input-start">
          <IxIcon name="search" size="16"></IxIcon>
        </span>
        <input
          id="input-string"
          type="string"
          onChange={handleChange}
          value={message}
        />
        <span slot="input-end">
          <IxIconButton
            onClick={reset}
            id="clear-button"
            icon="clear"
            ghost
            size="16"
            style={{ display: display }}
          ></IxIconButton>
        </span>
      </IxInputGroup>
    </form>
  );
};
