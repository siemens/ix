import { N as NestedOverlayStack, p as pathIncludesTrigger, g as getParentId } from "./path-utils-CNLoALIl-DdIsPRiD.js";
function hasDropdownItemWrapperImplemented(item) {
  return item !== null && item.getDropdownItemElement !== void 0 && typeof item.getDropdownItemElement === "function";
}
class DropdownController {
  stack = new NestedOverlayStack({
    blocksOutsideDismiss: (dropdown) => dropdown.closeBehavior === "inside" || dropdown.closeBehavior === false
  }, (dropdown) => this.dismiss(dropdown));
  isWindowListenerActive = false;
  connected(dropdown) {
    if (!this.isWindowListenerActive) {
      this.addOverlayListeners();
    }
    this.stack.connect(dropdown);
    if (dropdown.discoverAllSubmenus) {
      this.discoverSubmenus();
    }
  }
  disconnected(dropdown) {
    this.stack.disconnect(dropdown);
  }
  removeFromSubmenuIds(id) {
    this.stack.removeFromHierarchy(id);
  }
  getDropdownById(id) {
    return this.stack.get(id);
  }
  discoverSubmenus() {
    this.stack.forEach((dropdown) => {
      dropdown.discoverSubmenu();
    });
  }
  present(dropdown) {
    if (!dropdown.isPresent() && dropdown.willPresent?.()) {
      this.stack.setChildIds(dropdown.getId(), dropdown.getAssignedSubmenuIds());
      dropdown.present();
    }
  }
  dismissChildren(uid) {
    this.stack.dismissChildren(uid);
  }
  dismiss(dropdown) {
    if (dropdown.isPresent() && dropdown.willDismiss?.()) {
      this.stack.dismissChildren(dropdown.getId());
      dropdown.dismiss();
      this.stack.deleteChildIdsEntry(dropdown.getId());
    }
  }
  dismissAll(ignoreBehaviorForIds = [], ignoreRelatedDropdowns = false) {
    this.stack.dismissAll({
      ignorePolicyForIds: ignoreBehaviorForIds,
      ignoreRelatedInHierarchy: ignoreRelatedDropdowns
    });
  }
  dismissOthers(uid) {
    this.stack.dismissOthers(uid);
  }
  pathIncludesTrigger(eventTargets) {
    return pathIncludesTrigger(eventTargets, "data-ix-dropdown-trigger");
  }
  getParentDropdownId(dropdownId) {
    return getParentId(dropdownId, this.stack.getChildIdsByParent());
  }
  pathIncludesDropdown(eventTargets) {
    return !!eventTargets.find((element) => element.tagName === "IX-DROPDOWN");
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
        this.dismissAll(this.stack.keys());
      }
    });
  }
}
const dropdownController = new DropdownController();
export {
  dropdownController as d,
  hasDropdownItemWrapperImplemented as h
};
