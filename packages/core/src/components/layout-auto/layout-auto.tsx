import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
import { IxComponent } from '../utils/internal';

@Component({
  tag: 'ix-layout-auto',
  styleUrl: 'layout-auto.scss',
  shadow: true,
})
export class LayoutForm implements IxComponent {
  @Element() hostElement!: HTMLIxLayoutAutoElement;

  /**
   * Defines the layout of the form.
   */
  @Prop() layout: {
    minWidth: string;
    columns: number;
  }[] = [
    { minWidth: '0', columns: 1 },
    { minWidth: '48em', columns: 2 },
  ];

  private mediaQueryList: {
    mediaQuery: MediaQueryList;
    layout: {
      minWidth: string;
      columns: number;
    };
  }[] = [];

  private readonly observer = new MutationObserver(() =>
    this.calculateGridTemplateColumns()
  );

  private readonly resizeObserver = new ResizeObserver(() => {
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

    this.calculateGridTemplateColumns();
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

  private parseNumber(number: string | null) {
    if (!number) {
      return 1;
    }

    const result = parseInt(number);
    if (isNaN(result)) {
      return 1;
    }

    return result;
  }

  private calculateGridTemplateColumns() {
    this.updateMediaQueryList();

    let layoutColumns = 1;
    let columnSpacing = 'var(--ix-layout-grid-gap)';

    this.mediaQueryList.forEach((mediaQuery) => {
      if (mediaQuery.mediaQuery.matches) {
        layoutColumns = mediaQuery.layout.columns;
      }
    });

    let column = 0;
    Array.from(
      this.hostElement.children as HTMLCollectionOf<HTMLElement>
    ).forEach((child) => {
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
        <div class="container">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
