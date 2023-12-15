/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import {
  AppSwitchConfiguration,
  AppSwitchConfigurationTarget,
} from '../../utils/application-layout/context';

function ApplicationItem(props: {
  name: string;
  description: string;
  iconSrc: string;
  url: string;
  target: AppSwitchConfigurationTarget;
  selected: boolean;
}) {
  function isExternal(target: AppSwitchConfigurationTarget) {
    if (
      target !== '_blank' &&
      target !== '_parent' &&
      target !== '_self' &&
      target !== '_top'
    ) {
      // Check if its one of the target keywords
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a?retiredLocale=de#target
      return true;
    }

    if (target === '_blank') {
      return true;
    }

    return false;
  }

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
        <ix-typography format="h4">
          {props.name}
          {isExternal(props.target) && (
            <ix-icon
              size="12"
              name="open-external"
              color="color-soft-text"
            ></ix-icon>
          )}
        </ix-typography>
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
          {this.config?.i18nAppSwitch || 'Switch to Application'}
        </ix-modal-header>
        <ix-modal-content class="content">
          <div class="content-apps">
            {(!this.config || this.config?.apps.length === 0) && (
              <div class="loading">
                <ix-spinner size="medium" variant="primary"></ix-spinner>
                <span>
                  {this.config?.i18nLoadingApps ||
                    'Loading available applications...'}
                </span>
              </div>
            )}
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
