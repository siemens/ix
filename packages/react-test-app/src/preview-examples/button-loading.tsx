/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'example-styles/dist/button-loading.css';

import { IxButton, IxIconButton } from '@siemens/ix-react';
import { useState } from 'react';

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
        icon="star"
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
        icon="star"
      ></IxButton>

      <IxIconButton
        onClick={() => {
          setToggle(true);
          setTimeout(() => {
            setToggle(false);
          }, 2500);
        }}
        loading={toggle}
        outline
        icon="star"
      ></IxIconButton>
      <IxButton loading outline>
        Button
      </IxButton>
      <IxIconButton loading outline></IxIconButton>
    </>
  );
};
