'use strict';

const index = require('./index-76b8a7e8.js');

/*
 Stencil Client Patch Browser v2.18.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('ix-brand-theme.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["ix-siemens-about-content.cjs",[[1,"ix-siemens-about-content",{"applicationName":[1,"application-name"],"applicationDescription":[1,"application-description"],"imprintLanguage":[1,"imprint-language"],"copyrightYears":[1,"copyright-years"],"i18nCorporateLabel":[1,"i-1-8n-corporate-label"],"i18nPrivacyNoticeLabel":[1,"i-1-8n-privacy-notice-label"],"i18nTermsOfUseLabel":[1,"i-1-8n-terms-of-use-label"],"i18nCookieNoticeLabel":[1,"i-1-8n-cookie-notice-label"],"i18nDigitalId":[1,"i-1-8n-digital-id"]}]]],["ix-siemens-logo.cjs",[[1,"ix-siemens-logo"]]],["my-component.cjs",[[1,"my-component"]]]], options);
});
