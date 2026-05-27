/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRef } from 'react';
import {
  IxButton,
  IxIconButton,
  IxPill,
  IxPopover,
  IxPopoverContent,
  IxPopoverFooter,
  IxPopoverHeader,
  IxPopoverImage,
} from '@siemens/ix-react';
import { iconInfo, iconStar } from '@siemens/ix-icons/icons';

export default () => {
  const fullRef = useRef<HTMLIxPopoverElement>(null);
  const minimalRef = useRef<HTMLIxPopoverElement>(null);
  const stepperRef = useRef<HTMLIxPopoverElement>(null);
  const hoverRef = useRef<HTMLIxPopoverElement>(null);
  const spikeRef = useRef<HTMLIxPopoverElement>(null);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '2rem' }}>

      {/* 1) Full anatomy — all sub-components, all props */}
      <IxButton id="full-trigger">Full anatomy</IxButton>
      <IxPopover
        ref={fullRef}
        trigger="full-trigger"
        placement="bottom"
        hasSpike
        closeOnClickOutside
        triggerMode="click"
        aria-label="What's new popover"
      >
        <IxPopoverHeader
          icon={iconInfo}
          iconColor="color-info"
          ariaLabelIcon="Info icon"
          ariaLabelCloseIconButton="Close popover"
        >
          Release 4.0 highlights
          <IxPill slot="additional-items" variant="info">New</IxPill>
        </IxPopoverHeader>
        <IxPopoverImage
          src="https://placehold.co/400x200/1a1a2e/e0e0e0?text=Release+4.0"
          alt="Release 4.0 screenshot"
        />
        <IxPopoverContent>
          Check out the new dashboard and improved performance metrics.
        </IxPopoverContent>
        <IxPopoverFooter>
          <span slot="start">v4.0.0</span>
          <IxButton variant="secondary" onClick={() => fullRef.current?.hidePopover()}>
            Dismiss
          </IxButton>
          <IxButton>Read more</IxButton>
        </IxPopoverFooter>
      </IxPopover>

      {/* 2) Minimal — no header/footer, informational (no focusable) */}
      <IxButton id="minimal-trigger">Minimal (info)</IxButton>
      <IxPopover
        ref={minimalRef}
        trigger="minimal-trigger"
        placement="right"
      >
        <IxPopoverContent>
          This action cannot be undone.
        </IxPopoverContent>
      </IxPopover>

      {/* 3) Stepper — hideClose, vertical footer, paddingless content */}
      <IxButton id="stepper-trigger">Stepper</IxButton>
      <IxPopover
        ref={stepperRef}
        trigger="stepper-trigger"
        placement="bottom"
        closeOnClickOutside={false}
      >
        <IxPopoverHeader hideClose>Step 1 of 3</IxPopoverHeader>
        <IxPopoverImage
          src="https://placehold.co/400x150/2a2a4a/e0e0e0?text=Step+1"
          alt="Step 1 illustration"
        />
        <IxPopoverContent>
          Click the sidebar to navigate between pages.
        </IxPopoverContent>
        <IxPopoverFooter alignment="vertical">
          <span slot="start">1 / 3</span>
          <IxButton onClick={() => stepperRef.current?.hidePopover()}>Next</IxButton>
        </IxPopoverFooter>
      </IxPopover>

      {/* 4) Hover trigger */}
      <IxButton id="hover-trigger">Hover me</IxButton>
      <IxPopover
        ref={hoverRef}
        trigger="hover-trigger"
        placement="top"
        triggerMode="hover"
        hasSpike
      >
        <IxPopoverContent>
          This popover opens on hover.
        </IxPopoverContent>
      </IxPopover>

      {/* 5) Nested popovers — popover inside popover */}
      <IxButton id="nested-outer-trigger">Nested</IxButton>
      <IxPopover trigger="nested-outer-trigger" placement="bottom">
        <IxPopoverHeader>Outer popover</IxPopoverHeader>
        <IxPopoverContent>
          This is the outer popover. Click below to open a nested one.
        </IxPopoverContent>
        <IxPopoverFooter>
          <IxButton id="nested-inner-trigger">Open inner</IxButton>
        </IxPopoverFooter>

        <IxPopover trigger="nested-inner-trigger" placement="right">
          <IxPopoverHeader>Inner popover</IxPopoverHeader>
          <IxPopoverContent>
            This is the nested inner popover.
          </IxPopoverContent>
          <IxPopoverFooter>
            <IxButton variant="secondary">Got it</IxButton>
          </IxPopoverFooter>
        </IxPopover>
      </IxPopover>

      {/* 6) With spike, header with additional items, left placement */}
      <IxButton id="spike-trigger">Status</IxButton>
      <IxPopover
        ref={spikeRef}
        trigger="spike-trigger"
        placement="left"
        hasSpike
        closeOnClickOutside
      >
        <IxPopoverHeader icon={iconStar} iconColor="color-warning" ariaLabelIcon="Status">
          System status
          <IxIconButton slot="additional-items" icon={iconInfo} variant="tertiary" size="16" />
        </IxPopoverHeader>
        <IxPopoverContent paddingless>
          <div style={{ padding: '0.75rem' }}>
            3 services are currently degraded. Check the dashboard for details.
          </div>
        </IxPopoverContent>
        <IxPopoverFooter>
          <IxButton onClick={() => spikeRef.current?.hidePopover()}>Details</IxButton>
        </IxPopoverFooter>
      </IxPopover>
    </div>
  );
};
