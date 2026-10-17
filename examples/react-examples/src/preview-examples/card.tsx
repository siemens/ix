/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * TEMP playground for EIX-410 card chrome (outline / clickable).
 * Revert to the docs card example before merging.
 */
import { useState, type ReactNode } from 'react';
import { iconBulb, iconCapacity, iconRefresh } from '@siemens/ix-icons/icons';
import {
  IxActionCard,
  IxCard,
  IxCardContent,
  IxIcon,
  IxPushCard,
  IxToggle,
  IxTypography,
} from '@siemens/ix-react';

type GroupControls = {
  outline: boolean;
  clickable: boolean;
};

const defaultControls: GroupControls = {
  outline: true,
  clickable: false,
};

function Controls({
  value,
  onChange,
}: {
  value: GroupControls;
  onChange: (next: GroupControls) => void;
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
        marginBottom: '1rem',
        alignItems: 'center',
      }}
    >
      <IxToggle
        checked={value.outline}
        textOn="outline true"
        textOff="outline false"
        onCheckedChange={(e) =>
          onChange({ ...value, outline: e.detail })
        }
      />
      <IxToggle
        checked={value.clickable}
        textOn="clickable true"
        textOff="clickable false"
        onCheckedChange={(e) =>
          onChange({ ...value, clickable: e.detail })
        }
      />
    </div>
  );
}

function Group({
  title,
  children,
}: {
  title: string;
  children: (controls: GroupControls) => ReactNode;
}) {
  const [controls, setControls] = useState<GroupControls>(defaultControls);

  return (
    <section style={{ marginBottom: '2.5rem' }}>
      <div style={{ marginBottom: '0.75rem' }}>
        <IxTypography format="h4">{title}</IxTypography>
      </div>
      <Controls value={controls} onChange={setControls} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'flex-start',
        }}
      >
        {children(controls)}
      </div>
    </section>
  );
}

export default () => {
  return (
    <div style={{ padding: '1.5rem', maxWidth: '960px' }}>
      <div style={{ marginBottom: '0.5rem' }}>
        <IxTypography format="h3">
          Card chrome playground (temporary)
        </IxTypography>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <IxTypography>
          Per group: base + danger. Toggle outline / clickable independently.
        </IxTypography>
      </div>

      <Group title="ix-card">
        {({ outline, clickable }) => (
          <>
            <IxCard
              variant="base"
              outline={outline}
              clickable={clickable}
              onClick={clickable ? console.log : undefined}
            >
              <IxCardContent>
                <IxIcon name={iconCapacity}></IxIcon>
                <IxTypography bold>Base</IxTypography>
                <IxTypography>Assets overview</IxTypography>
              </IxCardContent>
            </IxCard>
            <IxCard
              variant="danger"
              outline={outline}
              clickable={clickable}
              onClick={clickable ? console.log : undefined}
            >
              <IxCardContent>
                <IxIcon name={iconCapacity}></IxIcon>
                <IxTypography bold>Danger</IxTypography>
                <IxTypography>Assets overview</IxTypography>
              </IxCardContent>
            </IxCard>
          </>
        )}
      </Group>

      <Group title="ix-action-card">
        {({ outline, clickable }) => (
          <>
            <IxActionCard
              icon={iconRefresh}
              heading="Base action"
              subheading="Secondary text"
              variant="base"
              outline={outline}
              clickable={clickable}
              onClick={clickable ? console.log : undefined}
            />
            <IxActionCard
              icon={iconRefresh}
              heading="Danger action"
              subheading="Secondary text"
              variant="danger"
              outline={outline}
              clickable={clickable}
              onClick={clickable ? console.log : undefined}
            />
          </>
        )}
      </Group>

      <Group title="ix-push-card">
        {({ outline, clickable }) => (
          <>
            <IxPushCard
              icon={iconBulb}
              notification="10"
              heading="Base push"
              subheading="Secondary text"
              variant="base"
              outline={outline}
              clickable={clickable}
            />
            <IxPushCard
              icon={iconBulb}
              notification="10"
              heading="Danger push"
              subheading="Secondary text"
              variant="danger"
              outline={outline}
              clickable={clickable}
            />
          </>
        )}
      </Group>
    </div>
  );
};
