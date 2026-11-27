/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxChat,
  IxChatActivityTrace,
  IxChatAiMessage,
  IxChatTraceItem,
  IxChatTraceItemSection,
  IxPill,
} from '@siemens/ix-react';
import {
  iconCogwheel,
  iconDocument,
  iconSearch,
} from '@siemens/ix-icons/icons';
import { useState } from 'react';

export default () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <IxChat className="chat-example__chat">
      <IxChatAiMessage>
        <IxChatActivityTrace
          slot="trace"
          summary="Analyzed compressor data"
          expanded={expanded}
          onExpandedChange={(event) => setExpanded(event.detail)}
        >
          <span slot="summary-meta">4 steps, 12 s</span>
          <IxChatTraceItem label="Searched maintenance logs" icon={iconSearch}>
            <IxChatTraceItemSection heading="Asset">
              <IxPill variant="neutral" outline>
                Compressor C-12
              </IxPill>
            </IxChatTraceItemSection>
            <IxChatTraceItemSection heading="Output" collapsible>
              <p>Found 3 vibration alarms in the last 7 days.</p>
            </IxChatTraceItemSection>
          </IxChatTraceItem>
          <IxChatTraceItem
            label="Read vibration-trend.csv"
            icon={iconDocument}
          ></IxChatTraceItem>
          <IxChatTraceItem
            label="Read service-schedule.xlsx"
            icon={iconDocument}
            state="failed"
          ></IxChatTraceItem>
          <IxChatTraceItem
            label="Stopped checking spare parts"
            icon={iconCogwheel}
            state="warning"
          ></IxChatTraceItem>
        </IxChatActivityTrace>
        <p>
          The compressor vibration is within the expected range. Schedule the
          next inspection during the Friday service window.
        </p>
      </IxChatAiMessage>
    </IxChat>
  );
};
