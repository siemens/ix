import { LegalLinkLanguage } from './imprint-language';
export declare class SiemensAboutContent {
    /**
     * Should only be set if you use ix-menu standalone
     */
    applicationName: string;
    /**
     * Should only be set if you use ix-menu standalone
     */
    applicationDescription: string;
    /**
     * Language of the links in the About & Legal Tab
     */
    imprintLanguage: LegalLinkLanguage;
    /**
     * Copyright
     */
    copyrightYears: string;
    /**
     *
     */
    i18nCorporateLabel: string;
    /**
     *
     */
    i18nPrivacyNoticeLabel: string;
    /**
     *
     */
    i18nTermsOfUseLabel: string;
    /**
     *
     */
    i18nCookieNoticeLabel: string;
    /**
     *
     */
    i18nDigitalId: string;
    render(): any;
}
