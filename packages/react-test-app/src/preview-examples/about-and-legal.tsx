/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import {
  IxBasicNavigation,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
} from '@siemens/ix-react';
import React, { useLayoutEffect, useRef } from 'react';

export const AboutAndLegal: React.FC = () => {
  const ref = useRef<HTMLIxMenuElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (element) {
      element.toggleAbout(true);
    }
  }, []);

  return (
    <IxBasicNavigation>
      <IxMenu ref={ref}>
        <IxMenuAbout>
          <IxMenuAboutItem label="Tab 1">Content 1</IxMenuAboutItem>
          <IxMenuAboutItem label="Tab 2">Content 2</IxMenuAboutItem>
        </IxMenuAbout>
      </IxMenu>
    </IxBasicNavigation>
  );
};
