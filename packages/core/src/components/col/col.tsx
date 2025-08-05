/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, forceUpdate, h, Host, Listen, Prop } from '@stencil/core';
import { Breakpoint, matchBreakpoint } from '../utils/breakpoints';
import type { ColumnSize } from './col.types';

type GridBreakpoint = Breakpoint | '';

@Component({
  tag: 'ix-col',
  styleUrl: 'col.scss',
  shadow: true,
})
export class Col {
  static Breakpoints: GridBreakpoint[] = ['', 'sm', 'md', 'lg'];

  /**
   * Size of the column
   */
  @Prop() size?: ColumnSize;

  /**
   * Size of the column for sm screens
   */
  @Prop() sizeSm?: ColumnSize;

  /**
   * Size of the column for md screens
   */
  @Prop() sizeMd?: ColumnSize;

  /**
   * Size of the column for lg screens
   */
  @Prop() sizeLg?: ColumnSize;

  @Listen('resize', { target: 'window' })
  onResize() {
    forceUpdate(this);
  }

  private getSize(breakpoint: GridBreakpoint) {
    if (breakpoint === '') {
      return this.size;
    }

    if (breakpoint === 'sm') {
      return this.sizeSm;
    }

    if (breakpoint === 'md') {
      return this.sizeMd;
    }

    if (breakpoint === 'lg') {
      return this.sizeLg;
    }
  }

  private getColumnSize(): ColumnSize | undefined {
    let size: ColumnSize | undefined;
    Col.Breakpoints.forEach((breakpoint) => {
      const isMediaQueryActive =
        breakpoint !== '' ? matchBreakpoint(breakpoint) : true;

      if (!isMediaQueryActive) {
        return;
      }

      const currentSize = this.getSize(breakpoint);

      if (currentSize) {
        size = currentSize;
      }
    });

    return size;
  }

  private getColumnSizeStyling() {
    const size = this.getColumnSize();

    if (!size) {
      return;
    }

    if (size === 'auto') {
      return {
        flex: '0 0 auto',
        width: 'auto',
        'max-width': 'auto',
      };
    }

    const colSize = `calc(calc(${size} / var(--ix-layout-grid-columns)) * 100%)`;

    return {
      flex: `0 0 ${colSize}`,
      width: `${colSize}`,
      'max-width': `${colSize}`,
    };
  }

  render() {
    return (
      <Host
        style={{
          ...this.getColumnSizeStyling(),
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
