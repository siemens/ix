/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconBulb } from '@siemens/ix-icons/icons';
import './blind-variants.scoped.css';

import { IxBlind } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxBlind icon={iconBulb} label="Example" sublabel="sublabel">
        <div>Filled content</div>
      </IxBlind>
      <IxBlind
        variant="default"
        outline
        icon={iconBulb}
        label="Outline"
        sublabel="sublabel"
      >
        <div>Outline content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="danger"
        label="Danger"
        sublabel="sublabel"
      >
        <div>Danger content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="critical"
        label="Critical"
        sublabel="sublabel"
      >
        <div>Critical content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="warning"
        label="Warning"
        sublabel="sublabel"
      >
        <div>Warning content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="information"
        label="Information"
        sublabel="sublabel"
      >
        <div>Information content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="caution"
        label="Caution"
        sublabel="sublabel"
      >
        <div>Caution content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="accent"
        label="Accent"
        sublabel="sublabel"
      >
        <div>Accent content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="success"
        label="Success"
        sublabel="sublabel"
      >
        <div>Success content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="neutral"
        label="Neutral"
        sublabel="sublabel"
      >
        <div>Neutral content</div>
      </IxBlind>
    </>
  );
};
