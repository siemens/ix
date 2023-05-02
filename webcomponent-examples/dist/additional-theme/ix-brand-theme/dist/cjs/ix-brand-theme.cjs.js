'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-46224112.js');

/*
 Stencil Client Patch Browser v3.2.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('ix-brand-theme.cjs.js', document.baseURI).href));
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["ix-siemens-about-content.cjs",[[1,"ix-siemens-about-content",{"applicationName":[1,"application-name"],"applicationDescription":[1,"application-description"],"imprintLanguage":[1,"imprint-language"],"copyrightYears":[1,"copyright-years"],"i18nCorporateLabel":[1,"i-1-8n-corporate-label"],"i18nPrivacyNoticeLabel":[1,"i-1-8n-privacy-notice-label"],"i18nTermsOfUseLabel":[1,"i-1-8n-terms-of-use-label"],"i18nCookieNoticeLabel":[1,"i-1-8n-cookie-notice-label"],"i18nDigitalId":[1,"i-1-8n-digital-id"]}]]],["ix-siemens-logo.cjs",[[1,"ix-siemens-logo"]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=ix-brand-theme.cjs.js.map