/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxMenu, IxMenuItem } from '@siemens/ix-react';
import React from 'react';

export const Menu: React.FC = () => {
  return (
    <IxMenu>
      <IxMenuItem home-tab tab-icon="home">
        Home
      </IxMenuItem>
      <IxMenuItem tab-icon="globe"> Normal Tab </IxMenuItem>
      <IxMenuItem tab-icon="star" disabled>
        Disabled Tab
      </IxMenuItem>
      <IxMenuItem tab-icon="star"> With other Icon </IxMenuItem>
      <IxMenuItem tab-icon="globe" style={{ display: 'none' }}>
        Should not visible
      </IxMenuItem>
    </IxMenu>
  );
};
