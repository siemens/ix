/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles-auto-gen/blind.css'

import {
  IxBlind,
  IxDropdown,
  IxDropdownItem,
  IxIconButton,
} from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <IxBlind label="Example" icon="info">
        <IxIconButton
          id="context-menu"
          slot="header-actions"
          ghost
          icon="context-menu"
          color="color-primary"
        ></IxIconButton>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </IxBlind>
      <IxDropdown trigger={'context-menu'}>
        <IxDropdownItem icon="rename">Rename...</IxDropdownItem>
        <IxDropdownItem icon="trashcan">Delete</IxDropdownItem>
      </IxDropdown>
    </>
  );
};
