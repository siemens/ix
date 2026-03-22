/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconStar } from '@siemens/ix-icons/icons';
import './button-loading.scoped.css';

import { IxButton, IxIconButton } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  return (
    <>
      <IxButton
        variant="subtle-primary"
        onClick={() => {
          setToggle(true);
          setTimeout(() => {
            setToggle(false);
          }, 2500);
        }}
        loading={toggle}
      >
        Button
      </IxButton>

      <IxButton
        variant="subtle-primary"
        onClick={() => {
          setToggle2(true);
          setTimeout(() => {
            setToggle2(false);
          }, 2500);
        }}
        loading={toggle2}
        icon={iconStar}
      >
        Button
      </IxButton>

      <IxIconButton
        variant="subtle-primary"
        onClick={() => {
          setToggle3(true);
          setTimeout(() => {
            setToggle3(false);
          }, 2500);
        }}
        loading={toggle3}
        icon={iconStar}
        aria-label="Toggle loading"
      ></IxIconButton>
      <IxButton variant="subtle-primary" loading>
        Button
      </IxButton>
      <IxIconButton
        variant="subtle-primary"
        loading
        icon={iconStar}
        aria-label="Loading action"
      ></IxIconButton>
    </>
  );
};
