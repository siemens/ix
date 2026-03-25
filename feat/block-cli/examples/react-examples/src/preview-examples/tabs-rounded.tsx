/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxIcon, IxTabItem, IxTabs } from '@siemens/ix-react';
import {
  iconCalendarSettings,
  iconHierarchy,
  iconMaintenance,
  iconSoundLoud,
  iconSuccess,
  iconTree,
} from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxTabs rounded>
      <IxTabItem>
        <IxIcon name={iconSuccess} aria-label="Success"></IxIcon>
      </IxTabItem>
      <IxTabItem counter={200}>
        <IxIcon name={iconTree} aria-label="Tree"></IxIcon>
      </IxTabItem>
      <IxTabItem>
        <IxIcon name={iconMaintenance} aria-label="Maintenance"></IxIcon>
      </IxTabItem>
      <IxTabItem disabled counter={24}>
        <IxIcon name={iconSoundLoud} aria-label="Sound"></IxIcon>
      </IxTabItem>
      <IxTabItem>
        <IxIcon name={iconHierarchy} aria-label="Hierarchy"></IxIcon>
      </IxTabItem>
      <IxTabItem disabled>
        <IxIcon name={iconCalendarSettings} aria-label="Calendar settings"></IxIcon>
      </IxTabItem>
    </IxTabs>
  );
};
