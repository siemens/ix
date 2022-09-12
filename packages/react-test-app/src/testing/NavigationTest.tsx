import { IxBasicNavigation, IxMenu, IxMenuItem } from '@siemens/ix-react';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
export const NavigationTest: React.FC = () => {
  return (
    <IxBasicNavigation>
      <IxMenu>
        <NavLink to="./link1">
          {({ isActive }) => <IxMenuItem active={isActive}>Link 1</IxMenuItem>}
        </NavLink>
        <NavLink to="./link2">
          {({ isActive }) => <IxMenuItem active={isActive}>Link 2</IxMenuItem>}
        </NavLink>
      </IxMenu>
      <Outlet />
    </IxBasicNavigation>
  );
};
