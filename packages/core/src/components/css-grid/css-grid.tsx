/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop, State } from '@stencil/core';
import { templateBuilder } from './builder';
import type { CssGridTemplateType } from './css-grid.types';

const smQuery = 'only screen and (max-width: 576px)';
const mdQuery = 'only screen and (max-width: 768px)';
const lgQuery = 'only screen and (max-width: 992px)';

const mediaQueryCollection: Array<{
  name: CssGridTemplateType;
  query: string;
}> = [
  { name: 'sm', query: smQuery },
  { name: 'md', query: mdQuery },
  { name: 'lg', query: lgQuery },
];

/**
 * @internal
 */
@Component({
  tag: 'ix-css-grid',
  styleUrl: 'css-grid.scss',
  shadow: true,
})
export class CssGrid {
  /**
   * Define css grid template
   */
  @Prop() templates?: Partial<Record<CssGridTemplateType, string[][]>>;

  @State() currentTemplate?: string[][];

  private disposeMediaQueryListener: ((event: MediaQueryListEvent) => void)[] =
    [];
  private mediaQueries: {
    mediaQuery: MediaQueryList;
    name: CssGridTemplateType;
    query: string;
  }[] = [];

  componentWillRender() {
    this.mediaQueries = mediaQueryCollection.map((query) => {
      const mediaQuery = window.matchMedia(query.query);

      const callback = () => {
        this.applyTemplate();
      };
      this.disposeMediaQueryListener.push(callback);
      mediaQuery.addEventListener('change', callback);

      return {
        ...query,
        mediaQuery,
      };
    });

    this.applyTemplate();
  }

  disconnectedCallback() {
    this.mediaQueries.forEach((mq, index) => {
      mq.mediaQuery.removeEventListener(
        'change',
        this.disposeMediaQueryListener[index]
      );
    });
  }

  private findNextTemplate(type: CssGridTemplateType): string[][] {
    if (!this.templates) {
      return [];
    }
    const typeIndex = this.mediaQueries.findIndex((mq) => mq.name === type);
    const nextTemplate = this.templates[this.mediaQueries[typeIndex + 1].name];
    if (!nextTemplate) {
      return this.findNextTemplate(this.mediaQueries[typeIndex + 1].name);
    }
    return nextTemplate;
  }

  private applyTemplate() {
    if (!this.templates) {
      return;
    }
    let active = this.mediaQueries.find((mq) => mq.mediaQuery.matches);

    if (!active) {
      active = this.mediaQueries[this.mediaQueries.length - 1];
    }

    const template = this.templates[active.name];

    if (template) {
      this.currentTemplate = template;
    } else {
      this.currentTemplate = this.findNextTemplate(active.name);
    }
  }

  render() {
    const style: Record<string, string> = {};
    if (this.currentTemplate && this.currentTemplate.length !== 0) {
      style['grid-template-areas'] = templateBuilder(this.currentTemplate);
    }
    return (
      <Host style={style}>
        <slot></slot>
      </Host>
    );
  }
}
