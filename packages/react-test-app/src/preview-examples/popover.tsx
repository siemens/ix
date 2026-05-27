/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconInfo, iconStar } from '@siemens/ix-icons/icons';
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
import { useRef } from 'react';

export default () => {
  const fullRef = useRef<HTMLIxPopoverElement>(null);
  const minimalRef = useRef<HTMLIxPopoverElement>(null);
  const stepperRef = useRef<HTMLIxPopoverElement>(null);
  const hoverRef = useRef<HTMLIxPopoverElement>(null);
  const spikeRef = useRef<HTMLIxPopoverElement>(null);
  const nestedOuterRef = useRef<HTMLIxPopoverElement>(null);
  const nestedInnerRef = useRef<HTMLIxPopoverElement>(null);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        padding: '2rem',
      }}
    >
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
          <IxPill slot="additional-items" variant="info">
            New
          </IxPill>
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
          <IxButton
            variant="secondary"
            onClick={() => fullRef.current?.hidePopover()}
          >
            Dismiss
          </IxButton>
          <IxButton>Read more</IxButton>
        </IxPopoverFooter>
      </IxPopover>

      {/* 2) Minimal — no header/footer, informational (no focusable) */}
      <IxButton id="minimal-trigger">Minimal (info)</IxButton>
      <IxPopover ref={minimalRef} trigger="minimal-trigger" placement="right">
        <IxPopoverContent>This action cannot be undone.</IxPopoverContent>
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
          <IxButton onClick={() => stepperRef.current?.hidePopover()}>
            Next
          </IxButton>
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
        closeOnClickOutside
      >
        <IxPopoverHeader>Hover trigger</IxPopoverHeader>
        <IxPopoverContent>
          Hover to open. Move into the popover and click here — it should stay
          open. Click outside the page chrome to dismiss.
        </IxPopoverContent>
        <IxPopoverFooter>
          <IxButton
            variant="secondary"
            onClick={() => hoverRef.current?.hidePopover()}
          >
            Dismiss hover trigger
          </IxButton>
        </IxPopoverFooter>
      </IxPopover>

      {/* 5) Nested — manual QA for ix-assign-sub-popover / submenuIds (see api-design) */}
      <IxButton id="nested-outer-trigger">Nested (QA)</IxButton>
      <IxPopover
        ref={nestedOuterRef}
        trigger="nested-outer-trigger"
        placement="bottom"
        closeOnClickOutside
      >
        <IxPopoverHeader>Outer popover</IxPopoverHeader>
        <IxPopoverContent>
          <p style={{ margin: '0 0 0.75rem' }}>
            Both popovers use <code>closeOnClickOutside</code>. Nesting uses{' '}
            <code>ix-assign-sub-popover</code>.
          </p>
          <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.85 }}>
            <strong>Test 1:</strong> Open inner — outer should stay open.
            <br />
            <strong>Test 2:</strong> Dismiss outer or close (×) — inner should
            close too.
          </p>
        </IxPopoverContent>
        <IxPopoverFooter>
          <IxButton
            variant="secondary"
            onClick={() => nestedOuterRef.current?.hidePopover()}
          >
            Dismiss outer
          </IxButton>
          <IxButton id="nested-inner-trigger">Open inner</IxButton>
        </IxPopoverFooter>

        <IxPopover
          ref={nestedInnerRef}
          trigger="nested-inner-trigger"
          placement="right"
          closeOnClickOutside
        >
          <IxPopoverHeader>Inner popover</IxPopoverHeader>
          <IxPopoverContent>Nested child popover.</IxPopoverContent>
          <IxPopoverFooter>
            <IxButton
              variant="secondary"
              onClick={() => nestedInnerRef.current?.hidePopover()}
            >
              Close inner
            </IxButton>
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
        <IxPopoverHeader
          icon={iconStar}
          iconColor="color-warning"
          ariaLabelIcon="Status"
        >
          System status
          <IxIconButton
            slot="additional-items"
            icon={iconInfo}
            variant="tertiary"
            size="16"
          />
        </IxPopoverHeader>
        <IxPopoverContent paddingless>
          <div style={{ padding: '0.75rem' }}>
            3 services are currently degraded. Check the dashboard for details.
          </div>
        </IxPopoverContent>
        <IxPopoverFooter>
          <IxButton onClick={() => spikeRef.current?.hidePopover()}>
            Details
          </IxButton>
        </IxPopoverFooter>
      </IxPopover>
    </div>
  );
};
