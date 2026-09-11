/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import './icon-toggle-button-tertiary.scoped.css';

import { IxIconToggleButton } from '@siemens/ix-react';
import { useState } from 'react';

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
        <IxIconToggleButton
          variant="tertiary"
          icon={iconTextBold}
          pressed={boldPressed}
          onClick={handleBoldClick}
        >
          Bold
        </IxIconToggleButton>
        <IxIconToggleButton variant="tertiary" disabled icon={iconTextItalic}>
          Italic
        </IxIconToggleButton>
        <IxIconToggleButton
          variant="tertiary"
          icon={iconTextUnderline}
          pressed={underlinePressed}
          onClick={handleUnderlineClick}
        >
          Underline
        </IxIconToggleButton>
        <IxIconToggleButton variant="tertiary" disabled loading>
          Strikethrough
        </IxIconToggleButton>
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
