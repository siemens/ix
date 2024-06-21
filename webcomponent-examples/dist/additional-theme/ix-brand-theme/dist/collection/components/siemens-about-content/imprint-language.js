/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
export const languageRegister = {
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
export const resolveLink = (value, type) => {
    return languageRegister[value].legals[type];
};
//# sourceMappingURL=imprint-language.js.map
