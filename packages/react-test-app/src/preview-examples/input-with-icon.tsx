/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { IxInputGroup } from '@siemens/ix-react';
import React from 'react';

export const InputWithIcon: React.FC = () => {
  return (
    <form className="needs-validation m-2">
      <IxInputGroup>
        <span slot="input-start">Price</span>
        <input type="number" className="form-control" />
        <span slot="input-end">.00</span>
        <span slot="input-end">$</span>
      </IxInputGroup>
    </form>
  );
};
