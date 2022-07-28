/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { h } from '@stencil/core';
import { LegalLinkLanguage, resolveLink } from './imprint-language';
export const defaultImprint = (
  tabName: string,
  productName: string,
  productDescription: string,
  labelCorporateInformation: string,
  labelPrivacyNotice: string,
  labelTermsOfUse: string,
  labelCookieNotice: string,
  labelDigitalId: string,
  legalLinkLanguage: LegalLinkLanguage,
) => {
  return (
    <cw-menu-about-item label={tabName}>
      <div id="cui-imprint">
        <div class="cui-imprint-product-name">
          {productName}
          <br />
          &copy; Siemens 2020 - 2021
        </div>
        <div class="cui-imprint-product-description">{productDescription}</div>
        <div class="cui-imprint-link-container">
          <span class="glyph glyph-16 glyph-chevron-right-small"></span>
          <a href={resolveLink(legalLinkLanguage, 'general')} target="_blank">
            {labelCorporateInformation}
          </a>
        </div>
        <div class="cui-imprint-link-container">
          <span class="glyph glyph-16 glyph-chevron-right-small"></span>
          <a href={resolveLink(legalLinkLanguage, 'privacy')} target="_blank">
            {labelPrivacyNotice}
          </a>
        </div>
        <div class="cui-imprint-link-container">
          <span class="glyph glyph-16 glyph-chevron-right-small"></span>
          <a href={resolveLink(legalLinkLanguage, 'terms')} target="_blank">
            {labelTermsOfUse}
          </a>
        </div>
        <div class="cui-imprint-link-container">
          <span class="glyph glyph-16 glyph-chevron-right-small"></span>
          <a href={resolveLink(legalLinkLanguage, 'cookie')} target="_blank">
            {labelCookieNotice}
          </a>
        </div>
        <div class="cui-imprint-link-container">
          <span class="glyph glyph-16 glyph-chevron-right-small"></span>
          <a href={resolveLink(legalLinkLanguage, 'digital')} target="_blank">
            {labelDigitalId}
          </a>
        </div>
      </div>
    </cw-menu-about-item>
  );
};
