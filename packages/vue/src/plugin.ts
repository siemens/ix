import { handlePlatformHelpers } from '@siemens/ix/components';
import { Plugin } from 'vue';

export const ixPlugin: Plugin = {
  async install() {
    handlePlatformHelpers({});
  },
};
