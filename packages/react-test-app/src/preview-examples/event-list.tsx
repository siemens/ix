// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { IxEventList, IxEventListItem } from '@siemens/ix-react';
import React from 'react';

export const EventList: React.FC = () => {
  return (
    <IxEventList>
      <IxEventListItem color="color-primary">Text 1</IxEventListItem>
      <IxEventListItem color="color-primary">Text 2</IxEventListItem>
      <IxEventListItem color="color-primary">Text 3</IxEventListItem>
      <IxEventListItem color="color-primary">Text 4</IxEventListItem>
    </IxEventList>
  );
};
