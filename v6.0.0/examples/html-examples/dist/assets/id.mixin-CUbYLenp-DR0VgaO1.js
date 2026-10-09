let componentId = 0;
const ComponentIdMixin = (Base) => {
  class ComponentIdMixinCtor extends Base {
    $internal_id = ++componentId;
    getHostElementId() {
      if (this.hostElement) {
        if (this.hostElement.id !== "") {
          return this.hostElement.id;
        }
        const tagName = this.hostElement.tagName.toLowerCase();
        return `ix-component-${tagName}-${this.$internal_id}`;
      }
      return `ix-component-${this.$internal_id}`;
    }
  }
  return ComponentIdMixinCtor;
};
export {
  ComponentIdMixin as C
};
