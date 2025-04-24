import { p as promiseResolve, b as bootstrapLazy } from './index-03e55534.js';
export { s as setNonce } from './index-03e55534.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["ix-siemens-about-content",[[1,"ix-siemens-about-content",{"applicationName":[1,"application-name"],"applicationDescription":[1,"application-description"],"imprintLanguage":[1,"imprint-language"],"copyrightYears":[1,"copyright-years"],"i18nCorporateLabel":[1,"i-1-8n-corporate-label"],"i18nPrivacyNoticeLabel":[1,"i-1-8n-privacy-notice-label"],"i18nTermsOfUseLabel":[1,"i-1-8n-terms-of-use-label"],"i18nCookieNoticeLabel":[1,"i-1-8n-cookie-notice-label"],"i18nDigitalId":[1,"i-1-8n-digital-id"]}]]],["ix-siemens-logo",[[1,"ix-siemens-logo"]]]], options);
});

//# sourceMappingURL=ix-brand-theme.js.map