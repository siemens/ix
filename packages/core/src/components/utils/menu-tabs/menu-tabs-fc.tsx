/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FunctionalComponent, h, Host } from '@stencil/core';
import { MenuAbout } from 'src/components/menu-about/menu-about';
import { MenuSettings } from 'src/components/menu-settings/menu-settings';
import { setTab } from './menu-tabs-utils';

interface MenuTabsProps {
  context: MenuSettings | MenuAbout;
}

const getTabItems = (context: MenuSettings | MenuAbout) => {
  return context.items.map(({ label }) => {
    return (
      <ix-tab-item
        selected={label === context.activeTabLabel}
        onClick={() => setTab(context, label)}
      >
        {label}
      </ix-tab-item>
    );
  });
};

export const MenuTabs: FunctionalComponent<MenuTabsProps> = ({ context }) => (
  <Host
    slot={
      context instanceof MenuSettings ? 'ix-menu-settings' : 'ix-menu-about'
    }
    class={{
      show: context.show,
    }}
  >
    <div
      class={
        context instanceof MenuSettings ? 'settings-header' : 'about-header'
      }
    >
      <h2 class="text-h2">{context.label}</h2>
      <ix-icon-button
        ghost
        size="24"
        icon={'close'}
        onClick={(e) =>
          context.close.emit({
            name:
              context instanceof MenuSettings
                ? 'ix-menu-settings'
                : 'ix-menu-about',
            nativeEvent: e,
          })
        }
      ></ix-icon-button>
    </div>
    <ix-tabs>{getTabItems(context)}</ix-tabs>
    <slot></slot>
  </Host>
);
