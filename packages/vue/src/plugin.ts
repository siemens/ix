import { setPlatformOptions } from '@siemens/ix/components';
import { Plugin } from 'vue';

const toKebabCase = (eventName: string) => {
  return eventName
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase();
};

export const ixPlugin: Plugin = {
  async install() {
    /**
     * Set platform options to overwrite .toLowerCase() inside generated vue component.
     */
    setPlatformOptions({
      ael: (el: any, eventName: string, cb: any, opts: any) =>
        el.addEventListener(toKebabCase(eventName), cb, opts),
      rel: (el: any, eventName: string, cb: any, opts: any) =>
        el.removeEventListener(toKebabCase(eventName), cb, opts),
      ce: (eventName: string, opts: any) =>
        new CustomEvent(toKebabCase(eventName), opts),
    } as any);
  },
};
