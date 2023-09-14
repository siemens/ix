/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <ix-blind icon="bulb" label="Insight" sublabel="sublabel">
          <div>Insight content</div>
        </ix-blind>
        <ix-blind
          icon="bulb"
          variant="outline"
          label="Outline"
          sublabel="sublabel"
        >
          <div>Outline content</div>
        </ix-blind>
        <ix-blind icon="bulb" variant="alarm" label="Alarm" sublabel="sublabel">
          <div>Alarm content</div>
        </ix-blind>
        <ix-blind variant="critical" label="Critical" sublabel="sublabel">
          <div>Critical content</div>
        </ix-blind>
        <ix-blind variant="warning" label="Warning" sublabel="sublabel">
          <div>Warning content</div>
        </ix-blind>
        <ix-blind variant="info" label="Info" sublabel="sublabel">
          <div>Info content</div>
        </ix-blind>
        <ix-blind variant="success" label="Success" sublabel="sublabel">
          <div>Success content</div>
        </ix-blind>
        <ix-blind variant="neutral" label="Neutral" sublabel="sublabel">
          <div>Neutral content</div>
        </ix-blind>
        <ix-blind variant="primary" label="Primary" sublabel="sublabel">
          <div>Primary content</div>
        </ix-blind>
        <ix-blind
          label="Example"
          icon="info"
          sublabel="Sublabel"
          variant="success"
        >
          <ix-icon-button
            id="context-menu"
            slot="header-actions"
            ghost
            icon="context-menu"
          ></ix-icon-button>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </ix-blind>
      </Host>
    );
  }
}
