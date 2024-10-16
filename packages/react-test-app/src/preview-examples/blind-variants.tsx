/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './blind-variants.css';

import { IxBlind } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxBlind icon="bulb" label="Insight" sublabel="sublabel">
        <div>Insight content</div>
      </IxBlind>
      <IxBlind
        variant="outline"
        icon="bulb"
        label="Outline"
        sublabel="sublabel"
      >
        <div>Outline content</div>
      </IxBlind>
      <IxBlind icon="bulb" variant={'alarm'} label="Alarm" sublabel="sublabel">
        <div>Alarm content</div>
      </IxBlind>
      <IxBlind
        icon="bulb"
        variant={'critical'}
        label="Critical"
        sublabel="sublabel"
      >
        <div>Critical content</div>
      </IxBlind>
      <IxBlind
        icon="bulb"
        variant={'warning'}
        label="Warning"
        sublabel="sublabel"
      >
        <div>Warning content</div>
      </IxBlind>
      <IxBlind icon="bulb" variant={'info'} label="Info" sublabel="sublabel">
        <div>Info content</div>
      </IxBlind>
      <IxBlind
        icon="bulb"
        variant={'success'}
        label="Success"
        sublabel="sublabel"
      >
        <div>Success content</div>
      </IxBlind>
      <IxBlind
        icon="bulb"
        variant={'neutral'}
        label="Neutral"
        sublabel="sublabel"
      >
        <div>Neutral content</div>
      </IxBlind>
    </>
  );
};
