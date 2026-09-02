import { r as registerInstance } from "./global-Do6maBom.js";
import { b as a11yAttributes, c as a11yHostAttributes } from "./a11y-DD206pTM-BiwZPW5s.js";
const reportMutationError = (error) => {
  if (typeof reportError === "function") {
    reportError(error);
    return;
  }
  console.error(error);
};
const registrations = /* @__PURE__ */ new WeakMap();
const suppressedHosts = /* @__PURE__ */ new WeakSet();
let observer;
let registrationCount = 0;
const dispatchMutations = (mutations) => {
  const changesByHandler = /* @__PURE__ */ new Map();
  mutations.forEach((mutation) => {
    const hostElement = mutation.target;
    if (suppressedHosts.has(hostElement)) {
      return;
    }
    const registration = registrations.get(hostElement);
    const attributeName = mutation.attributeName;
    if (!registration || !attributeName) {
      return;
    }
    let changedAttributes = changesByHandler.get(registration.handler);
    if (!changedAttributes) {
      changedAttributes = /* @__PURE__ */ new Set();
      changesByHandler.set(registration.handler, changedAttributes);
    }
    changedAttributes.add(attributeName);
  });
  changesByHandler.forEach((attributeNames, handler) => {
    try {
      handler(attributeNames);
    } catch (error) {
      reportMutationError(error);
    }
  });
};
const getObserver = () => {
  if (typeof MutationObserver === "undefined") {
    return void 0;
  }
  observer ??= new MutationObserver(dispatchMutations);
  return observer;
};
const observeAriaAttributes = (hostElement, handler) => {
  const ariaObserver = getObserver();
  if (!ariaObserver) {
    return false;
  }
  if (!registrations.has(hostElement)) {
    registrationCount++;
  }
  registrations.set(hostElement, { handler });
  ariaObserver.observe(hostElement, {
    attributeFilter: a11yAttributes,
    attributes: true
  });
  return true;
};
const unobserveAriaAttributes = (hostElement) => {
  if (!registrations.delete(hostElement)) {
    return;
  }
  registrationCount--;
  if (registrationCount === 0) {
    observer?.disconnect();
    observer = void 0;
  }
};
const runWithoutAriaAttributeObservation = (hostElement, callback) => {
  const registration = registrations.get(hostElement);
  if (!registration || !observer) {
    return callback();
  }
  const activeObserver = observer;
  dispatchMutations(activeObserver.takeRecords());
  suppressedHosts.add(hostElement);
  try {
    return callback();
  } finally {
    const remainingMutations = activeObserver.takeRecords().filter((mutation) => mutation.target !== hostElement);
    suppressedHosts.delete(hostElement);
    dispatchMutations(remainingMutations);
  }
};
const flushAriaAttributeMutations = () => {
  if (observer) {
    dispatchMutations(observer.takeRecords());
  }
};
const InheritAriaAttributesMixin = (Base) => {
  const InheritAriaAttributesMixinCtor = class extends Base {
    constructor(hostRef) {
      super();
      registerInstance(this, hostRef);
    }
    inheritAriaAttributes = {};
    #ariaObserverInitialized = false;
    #ariaObservationActive = false;
    #ariaInitializationPending = false;
    #disconnected = false;
    #ariaAttributesBeforeDisconnect;
    #ariaAttributesChangedWhileDisconnected = /* @__PURE__ */ new Set();
    #ariaAttributeRemovalPatched = false;
    #readingAriaAttributes = false;
    #handleAriaMutations(changedAttributes) {
      const hostElement = this.#getHostElement();
      const ignoredAttributes = this.getIgnoredAriaAttributes();
      let updatedAttributes = this.inheritAriaAttributes;
      changedAttributes.forEach((attributeName) => {
        if (ignoredAttributes.includes(attributeName)) {
          return;
        }
        const newValue = hostElement.getAttribute(attributeName);
        const currentValue = updatedAttributes[attributeName] ?? null;
        if (newValue === currentValue) {
          return;
        }
        if (updatedAttributes === this.inheritAriaAttributes) {
          updatedAttributes = { ...updatedAttributes };
        }
        if (newValue === null) {
          delete updatedAttributes[attributeName];
        } else {
          updatedAttributes[attributeName] = newValue;
        }
      });
      if (updatedAttributes !== this.inheritAriaAttributes) {
        this.inheritAriaAttributes = updatedAttributes;
      }
    }
    getIgnoredAriaAttributes() {
      return [];
    }
    readAriaAttributesFromHost() {
      const hostElement = this.#getHostElement();
      return runWithoutAriaAttributeObservation(hostElement, () => {
        this.#readingAriaAttributes = true;
        try {
          return a11yHostAttributes(hostElement, this.getIgnoredAriaAttributes());
        } finally {
          this.#readingAriaAttributes = false;
        }
      });
    }
    #getHostElement() {
      if (!this.hostElement) {
        throw new Error("Host element is not defined. Make sure to apply the InheritAriaAttributesMixin to a Stencil component.");
      }
      return this.hostElement;
    }
    #getAriaAttributesFromHost() {
      const hostElement = this.#getHostElement();
      const attributes = /* @__PURE__ */ new Map();
      a11yAttributes.forEach((attributeName) => {
        const value = hostElement.getAttribute(attributeName);
        if (value !== null) {
          attributes.set(attributeName, value);
        }
      });
      return attributes;
    }
    #patchAriaAttributeRemoval() {
      if (this.#ariaAttributeRemovalPatched || typeof MutationObserver === "undefined") {
        return;
      }
      const hostElement = this.#getHostElement();
      const removeAttribute = hostElement.removeAttribute.bind(hostElement);
      hostElement.removeAttribute = (attributeName) => {
        removeAttribute(attributeName);
        if (a11yAttributes.includes(attributeName)) {
          if (this.#readingAriaAttributes) {
            return;
          }
          if (!this.#ariaObservationActive) {
            this.#ariaAttributesChangedWhileDisconnected.add(attributeName);
          }
          this.#updateInheritedAriaAttribute(null, attributeName);
        }
      };
      this.#ariaAttributeRemovalPatched = true;
    }
    #observeAriaAttributes() {
      this.#ariaObservationActive = observeAriaAttributes(this.#getHostElement(), (attributeNames) => this.#handleAriaMutations(attributeNames));
    }
    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }
      this.#disconnected = false;
      if (this.#ariaInitializationPending && !this.#ariaObserverInitialized) {
        this.#ariaInitializationPending = false;
        this.#initializeAriaAttributes();
        return;
      }
      if (this.#ariaObserverInitialized) {
        const hostElement = this.#getHostElement();
        this.#observeAriaAttributes();
        if (this.#ariaAttributesBeforeDisconnect) {
          const inheritedAttributes = this.readAriaAttributesFromHost();
          a11yAttributes.forEach((attributeName) => {
            const oldValue = this.#ariaAttributesBeforeDisconnect?.get(attributeName) ?? null;
            const newValue = inheritedAttributes[attributeName] ?? hostElement.getAttribute(attributeName);
            if (newValue !== oldValue || this.#ariaAttributesChangedWhileDisconnected.has(attributeName)) {
              this.#updateInheritedAriaAttribute(newValue ?? null, attributeName);
            }
          });
        }
      }
      this.#ariaAttributesBeforeDisconnect = void 0;
      this.#ariaAttributesChangedWhileDisconnected.clear();
    }
    componentWillLoad() {
      if (super.componentWillLoad) {
        const baseLoad = super.componentWillLoad();
        if (baseLoad) {
          return baseLoad.then(() => this.#initializeAriaAttributesIfConnected());
        }
      }
      this.#initializeAriaAttributesIfConnected();
    }
    #initializeAriaAttributesIfConnected() {
      if (this.#disconnected) {
        this.#ariaInitializationPending = true;
        return;
      }
      this.#initializeAriaAttributes();
    }
    #initializeAriaAttributes() {
      this.inheritAriaAttributes = this.readAriaAttributesFromHost();
      this.#patchAriaAttributeRemoval();
      this.#ariaObserverInitialized = true;
      this.#observeAriaAttributes();
    }
    #updateInheritedAriaAttribute(newValue, propName) {
      const ignoredAttributes = this.getIgnoredAriaAttributes();
      if (ignoredAttributes.includes(propName)) {
        return;
      }
      const currentValue = this.inheritAriaAttributes[propName] ?? null;
      if (newValue === currentValue) {
        return;
      }
      const updatedAttributes = {
        ...this.inheritAriaAttributes
      };
      if (newValue === null) {
        delete updatedAttributes[propName];
      } else {
        updatedAttributes[propName] = newValue;
      }
      this.inheritAriaAttributes = updatedAttributes;
    }
    disconnectedCallback() {
      this.#disconnected = true;
      this.#ariaAttributesChangedWhileDisconnected.clear();
      if (this.#ariaObserverInitialized) {
        flushAriaAttributeMutations();
        this.#ariaAttributesBeforeDisconnect = this.#getAriaAttributesFromHost();
        unobserveAriaAttributes(this.#getHostElement());
        this.#ariaObservationActive = false;
      } else {
        this.#ariaAttributesBeforeDisconnect = void 0;
      }
      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }
    }
  };
  return InheritAriaAttributesMixinCtor;
};
export {
  InheritAriaAttributesMixin as I
};
