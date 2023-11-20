/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import { AppSwitchConfiguration } from 'src/components';

function ApplicationItem(props: {
  name: string;
  description: string;
  iconSrc: string;
  url: string;
  target: string;
  selected: boolean;
}) {
  return (
    <button
      class={{
        AppEntry: true,
        Selected: props.selected,
      }}
      onClick={() => window.open(props.url, props.target)}
    >
      <div>
        <img class="AppIcon" src={props.iconSrc}></img>
      </div>
      <div class="AppName">
        <ix-typography format="h4">{props.name}</ix-typography>
        <ix-typography format="label-sm" color="soft">
          {props.description}
        </ix-typography>
      </div>
    </button>
  );
}

/** @internal */
@Component({
  tag: 'ix-application-switch-modal',
  styleUrl: 'application-switch-modal.scss',
  shadow: true,
})
export class ApplicationSwitchModal {
  /** @internal */
  @Prop() config: AppSwitchConfiguration;

  componentWillLoad() {
    if (!this.config) {
      throw Error('ApplicationConfig not provided');
    }
  }

  render() {
    return (
      <Host>
        <ix-modal-header icon="apps">
          {this.config?.textAppSwitch || 'Switch to Application'}
        </ix-modal-header>
        <ix-modal-content class="content">
          <div class="content-apps">
            {this.config?.apps.map((appEntry) => (
              <ApplicationItem
                name={appEntry.name}
                description={appEntry.description}
                iconSrc={appEntry.iconSrc}
                target={appEntry.target}
                url={appEntry.url}
                selected={appEntry.id === this.config?.currentAppId}
              ></ApplicationItem>
            ))}
          </div>
        </ix-modal-content>
      </Host>
    );
  }
}
