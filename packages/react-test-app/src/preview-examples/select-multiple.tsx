/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxSelect, IxSelectItem } from '@siemens/ix-react';
import React, { useLayoutEffect, useState } from 'react';

export const SelectMultiple: React.FC = () => {
  const [selection, setSelection] = useState<string[]>([]);

  useLayoutEffect(() => {
    setSelection(['1', '3']);
  }, [setSelection]);

  return (
    <IxSelect mode="multiple" selectedIndices={selection}>
      <IxSelectItem label="Item 1" value="1"></IxSelectItem>
      <IxSelectItem label="Item 2" value="2"></IxSelectItem>
      <IxSelectItem label="Item 3" value="3"></IxSelectItem>
      <IxSelectItem label="Item 4" value="4"></IxSelectItem>
    </IxSelect>
  );
};
