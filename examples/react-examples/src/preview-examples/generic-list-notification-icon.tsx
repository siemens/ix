/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './generic-list-notification-icon.scoped.css';

import { IxBadge, IxList, IxListItem, IxTypography } from '@siemens/ix-react';

const notifications = [
  {
    time: 'Just now',
    title: 'This is the first title',
    description: 'This is a description of the first item',
  },
  {
    time: '5 minutes ago',
    title: 'This is the second title',
    description: 'This is a description of the second item',
  },
  {
    time: 'Yesterday',
    title: 'This is the third title',
    description: 'This is a description of the third item',
  },
];

export default function GenericListNotificationIcon() {
  return (
    <IxList className="notification-icon-list">
      {notifications.map(({ time, title, description }) => (
        <IxListItem key={title} aria-label={`Notification: ${title}`}>
          <div className="notification-icon-item">
            <IxBadge
              type="status-icon"
              variant="info"
              role="img"
              aria-label="Information"
            ></IxBadge>
            <div className="notification-icon-text">
              <IxTypography format="body" textColor="soft">
                <time>{time}</time>
              </IxTypography>
              <IxTypography format="body" bold>
                {title}
              </IxTypography>
              <IxTypography format="body">{description}</IxTypography>
            </div>
          </div>
        </IxListItem>
      ))}
    </IxList>
  );
}
