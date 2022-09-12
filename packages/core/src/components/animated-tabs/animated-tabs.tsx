
import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Host,
    Listen,
    Prop,
    State,
    Watch
} from '@stencil/core';
import anime from 'animejs';
import Animation from '../utils/animation';
import { convertToAbbreviationString } from '../utils/rwd.util';

@Component({
  tag: 'ix-animated-tabs',
  styleUrl: 'animated-tabs.scss',
  scoped: true,
})
export class AnimatedTabs {
  @Element() hostElement: HTMLIxAnimatedTabsElement;

  @State() tabs: HTMLIxAnimatedTabElement[];

  @State() activeIndex: number;

  /**
   * @deprecated - For debugging purposes only
   */
  @Prop() disableAnimations = false;

  /**
   * Current selected tab index
   */
  @Prop() selectedIndex = 0;

  /**
   * Placement of the tabs
   */
  @Prop() tabPlacement: 'top' | 'bottom' = 'top';

  /**
   * Tab navigated
   */
  @Event() tabClick: EventEmitter;

  private easing = 'easeInOutSine';
  private firstRender = true;
  private observer: MutationObserver;

  @Watch('selectedIndex')
  onTabSelectionChange(newSelectionIndex: number, oldSelectionIndex: number) {
    this.updateTabAnimation(oldSelectionIndex, newSelectionIndex);
  }

  @Listen('mouseup', { passive: true })
  onMouseDown() {
    this.activeIndex = undefined;
  }

  get animatedTabs() {
    return Array.from(this.hostElement.querySelectorAll('ix-animated-tab'));
  }

  get tabsContainer() {
    return this.hostElement.querySelector('.tabs-container');
  }

  get contentContainer() {
    return this.hostElement.querySelector('.content-container');
  }

  componentWillLoad() {
    this.tabs = this.animatedTabs;
  }

  componentDidLoad() {
    this.onTabSelectionChange(this.selectedIndex, -1);

    this.observer = new MutationObserver(() => {
      // Will trigger a re-render even if only the count attribute of a child tab changed
      this.tabs = this.animatedTabs;
    });

    this.observer.observe(this.contentContainer, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['count'],
    });
  }

  //@ts-expect-error
  private disconnectCallback(): void {
    this.observer?.disconnect();
  }

  private isSelected(tab: HTMLElement) {
    return this.tabs.indexOf(tab as any) === this.selectedIndex;
  }

  private showTab(tab: HTMLElement) {
    if (this.isSelected(tab)) {
      tab.classList.remove('d-none');
    }
  }

  private hideTab(tab: HTMLElement) {
    if (!this.isSelected(tab)) {
      tab.classList.add('d-none');
    }
  }

  private slideOutLeft(tab: HTMLElement) {
    if (this.disableAnimations) {
      this.hideTab(tab);

      return;
    }

    anime({
      targets: tab,
      duration: Animation.mediumTime,
      opacity: [1, 0],
      translateX: [0, '-100%'],
      easing: this.easing,
      complete: () => {
        this.hideTab(tab);
      },
    });
  }

  private slideOutRight(tab: HTMLElement) {
    if (this.disableAnimations) {
      this.hideTab(tab);

      return;
    }

    anime({
      targets: tab,
      duration: Animation.mediumTime,
      opacity: [1, 0],
      translateX: [0, '100%'],
      easing: this.easing,
      complete: () => {
        this.hideTab(tab);
      },
    });
  }

  private slideInLeft(tab: HTMLElement) {
    if (this.firstRender) {
      tab.classList.remove('d-none');
      this.firstRender = false;
      return;
    }

    if (this.disableAnimations) {
      this.showTab(tab);

      return;
    }

    anime({
      targets: tab,
      duration: Animation.mediumTime,
      opacity: [0, 1],
      translateX: ['-100%', 0],
      easing: this.easing,
      begin: () => {
        this.showTab(tab);
      },
    });
  }

  private slideInRight(tab: HTMLElement) {
    if (this.firstRender) {
      tab.classList.remove('d-none');
      this.firstRender = false;
      return;
    }

    if (this.disableAnimations) {
      this.showTab(tab);

      return;
    }

    anime({
      targets: tab,
      duration: Animation.mediumTime,
      opacity: [0, 1],
      translateX: ['100%', 0],
      easing: this.easing,
      begin: () => {
        this.showTab(tab);
      },
    });
  }

  private updateTabAnimation(oldIndex: number, newIndex: number) {
    this.tabs?.forEach((tab, tabIndex) => {
      if (tabIndex === oldIndex) {
        if (tabIndex < newIndex) {
          this.slideOutLeft(tab);
        } else if (tabIndex > newIndex) {
          this.slideOutRight(tab);
        }
      } else if (tabIndex === newIndex) {
        if (tabIndex < oldIndex) {
          this.slideInLeft(tab);
        } else if (tabIndex > oldIndex) {
          this.slideInRight(tab);
        }
      } else {
        tab.classList.add('d-none');
      }
    });
  }

  private onTabClick(index: number) {
    this.selectedIndex = index;
    this.tabClick.emit(index);
  }

  private onTabMouseDown(index: number) {
    this.activeIndex = index;
  }

  render() {
    return (
      <Host class={{ 'flex-column-reverse': this.tabPlacement === 'bottom' }}>
        <ul class="tabs-container">
          {this.animatedTabs.map((element, index) => (
            <li
              class={{ bottom: this.tabPlacement === 'bottom' }}
              onClick={() => this.onTabClick(index)}
              onMouseDown={() => this.onTabMouseDown(index)}
            >
              <div
                class={{
                  'tab-container': true,
                  selected: this.selectedIndex === index,
                }}
              >
                <ix-icon name={element.icon}></ix-icon>
                {element.count ? (
                  <span
                    class={{
                      count: true,
                      bottom: this.tabPlacement === 'bottom',
                    }}
                  >
                    {convertToAbbreviationString(element.count)}
                  </span>
                ) : (
                  ''
                )}
              </div>
            </li>
          ))}
          <div
            class={{
              'tab-active-underline': true,
              bottom: this.tabPlacement === 'bottom',
            }}
            style={{ 'margin-left': `calc(${this.selectedIndex} * 5rem)` }}
          ></div>
        </ul>
        <div class="content-container">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
