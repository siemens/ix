'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-76b8a7e8.js');

/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
const languageRegister = {
  'cn/zh': {
    path: '/cn/zh.html',
    legals: {
      general: 'https://new.siemens.com/cn/zh/general/legal.html',
      privacy: 'https://new.siemens.com/cn/zh/general/privacy-notice.html',
      cookie: 'https://new.siemens.com/cn/zh/general/cookie-notice.html',
      terms: 'https://new.siemens.com/cn/zh/general/terms-of-use.html',
      digital: 'http://beian.miit.gov.cn/',
    },
  },
  'global/es': {
    path: '/global/es/general/legal.html',
    legals: {
      general: 'https://new.siemens.com/global/es/general/legal.html',
      privacy: 'https://new.siemens.com/global/es/general/aviso-de-privacidad-de-datos.html',
      cookie: 'https://new.siemens.com/global/es/general/aviso-sobre-el-uso-de-cookies.html',
      terms: 'https://new.siemens.com/global/es/general/condiciones-de-uso.html',
      digital: 'https://new.siemens.com/global/es/general/digital-id.html',
    },
  },
  'global/en': {
    path: '/global/en/general/legal.html',
    legals: {
      general: 'https://new.siemens.com/global/en/general/legal.html',
      privacy: 'https://new.siemens.com/global/en/general/privacy-notice.html',
      cookie: 'https://new.siemens.com/global/en/general/cookie-notice.html',
      terms: 'https://new.siemens.com/global/en/general/terms-of-use.html',
      digital: 'https://new.siemens.com/global/en/general/digital-id.html',
    },
  },
  'de/de': {
    path: '/de/de.html',
    legals: {
      general: 'https://new.siemens.com/de/de/general/legal.html',
      privacy: 'https://new.siemens.com/de/de/general/datenschutz.html',
      cookie: 'https://new.siemens.com/de/de/general/cookie-richtlinien.html',
      terms: 'https://new.siemens.com/de/de/general/nutzungsbedingungen.html',
      digital: 'https://new.siemens.com/de/de/general/digitales-zertifikat.html',
    },
  },
};
const resolveLink = (value, type) => {
  return languageRegister[value].legals[type];
};

const siemensAboutContentCss = ".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}:host{display:block}:host #cui-imprint .cui-imprint-product-name{margin-bottom:1rem}:host #cui-imprint .cui-imprint-product-description{margin-bottom:2rem}:host #cui-imprint .cui-imprint-product-name,:host #cui-imprint .cui-imprint-product-description{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}:host #cui-imprint .cui-imprint-link-container{display:flex;align-items:center;height:2rem}";

const SiemensAboutContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Should only be set if you use ix-menu standalone
     */
    this.applicationDescription = '';
    /**
     * Language of the links in the About & Legal Tab
     */
    this.imprintLanguage = 'global/en';
    /**
     * Copyright
     */
    this.copyrightYears = '1996 - 2022';
    /**
     *
     */
    this.i18nCorporateLabel = 'Corporate Information';
    /**
     *
     */
    this.i18nPrivacyNoticeLabel = 'Privacy Notice';
    /**
     *
     */
    this.i18nTermsOfUseLabel = 'Terms of Use';
    /**
     *
     */
    this.i18nCookieNoticeLabel = 'Cookie Notice';
    /**
     *
     */
    this.i18nDigitalId = 'Digital ID';
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { id: "cui-imprint" }, index.h("div", { class: "cui-imprint-product-name" }, this.applicationName, index.h("br", null), "\u00A9 Siemens ", this.copyrightYears), index.h("div", { class: {
        'd-none': !this.applicationDescription,
        'cui-imprint-product-description': true,
      } }, this.applicationDescription), index.h("div", { class: "cui-imprint-link-container" }, index.h("a", { href: resolveLink(this.imprintLanguage, 'general'), target: "_blank" }, index.h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nCorporateLabel)), index.h("div", { class: "cui-imprint-link-container" }, index.h("a", { href: resolveLink(this.imprintLanguage, 'privacy'), target: "_blank" }, index.h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nPrivacyNoticeLabel)), index.h("div", { class: "cui-imprint-link-container" }, index.h("a", { href: resolveLink(this.imprintLanguage, 'terms'), target: "_blank" }, index.h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nTermsOfUseLabel)), index.h("div", { class: "cui-imprint-link-container" }, index.h("a", { href: resolveLink(this.imprintLanguage, 'cookie'), target: "_blank" }, index.h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nCookieNoticeLabel)), index.h("div", { class: "cui-imprint-link-container" }, index.h("a", { href: resolveLink(this.imprintLanguage, 'digital'), target: "_blank" }, index.h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nDigitalId))), index.h("slot", null)));
  }
};
SiemensAboutContent.style = siemensAboutContentCss;

exports.ix_siemens_about_content = SiemensAboutContent;
