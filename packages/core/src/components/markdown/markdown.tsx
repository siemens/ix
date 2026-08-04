/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import {
  MarkdownVerificationError,
  propertyMarkerAttribute,
  verifyMarkdownRenderResult,
} from './markdown-security';
import type {
  MarkdownComponentMap,
  MarkdownData,
  MarkdownPropertyAssignment,
  MarkdownRenderErrorCode,
  MarkdownRenderErrorEvent,
  MarkdownRenderer,
} from './markdown.types';

/**
 * Render Markdown and registered custom elements with Siemens iX styling.
 *
 * Consumers must load any IX or custom elements referenced by the Markdown.
 *
 * @since 5.2.0
 */
@Component({
  tag: 'ix-markdown',
  styleUrl: 'markdown.scss',
  shadow: true,
})
export class Markdown {
  @Element() hostElement!: HTMLIxMarkdownElement;

  /**
   * Markdown source rendered by the component.
   *
   * @since 5.2.0
   * @default ''
   */
  @Prop() markdown = '';

  /**
   * Map Markdown component aliases to custom-element tag names.
   *
   * @since 5.2.0
   */
  @Prop() components?: MarkdownComponentMap;

  /**
   * Runtime data available to Markdown component bindings.
   *
   * @since 5.2.0
   */
  @Prop() data?: MarkdownData;

  /**
   * Renderer used to transform Markdown into verified HTML.
   *
   * Import a renderer from `@siemens/ix/markdown` or
   * `@siemens/ix/markdown/highlight`.
   *
   * @since 5.2.0
   */
  @Prop() renderer?: MarkdownRenderer;

  /**
   * Emitted when the current Markdown cannot be parsed or rendered.
   *
   * @since 5.2.0
   */
  @Event() renderError!: EventEmitter<MarkdownRenderErrorEvent>;

  @State() private renderedHtml = '';

  private renderRequest = 0;
  private propertyAssignments: MarkdownPropertyAssignment[] = [];

  componentWillLoad() {
    return this.updateRenderedMarkdown();
  }

  componentDidRender() {
    const content = this.hostElement.shadowRoot?.querySelector('.markdown');

    if (!content) {
      return;
    }

    for (const assignment of this.propertyAssignments) {
      const element = Array.from(
        content.querySelectorAll<HTMLElement>(`[${propertyMarkerAttribute}]`)
      ).find(
        (candidate) =>
          candidate.getAttribute(propertyMarkerAttribute) === assignment.marker
      );

      if (!element) {
        continue;
      }

      for (const [property, value] of Object.entries(assignment.properties)) {
        Reflect.set(element, property, value);
      }

      element.removeAttribute(propertyMarkerAttribute);
    }
  }

  @Watch('markdown')
  @Watch('components')
  @Watch('data')
  @Watch('renderer')
  protected handleRenderInputChange() {
    void this.updateRenderedMarkdown();
  }

  private async updateRenderedMarkdown() {
    const request = ++this.renderRequest;
    const renderer = this.renderer;

    try {
      if (!renderer) {
        throw new MarkdownRendererUnavailableError();
      }

      const markerPrefix = String(request);
      const result = verifyMarkdownRenderResult(
        await renderer({
          markdown: this.markdown,
          components: this.components,
          data: this.data,
          markerPrefix,
        }),
        this.components,
        markerPrefix
      );

      if (request !== this.renderRequest) {
        return;
      }

      this.propertyAssignments = result.propertyAssignments;
      this.renderedHtml = result.html;
    } catch (cause) {
      if (request !== this.renderRequest) {
        return;
      }

      this.renderError.emit({
        code: getRenderErrorCode(cause),
        message:
          cause instanceof Error ? cause.message : 'Unable to render Markdown.',
        markdown: this.markdown,
        cause,
      });
    }
  }

  render() {
    return (
      <Host>
        <template>
          <ix-checkbox></ix-checkbox>
        </template>
        <div class="markdown" innerHTML={this.renderedHtml}></div>
      </Host>
    );
  }
}

class MarkdownRendererUnavailableError extends Error {
  readonly code = 'renderer-unavailable';

  constructor() {
    super(
      'No Markdown renderer is configured. Import one from "@siemens/ix/markdown".'
    );
    this.name = 'MarkdownRendererUnavailableError';
  }
}

function getRenderErrorCode(cause: unknown): MarkdownRenderErrorCode {
  if (
    cause instanceof MarkdownVerificationError ||
    cause instanceof MarkdownRendererUnavailableError
  ) {
    return cause.code;
  }

  if (
    cause &&
    typeof cause === 'object' &&
    'code' in cause &&
    (cause.code === 'invalid-component-registration' ||
      cause.code === 'invalid-markdown-component')
  ) {
    return cause.code;
  }

  return 'render-failed';
}
