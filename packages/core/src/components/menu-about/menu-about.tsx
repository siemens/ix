/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import {
  Component,
  Element,
  Event,
  EventEmitter,
  forceUpdate,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { LegalLinkLanguage, resolveLink } from './imprint-language';

@Component({
  tag: 'ix-menu-about',
  styleUrl: 'menu-about.scss',
  scoped: true,
})
export class CwMenuAbout {
  /**
   * Should only be set if you use ix-menu standalone
   */
  @Prop() applicationName: string;

  /**
   * Should only be set if you use ix-menu standalone
   */
  @Prop() applicationDescription = '';

  /**
   * Language of the links in the About & Legal Tab
   */
  @Prop() imprintLanguage: LegalLinkLanguage = 'global/en';

  /**
   * Copyright
   */
  @Prop() copyrightYears = '1996 - 2022';

  /**
   *
   */
  @Prop() i18nCorporateLabel = 'Corporate Information';

  /**
   *
   */
  @Prop() i18nPrivacyNoticeLabel = 'Privacy Notice';

  /**
   *
   */
  @Prop() i18nTermsOfUseLabel = 'Terms of Use';

  /**
   *
   */
  @Prop() i18nCookieNoticeLabel = 'Cookie Notice';

  /**
   *
   */
  @Prop() i18nDigitalId = 'Digital ID';

  /**
   *
   */
  @Prop({ reflect: true }) i18nImprintLabel = 'Imprint';

  /**
   * Active tab
   */
  @Prop({ mutable: true, reflect: true }) activeTabLabel: string =
    this.i18nImprintLabel;

  /**
   * Label of first tab
   */
  @Prop() label = 'About & legal information';

  /**
   * Internal
   */
  @Prop() show = false;

  @Element() el!: HTMLIxMenuAboutElement;

  /**
   * About and Legal closed
   */
  @Event() close: EventEmitter<MouseEvent>;

  @State() labels: string[] = [];

  get aboutItems(): HTMLIxMenuAboutItemElement[] {
    return Array.from(this.el.querySelectorAll('ix-menu-about-item'));
  }

  private setTab(label: string) {
    this.activeTabLabel = label;
    this.aboutItems.forEach((i) => {
      i.style.display = 'none';
      if (i.label === this.activeTabLabel) {
        i.style.display = 'block';
      }
    });
  }

  componentWillLoad() {
    this.setTab(this.activeTabLabel || this.aboutItems[0]?.label);
  }

  componentDidLoad() {
    this.setTab(this.activeTabLabel || this.aboutItems[0]?.label);
    forceUpdate(this.el);
  }

  componentWillRender() {
    this.updateLabels();
  }

  private updateLabels() {
    this.labels = this.aboutItems.map((i) => i.label);
  }

  @Watch('activeTabLabel')
  watchActiveTabLabel(value: string) {
    // Wait a DOM render cycle to get changed labels
    setTimeout(() => this.setTab(value));
  }

  @Watch('i18nImprintLabel')
  watchImprint(newValue: string, oldValue: string) {
    if (this.activeTabLabel === oldValue) {
      this.setTab(newValue);
    }
    forceUpdate(this);
    this.updateLabels();
  }

  private getSelectedTabIndex(label: string) {
    const selectedItem = this.aboutItems.find((item) => item.label === label);
    return this.aboutItems.indexOf(selectedItem);
  }

  render() {
    return (
      <Host
        class={{
          animate__animated: true,
          animate__fadeInLeft: this.show,
          animate__fadeOutLeft: !this.show,
        }}
      >
        <div class="about-header">
          <h2 class="text-h2">{this.label}</h2>
          <ix-icon-button
            ghost
            size="24"
            icon="close"
            onClick={(e) => this.close.emit(e)}
          ></ix-icon-button>
        </div>
        <ix-tabs
          selected={this.getSelectedTabIndex(this.activeTabLabel)}
          class="about-tabs"
        >
          {this.labels.map((label) => (
            <ix-tab-item onClick={() => this.setTab(label)}>
              {label}
            </ix-tab-item>
          ))}
        </ix-tabs>
        <div class="about-items">
          <ix-menu-about-item label={this.i18nImprintLabel}>
            <div id="cui-imprint">
              <div class="cui-imprint-product-name">
                {this.applicationName}
                <br />
                &copy; Siemens {this.copyrightYears}
              </div>
              <div
                class={{
                  'd-none': !this.applicationDescription,
                  'cui-imprint-product-description': true,
                }}
              >
                {this.applicationDescription}
              </div>
              <div class="cui-imprint-link-container">
                <a
                  href={resolveLink(this.imprintLanguage, 'general')}
                  target="_blank"
                >
                  <span class="glyph glyph-16 glyph-chevron-right-small"></span>
                  {this.i18nCorporateLabel}
                </a>
              </div>
              <div class="cui-imprint-link-container">
                <a
                  href={resolveLink(this.imprintLanguage, 'privacy')}
                  target="_blank"
                >
                  <span class="glyph glyph-16 glyph-chevron-right-small"></span>
                  {this.i18nPrivacyNoticeLabel}
                </a>
              </div>
              <div class="cui-imprint-link-container">
                <a
                  href={resolveLink(this.imprintLanguage, 'terms')}
                  target="_blank"
                >
                  <span class="glyph glyph-16 glyph-chevron-right-small"></span>
                  {this.i18nTermsOfUseLabel}
                </a>
              </div>
              <div class="cui-imprint-link-container">
                <a
                  href={resolveLink(this.imprintLanguage, 'cookie')}
                  target="_blank"
                >
                  <span class="glyph glyph-16 glyph-chevron-right-small"></span>
                  {this.i18nCookieNoticeLabel}
                </a>
              </div>
              <div class="cui-imprint-link-container">
                <a
                  href={resolveLink(this.imprintLanguage, 'digital')}
                  target="_blank"
                >
                  <span class="glyph glyph-16 glyph-chevron-right-small"></span>
                  {this.i18nDigitalId}
                </a>
              </div>
            </div>
          </ix-menu-about-item>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
