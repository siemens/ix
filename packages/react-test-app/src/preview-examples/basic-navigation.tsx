/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { CwBasicNavigation, CwMenu, CwMenuItem } from '@siemens/ix-react';
import React from 'react';

export const BasicNavigation: React.FC = () => {
  return (
    <CwBasicNavigation>
      <CwMenu>
        <CwMenuItem>Item 1</CwMenuItem>
        <CwMenuItem>Item 2</CwMenuItem>
      </CwMenu>
    </CwBasicNavigation>
  );
};
