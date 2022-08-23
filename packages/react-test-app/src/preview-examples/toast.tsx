/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { toast } from '@siemens/ix';
import { IxButton } from '@siemens/ix-react';
import React from 'react';

export const Toast: React.FC = () => {
  return (
    <>
      <IxButton
        onClick={() => {
          toast({
            message: 'My toast message!',
          });
        }}
      >
        Trigger toast
      </IxButton>
    </>
  );
};
