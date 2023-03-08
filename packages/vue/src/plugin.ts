import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';
import { Plugin } from 'vue';

export const ixPlugin: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
