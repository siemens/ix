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

  it('defers a parent focus trap only when the topmost overlay owns focus', () => {
    const coordinator = createCoordinator();
    const parentHost = document.createElement('div');
    const childTrigger = document.createElement('button');
    const childHost = document.createElement('div');
    const childItem = document.createElement('button');
    parentHost.append(childTrigger);
    childHost.append(childItem);
    document.body.append(parentHost, childHost);

    const parent = createOverlay('popover:parent', {
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
    coordinator.presented(child.entry.key);

    expect(coordinator.shouldDeferFocusTrap(parentHost, childTrigger)).toBe(
      false
    );
    expect(
      coordinator.getFocusTrapExcludedHosts(parentHost, childTrigger)
    ).toEqual([childHost]);
    expect(coordinator.shouldDeferFocusTrap(parentHost, childItem)).toBe(true);
    expect(
      coordinator.getFocusTrapExcludedHosts(parentHost, childItem)
    ).toEqual([]);
  });

  it('excludes the complete child overlay hierarchy from a parent focus trap', () => {
    const coordinator = createCoordinator();
    const popoverHost = document.createElement('div');
    const dropdownTrigger = document.createElement('button');
    const dropdownHost = document.createElement('div');
    const submenuTrigger = document.createElement('button');
    const submenuHost = document.createElement('div');
    popoverHost.append(dropdownTrigger);
    dropdownHost.append(submenuTrigger);
    document.body.append(popoverHost, dropdownHost, submenuHost);

    const popover = createOverlay('popover:parent', {
      hostElement: popoverHost,
    });
    const dropdown = createOverlay('dropdown:child', {
      kind: 'dropdown',
      hostElement: dropdownHost,
      triggerElement: dropdownTrigger,
    });
    const submenu = createOverlay('dropdown:submenu', {
      kind: 'dropdown',
      hostElement: submenuHost,
      triggerElement: submenuTrigger,
    });
    coordinator.connect(popover.entry);
    coordinator.connect(dropdown.entry);
    coordinator.connect(submenu.entry);
    coordinator.presented(popover.entry.key);
    coordinator.presented(dropdown.entry.key);
    coordinator.presented(submenu.entry.key);

    expect(
      coordinator.getFocusTrapExcludedHosts(popoverHost, dropdownTrigger)
    ).toEqual([submenuHost, dropdownHost]);
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
      [childHost]
    );
    expect(grandparent.getAdjacentFocusElement).not.toHaveBeenCalled();
  });

  it('collects ancestors across mixed overlay types', () => {
    const coordinator = createCoordinator();
    const dropdownHost = document.createElement('div');
    const popoverTrigger = document.createElement('button');
    const popoverHost = document.createElement('div');
    const nestedDropdownTrigger = document.createElement('button');
    const nestedDropdownHost = document.createElement('div');
    dropdownHost.append(popoverTrigger);
    popoverHost.append(nestedDropdownTrigger);
    document.body.append(dropdownHost, popoverHost, nestedDropdownHost);

    const dropdown = createOverlay('dropdown:parent', {
      kind: 'dropdown',
      hostElement: dropdownHost,
    });
    const popover = createOverlay('popover:child', {
      hostElement: popoverHost,
      triggerElement: popoverTrigger,
    });
    const nestedDropdown = createOverlay('dropdown:nested', {
      kind: 'dropdown',
      hostElement: nestedDropdownHost,
      triggerElement: nestedDropdownTrigger,
    });
    coordinator.connect(dropdown.entry);
    coordinator.connect(popover.entry);
    coordinator.connect(nestedDropdown.entry);
    coordinator.presented(dropdown.entry.key);
    coordinator.presented(popover.entry.key);

    expect([...coordinator.getAncestorKeys(nestedDropdown.entry.key)]).toEqual([
      popover.entry.key,
      dropdown.entry.key,
    ]);
    expect(
      coordinator.hasAncestorOfKind(nestedDropdown.entry.key, 'popover')
    ).toBe(true);
    expect(
      coordinator.hasAncestorOfKind(nestedDropdown.entry.key, 'dropdown')
    ).toBe(true);
    coordinator.presented(nestedDropdown.entry.key);
    expect(
      coordinator.isTopmostInHierarchy(dropdown.entry.key, 'dropdown')
    ).toBe(true);
    expect(coordinator.isTopmostInHierarchy(popover.entry.key, 'popover')).toBe(
      false
    );
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
