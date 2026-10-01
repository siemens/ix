/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it, vi } from 'vitest';
import { Dropdown } from '../dropdown';
import {
  DropdownController,
  DropdownInterface,
  DropdownItemWrapper,
  dropdownController,
  hasDropdownItemWrapperImplemented,
} from '../dropdown-controller';

vi.mock('@stencil/core', async (importOriginal) => {
  const original = await importOriginal<typeof import('@stencil/core')>();
  const decorator = () => () => undefined;
  return {
    ...original,
    Component: decorator,
    Element: decorator,
    Event: decorator,
    Listen: decorator,
    Method: decorator,
    Prop: decorator,
    Watch: decorator,
    State: decorator,
  };
});

describe('dropdown-controller', () => {
  it('stops the dropdown hierarchy at an unresolved parent', () => {
    const dropdown = Object.create(Dropdown.prototype) as Dropdown;
    const parent = Object.create(Dropdown.prototype) as Dropdown;
    const getParentDropdownId = vi
      .spyOn(dropdownController, 'getParentDropdownId')
      .mockReturnValueOnce('parent')
      .mockReturnValueOnce('missing-parent');
    const getDropdownById = vi
      .spyOn(dropdownController, 'getDropdownById')
      .mockReturnValueOnce(parent)
      .mockReturnValueOnce(undefined);

    try {
      const hierarchy = (
        dropdown as unknown as { getDropdownHierarchy(): Dropdown[] }
      ).getDropdownHierarchy();

      expect(hierarchy).toEqual([dropdown, parent]);
      expect(getParentDropdownId).toHaveBeenCalledTimes(2);
      expect(getDropdownById).toHaveBeenLastCalledWith('missing-parent');
    } finally {
      getParentDropdownId.mockRestore();
      getDropdownById.mockRestore();
    }
  });

  it('does not present an unresolved submenu', () => {
    const dropdown = Object.create(Dropdown.prototype) as Dropdown;
    const activeElement = document.createElement('button');
    vi.spyOn(dropdown, 'getAssignedSubmenuIds').mockReturnValue(['missing']);
    const getDropdownById = vi
      .spyOn(dropdownController, 'getDropdownById')
      .mockReturnValue(undefined);
    const present = vi.spyOn(dropdownController, 'present');

    try {
      dropdown.openSubmenu(
        new CustomEvent('ix-open-submenu', {
          detail: { activeElement },
        })
      );

      expect(present).not.toHaveBeenCalled();
      expect(
        activeElement.classList.contains('ix-dropdown-submenu-trigger-active')
      ).toBe(false);
    } finally {
      getDropdownById.mockRestore();
      present.mockRestore();
    }
  });

  it('prunes unresolved submenu ids and presents the remaining submenu', () => {
    const dropdown = Object.assign(Object.create(Dropdown.prototype), {
      assignedSubmenu: [],
    }) as Dropdown;
    const submenu = {
      hostElement: document.createElement('div'),
      isPresent: () => false,
    } as unknown as Dropdown;
    const activeElement = document.createElement('button');
    dropdown.cacheSubmenuId(
      new CustomEvent('ix-assign-sub-menu', { detail: 'removed' })
    );
    dropdown.cacheSubmenuId(
      new CustomEvent('ix-assign-sub-menu', { detail: 'remaining' })
    );
    const getDropdownById = vi
      .spyOn(dropdownController, 'getDropdownById')
      .mockImplementation((id) => (id === 'remaining' ? submenu : undefined));
    const present = vi
      .spyOn(dropdownController, 'present')
      .mockImplementation(() => {});

    try {
      dropdown.openSubmenu(
        new CustomEvent('ix-open-submenu', {
          detail: { activeElement },
        })
      );

      expect(dropdown.getAssignedSubmenuIds()).toEqual(['remaining']);
      expect(present).toHaveBeenCalledWith(submenu);
      expect(
        activeElement.classList.contains('ix-dropdown-submenu-trigger-active')
      ).toBe(true);
      getDropdownById.mockReturnValue(submenu);
      expect(dropdown.getAssignedSubmenuIds()).toEqual(['remaining']);
    } finally {
      getDropdownById.mockRestore();
      present.mockRestore();
    }
  });

  it('check wrapper interface implementation', () => {
    const noWrapperElement = {} as DropdownItemWrapper;
    const wrapperElement = {
      getDropdownItemElement: () => Promise.resolve(undefined),
    } as unknown as DropdownItemWrapper;

    expect(hasDropdownItemWrapperImplemented(null)).toBe(false);
    expect(hasDropdownItemWrapperImplemented(noWrapperElement)).toBe(false);
    expect(hasDropdownItemWrapperImplemented(wrapperElement)).toBe(true);
  });

  it('does not suppress focus restore for closed descendants', () => {
    const controller = new DropdownController();
    const createDropdown = (
      id: string,
      childIds: string[],
      initiallyPresent: boolean
    ) => {
      let present = initiallyPresent;
      const suppressTriggerFocusRestore = vi.fn();
      const dropdown: DropdownInterface = {
        hostElement: document.createElement('ix-dropdown'),
        closeBehavior: true,
        discoverAllSubmenus: false,
        getAssignedSubmenuIds: () => childIds,
        getId: () => id,
        getTriggerElement: () => undefined,
        discoverSubmenu: vi.fn(),
        isPresent: () => present,
        willPresent: () => true,
        present: () => {
          present = true;
        },
        dismiss: () => {
          present = false;
        },
        suppressTriggerFocusRestore,
      };

      return { dropdown, suppressTriggerFocusRestore };
    };
    const parent = createDropdown('parent', ['child'], false);
    const child = createDropdown('child', [], false);
    controller.connected(parent.dropdown);
    controller.connected(child.dropdown);
    controller.present(parent.dropdown);

    controller.suppressTriggerFocusRestore(parent.dropdown);

    expect(parent.suppressTriggerFocusRestore).toHaveBeenCalledOnce();
    expect(child.suppressTriggerFocusRestore).not.toHaveBeenCalled();
    controller.disconnected(parent.dropdown);
    controller.disconnected(child.dropdown);
  });
});
