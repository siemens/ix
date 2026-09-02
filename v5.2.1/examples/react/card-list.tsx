/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconBulb, iconRocket } from '@siemens/ix-icons/icons';
import { IxCardList, IxPushCard } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxCardList label="Stack Layout" showAllCount={12} listStyle={'stack'}>
        <IxPushCard
          icon={iconBulb}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
        <IxPushCard
          icon={iconBulb}
          notification="1"
          heading="Heading content"
          subheading="Subheading"
          variant="warning"
        ></IxPushCard>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="success"
        ></IxPushCard>
      </IxCardList>

      <IxCardList label="Flow Layout" showAllCount={12} listStyle={'scroll'}>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
        <IxPushCard
          icon={iconBulb}
          notification="1"
          heading="Heading content"
          subheading="Subheading"
          variant="warning"
        ></IxPushCard>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
      </IxCardList>
    </>
  );
};
