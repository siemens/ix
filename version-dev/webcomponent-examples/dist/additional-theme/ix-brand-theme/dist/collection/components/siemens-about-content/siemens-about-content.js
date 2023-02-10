import { h, Host } from '@stencil/core';
import { resolveLink } from './imprint-language';
export class SiemensAboutContent {
  constructor() {
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
    return (h(Host, null, h("div", { id: "cui-imprint" }, h("div", { class: "cui-imprint-product-name" }, this.applicationName, h("br", null), "\u00A9 Siemens ", this.copyrightYears), h("div", { class: {
        'd-none': !this.applicationDescription,
        'cui-imprint-product-description': true,
      } }, this.applicationDescription), h("div", { class: "cui-imprint-link-container" }, h("a", { href: resolveLink(this.imprintLanguage, 'general'), target: "_blank" }, h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nCorporateLabel)), h("div", { class: "cui-imprint-link-container" }, h("a", { href: resolveLink(this.imprintLanguage, 'privacy'), target: "_blank" }, h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nPrivacyNoticeLabel)), h("div", { class: "cui-imprint-link-container" }, h("a", { href: resolveLink(this.imprintLanguage, 'terms'), target: "_blank" }, h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nTermsOfUseLabel)), h("div", { class: "cui-imprint-link-container" }, h("a", { href: resolveLink(this.imprintLanguage, 'cookie'), target: "_blank" }, h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nCookieNoticeLabel)), h("div", { class: "cui-imprint-link-container" }, h("a", { href: resolveLink(this.imprintLanguage, 'digital'), target: "_blank" }, h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), this.i18nDigitalId))), h("slot", null)));
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
              "path": "./imprint-language"
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
