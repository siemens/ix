/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxToggle } from '@siemens/ix-react';
import React from 'react';

export const ToggleCustomLabel: React.FC = () => {
  return <IxToggle text-off="Offline" text-on="Online"></IxToggle>;
};
