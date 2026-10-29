/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconInfo } from '@siemens/ix-icons/icons';
import './pill-variants.scoped.css';

import { IxCol, IxLayoutGrid, IxPill, IxRow } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxLayoutGrid>
        <IxRow>
          <IxCol>
            <IxPill variant="danger" icon={iconInfo}>
              Danger
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="danger" outline icon={iconInfo}>
              Danger
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="warning" icon={iconInfo}>
              Warning
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="warning" outline icon={iconInfo}>
              Warning
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="caution" icon={iconInfo}>
              Caution
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="caution" outline icon={iconInfo}>
              Caution
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="information" icon={iconInfo}>
              Information
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="information" outline icon={iconInfo}>
              Information
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="accent" icon={iconInfo}>
              Accent
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="accent" outline icon={iconInfo}>
              Accent
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="critical" icon={iconInfo}>
              Critical
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="critical" outline icon={iconInfo}>
              Critical
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="success" icon={iconInfo}>
              Success
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="success" outline icon={iconInfo}>
              Success
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="neutral" icon={iconInfo}>
              Neutral
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="neutral" outline icon={iconInfo}>
              Neutral
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill
              variant="custom"
              pillColor="var(--si-sys-color-text-inverse)"
              background="var(--si-sys-color-background-accent-hover)"
              icon={iconInfo}
            >
              Custom
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill
              variant="custom"
              outline
              pillColor="var(--si-sys-color-text-accent-hover)"
              background="var(--si-sys-color-background-accent-hover)"
              icon={iconInfo}
            >
              Custom
            </IxPill>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>
    </>
  );
};
