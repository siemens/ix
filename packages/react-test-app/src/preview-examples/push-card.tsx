/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useLayoutEffect, useRef, type CSSProperties } from 'react';
import { iconBulb } from '@siemens/ix-icons/icons';
import { IxPushCard } from '@siemens/ix-react';

type ForceState = 'default' | 'hover' | 'active';

const columnStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: 16,
  width: 'fit-content',
};

const labelStyle: CSSProperties = {
  margin: '0 0 8px',
  color: 'var(--si-sys-color-text-secondary)',
  fontSize: 12,
};

const cardStyle: CSSProperties = {
  width: 320,
};

/**
 * TEMP PerfectPixel helper: Hover/Active are CSS :hover/:active on clickable cards.
 * Force the same surface tokens on the inner ix-card for a static overlay.
 */
function ForcedOutlinePushCard(props: {
  label: string;
  forceState: ForceState;
  expanded: boolean;
}) {
  const ref = useRef<HTMLIxPushCardElement>(null);

  useLayoutEffect(() => {
    const pushCard = ref.current;
    const card = pushCard?.shadowRoot?.querySelector('ix-card') as
      | HTMLIxCardElement
      | null
      | undefined;

    if (!card) {
      return;
    }

    if (props.forceState === 'hover') {
      card.style.setProperty(
        '--ix-card-background',
        'var(--si-sys-color-background-hover)'
      );
    } else if (props.forceState === 'active') {
      card.style.setProperty(
        '--ix-card-background',
        'var(--si-sys-color-background-selected)'
      );
    } else {
      card.style.removeProperty('--ix-card-background');
    }
  }, [props.forceState, props.expanded]);

  return (
    <div>
      <p style={labelStyle}>{props.label}</p>
      <IxPushCard
        ref={ref}
        icon={iconBulb}
        notification="10"
        heading="Primary text"
        subheading="Secondary text"
        variant="default"
        outline
        clickable
        expanded={props.expanded}
        style={cardStyle}
      >
        {props.expanded ? <div>Expanded content</div> : null}
      </IxPushCard>
    </div>
  );
}

export default () => {
  return (
    <>
      <IxPushCard
        icon={iconBulb}
        notification="99"
        heading="Heading content"
        subheading="Subheading"
        variant="default"
      >
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </IxPushCard>

      {/* TEMP: PerfectPixel — outline only, Default/Hover/Active × collapsed/expanded */}
      <div style={columnStyle} data-temp="figma-push-card-outline-states">
        <ForcedOutlinePushCard
          label="TEMP · Outline · Collapsed · Default"
          forceState="default"
          expanded={false}
        />
        <ForcedOutlinePushCard
          label="TEMP · Outline · Collapsed · Hover"
          forceState="hover"
          expanded={false}
        />
        <ForcedOutlinePushCard
          label="TEMP · Outline · Collapsed · Active"
          forceState="active"
          expanded={false}
        />
        <ForcedOutlinePushCard
          label="TEMP · Outline · Expanded · Default"
          forceState="default"
          expanded
        />
        <ForcedOutlinePushCard
          label="TEMP · Outline · Expanded · Hover"
          forceState="hover"
          expanded
        />
        <ForcedOutlinePushCard
          label="TEMP · Outline · Expanded · Active"
          forceState="active"
          expanded
        />
      </div>
    </>
  );
};
