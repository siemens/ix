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
        style={{ margin: '0.25rem' }}
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
        style={{ margin: '0.25rem' }}
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
        style={{ margin: '0.25rem' }}
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
        style={{ margin: '0.25rem' }}
        outline
        icon="star"
        variant="primary"
      ></IxIconButton>
      <IxButton loading style={{ margin: '0.25rem' }} outline variant="primary">
        Button
      </IxButton>
      <IxIconButton
        loading
        style={{ margin: '0.25rem' }}
        outline
        variant="primary"
      ></IxIconButton>
    </>
  );
};
