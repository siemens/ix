/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxCol, IxDatetimeInput, IxLayoutGrid, IxRow } from '@siemens/ix-react';
import React from 'react';
import { useForm } from 'react-hook-form';

export default () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      firstName: undefined,
      lastName: undefined,
      userName: undefined,
    },
    shouldFocusError: false,
    shouldUseNativeValidation: true,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form 
        className={`needs-validation ${
          formState.isSubmitted ? 'was-validated' : ''
        }`}
        noValidate
        onSubmit={handleSubmit(onSubmit)}>
        <IxLayoutGrid>
          <IxRow>
            <IxCol size="8">
              <IxDatetimeInput></IxDatetimeInput>
              <div className="valid-feedback">Looks good!</div>
            </IxCol>
          </IxRow>
          <IxRow>
            <IxCol>
              <IxButton type="submit">Submit form</IxButton>
            </IxCol>
          </IxRow>
        </IxLayoutGrid>
      </form>
    </>
  );
};
