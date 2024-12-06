/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxCheckboxCustomEvent } from '@siemens/ix';
import './form-checkbox-group-indeterminate.scoped.css';

import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-react';
import { useEffect, useState } from 'react';

export default () => {
  const [parentCheckboxState, setParentCheckboxState] = useState({
    indeterminate: false,
    checked: false,
    label: 'Option group',
  });
  const [childCheckboxesState, setChildCheckboxesState] = useState([
    { checked: true, label: 'Sub option one' },
    { checked: true, label: 'Another sub option' },
    { checked: false, label: 'Another sub option' },
  ]);

  useEffect(() => {
    if (childCheckboxesState.every((cb) => cb.checked)) {
      setParentCheckboxState({
        ...parentCheckboxState,
        indeterminate: false,
        checked: true,
      });
    } else if (childCheckboxesState.some((cb) => cb.checked)) {
      setParentCheckboxState({
        ...parentCheckboxState,
        indeterminate: true,
        checked: false,
      });
    } else {
      setParentCheckboxState({
        ...parentCheckboxState,
        indeterminate: false,
        checked: false,
      });
    }
  }, [childCheckboxesState]);

  function parentCheckedChange(e: IxCheckboxCustomEvent<boolean>) {
    setParentCheckboxState({
      ...parentCheckboxState,
      checked: e.target.checked,
    });
    setChildCheckboxesState(
      childCheckboxesState.map((cb) => {
        return { ...cb, checked: e.target.checked };
      })
    );
  }

  function checkedChange(e: IxCheckboxCustomEvent<boolean>, idx: number) {
    setChildCheckboxesState(
      childCheckboxesState.map((cb, index) => {
        if (idx === index) {
          return { ...cb, checked: e.target.checked };
        } else {
          return cb;
        }
      })
    );
  }

  return (
    <IxCheckboxGroup>
      <IxCheckbox
        indeterminate={parentCheckboxState.indeterminate}
        checked={parentCheckboxState.checked || false}
        onCheckedChange={parentCheckedChange}
        label="Option group"
      ></IxCheckbox>
      {childCheckboxesState.map((cb, index) => {
        return (
          <IxCheckbox
            checked={cb.checked || false}
            onCheckedChange={(e) => checkedChange(e, index)}
            label="Sub option one"
            className="cb-padding"
            key={cb.label}
          ></IxCheckbox>
        );
      })}
    </IxCheckboxGroup>
  );
};
