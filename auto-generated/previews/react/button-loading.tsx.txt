/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxIconButton } from '@siemens/ix-react';
import React, { useState } from 'react';

export default () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
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
        class="m-1"
        outline
        variant="primary"
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
        class="m-1"
        outline
        icon="star"
        variant="primary"
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
        class="m-1"
        outline
        icon="star"
        variant="primary"
      ></IxButton>

      <IxIconButton
        onClick={() => {
          setToggle(true);
          setTimeout(() => {
            setToggle(false);
          }, 2500);
        }}
        loading={toggle}
        class="m-1"
        outline
        icon="star"
        variant="primary"
      ></IxIconButton>
      <IxButton loading class="m-1" outline variant="primary">
        Button
      </IxButton>
      <IxIconButton
        loading
        class="m-1"
        outline
        variant="primary"
      ></IxIconButton>
    </>
  );
};
