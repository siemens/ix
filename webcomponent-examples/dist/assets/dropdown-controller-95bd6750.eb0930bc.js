function hasDropdownItemWrapperImplemented(item) {
  return item && item.getDropdownItemElement !== void 0 && typeof item.getDropdownItemElement === "function";
}
class DropdownController {
  constructor() {
    this.dropdowns = /* @__PURE__ */ new Map();
    this.submenuIds = {};
    this.isWindowListenerActive = false;
  }
  connected(dropdown) {
    if (!this.isWindowListenerActive) {
      this.addOverlayListeners();
    }
    this.dropdowns.set(dropdown.getId(), dropdown);
    if (dropdown.discoverAllSubmenus) {
      this.discoverSubmenus();
    }
  }
  disconnected(dropdown) {
    this.dropdowns.delete(dropdown.getId());
  }
  discoverSubmenus() {
    this.dropdowns.forEach((dropdown) => {
      dropdown.discoverSubmenu();
    });
  }
  present(dropdown) {
    if (!dropdown.isPresent() && dropdown.willPresent()) {
      this.submenuIds[dropdown.getId()] = dropdown.getAssignedSubmenuIds();
      dropdown.present();
    }
  }
  dismissChildren(uid) {
    const childIds = this.submenuIds[uid] || [];
    for (const id of childIds) {
      this.dismiss(this.dropdowns.get(id));
    }
  }
  dismiss(dropdown) {
    if (dropdown.isPresent() && dropdown.willDismiss()) {
      this.dismissChildren(dropdown.getId());
      dropdown.dismiss();
      delete this.submenuIds[dropdown.getId()];
    }
  }
  dismissAll(ignoreBehaviorForIds = [], ignoreRelatedDropdowns = false) {
    this.dropdowns.forEach((dropdown) => {
      const preventClosing = dropdown.closeBehavior === "inside" || dropdown.closeBehavior === false;
      const shouldIgnore = ignoreBehaviorForIds.includes(dropdown.getId());
      const path = this.buildComposedPath(dropdown.getId(), /* @__PURE__ */ new Set());
      if (ignoreBehaviorForIds.length > 0 && ignoreRelatedDropdowns) {
        let skipRelatedDropdown = false;
        ignoreBehaviorForIds.forEach((id) => {
          if (path.has(id)) {
            skipRelatedDropdown = true;
            return;
          }
        });
        if (!skipRelatedDropdown) {
          return;
        }
      }
      if (!shouldIgnore && preventClosing) {
        return;
      }
      this.dismiss(dropdown);
    });
  }
  dismissOthers(uid) {
    let path = this.buildComposedPath(uid, /* @__PURE__ */ new Set());
    path.add(uid);
    this.dropdowns.forEach((dropdown) => {
      if (dropdown.closeBehavior !== "inside" && dropdown.closeBehavior !== false && !path.has(dropdown.getId())) {
        this.dismiss(dropdown);
      }
    });
  }
  pathIncludesTrigger(eventTargets) {
    for (let eventTarget of eventTargets) {
      if (eventTarget instanceof HTMLElement) {
        if (eventTarget.hasAttribute("data-ix-dropdown-trigger")) {
          return eventTarget;
        }
      }
    }
    return;
  }
  pathIncludesDropdown(eventTargets) {
    return !!eventTargets.find((element) => element.tagName === "IX-DROPDOWN");
  }
  buildComposedPath(id, path) {
    if (this.submenuIds[id]) {
      path.add(id);
    }
    for (const ruleKey of Object.keys(this.submenuIds)) {
      if (this.submenuIds[ruleKey].includes(id)) {
        this.buildComposedPath(ruleKey, path).forEach((key) => path.add(key));
      }
    }
    return path;
  }
  addOverlayListeners() {
    this.isWindowListenerActive = true;
    window.addEventListener("click", (event) => {
      const hasTrigger = this.pathIncludesTrigger(event.composedPath());
      const hasDropdown = this.pathIncludesDropdown(event.composedPath());
      if (!hasTrigger && !hasDropdown) {
        this.dismissAll();
      }
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.dismissAll([...this.dropdowns.keys()]);
      }
    });
  }
}
const addDisposableEventListener = (element, eventType, callback) => {
  element.addEventListener(eventType, callback);
  return () => {
    element.removeEventListener(eventType, callback);
  };
};
const dropdownController = new DropdownController();
export {
  addDisposableEventListener as a,
  dropdownController as d,
  hasDropdownItemWrapperImplemented as h
};
