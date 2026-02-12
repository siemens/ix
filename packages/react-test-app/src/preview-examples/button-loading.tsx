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
  const [toggle4, setToggle4] = useState(false);
  return (
    <>
      <IxButton
        onClick={() => {
          setToggle(true);
          setTimeout(() => {
            setToggle(false);
          }, 2500);
        }}
        loading={toggle}
        outline
      >
        Button
      </IxButton>

      <IxButton
        onClick={() => {
          setToggle2(true);
          setTimeout(() => {
            setToggle2(false);
          }, 2500);
        }}
        loading={toggle2}
        outline
        icon={iconStar}
      >
        Button
      </IxButton>

      <IxButton
        onClick={() => {
          setToggle3(true);
          setTimeout(() => {
            setToggle3(false);
          }, 2500);
        }}
        loading={toggle3}
        outline
        icon={iconStar}
        aria-label="Toggle loading"
      ></IxButton>

      <IxIconButton
        onClick={() => {
          setToggle4(true);
          setTimeout(() => {
            setToggle4(false);
          }, 2500);
        }}
        loading={toggle4}
        outline
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
