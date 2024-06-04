import { Component, Element, Host, Prop, State, Watch, h } from '@stencil/core';
import { IxComponent } from '../utils/internal';

@Component({
  tag: 'ix-layout-form',
  styleUrl: 'layout-form.scss',
  shadow: true,
})
export class LayoutForm implements IxComponent {
  @Element() hostElement: HTMLIxLayoutFormElement;

  /**
   * Defines the layout of the form.
   */
  @Prop() layout: {
    minWidth: string;
    columns: number;
  }[];

  @State() gridTemplateColumns: string;

  private mediaQueryList: {
    mediaQuery: MediaQueryList;
    layout: {
      minWidth: string;
      columns: number;
    };
  }[] = [];

  private observer = new MutationObserver(() =>
    this.calculateGridTemplateColumns()
  );

  private resizeObserver = new ResizeObserver(() => {
    this.calculateGridTemplateColumns();
  });

  connectedCallback(): void {
    this.observer.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-colspan'],
    });
    this.resizeObserver.observe(this.hostElement);

    this.updateMediaQueryList();
  }

  componentWillLoad(): void | Promise<void> {
    this.calculateGridTemplateColumns();
  }

  disconnectedCallback(): void {
    if (this.observer) {
      this.observer.disconnect();
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  @Watch('layout')
  updateMediaQueryList() {
    this.mediaQueryList = [];
    this.layout.forEach((layout) => {
      const mediaQuery = window.matchMedia(`(min-width: ${layout.minWidth})`);
      this.mediaQueryList.push({
        mediaQuery,
        layout,
      });
    });
  }

  private parseNumber(number: string) {
    const result = parseInt(number);
    if (isNaN(result)) {
      return 1;
    }

    return result;
  }

  private calculateGridTemplateColumns() {
    let layoutColumns = 1;
    let columnSpacing = '0.5rem';

    this.mediaQueryList.forEach((mediaQuery) => {
      if (mediaQuery.mediaQuery.matches) {
        layoutColumns = mediaQuery.layout.columns;
      }
    });

    let column = 0;
    Array.from(this.hostElement.children).forEach((child: HTMLElement) => {
      let colspan = this.parseNumber(child.getAttribute('data-colspan'));
      colspan = Math.min(colspan, layoutColumns);
      const childRatio = colspan / layoutColumns;

      child.style.width = `calc(${childRatio * 99.9}% - ${
        1 - childRatio
      } * ${columnSpacing})`;

      if (column + colspan > layoutColumns) {
        column = 0;
      }

      column = (column + colspan) % layoutColumns;
    });
  }

  render() {
    return (
      <Host>
        <div
          class="container"
          style={{
            gridTemplateColumns: this.gridTemplateColumns,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
