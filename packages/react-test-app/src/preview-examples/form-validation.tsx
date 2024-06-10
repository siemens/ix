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
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';
import clsx from 'clsx';
import { FormState, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  'last-name': yup.string(),
  address: yup.string(),
  thresholdLimitA: yup
    .number()
    .max(5, 'The threshold must be equal or lesser than 5'),
  thresholdLimitB: yup
    .number()
    .lessThan(5, 'A threshold greater than 5 is not recommended'),
  begin: yup.string(),
  end: yup.string(),
  comment: yup.string(),
  agreed: yup.boolean().isTrue('You need to agree'),
  'booking-option': yup.string(),
  'travel-option': yup.string(),
  'room-size': yup.number(),
  email: yup.string(),
  pin: yup.string(),
  upload: yup.string(),
  'upload-path': yup.string(),
});

export default function FormValidation() {
  const uploadRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
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
    resolver: yupResolver(validationSchema),
  });

  useLayoutEffect(() => {
    // Do instant validation after rendering
    trigger();
  }, [trigger]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [isBla, setBla] = React.useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <IxLayoutForm>
        <IxTextField
          label="Name"
          {...register('name')}
          className={clsx({ 'ix-invalid': errors.name })}
          invalidText={errors.name && errors.name.message}
          required
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
          {...register('thresholdLimitA', { required: false, max: '5' })}
          className={clsx({ 'ix-invalid': errors.thresholdLimitA })}
          invalidText={errors.thresholdLimitA && errors.thresholdLimitA.message}
        ></IxNumberField>

        <IxNumberField
          label="Threshold limit B"
          data-colspan="1"
          showStepperButtons
          {...register('thresholdLimitB')}
          className={errors.thresholdLimitB ? 'ix-warning' : ''}
          warningText={errors.thresholdLimitB && errors.thresholdLimitB.message}
        ></IxNumberField>

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
