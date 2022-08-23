/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxSplitButton, IxSplitButtonItem } from '@siemens/ix-react';
import React from 'react';

export const Splitbutton: React.FC = () => {
  return (
    <IxSplitButton label="Action text">
      <IxSplitButtonItem label="Item 1"></IxSplitButtonItem>
      <IxSplitButtonItem label="Item 2"></IxSplitButtonItem>
    </IxSplitButton>
  );
};
