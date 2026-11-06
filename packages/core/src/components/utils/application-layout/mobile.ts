/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { addBreakpointMediaListener, matchBreakpoint } from '../breakpoints';
import { useContextConsumer } from '../context';
import type { Disposable } from '../typed-event';
import {
  ApplicationLayoutContext,
  type ApplicationLayoutContextValue,
} from './context';
import { applicationLayoutService } from './service';

function resolveIsMobile(
  applicationLayoutContext?: ApplicationLayoutContextValue
) {
  const forcedBreakpoint = applicationLayoutContext?.forceBreakpoint;
  if (forcedBreakpoint) {
    return forcedBreakpoint === 'sm';
  }
  // Nested panes follow the shared layout bus so a pinned menu (frozen at lg)
  // keeps them desktop instead of reading the raw viewport.
  if (applicationLayoutContext) {
    return applicationLayoutService.breakpoint === 'sm';
  }
  return matchBreakpoint('sm');
}

/**
 * Subscribe a host to application layout mobile mode.
 * Prefer `forceBreakpoint`, then the shared layout bus when nested, otherwise
 * the viewport.
 */
export function subscribeApplicationLayoutMobile(
  hostElement: HTMLElement,
  onChange: (isMobile: boolean) => void
): Disposable {
  let applicationLayoutContext: ApplicationLayoutContextValue | undefined;

  const emit = () => {
    onChange(resolveIsMobile(applicationLayoutContext));
  };

  const layoutContextSubscription = useContextConsumer(
    hostElement,
    ApplicationLayoutContext,
    (ctx) => {
      applicationLayoutContext = ctx;
      emit();
    },
    true
  );
  emit();

  const layoutServiceDisposable = applicationLayoutService.onChange.on(() => {
    emit();
  });
  // Keep following the viewport when the shared bus has detection disabled
  // (e.g. forceBreakpoint on a sibling application the host left).
  const removeBreakpointMediaListener = addBreakpointMediaListener('sm', () => {
    emit();
  });

  return {
    dispose: () => {
      layoutContextSubscription.unsubscribe();
      layoutServiceDisposable.dispose();
      removeBreakpointMediaListener();
      applicationLayoutContext = undefined;
    },
  };
}
