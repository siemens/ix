import { o as overlayCoordinator, N as NestedOverlayRegistry, O as OverlayCoordinator, g as getOverlayKey, p as pathIncludesTrigger } from "./path-utils-DfQsu85Q-BnoIgQFc.js";
function hasDropdownItemWrapperImplemented(item) {
  return item !== null && item.getDropdownItemElement !== void 0 && typeof item.getDropdownItemElement === "function";
}
class DropdownController {
  overlayCoordinator;
  registry = new NestedOverlayRegistry({
    blocksOutsideDismiss: (dropdown) => dropdown.closeBehavior === "inside" || dropdown.closeBehavior === false
  }, (dropdown) => this.dismiss(dropdown));
  constructor(overlayCoordinator2 = new OverlayCoordinator()) {
    this.overlayCoordinator = overlayCoordinator2;
  }
  connected(dropdown) {
    this.registry.connect(dropdown);
    this.overlayCoordinator.connect({
      key: this.getOverlayKey(dropdown),
      kind: "dropdown",
      hostElement: dropdown.hostElement,
      getTriggerElement: () => dropdown.getTriggerElement(),
      isPresent: () => dropdown.isPresent(),
      dismissOnOutside: () => dropdown.closeBehavior === true || dropdown.closeBehavior === "outside" || dropdown.closeBehavior === "both",
      dismiss: (reason) => reason === "escape" ? this.dismissOnEscape(dropdown) : this.dismiss(dropdown)
    });
    if (dropdown.discoverAllSubmenus) {
      this.discoverSubmenus();
    }
  }
  disconnected(dropdown) {
    this.registry.disconnect(dropdown);
    this.overlayCoordinator.disconnect(this.getOverlayKey(dropdown));
  }
  removeFromSubmenuIds(id) {
    this.registry.removeFromHierarchy(id);
  }
  getDropdownById(id) {
    return this.registry.get(id);
  }
  discoverSubmenus() {
    this.registry.forEach((dropdown) => {
      dropdown.discoverSubmenu();
    });
  }
  present(dropdown) {
    if (!dropdown.isPresent() && dropdown.willPresent?.()) {
      this.registry.setChildIds(dropdown.getId(), dropdown.getAssignedSubmenuIds());
      dropdown.present();
    }
  }
  dismissChildren(uid) {
    this.registry.dismissChildren(uid);
  }
  suppressTriggerFocusRestore(dropdown) {
    if (!dropdown.isPresent()) {
      return;
    }
    dropdown.suppressTriggerFocusRestore();
    for (const childId of this.registry.getChildIds(dropdown.getId())) {
      const child = this.registry.get(childId);
      if (child) {
        this.suppressTriggerFocusRestore(child);
      }
    }
  }
  dismiss(dropdown) {
    if (dropdown.isPresent() && dropdown.willDismiss?.()) {
      this.overlayCoordinator.dismissCrossTypeChildren(this.getOverlayKey(dropdown), "dropdown");
      this.registry.dismissChildren(dropdown.getId());
      dropdown.dismiss();
      this.registry.deleteChildIdsEntry(dropdown.getId());
    }
  }
  dismissOnEscape(dropdown) {
    this.dismiss(this.getRootDropdown(dropdown));
  }
  dismissAll(ignoreBehaviorForIds = [], ignoreRelatedDropdowns = false) {
    this.registry.dismissAll({
      ignorePolicyForIds: ignoreBehaviorForIds,
      ignoreRelatedInHierarchy: ignoreRelatedDropdowns
    });
  }
  dismissOthers(uid) {
    const activeKey = getOverlayKey("dropdown", uid);
    const ancestorKeys = this.overlayCoordinator.getAncestorKeys(activeKey);
    const ancestorIds = this.registry.keys().filter((id) => ancestorKeys.has(getOverlayKey("dropdown", id)));
    this.registry.dismissOthers(uid, ancestorIds);
  }
  pathIncludesTrigger(eventTargets) {
    return pathIncludesTrigger(eventTargets, "data-ix-dropdown-trigger");
  }
  getParentDropdownId(dropdownId) {
    return this.registry.getParentId(dropdownId);
  }
  hasPopoverAncestor(dropdown) {
    return this.overlayCoordinator.hasAncestorOfKind(this.getOverlayKey(dropdown), "popover");
  }
  shouldHandleEscape(dropdown) {
    return this.overlayCoordinator.isTopmostInHierarchy(this.getOverlayKey(dropdown), "dropdown");
  }
  pathIncludesChildOverlay(dropdown, eventTargets) {
    const key = this.getOverlayKey(dropdown);
    return this.overlayCoordinator.pathIncludesChildTrigger(key, eventTargets) || this.overlayCoordinator.pathIncludesDescendant(key, eventTargets);
  }
  getParentFocusExitTarget(dropdown, current, backwards) {
    return this.overlayCoordinator.getParentFocusExitTarget(this.getOverlayKey(dropdown), current, backwards);
  }
  didPresent(dropdown) {
    this.overlayCoordinator.presented(this.getOverlayKey(dropdown));
  }
  didDismiss(dropdown) {
    this.overlayCoordinator.dismissed(this.getOverlayKey(dropdown));
  }
  getOverlayKey(dropdown) {
    return getOverlayKey("dropdown", dropdown.getId());
  }
  getRootDropdown(dropdown) {
    let root = dropdown;
    let parentId = this.getParentDropdownId(root.getId());
    while (parentId) {
      const parent = this.registry.get(parentId);
      if (!parent) {
        break;
      }
      root = parent;
      parentId = this.getParentDropdownId(root.getId());
    }
    return root;
  }
}
const dropdownController = new DropdownController(overlayCoordinator);
export {
  dropdownController as d,
  hasDropdownItemWrapperImplemented as h
};
