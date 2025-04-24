import { ElementHandle } from '@playwright/test';
export declare const regressionTest: import("@playwright/test").TestType<import("@playwright/test").PlaywrightTestArgs & import("@playwright/test").PlaywrightTestOptions & {
    [key: string]: any;
}, import("@playwright/test").PlaywrightWorkerArgs & import("@playwright/test").PlaywrightWorkerOptions>;
export declare const test: import("@playwright/test").TestType<import("@playwright/test").PlaywrightTestArgs & import("@playwright/test").PlaywrightTestOptions & {
    mount: (selector: string) => Promise<ElementHandle<HTMLElement>>;
    createElement: (selector: string, appendTo?: ElementHandle<Element>) => Promise<ElementHandle<HTMLElement>>;
}, import("@playwright/test").PlaywrightWorkerArgs & import("@playwright/test").PlaywrightWorkerOptions>;
