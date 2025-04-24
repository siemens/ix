/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './form-validation.scoped.css';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  iconBezierCurve,
  iconLocation,
  iconStar,
} from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxCheckbox,
  IxCheckboxGroup,
  IxCustomField,
  IxDateInput,
  IxIcon,
  IxIconButton,
  IxLayoutAuto,
  IxNumberInput,
  IxRadio,
  IxRadioGroup,
  IxSelect,
  IxSelectItem,
  IxInput,
  IxTextarea,
  IxTypography,
} from '@siemens/ix-react';
import clsx from 'clsx';
import { useLayoutEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  'last-name': yup.string(),
  address: yup.string(),
  thresholdLimitA: yup
    .number()
    .max(5, 'The threshold must be equal or lesser than 5'),
  thresholdLimitB: yup.number(),
  begin: yup.string(),
  end: yup
    .string()
    .test('valid-date', '2024/05/05 is not allowed to pick', (value) => {
      return value !== '2024/05/05';
    }),
  comment: yup.string(),
  agreed: yup.boolean().oneOf([true], 'You must agree to continue'),
  'booking-option': yup.string(),
  'travel-option': yup.string(),
  'room-size': yup.number(),
  email: yup.string(),
  pin: yup.string(),
  'confirm-pin': yup.string().oneOf([yup.ref('pin')], 'PIN does not match'),
  upload: yup.string(),
  'upload-path': yup.string().required('You need to upload a file'),
});

export default function FormValidation() {
  const uploadRef = useRef<HTMLInputElement>(null);

  const [showWarning, setShowWarning] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
    setValue,
  } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      name: 'John',
      'last-name': 'Muster',
      address: 'John Street 14',
      thresholdLimitA: 6,
      thresholdLimitB: 7,
      begin: '2024/05/05',
      end: '2024/05/05',
      comment: 'Some info',
      agreed: false,
      'booking-option': '2',
      'travel-option': '3',
      'room-size': 100,
      email: '',
      pin: '',
      'confirm-pin': '',
      upload: '',
      'upload-path': '',
    },
    resolver: yupResolver(validationSchema),
  });

  useLayoutEffect(() => {
    // Do instant validation after rendering
    trigger();
  }, [trigger]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-validation-example">
      <IxLayoutAuto>
        <IxInput
          label="Name"
          {...register('name')}
          className={clsx({ 'ix-invalid': errors.name })}
          invalidText={errors.name?.message}
          required
        />
        <IxInput label="Last Name" {...register('last-name')} />
        <IxInput label="Address" data-colspan="2" {...register('address')}>
          <IxIcon slot="start" name={iconLocation} size="16"></IxIcon>
        </IxInput>

        <IxRadioGroup label="Booking option">
          {Array.from({ length: 3 }).map((_, option) => (
            <Controller
              key={`Option${option}`}
              control={control}
              name="booking-option"
              render={({ field }) => (
                <IxRadio
                  label={`Option ${option}`}
                  value={`${option}`}
                  checked={field.value === `${option}`}
                  onCheckedChange={() => field.onChange(`${option}`)}
                ></IxRadio>
              )}
            />
          ))}
        </IxRadioGroup>

        <IxNumberInput
          label="Preferred room size"
          className="ix-info"
          infoText="You can adjust the room size"
          {...register('room-size')}
        >
          <IxIcon slot="start" name={iconBezierCurve} size="16"></IxIcon>
          <IxTypography slot="end" color="weak" className="padding-right">
            m<sup>2</sup>
          </IxTypography>
        </IxNumberInput>

        <IxSelect
          label="Travel option"
          data-colspan="2"
          {...register('travel-option')}
        >
          <IxSelectItem value="1" label="Option 1"></IxSelectItem>
          <IxSelectItem value="2" label="Option 2"></IxSelectItem>
          <IxSelectItem value="3" label="Option 3"></IxSelectItem>
        </IxSelect>

        <IxNumberInput
          label="Threshold limit A"
          data-colspan="1"
          helperText="Max threshold is 5"
          {...register('thresholdLimitA', { required: false, max: '5' })}
          className={clsx({ 'ix-invalid': errors.thresholdLimitA })}
          invalidText={errors.thresholdLimitA?.message}
        ></IxNumberInput>

        <IxNumberInput
          label="Threshold limit B"
          data-colspan="1"
          showStepperButtons
          {...register('thresholdLimitB')}
          className={clsx({
            'ix-warning': showWarning,
          })}
          warningText={'A threshold greater than 5 is not recommended'}
          onValueChange={({ detail }) => {
            setShowWarning(detail > 5);
          }}
        ></IxNumberInput>

        <IxDateInput
          label="Begin"
          i18nErrorDateUnparsable="Please enter a valid date"
          {...register('begin')}
        ></IxDateInput>
        <IxDateInput
          label="End"
          {...register('end')}
          invalidText={errors.end?.message}
          className={clsx({
            'ix-invalid': errors.end,
          })}
        ></IxDateInput>

        <IxTextarea
          maxLength={100}
          label="Comment"
          data-colspan="2"
          textareaHeight="10rem"
          helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
          {...register('comment')}
        ></IxTextarea>

        <IxInput type="email" label="Email" {...register('email')}></IxInput>

        {/* Implement custom form component */}
        <IxCustomField label="Upload" invalidText="You need to upload a file">
          <IxInput
            type="text"
            onClick={() => uploadRef.current?.click()}
            readonly
            style={{ width: '100%' }}
            {...register('upload-path')}
            className={clsx({ 'ix-invalid': errors['upload-path'] })}
          ></IxInput>
          <input
            ref={uploadRef}
            type="file"
            style={{ display: 'none' }}
            onChange={(file) => {
              setValue('upload-path', file.target.value);
            }}
            name="upload"
          />
          <IxIconButton
            outline
            variant="primary"
            icon={iconStar}
            onClick={() => uploadRef.current?.click()}
          ></IxIconButton>
        </IxCustomField>

        <IxInput
          type="password"
          label="PIN"
          helperText="Only numbers between 1 and 4 is allowed"
          allowedCharactersPattern="[1-4]"
          maxLength={4}
          {...register('pin')}
        ></IxInput>
        <IxInput
          type="password"
          label="PIN"
          helperText="Confirm password"
          allowedCharactersPattern="[1-4]"
          maxLength={4}
          {...register('confirm-pin')}
          className={clsx({ 'ix-invalid': errors['confirm-pin'] })}
          invalidText={errors['confirm-pin']?.message}
        ></IxInput>

        <Controller
          control={control}
          name="agreed"
          render={({ field }) => (
            <IxCheckboxGroup invalidText={errors.agreed?.message}>
              <IxCheckbox
                label="I agree everything"
                data-colspan="2"
                name={field.name}
                disabled={field.disabled}
                checked={field.value}
                onCheckedChange={(evt) => setValue('agreed', evt.detail)}
                className={clsx({ 'ix-invalid': errors.agreed })}
              ></IxCheckbox>
            </IxCheckboxGroup>
          )}
        />

        <IxButton type="submit" data-colspan="1">
          Submit
        </IxButton>
      </IxLayoutAuto>
    </form>
  );
}
