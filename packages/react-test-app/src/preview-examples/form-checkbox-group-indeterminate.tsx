/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles/form-checkbox-group-indeterminate.css';

import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-react';
import { useLayoutEffect, useRef } from 'react';


export default () => {
  const ref = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (element) {
      element.indeterminate = true;
    }
  }, []);

  return (
    <IxCheckboxGroup>
      <IxCheckbox label="Option group"></IxCheckbox>
      <IxCheckbox checked label="Sub option one" className="cb-padding"></IxCheckbox>
      <IxCheckbox checked label="Another sub option" className="cb-padding"></IxCheckbox>
      <IxCheckbox label="Another sub option" className="cb-padding"></IxCheckbox>
    </IxCheckboxGroup>
  );
};
