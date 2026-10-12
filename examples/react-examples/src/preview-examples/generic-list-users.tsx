/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './generic-list-users.scoped.css';

import {
  IxAvatar,
  IxIconButton,
  IxList,
  IxListItem,
  IxTypography,
} from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCheckbox,
  iconFolder,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

const notifications = [
  {
    label: 'first',
    time: 'Just now',
    title: 'This is the first title',
    description: 'This is a description of the first item',
  },
  {
    label: 'second',
    time: '5 minutes ago',
    title: 'This is the second title',
    description: 'This is a description of the second item',
  },
  {
    label: 'third',
    time: 'Yesterday',
    title: 'This is the third title',
    description: 'This is a description of the third item',
  },
];

export default function GenericListUsers() {
  addIcons({ iconCheckbox, iconFolder, iconTrashcan });

  return (
    <IxList className="notification-list">
      {notifications.map(({ label, time, title, description }) => (
        <IxListItem key={label} aria-label={`Notification: ${title}`}>
          <div slot="action" className="notification-item">
            <IxAvatar aria-hidden="true"></IxAvatar>
            <div className="notification-body">
              <div className="notification-text">
                <IxTypography format="body" textColor="soft">
                  <time>{time}</time>
                </IxTypography>
                <IxTypography format="body" bold>
                  {title}
                </IxTypography>
                <IxTypography format="body">{description}</IxTypography>
              </div>
              <div className="notification-actions">
                <IxIconButton
                  icon="checkbox"
                  size="16"
                  variant="subtle-tertiary"
                  aria-label={`Mark ${label} notification as read`}
                ></IxIconButton>
                <IxIconButton
                  icon="folder"
                  size="16"
                  variant="subtle-tertiary"
                  aria-label={`Archive ${label} notification`}
                ></IxIconButton>
                <IxIconButton
                  icon="trashcan"
                  size="16"
                  variant="subtle-tertiary"
                  aria-label={`Delete ${label} notification`}
                ></IxIconButton>
              </div>
            </div>
          </div>
        </IxListItem>
      ))}
    </IxList>
  );
}
