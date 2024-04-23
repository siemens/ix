/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import { IxValidationTooltip } from '../../components';

const Index = () => {
  const { register, formState } = useForm({
    defaultValues: {
      name: undefined,
    },
    shouldFocusError: false,
    shouldUseNativeValidation: true,
  });

  return (
    <form>
      <IxValidationTooltip message="Error hint text">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className={`${formState.errors.name ? 'is-invalid' : ''}`}
          id="name"
          {...register('name', {
            required: true,
          })}
        />
      </IxValidationTooltip>
    </form>
  );
};

export default Index;
