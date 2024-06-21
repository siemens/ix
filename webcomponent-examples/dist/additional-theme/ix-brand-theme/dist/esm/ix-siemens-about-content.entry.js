import { r as registerInstance, h, H as Host } from './index-03e55534.js';

/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
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

const siemensAboutContentCss = ":host{display:block}:host #cui-imprint .cui-imprint-product-name{margin-bottom:1rem}:host #cui-imprint .cui-imprint-product-description{margin-bottom:2rem}:host #cui-imprint .cui-imprint-product-name,:host #cui-imprint .cui-imprint-product-description{font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-lg);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host #cui-imprint .cui-imprint-link-container{display:flex;align-items:center;height:2rem}";
const IxSiemensAboutContentStyle0 = siemensAboutContentCss;

const SiemensAboutContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applicationName = undefined;
        this.applicationDescription = '';
        this.imprintLanguage = 'global/en';
        this.copyrightYears = '1996 - 2022';
        this.i18nCorporateLabel = 'Corporate Information';
        this.i18nPrivacyNoticeLabel = 'Privacy Notice';
        this.i18nTermsOfUseLabel = 'Terms of Use';
        this.i18nCookieNoticeLabel = 'Cookie Notice';
        this.i18nDigitalId = 'Digital ID';
    }
    render() {
        return (h(Host, { key: 'fe000447e722bb5a76767efc8103cafae8f93b6a' }, h("div", { key: 'd833878e41c42b9af3dfe41e7f2a6c751995a7bb', id: "cui-imprint" }, h("div", { key: 'e5f9d5758358e7793a1ea4183078341a2260989f', class: "cui-imprint-product-name" }, this.applicationName, h("br", { key: '5a2891fc7c8d267fe0163013277767bb1a078959' }), "\u00A9 Siemens ", this.copyrightYears), h("div", { key: '083cacee87e2eea0d0f478f34a44ab6a38079037', class: {
                'd-none': !this.applicationDescription,
                'cui-imprint-product-description': true,
            } }, this.applicationDescription), h("div", { key: '9342008bf429b35e1b857c63b448d3b6fe267f5d', class: "cui-imprint-link-container" }, h("a", { key: 'b8510398a29b880a68dc32692b3635549640d4b3', href: resolveLink(this.imprintLanguage, 'general'), target: "_blank" }, h("span", { key: '2618fe41da659091c93b7b5bb420af441a0cd1c6', class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nCorporateLabel)), h("div", { key: 'eefc34090afce5f432bcf599c3f4eaa81b19fd6c', class: "cui-imprint-link-container" }, h("a", { key: 'aeb2b09750138a40f82aa2ee50918acc3a551dc9', href: resolveLink(this.imprintLanguage, 'privacy'), target: "_blank" }, h("span", { key: '4b788bfd5aba13059eaf663397daf035982d81be', class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nPrivacyNoticeLabel)), h("div", { key: 'f213552021bab006e06e755b6f743f3525092470', class: "cui-imprint-link-container" }, h("a", { key: '88d41b111e8d8b5d59463b054b065eb2b93583ec', href: resolveLink(this.imprintLanguage, 'terms'), target: "_blank" }, h("span", { key: '415b696d41c8254e0a0cffcfecffac25352a1da1', class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nTermsOfUseLabel)), h("div", { key: '239d536c3b859204f143face7ed6469fc0800196', class: "cui-imprint-link-container" }, h("a", { key: 'a80adf27618535ac9a8c7a79a52fff1eb2e96f3a', href: resolveLink(this.imprintLanguage, 'cookie'), target: "_blank" }, h("span", { key: 'bfda62d4f81ba69a9cabf9fd7f221d8ebf9d4ea4', class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nCookieNoticeLabel)), h("div", { key: '7fad2379597c0edf1a91ad0017497b9f5e67b9ad', class: "cui-imprint-link-container" }, h("a", { key: 'c504ce90ba348c807601485401a5b80603c9c8ea', href: resolveLink(this.imprintLanguage, 'digital'), target: "_blank" }, h("span", { key: '9ee6633d6abf6c6cbe305720c902c451c9214646', class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nDigitalId))), h("slot", { key: '984b99ffaa070e58fb135e80f48ff27353652d35' })));
    }
};
SiemensAboutContent.style = IxSiemensAboutContentStyle0;

export { SiemensAboutContent as ix_siemens_about_content };

//# sourceMappingURL=ix-siemens-about-content.entry.js.map