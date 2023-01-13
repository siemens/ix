import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';

export const ixPlugin: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
