/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxBasicNavigation, IxMenu, IxMenuItem } from '@siemens/ix-react';
import clsx from 'clsx';
import React from 'react';
import styles from './master-detail.module.scss';

function Divider() {
  return <div className={styles.Divider}></div>;
}

function Master() {
  return (
    <div className={clsx('col-4 container', styles.Master)}>
      <div className="text-l-single">Master</div>
    </div>
  );
}

function Detail() {
  return (
    <div className={clsx('col-8 container', styles.Detail)}>
      <div className="text-l-single">Detail</div>
    </div>
  );
}

function MasterDetail() {
  return (
    <div className="container-fluid">
      <div className={clsx('row', styles.Master__Detail)}>
        <Master />
        <Detail />
      </div>
    </div>
  );
}

export default function MasterDetailBlueprint() {
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
      <MasterDetail />
    </IxBasicNavigation>
  );
}
