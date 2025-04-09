/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxButton,
  IxCol,
  IxLayoutGrid,
  IxRow,
  IxValidationTooltip,
} from '@siemens/ix-react';

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
        onSubmit={handleSubmit(onSubmit)}
      >
        <IxLayoutGrid>
          <IxRow>
            <IxCol size="4">
              <label className="ix-form-label" htmlFor="validationCustom01">
                First name
              </label>
              <input
                type="text"
                className={`ix-form-control ${
                  formState.errors.firstName ? 'is-invalid' : ''
                }`}
                id="validationCustom01"
                {...register('firstName', {
                  required: true,
                })}
              />
              <div className="invalid-feedback">
                Please choose a first name.
              </div>
              {!formState.errors.firstName && (
                <div className="valid-feedback">Looks good!</div>
              )}
            </IxCol>
          </IxRow>

          <IxRow>
            <IxCol size="4">
              <IxValidationTooltip message="Cannot be empty!">
                <label className="ix-form-label" htmlFor="validationCustom02">
                  Last name
                </label>
                <input
                  type="text"
                  className={`ix-form-control ${
                    formState.errors.lastName ? 'is-invalid' : ''
                  }`}
                  id="validationCustom02"
                  {...register('lastName', {
                    required: true,
                  })}
                />
              </IxValidationTooltip>
            </IxCol>
          </IxRow>

          <IxRow>
            <IxCol size="4">
              <label
                className="ix-form-label"
                htmlFor="validationCustomUsername"
              >
                Username
              </label>
              <input
                type="text"
                className={`ix-form-control ${
                  formState.errors.userName ? 'is-invalid' : ''
                }`}
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                {...register('userName', {
                  required: true,
                })}
              />
              <div className="invalid-feedback">Please choose a username.</div>
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
