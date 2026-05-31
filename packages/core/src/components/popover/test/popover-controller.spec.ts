/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent } from '@testing-library/dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  PopoverCloseFocus,
  PopoverController,
  PopoverInterface,
} from '../popover-controller';

type MockPopoverOptions = {
  id: string;
  closeOnClickOutside?: boolean;
  nestedPopoverIds?: string[];
  isPresent?: boolean;
  willPresent?: boolean;
  willDismiss?: boolean;
  hostElement?: HTMLElement;
};

function createMockPopover({
  id,
  closeOnClickOutside = true,
  nestedPopoverIds = [],
  isPresent = false,
  willPresent = true,
  willDismiss = true,
  hostElement = document.createElement('div'),
}: MockPopoverOptions): PopoverInterface & {
  presentMock: ReturnType<typeof vi.fn>;
  dismissMock: ReturnType<typeof vi.fn>;
  setPresent: (value: boolean) => void;
} {
  let open = isPresent;

  const presentMock = vi.fn(async () => {
    open = true;
  });
  const dismissMock = vi.fn((_closeFocus?: PopoverCloseFocus) => {
    open = false;
  });

  return {
    hostElement,
    closeOnClickOutside,
    getNestedPopoverIds: () => nestedPopoverIds,
    getId: () => id,
    isPresent: () => open,
    willPresent: () => willPresent,
    willDismiss: () => willDismiss,
    present: presentMock,
    dismiss: dismissMock,
    presentMock,
    dismissMock,
    setPresent: (value: boolean) => {
      open = value;
    },
  };
}

