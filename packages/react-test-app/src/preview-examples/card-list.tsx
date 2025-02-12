/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxCardList, IxPushCard } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxCardList label="Stack Layout" showAllCount={12} listStyle={'stack'}>
        <IxPushCard
          icon="bulb"
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="notification"
        ></IxPushCard>
        <IxPushCard
          icon="bulb"
          notification="1"
          heading="Heading content"
          subheading="Subheading"
          variant="warning"
        ></IxPushCard>
        <IxPushCard
          icon="rocket"
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="success"
        ></IxPushCard>
      </IxCardList>

      <IxCardList label="Flow Layout" showAllCount={12} listStyle={'scroll'}>
        <IxPushCard
          icon="rocket"
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="notification"
        ></IxPushCard>
        <IxPushCard
          icon="bulb"
          notification="1"
          heading="Heading content"
          subheading="Subheading"
          variant="warning"
        ></IxPushCard>
        <IxPushCard
          icon="rocket"
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="notification"
        ></IxPushCard>
        <IxPushCard
          icon="rocket"
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="notification"
        ></IxPushCard>
        <IxPushCard
          icon="rocket"
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="notification"
        ></IxPushCard>
      </IxCardList>
    </>
  );
};
