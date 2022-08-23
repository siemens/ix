/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxButton } from '@siemens/ix-react';
import React from 'react';

export const ButtonSelected: React.FC = () => {
  return (
    <>
      <IxButton class="m-1" variant="Secondary" invisible>
        Not selected
      </IxButton>
      <IxButton class="m-1" variant="Secondary" invisible selected>
        Selected
      </IxButton>
    </>
  );
};
