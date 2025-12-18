/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './toggle-button-subtle-secondary.scoped.css';

import { IxToggleButton } from '@siemens/ix-react';
import { useState } from 'react';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';

export default () => {
  const [boldPressed, setBoldPressed] = useState(false);
  const [underlinePressed, setUnderlinePressed] = useState(true);

  const handleBoldClick = () => {
    setBoldPressed(!boldPressed);
  };

  const handleUnderlineClick = () => {
    setUnderlinePressed(!underlinePressed);
  };
  return (
    <>
      <div className="button-container">
        <IxToggleButton
          variant="subtle-secondary"
          icon={iconTextBold}
          pressed={boldPressed}
          onClick={handleBoldClick}
        >
          Bold
        </IxToggleButton>
        <IxToggleButton variant="subtle-secondary" disabled icon={iconTextItalic}>
          Italic
        </IxToggleButton>
        <IxToggleButton
          variant="subtle-secondary"
          icon={iconTextUnderline}
          pressed={underlinePressed}
          onClick={handleUnderlineClick}
        >
          Underline
        </IxToggleButton>
        <IxToggleButton variant="subtle-secondary" disabled loading>
          Strikethrough
        </IxToggleButton>
      </div>
      <p
        style={{
          fontWeight: boldPressed ? 'bold' : 'normal',
          textDecoration: underlinePressed ? 'underline' : 'none',
        }}
      >
        Lorem ipsum text
      </p>
    </>
  );
};
