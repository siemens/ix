/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { createPopper, Instance as PopperInstance, Placement, PositioningStrategy } from '@popperjs/core';
import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'cw-dropdown',
  styleUrl: 'dropdown.scss',
  scoped: true,
})
export class Dropdown {
  @Element() hostElement!: HTMLCwDropdownElement;

  /**
   * Show dropdown
   */
  @Prop({ mutable: true, reflect: true }) show = false;

  /**
   * Define an element that triggers the dropdown.
   * A trigger can either be a string that will be interprated as id attribute or a DOM element.
   */
  @Prop() trigger: string | HTMLElement;

  /**
   * Define an anchor element
   */
  @Prop() anchor: string | HTMLElement;

  /**
   * Close behavior
   */
  @Prop() closeBehavior: 'inside' | 'outside' | 'both' | boolean = 'both';

  /**
   * Placement of the dropdown
   */
  @Prop() placement: Placement = 'bottom-end';

  /**
   * Position strategy
   */
  @Prop() positioningStrategy: PositioningStrategy = 'fixed';

  /**
   * Adjust dropdown width to the parent width
   * @deprecated - property has a typo and will get removed in the next major version. Use `adjustDropdownWidthToReferenceWidth` instead.
   */
  @Prop() adjustDropdownWidthToReferenceWith = false;

  /**
   * Adjust dropdown width to the parent width
   */
  @Prop() adjustDropdownWidthToReferenceWidth = false;

  /**
   * An optional header shown at the top of the dropdown
   */
  @Prop() header?: string;

  /**
   * Fire event after visibility of dropdown has changed
   */
  @Event() showChanged: EventEmitter<boolean>;

  private popperInstance: PopperInstance;
  private triggerElement?: Element;
  private anchorElement?: Element;

  private dropdownRef: HTMLElement;

  private openBind: any;

  constructor() {
    this.openBind = this.open.bind(this);
  }

  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll('cw-dropdown-item'));
  }

  private resolveElement(prop: string | HTMLElement) {
    if (typeof prop === 'string') {
      return document.querySelector('#' + prop);
    }
    return prop;
  }

  async componentDidLoad() {
    if (this.trigger) {
      this.registerListener(this.trigger);
    }
  }

  private registerListener(element: string | HTMLElement) {
    this.triggerElement = this.resolveElement(element);
    this.triggerElement.addEventListener('click', this.openBind);
  }

  private unregisterListener(element: string | HTMLElement) {
    const trigger = this.resolveElement(element);
    trigger.removeEventListener('click', this.openBind);
  }

  componentDidRender() {
    this.popperInstance?.update();
  }

  @Watch('show')
  async changedShow(newShow: boolean) {
    if (newShow) {
      this.anchorElement = this.anchor ? this.resolveElement(this.anchor) : this.resolveElement(this.trigger);

      if (this.anchorElement) {
        this.popperInstance?.destroy();
        this.popperInstance = createPopper(this.anchorElement, this.dropdownRef, {
          placement: this.placement,
          strategy: this.positioningStrategy,
          onFirstUpdate: ({ elements }) => {
            if (this.adjustDropdownWidthToReferenceWith || this.adjustDropdownWidthToReferenceWidth) {
              const { popper, reference } = elements;
              const width = reference.getBoundingClientRect().width;
              popper.style.width = `${width}px`;
            }
          },
        });
      }
    }
  }

  @Watch('trigger')
  changedTrigger(newTriggerValue: string | HTMLElement, oldTriggerValue: string | HTMLElement) {
    if (newTriggerValue) {
      this.registerListener(newTriggerValue);
    }

    if (oldTriggerValue) {
      this.unregisterListener(oldTriggerValue);
    }
  }

  @Listen('click', {
    target: 'window',
  })
  clickOutside(event: Event) {
    const target = event.target as HTMLElement;

    if (this.show === false || this.closeBehavior === false || this.anchorElement === target || this.triggerElement === target) {
      return;
    }

    switch (this.closeBehavior) {
      case 'outside':
        if (!this.dropdownRef.contains(target)) {
          this.close();
        }
        break;

      case 'inside':
        if (this.dropdownRef.contains(target)) {
          this.close();
        }
        break;

      default:
        this.close();
    }
  }

  private open(event?: Event) {
    event?.preventDefault();
    event?.stopPropagation();

    this.show = !this.show;
    this.showChanged.emit(this.show);
  }

  private close() {
    this.show = false;
    this.showChanged.emit(this.show);
  }

  disconnectedCallback() {
    this.popperInstance?.destroy();
  }

  /**
   * Update position of dropdown
   */
  @Method()
  async updatePosition() {
    await this.popperInstance?.update();
  }

  render() {
    return (
      <Host
        ref={ref => (this.dropdownRef = ref)}
        class={{
          'dropdown-menu': true,
          'show': this.show,
        }}
        style={{
          margin: '0',
          minWidth: '0px',
        }}
      >
        <div style={{ display: 'contents' }}>
          { this.header ? <div class="dropdown-header">{this.header}</div>: ''}
          <slot></slot>
        </div>
      </Host>
    );
  }
}
