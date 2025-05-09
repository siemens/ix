function hasDropdownItemWrapperImplemented(item) {
  return item !== null && item.getDropdownItemElement !== void 0 && typeof item.getDropdownItemElement === "function";
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
    const id = dropdown.getId();
    this.removeFromSubmenuIds(id);
    this.dropdowns.delete(id);
  }
  removeFromSubmenuIds(id) {
    this.dropdowns.forEach((dropdown) => {
      const submenuIds = this.submenuIds[dropdown.getId()];
      if (submenuIds) {
        const index = submenuIds.indexOf(id);
        if (index > -1) {
          submenuIds.splice(index, 1);
        }
      }
    });
    delete this.submenuIds[id];
  }
  getDropdownById(id) {
    return this.dropdowns.get(id);
  }
  discoverSubmenus() {
    this.dropdowns.forEach((dropdown) => {
      dropdown.discoverSubmenu();
    });
  }
  present(dropdown) {
    var _a;
    if (!dropdown.isPresent() && ((_a = dropdown.willPresent) === null || _a === void 0 ? void 0 : _a.call(dropdown))) {
      this.submenuIds[dropdown.getId()] = dropdown.getAssignedSubmenuIds();
      dropdown.present();
    }
  }
  dismissChildren(uid) {
    const childIds = this.submenuIds[uid] || [];
    for (const id of childIds) {
      const dropdown = this.dropdowns.get(id);
      if (dropdown) {
        this.dismiss(dropdown);
      }
    }
  }
  dismiss(dropdown) {
    var _a;
    if (dropdown.isPresent() && ((_a = dropdown.willDismiss) === null || _a === void 0 ? void 0 : _a.call(dropdown))) {
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
const dropdownController = new DropdownController();
export {
  dropdownController as d,
  hasDropdownItemWrapperImplemented as h
};
