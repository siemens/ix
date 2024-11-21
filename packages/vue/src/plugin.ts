import { Plugin } from 'vue';
import { handlePlatformHelpers } from '@siemens/ix/components';

function toKebabCase(name: string) {
  const kebabCase = name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2');
  return kebabCase.toLowerCase();
}

export const ixPlugin: Plugin = {
  async install() {
    // handle vue event name conversion
    handlePlatformHelpers({
      ael(el: HTMLElement, name, cb, opts) {
        el.addEventListener(toKebabCase(name), cb, opts);
      },
      rel(el: HTMLElement, name, cb, opts) {
        el.removeEventListener(toKebabCase(name), cb, opts);
      },
      ce(name, opts) {
        return new CustomEvent(toKebabCase(name), opts);
      },
    });
  },
};
