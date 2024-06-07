/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  iconBezierCurve,
  iconCalendar,
  iconLocation,
} from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxCheckbox,
  IxCustomField,
  IxDateField,
  IxIcon,
  IxIconButton,
  IxLayoutForm,
  IxNumberField,
  IxRadio,
  IxRadioGroup,
  IxSelect,
  IxSelectItem,
  IxTextField,
  IxTextareaField,
  IxTypography,
} from '@siemens/ix-react';
import React, { useMemo, useRef } from 'react';
import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';

export default function FormValidation() {
  const uploadRef = useRef<HTMLInputElement>(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: 'John',
      'last-name': 'Muster',
      address: 'John Street 14',
      thresholdLimitA: 6,
      thresholdLimitB: 7,
      begin: '2024/05/05',
      end: '2024/05/05',
      comment: 'Some info',
      agreed: true,
      'booking-option': '2',
      'travel-option': '3',
      'room-size': 100,
      email: '',
      pin: '',
      upload: '',
      'upload-path': '',
    },
  });

  const thresholdLimitB = useMemo(() => {}, [errors.thresholdLimitB]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <IxLayoutForm>
        <IxTextField
          label="Name"
          {...register('name', { required: true })}
          required
          className={clsx({ 'ix-invalid': errors.name })}
        />
        <IxTextField
          label="Last Name"
          {...register('last-name', { required: false })}
        />
        <IxTextField
          label="Address"
          data-colspan="2"
          {...register('address', { required: false })}
        >
          <IxIcon slot="prefix" name={iconLocation} size="16"></IxIcon>
        </IxTextField>

        <IxRadioGroup
          label="Booking option"
          {...register('booking-option', { required: false })}
        >
          <IxRadio label="Option 1" value="1" name="booking-option"></IxRadio>
          <IxRadio label="Option 2" value="2" name="booking-option"></IxRadio>
          <IxRadio label="Option 3" value="3" name="booking-option"></IxRadio>
        </IxRadioGroup>

        <IxNumberField
          label="Preferred room size"
          className="ix-info"
          infoText="You can adjust the room size"
          {...register('room-size', { required: false })}
        >
          <IxIcon slot="prefix" name={iconBezierCurve} size="16"></IxIcon>
          <IxTypography slot="postfix" color="weak">
            m<sup>2</sup>
          </IxTypography>
        </IxNumberField>

        <IxSelect
          label="Travel option"
          data-colspan="2"
          {...register('travel-option', { required: false })}
        >
          <IxSelectItem value="1" label="Option 1"></IxSelectItem>
          <IxSelectItem value="2" label="Option 2"></IxSelectItem>
          <IxSelectItem value="3" label="Option 3"></IxSelectItem>
        </IxSelect>

        <IxNumberField
          label="Threshold limit A"
          data-colspan="1"
          helperText="Max threshold is 5"
          invalidText={errors.thresholdLimitA && 'thresholdLimitAErrorText'}
          {...register('thresholdLimitA', { required: false, max: '5' })}
        ></IxNumberField>

        <Controller
          name="thresholdLimitB"
          control={control}
          render={({ field: { value, onChange } }) => {
            const showWarning = value > 5;
            const className = showWarning ? 'ix-warning' : '';
            return (
              <IxNumberField
                label="Threshold limit B"
                data-colspan="1"
                showStepperButtons
                className={className}
                warningText={`A threshold greater than 5 is not recommended`}
                value={value}
                onValueChange={onChange}
              ></IxNumberField>
            );
          }}
        ></Controller>

        <IxDateField
          label="Begin"
          i18nErrorDateUnparsable="Please enter a valid date"
          invalidText={errors.begin && 'ERROR!'}
          {...register('begin', { required: false })}
        ></IxDateField>
        <IxDateField
          label="End"
          invalidText={errors.begin && 'beginErrorText'}
          {...register('end', { required: false })}
        ></IxDateField>

        <IxTextareaField
          maxLength={100}
          label="Comment"
          data-colspan="2"
          textareaHeight="10rem"
          helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
          {...register('comment')}
        ></IxTextareaField>

        <IxTextField
          type="email"
          label="Email"
          {...register('email', { required: false })}
        ></IxTextField>

        {/* Implement custom form component */}
        {/* <IxCustomField label="Upload" invalidText="You need to upload a file">
          <IxTextField
            type="text"
            readonly
            style={{ width: '100%' }}
            {...register('uploadPath', { required: false })}
          ></IxTextField>
          <input
            ref={uploadRef}
            type="file"
            style={{ display: 'none' }}
            onChange={() => {
              console.log('File uploaded');
            }}
            name="upload"
          />
          <IxIconButton
            outline
            variant="primary"
            icon="star"
            onClick={() => uploadRef.current?.click()}
          ></IxIconButton>
        </IxCustomField>

        <IxTextField
          type="password"
          label="PIN"
          helperText="Only numbers between 1 and 4 is allowed"
          allowedCharactersPattern="[1-4]"
          maxLength={4}
          {...register('pin', { required: false })}
        ></IxTextField>
        <IxTextField
          type="password"
          label="PIN"
          helperText="Confirm password"
          allowedCharactersPattern="[1-4]"
          maxLength={4}
          {...register('confirm-pin', { required: false })}
        ></IxTextField>

        <IxCheckbox
          label="I agree everything"
          data-colspan="2"
          {...register('agreed', { required: false })}
        ></IxCheckbox> */}
        <IxButton type="submit" data-colspan="1">
          Submit
        </IxButton>
      </IxLayoutForm>
    </form>
  );
}
