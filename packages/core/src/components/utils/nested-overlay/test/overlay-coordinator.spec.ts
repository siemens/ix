/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent } from '@testing-library/dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  CoordinatedOverlay,
  OverlayCoordinator,
  OverlayKind,
} from '../overlay-coordinator';

type OverlayOptions = {
  kind?: OverlayKind;
  hostElement?: HTMLElement;
  triggerElement?: HTMLElement;
  isPresent?: boolean;
  dismissOnOutside?: boolean;
  adjacentFocusElement?: HTMLElement;
};

function createOverlay(key: string, options: OverlayOptions = {}) {
  let present = options.isPresent ?? true;
  const dismiss = vi.fn(() => {
    present = false;
  });
  const getAdjacentFocusElement = options.adjacentFocusElement
    ? vi.fn(() => options.adjacentFocusElement)
    : undefined;
  const entry: CoordinatedOverlay = {
    key,
    kind: options.kind ?? 'popover',
    hostElement: options.hostElement ?? document.createElement('div'),
    getTriggerElement: () => options.triggerElement,
    isPresent: () => present,
    dismissOnOutside: () => options.dismissOnOutside ?? true,
    dismiss,
    getAdjacentFocusElement,
  };

  return { dismiss, entry, getAdjacentFocusElement };
}

describe('OverlayCoordinator', () => {
  const coordinators: OverlayCoordinator[] = [];

  function createCoordinator() {
    const coordinator = new OverlayCoordinator();
    coordinators.push(coordinator);
    return coordinator;
  }

  afterEach(() => {
    coordinators.forEach((coordinator) => coordinator.dispose());
    coordinators.length = 0;
    document.body.replaceChildren();
    vi.restoreAllMocks();
  });

  it('removes global listeners after the last overlay disconnects', () => {
    const addListener = vi.spyOn(window, 'addEventListener');
    const removeListener = vi.spyOn(window, 'removeEventListener');
    const coordinator = createCoordinator();
    const { entry } = createOverlay('popover:one');

    coordinator.connect(entry);
    coordinator.disconnect(entry.key);

    expect(addListener).toHaveBeenCalledWith('click', expect.any(Function));
    expect(addListener).toHaveBeenCalledWith('keydown', expect.any(Function));
    expect(removeListener).toHaveBeenCalledWith('click', expect.any(Function));
    expect(removeListener).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function)
    );
  });

  it('dismisses the most recently presented overlay on Escape', () => {
    const coordinator = createCoordinator();
    const first = createOverlay('popover:first');
    const second = createOverlay('popover:second');
    coordinator.connect(first.entry);
    coordinator.connect(second.entry);
    coordinator.presented(first.entry.key);
    coordinator.presented(second.entry.key);

    fireEvent.keyDown(window, { key: 'Escape' });

    expect(first.dismiss).not.toHaveBeenCalled();
    expect(second.dismiss).toHaveBeenCalledWith('escape');
  });

  it('uses the nearest composed ancestor as the parent focus scope', () => {
    const coordinator = createCoordinator();
    const grandparentHost = document.createElement('div');
    const parentHost = document.createElement('div');
    const parentShadow = parentHost.attachShadow({ mode: 'open' });
    const trigger = document.createElement('button');
    const childHost = document.createElement('div');
    const current = document.createElement('button');
    const grandparentTarget = document.createElement('button');
    const parentTarget = document.createElement('button');
    grandparentHost.append(parentHost);
    parentShadow.append(trigger);
    document.body.append(grandparentHost, childHost);

    const parent = createOverlay('popover:parent', {
      hostElement: parentHost,
      adjacentFocusElement: parentTarget,
    });
    const grandparent = createOverlay('popover:grandparent', {
      hostElement: grandparentHost,
      adjacentFocusElement: grandparentTarget,
    });
    const child = createOverlay('dropdown:child', {
      kind: 'dropdown',
      hostElement: childHost,
      triggerElement: trigger,
    });
    coordinator.connect(parent.entry);
    coordinator.connect(grandparent.entry);
    coordinator.connect(child.entry);
    coordinator.presented(parent.entry.key);
    coordinator.presented(grandparent.entry.key);
    coordinator.presented(child.entry.key);

    expect(
      coordinator.getParentFocusExitTarget(child.entry.key, current, false)
    ).toBe(parentTarget);
    expect(parent.getAdjacentFocusElement).toHaveBeenCalledWith(
      current,
      false,
      childHost
    );
    expect(grandparent.getAdjacentFocusElement).not.toHaveBeenCalled();
  });

  it('recognizes a child trigger assigned to a slot inside its parent', () => {
    const coordinator = createCoordinator();
    const wrapper = document.createElement('div');
    const wrapperShadow = wrapper.attachShadow({ mode: 'open' });
    const parentHost = document.createElement('div');
    const slot = document.createElement('slot');
    const childTrigger = document.createElement('button');
    const childHost = document.createElement('div');
    parentHost.append(slot);
    wrapperShadow.append(parentHost);
    wrapper.append(childTrigger);
    document.body.append(wrapper, childHost);

    const parent = createOverlay('dropdown:parent', {
      kind: 'dropdown',
      hostElement: parentHost,
    });
    const child = createOverlay('dropdown:child', {
      kind: 'dropdown',
      hostElement: childHost,
      triggerElement: childTrigger,
    });
    coordinator.connect(parent.entry);
    coordinator.connect(child.entry);
    coordinator.presented(parent.entry.key);

    expect(
      coordinator.pathIncludesChildTrigger(parent.entry.key, [childTrigger])
    ).toBe(true);
  });

  it('keeps a parent open when clicking inside a presented child overlay', () => {
    const coordinator = createCoordinator();
    const parentHost = document.createElement('div');
    const childTrigger = document.createElement('button');
    const childHost = document.createElement('div');
    parentHost.append(childTrigger);
    document.body.append(parentHost, childHost);

    const parent = createOverlay('dropdown:parent', {
      kind: 'dropdown',
      hostElement: parentHost,
    });
    const child = createOverlay('popover:child', {
      hostElement: childHost,
      triggerElement: childTrigger,
    });
    coordinator.connect(parent.entry);
    coordinator.connect(child.entry);
    coordinator.presented(parent.entry.key);
    coordinator.presented(child.entry.key);

    fireEvent.click(childHost);

    expect(parent.dismiss).not.toHaveBeenCalled();
    expect(child.dismiss).not.toHaveBeenCalled();
  });

  it('dismisses a child when clicking its parent outside the child', () => {
    const coordinator = createCoordinator();
    const parentHost = document.createElement('div');
    const childTrigger = document.createElement('button');
    const childHost = document.createElement('div');
    parentHost.append(childTrigger);
    document.body.append(parentHost, childHost);

    const parent = createOverlay('dropdown:parent', {
      kind: 'dropdown',
      hostElement: parentHost,
    });
    const child = createOverlay('popover:child', {
      hostElement: childHost,
      triggerElement: childTrigger,
    });
    coordinator.connect(parent.entry);
    coordinator.connect(child.entry);
    coordinator.presented(parent.entry.key);
    coordinator.presented(child.entry.key);

    fireEvent.click(parentHost);

    expect(child.dismiss).toHaveBeenCalledWith('outside');
    expect(parent.dismiss).not.toHaveBeenCalled();
  });
});
