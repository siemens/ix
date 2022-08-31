/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxButton, showToast } from '@siemens/ix-react';
import React from 'react';

function CustomToast() {
  return (
    <div>
      <div>Custom toast message</div>
      <IxButton>Action</IxButton>
    </div>
  );
}

export const ToastCustom: React.FC = () => {
  return (
    <>
      <IxButton
        onClick={() => {
          showToast({
            message: <CustomToast></CustomToast>,
          });
        }}
      >
        Trigger toast
      </IxButton>
    </>
  );
};
