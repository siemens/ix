export type LegalLinkLanguage = 'global/en' | 'global/es' | 'de/de' | 'cn/zh';
interface LegalTextSource {
    general: string;
    privacy: string;
    cookie: string;
    terms: string;
    digital: string;
}
export declare const languageRegister: {
    [lang: string]: {
        path: string;
        legals: LegalTextSource;
    };
};
export declare const resolveLink: (value: LegalLinkLanguage, type: keyof LegalTextSource) => string;
export {};
