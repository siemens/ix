/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-breadcrumb-item',
  styleUrl: 'breadcrumb-item.scss',
  scoped: true,
})
export class BreadcrumbItem {
  /**
   * Breadcrumb label
   */
  @Prop() label: string;

  /**
   * Icon to be displayed next ot the label
   */
  @Prop() icon: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
