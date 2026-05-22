import { a as registerInstance } from "./global-DX2OdaCL.js";
const BaseTabMixin = (Base) => {
  const BaseTabMixinCtor = class extends Base {
    constructor(hostRef) {
      super();
      registerInstance(this, hostRef);
    }
    /**
     * Key of the tab, used for identifying the tab in events
     *
     * @since 5.0.0
     */
    tabKey;
  };
  return BaseTabMixinCtor;
};
export {
  BaseTabMixin as B
};
