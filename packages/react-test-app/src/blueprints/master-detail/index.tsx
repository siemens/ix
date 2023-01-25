/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  IxBasicNavigation,
  IxDropdownButton,
  IxDropdownItem,
  IxEventList,
  IxEventListItem,
  IxGrid,
  IxGridColumn,
  IxGridRow,
  IxIcon,
  IxInputGroup,
  IxMenu,
  IxMenuItem,
  IxTabItem,
  IxTabs,
  IxTypography,
} from '@siemens/ix-react';
import React from 'react';
import styles from './main-detail.module.scss';

function EventItem() {
  return (
    <IxEventListItem color="color-primary">
      <div className={styles.Event__Item}>
        <div className={styles.Event__Item__Head}>
          <IxIcon name="bulb" class={styles.Event__Item__Icon}></IxIcon>
          <IxTypography variant="default-title-single">Test title</IxTypography>
          <IxDropdownButton
            className={styles.Context__Menu}
            ghost
            icon="context-menu"
          >
            <IxDropdownItem label="Item 1" />
            <IxDropdownItem label="Item 2" />
            <IxDropdownItem label="Item 3" />
            <IxDropdownItem label="Item 4" />
            <IxDropdownItem label="Item 5" />
          </IxDropdownButton>
        </div>
      </div>
    </IxEventListItem>
  );
}

function Main() {
  return (
    <div className={styles.Main}>
      <IxGrid variant="fluid">
        <IxGridRow>
          <IxGridColumn column={'col-11'}>
            <IxTypography variant="h2" className={styles.Title}>
              List items
            </IxTypography>

            <div className={styles.Filter}>
              <IxInputGroup>
                <IxIcon
                  slot="input-start"
                  name="filter"
                  size="12"
                  color="color-primary"
                ></IxIcon>
                <input type="text" className="form-control" />
              </IxInputGroup>
            </div>

            <IxEventList itemHeight={84}>
              <EventItem />
              <EventItem />
              <EventItem />
              <EventItem />
            </IxEventList>
          </IxGridColumn>
        </IxGridRow>
      </IxGrid>
    </div>
  );
}

function Detail() {
  return (
    <IxGrid variant="fluid">
      <IxGridRow>
        <IxGridColumn column={'col-auto'}>
          <IxTypography variant="h2" className={styles.Title}>
            Detail
          </IxTypography>
          <IxTabs selected={3}>
            <IxTabItem>Tab 1</IxTabItem>
            <IxTabItem>Tab 2</IxTabItem>
            <IxTabItem>Tab 3</IxTabItem>
            <IxTabItem>Tab 4</IxTabItem>
            <IxTabItem>Tab 5</IxTabItem>
          </IxTabs>
        </IxGridColumn>
      </IxGridRow>
    </IxGrid>
  );
}

function MainDetail() {
  return (
    <IxGrid variant="fluid">
      <IxGridRow className={styles.Main__Detail}>
        <IxGridColumn column={'col-3'}>
          <Main />
        </IxGridColumn>
        <IxGridColumn column={'col-auto'}>
          <Detail />
        </IxGridColumn>
      </IxGridRow>
    </IxGrid>
  );
}

export default function MainDetailBlueprint() {
  return (
    <IxBasicNavigation applicationName="Application Name">
      <IxMenu>
        <IxMenuItem tabIcon="home" home>
          Item
        </IxMenuItem>
        <IxMenuItem tabIcon="alarm-bell-filled" active>
          Item
        </IxMenuItem>
        <IxMenuItem tabIcon="piechart">Item</IxMenuItem>
        <IxMenuItem tabIcon="maintenance-info" notifications={1}>
          Item
        </IxMenuItem>
        <IxMenuItem tabIcon="ai">Item</IxMenuItem>
        <IxMenuItem tabIcon="calendar">Item</IxMenuItem>
        <IxMenuItem tabIcon="user-management">Item</IxMenuItem>
      </IxMenu>
      <MainDetail />
    </IxBasicNavigation>
  );
}
