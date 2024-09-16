/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import { h } from "@stencil/core";
import { resolveLink } from "./imprint-language";
export const defaultImprint = (tabName, productName, productDescription, labelCorporateInformation, labelPrivacyNotice, labelTermsOfUse, labelCookieNotice, labelDigitalId, legalLinkLanguage) => {
    return (h("ix-menu-about-item", { label: tabName }, h("div", { id: "cui-imprint" }, h("div", { class: "cui-imprint-product-name" }, productName, h("br", null), "\u00A9 Siemens 2020 - 2021"), h("div", { class: "cui-imprint-product-description" }, productDescription), h("div", { class: "cui-imprint-link-container" }, h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), h("a", { href: resolveLink(legalLinkLanguage, 'general'), target: "_blank" }, labelCorporateInformation)), h("div", { class: "cui-imprint-link-container" }, h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), h("a", { href: resolveLink(legalLinkLanguage, 'privacy'), target: "_blank" }, labelPrivacyNotice)), h("div", { class: "cui-imprint-link-container" }, h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), h("a", { href: resolveLink(legalLinkLanguage, 'terms'), target: "_blank" }, labelTermsOfUse)), h("div", { class: "cui-imprint-link-container" }, h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), h("a", { href: resolveLink(legalLinkLanguage, 'cookie'), target: "_blank" }, labelCookieNotice)), h("div", { class: "cui-imprint-link-container" }, h("span", { class: "glyph glyph-16 glyph-chevron-right-small" }), h("a", { href: resolveLink(legalLinkLanguage, 'digital'), target: "_blank" }, labelDigitalId)))));
};
//# sourceMappingURL=default-imprint.js.map
