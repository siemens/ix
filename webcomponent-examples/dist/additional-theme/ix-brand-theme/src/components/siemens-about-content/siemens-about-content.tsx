import { Component, h, Host, Prop } from '@stencil/core';
import { LegalLinkLanguage, resolveLink } from './imprint-language';

@Component({
  tag: 'ix-siemens-about-content',
  styleUrl: 'siemens-about-content.scss',
  shadow: true,
})
export class SiemensAboutContent {
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

  render() {
    return (
      <Host>
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
            <a href={resolveLink(this.imprintLanguage, 'general')} target="_blank">
              <span class="glyph glyph-16 glyph-chevron-right-small"></span>
              {this.i18nCorporateLabel}
            </a>
          </div>
          <div class="cui-imprint-link-container">
            <a href={resolveLink(this.imprintLanguage, 'privacy')} target="_blank">
              <span class="glyph glyph-16 glyph-chevron-right-small"></span>
              {this.i18nPrivacyNoticeLabel}
            </a>
          </div>
          <div class="cui-imprint-link-container">
            <a href={resolveLink(this.imprintLanguage, 'terms')} target="_blank">
              <span class="glyph glyph-16 glyph-chevron-right-small"></span>
              {this.i18nTermsOfUseLabel}
            </a>
          </div>
          <div class="cui-imprint-link-container">
            <a href={resolveLink(this.imprintLanguage, 'cookie')} target="_blank">
              <span class="glyph glyph-16 glyph-chevron-right-small"></span>
              {this.i18nCookieNoticeLabel}
            </a>
          </div>
          <div class="cui-imprint-link-container">
            <a href={resolveLink(this.imprintLanguage, 'digital')} target="_blank">
              <span class="glyph glyph-16 glyph-chevron-right-small"></span>
              {this.i18nDigitalId}
            </a>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
