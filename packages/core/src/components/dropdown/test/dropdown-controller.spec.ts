/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it, vi } from 'vitest';
import {
  DropdownController,
  DropdownInterface,
  DropdownItemWrapper,
  hasDropdownItemWrapperImplemented,
} from '../dropdown-controller';

describe('dropdown-controller', () => {
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
