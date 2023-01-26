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
  IxIcon,
  IxInputGroup,
  IxMenu,
  IxMenuItem,
  IxTabItem,
  IxTabs,
  IxTypography,
} from '@siemens/ix-react';
import React, { useState } from 'react';
import styles from './main-detail.module.scss';

type MyEvent = {
  id: number;
  title: string;
  message: string;
};

const exampleEvents: MyEvent[] = [
  {
    id: 1,
    message: 'MyPlant > Cooling water circuit',
    title: 'Alarm: High temperature',
  },
  {
    id: 2,
    message: 'My custom event message',
    title: 'Event Type: Event Title',
  },
  {
    id: 3,
    message: 'My custom event message',
    title: 'Type: High temperature',
  },
  {
    id: 4,
    message: 'My custom event message',
    title: 'Alarm: High temperature',
  },
];

function EventItem({
  event,
  selected,
  onClick,
}: {
  event: MyEvent;
  selected: boolean;
  onClick: React.MouseEventHandler<HTMLIxEventListItemElement>;
}) {
  return (
    <IxEventListItem
      color="color-primary"
      selected={selected}
      onClick={onClick}
    >
      <div className={styles.Event__Item}>
        <div className={styles.Event__Item__Head}>
          <IxIcon name="alarm" class={styles.Event__Item__Icon}></IxIcon>
          <IxTypography variant="default-title-single">
            {event.title}
          </IxTypography>
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
        <div className={styles.Event__Item__Body}>
          <IxTypography variant="small">{event.message}</IxTypography>
        </div>
      </div>
    </IxEventListItem>
  );
}

function Main(prop: { onEventSelection: (event: MyEvent) => void }) {
  const [selectedEvent, setSelectedEvent] = useState(exampleEvents[0]);
  const [events] = useState(exampleEvents);

  const onEventSelectionChange = (event: MyEvent) => {
    setSelectedEvent(event);
    prop.onEventSelection(event);
  };

  return (
    <div className={styles.Main}>
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
        {events.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            selected={event.id === selectedEvent.id}
            onClick={() => onEventSelectionChange(event)}
          />
        ))}
      </IxEventList>
    </div>
  );
}

function Detail({ event }: { event: MyEvent | null }) {
  return (
    <div className={styles.Detail}>
      <IxTypography variant="h2" className={styles.Title}>
        Item details: {event?.title}
      </IxTypography>
      <IxTabs selected={3}>
        <IxTabItem>First tab</IxTabItem>
        <IxTabItem>Second tab</IxTabItem>
        <IxTabItem>Third tab</IxTabItem>
        <IxTabItem>Fourth tab</IxTabItem>
        <IxTabItem>Fifth tab</IxTabItem>
      </IxTabs>
    </div>
  );
}

function MainDetail() {
  const [event, setEvent] = useState(exampleEvents[0]);

  return (
    <div className={styles.Main__Detail}>
      <Main onEventSelection={setEvent} />
      <Detail event={event} />
    </div>
  );
}

export default function MainDetailApp() {
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
