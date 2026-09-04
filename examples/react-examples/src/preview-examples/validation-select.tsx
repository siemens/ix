/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxSelect, IxSelectItem } from '@siemens/ix-react';

import { Controller, useForm } from 'react-hook-form';

export default function () {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-validation-example">
      <Controller
        name="car"
        control={control}
        rules={{
          required: {
            message: 'Value is required',
            value: true,
          },
        }}
        render={({ field }) => {
          return (
            <IxSelect
              allowClear
              label="Select Car"
              value={field.value}
              onValueChange={field.onChange}
              helperText="Select your car brand"
              invalidText={errors.car?.message?.toString()}
              className={`${errors.car ? 'ix-invalid' : undefined}`}
            >
              <IxSelectItem value="audi" label="Audi"></IxSelectItem>
              <IxSelectItem value="vw" label="VW"></IxSelectItem>
            </IxSelect>
          );
        }}
      />
      <IxButton type="submit">Submit</IxButton>
    </form>
  );
}
