import { p as promiseResolve, b as bootstrapLazy } from './index-fa6efa4c.js';
export { s as setNonce } from './index-fa6efa4c.js';

/*
 Stencil Client Patch Esm v3.2.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["ix-siemens-about-content",[[1,"ix-siemens-about-content",{"applicationName":[1,"application-name"],"applicationDescription":[1,"application-description"],"imprintLanguage":[1,"imprint-language"],"copyrightYears":[1,"copyright-years"],"i18nCorporateLabel":[1,"i-1-8n-corporate-label"],"i18nPrivacyNoticeLabel":[1,"i-1-8n-privacy-notice-label"],"i18nTermsOfUseLabel":[1,"i-1-8n-terms-of-use-label"],"i18nCookieNoticeLabel":[1,"i-1-8n-cookie-notice-label"],"i18nDigitalId":[1,"i-1-8n-digital-id"]}]]],["ix-siemens-logo",[[1,"ix-siemens-logo"]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map