describe('PopoverController', () => {
  let controller: PopoverController;

  beforeEach(() => {
    controller = new PopoverController();
  });

  describe('registration', () => {
    it('registers a popover on connected', () => {
      const popover = createMockPopover({ id: 'popover-1' });

      controller.connected(popover);
      controller.present(popover);

      expect(popover.presentMock).toHaveBeenCalledOnce();
    });

    it('excludes a disconnected popover from dismissAll', () => {
      const popover = createMockPopover({ id: 'popover-1', isPresent: true });

      controller.connected(popover);
      controller.connected(createMockPopover({ id: 'popover-listener' }));
      controller.disconnected(popover);

      fireEvent.click(document.body);

      expect(popover.dismissMock).not.toHaveBeenCalled();
    });

    it('does not dismiss disconnected nested children when parent closes', () => {
      const parent = createMockPopover({
        id: 'popover-parent',
        nestedPopoverIds: ['popover-child'],
      });
      const child = createMockPopover({ id: 'popover-child' });

      controller.connected(parent);
      controller.connected(child);
      controller.present(parent);
      controller.present(child);
      controller.disconnected(child);

      child.dismissMock.mockClear();
      controller.dismiss(parent);

      expect(child.dismissMock).not.toHaveBeenCalled();
      expect(parent.dismissMock).toHaveBeenCalledOnce();
    });

    it('removes child from parent nestedPopoverIds on disconnect', () => {
      const parent = createMockPopover({
        id: 'popover-parent',
        nestedPopoverIds: ['popover-child'],
      });
      const child = createMockPopover({ id: 'popover-child' });

      controller.connected(parent);
      controller.connected(child);
      controller.present(parent);
      controller.present(child);
      controller.disconnected(child);

      const childAgain = createMockPopover({ id: 'popover-child' });
      controller.connected(childAgain);
      parent.dismissMock.mockClear();
      controller.present(childAgain);

      expect(parent.dismissMock).toHaveBeenCalledOnce();
      expect(childAgain.presentMock).toHaveBeenCalledOnce();
    });
  });

  describe('present', () => {
    it('presents when closed and willPresent allows it', () => {
      const popover = createMockPopover({ id: 'popover-1' });

      controller.connected(popover);
      controller.present(popover);

      expect(popover.presentMock).toHaveBeenCalledOnce();
      expect(popover.isPresent()).toBe(true);
    });

    it('does not present when already open', () => {
      const popover = createMockPopover({ id: 'popover-1', isPresent: true });

      controller.connected(popover);
      controller.present(popover);

      expect(popover.presentMock).not.toHaveBeenCalled();
    });

    it('does not present when willPresent returns false', () => {
      const popover = createMockPopover({
        id: 'popover-1',
        willPresent: false,
      });

      controller.connected(popover);
      controller.present(popover);

      expect(popover.presentMock).not.toHaveBeenCalled();
    });

    it('stores nested popover ids when presenting', () => {
      const parent = createMockPopover({
        id: 'popover-parent',
        nestedPopoverIds: ['popover-child'],
      });
      const child = createMockPopover({ id: 'popover-child' });

      controller.connected(parent);
      controller.connected(child);
      controller.present(parent);

      controller.present(child);

      expect(child.presentMock).toHaveBeenCalledOnce();
      expect(parent.dismissMock).not.toHaveBeenCalled();
    });

    it('dismisses unrelated open popovers before presenting', () => {
      const open = createMockPopover({ id: 'popover-open', isPresent: true });
      const next = createMockPopover({ id: 'popover-next' });

      controller.connected(open);
      controller.connected(next);
      controller.present(next);

      expect(open.dismissMock).toHaveBeenCalledOnce();
      expect(next.presentMock).toHaveBeenCalledOnce();
    });
  });

  describe('dismiss', () => {
    it('dismisses with restore-trigger by default', () => {
      const popover = createMockPopover({ id: 'popover-1', isPresent: true });

      controller.connected(popover);
      controller.dismiss(popover);

      expect(popover.dismissMock).toHaveBeenCalledWith('restore-trigger');
    });

    it('forwards explicit closeFocus to the popover', () => {
      const popover = createMockPopover({ id: 'popover-1', isPresent: true });

      controller.connected(popover);
      controller.dismiss(popover, 'release');

      expect(popover.dismissMock).toHaveBeenCalledWith('release');
    });

    it('does not dismiss when already closed', () => {
      const popover = createMockPopover({ id: 'popover-1' });

      controller.connected(popover);
      controller.dismiss(popover);

      expect(popover.dismissMock).not.toHaveBeenCalled();
    });

    it('does not dismiss when willDismiss returns false', () => {
      const popover = createMockPopover({
        id: 'popover-1',
        isPresent: true,
        willDismiss: false,
      });

      controller.connected(popover);
      controller.dismiss(popover);

      expect(popover.dismissMock).not.toHaveBeenCalled();
    });

    it('dismisses nested children before dismissing the parent', () => {
      const callOrder: string[] = [];
      const parent = createMockPopover({
        id: 'popover-parent',
        nestedPopoverIds: ['popover-child'],
      });
      const child = createMockPopover({ id: 'popover-child' });

      child.dismissMock.mockImplementation(() => {
        callOrder.push('child');
      });
      parent.dismissMock.mockImplementation(() => {
        callOrder.push('parent');
      });

      controller.connected(parent);
      controller.connected(child);
      controller.present(parent);
      controller.present(child);

      controller.dismiss(parent);

      expect(callOrder).toEqual(['child', 'parent']);
    });
  });

  describe('dismissOthers', () => {
    it('keeps ancestor chain open when presenting a nested popover', () => {
      const parent = createMockPopover({
        id: 'popover-parent',
        nestedPopoverIds: ['popover-child'],
      });
      const child = createMockPopover({ id: 'popover-child' });

      controller.connected(parent);
      controller.connected(child);
      controller.present(parent);
      controller.present(child);

      expect(parent.dismissMock).not.toHaveBeenCalled();
      expect(child.presentMock).toHaveBeenCalledOnce();
    });

    it('does not dismiss popovers with closeOnClickOutside disabled', () => {
      const persistent = createMockPopover({
        id: 'popover-persistent',
        isPresent: true,
        closeOnClickOutside: false,
      });
      const next = createMockPopover({ id: 'popover-next' });

      controller.connected(persistent);
      controller.connected(next);
      controller.present(next);

      expect(persistent.dismissMock).not.toHaveBeenCalled();
      expect(next.presentMock).toHaveBeenCalledOnce();
    });
  });

  describe('dismissAll', () => {
    it('dismisses only popovers with closeOnClickOutside enabled by default', () => {
      const dismissible = createMockPopover({
        id: 'popover-dismissible',
        isPresent: true,
        closeOnClickOutside: true,
      });
      const persistent = createMockPopover({
        id: 'popover-persistent',
        isPresent: true,
        closeOnClickOutside: false,
      });

      controller.connected(dismissible);
      controller.connected(persistent);
      controller.connected(createMockPopover({ id: 'popover-listener' }));

      fireEvent.click(document.body);

      expect(dismissible.dismissMock).toHaveBeenCalledOnce();
      expect(persistent.dismissMock).not.toHaveBeenCalled();
    });

    it('dismisses all open popovers when ignoreCloseOnClickOutside is true', () => {
      const persistent = createMockPopover({
        id: 'popover-persistent',
        isPresent: true,
        closeOnClickOutside: false,
      });

      controller.connected(persistent);
      controller.connected(createMockPopover({ id: 'popover-listener' }));

      fireEvent.keyDown(window, { key: 'Escape' });

      expect(persistent.dismissMock).toHaveBeenCalledOnce();
    });

    it('does not dismiss on non-Escape keydown', () => {
      const popover = createMockPopover({ id: 'popover-1', isPresent: true });

      controller.connected(popover);
      controller.connected(createMockPopover({ id: 'popover-listener' }));

      fireEvent.keyDown(window, { key: 'Enter' });
      fireEvent.keyDown(window, { key: 'Tab' });

      expect(popover.dismissMock).not.toHaveBeenCalled();
    });
  });

  describe('global listeners', () => {
    beforeEach(() => {
      controller.connected(createMockPopover({ id: 'popover-listener' }));
    });

    it('dismisses open popovers on outside click', () => {
      const popover = createMockPopover({ id: 'popover-1', isPresent: true });

      controller.connected(popover);
      fireEvent.click(document.body);

      expect(popover.dismissMock).toHaveBeenCalledOnce();
    });

    it('does not dismiss when click target is a popover trigger', () => {
      const popover = createMockPopover({ id: 'popover-1', isPresent: true });
      const trigger = document.createElement('button');
      trigger.setAttribute('data-ix-popover-trigger', '');

      controller.connected(popover);
      fireEvent.click(trigger);

      expect(popover.dismissMock).not.toHaveBeenCalled();
    });

    it('does not dismiss when click target is the popover host element', () => {
      const host = document.createElement('div');
      const popover = createMockPopover({
        id: 'popover-1',
        isPresent: true,
        hostElement: host,
      });

      controller.connected(popover);
      fireEvent.click(host);

      expect(popover.dismissMock).not.toHaveBeenCalled();
    });

    it('does not dismiss when click target is the popover dialog in shadow DOM', () => {
      const host = document.createElement('div');
      const shadow = host.attachShadow({ mode: 'open' });
      const dialog = document.createElement('dialog');
      shadow.appendChild(dialog);

      const popover = createMockPopover({
        id: 'popover-1',
        isPresent: true,
        hostElement: host,
      });

      controller.connected(popover);
      fireEvent.click(dialog);

      expect(popover.dismissMock).not.toHaveBeenCalled();
    });

    it('does not dismiss when click target is an ix-popover element', () => {
      const popover = createMockPopover({ id: 'popover-1', isPresent: true });
      const host = document.createElement('ix-popover');

      controller.connected(popover);
      fireEvent.click(host);

      expect(popover.dismissMock).not.toHaveBeenCalled();
    });
  });

  describe('pathIncludesTrigger', () => {
    it('returns the trigger element when present in the event path', () => {
      const trigger = document.createElement('button');
      trigger.setAttribute('data-ix-popover-trigger', '');

      expect(controller.pathIncludesTrigger([document.body, trigger])).toBe(
        trigger
      );
    });

    it('returns undefined when no trigger is in the event path', () => {
      expect(controller.pathIncludesTrigger([document.body])).toBeUndefined();
    });
  });
});
