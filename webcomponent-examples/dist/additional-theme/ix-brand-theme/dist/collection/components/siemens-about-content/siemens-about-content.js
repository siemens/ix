import { h, Host } from "@stencil/core";
import { resolveLink } from "./imprint-language";
export class SiemensAboutContent {
    constructor() {
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
    static get is() { return "ix-siemens-about-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["siemens-about-content.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["siemens-about-content.css"]
        };
    }
    static get properties() {
        return {
            "applicationName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Should only be set if you use ix-menu standalone"
                },
                "attribute": "application-name",
                "reflect": false
            },
            "applicationDescription": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Should only be set if you use ix-menu standalone"
                },
                "attribute": "application-description",
                "reflect": false,
                "defaultValue": "''"
            },
            "imprintLanguage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LegalLinkLanguage",
                    "resolved": "\"cn/zh\" | \"de/de\" | \"global/en\" | \"global/es\"",
                    "references": {
                        "LegalLinkLanguage": {
                            "location": "import",
                            "path": "./imprint-language",
                            "id": "src/components/siemens-about-content/imprint-language.ts::LegalLinkLanguage"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Language of the links in the About & Legal Tab"
                },
                "attribute": "imprint-language",
                "reflect": false,
                "defaultValue": "'global/en'"
            },
            "copyrightYears": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Copyright"
                },
                "attribute": "copyright-years",
                "reflect": false,
                "defaultValue": "'1996 - 2022'"
            },
            "i18nCorporateLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "i-1-8n-corporate-label",
                "reflect": false,
                "defaultValue": "'Corporate Information'"
            },
            "i18nPrivacyNoticeLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "i-1-8n-privacy-notice-label",
                "reflect": false,
                "defaultValue": "'Privacy Notice'"
            },
            "i18nTermsOfUseLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "i-1-8n-terms-of-use-label",
                "reflect": false,
                "defaultValue": "'Terms of Use'"
            },
            "i18nCookieNoticeLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "i-1-8n-cookie-notice-label",
                "reflect": false,
                "defaultValue": "'Cookie Notice'"
            },
            "i18nDigitalId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "i-1-8n-digital-id",
                "reflect": false,
                "defaultValue": "'Digital ID'"
            }
        };
    }
}
//# sourceMappingURL=siemens-about-content.js.map
