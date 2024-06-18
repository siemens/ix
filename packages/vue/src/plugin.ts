import { defineCustomElements } from '@siemens/ix/loader';
import { Plugin } from 'vue';

export const ixPlugin: Plugin = {
  async install() {
    defineCustomElements();
  },
};
