/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxValidationTooltip } from '@siemens/ix-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default () => {
  const [wasValidated, setValidation] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      userName: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setValidation(true);
  };

  return (
    <>
      <form
        className={`row g-3 needs-validation`}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className={`form-control ${
              formState.errors.firstName ? 'is-invalid' : ''
            }`}
            id="validationCustom01"
            {...register('firstName', {
              required: true,
            })}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <IxValidationTooltip message="Error hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint text">
            <input
              type="text"
              className={`form-control ${
                formState.errors.lastName ? 'is-invalid' : ''
              }`}
              id="validationCustom02"
              {...register('lastName', {
                required: true,
              })}
            />
          </IxValidationTooltip>
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className={`form-control ${
              formState.errors.userName ? 'is-invalid' : ''
            }`}
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            {...register('userName', {
              required: true,
            })}
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </>
  );
};
