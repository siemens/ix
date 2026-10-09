function buildComposedPath(id, childIdsByParent, path = /* @__PURE__ */ new Set()) {
  if (childIdsByParent[id]) {
    path.add(id);
  }
  for (const parentId of Object.keys(childIdsByParent)) {
    if (childIdsByParent[parentId].includes(id)) {
      buildComposedPath(parentId, childIdsByParent, path).forEach((key) => path.add(key));
    }
  }
  return path;
}
function buildPathIncluding(id, childIdsByParent) {
  const path = buildComposedPath(id, childIdsByParent, /* @__PURE__ */ new Set());
  path.add(id);
  return path;
}
function removeIdFromHierarchy(id, childIdsByParent, registeredIds) {
  for (const registeredId of registeredIds) {
    const childIds = childIdsByParent[registeredId];
    if (childIds) {
      const index = childIds.indexOf(id);
      if (index > -1) {
        childIds.splice(index, 1);
      }
    }
  }
  delete childIdsByParent[id];
}
function getParentId(childId, childIdsByParent) {
  for (const parentId of Object.keys(childIdsByParent)) {
    if (childIdsByParent[parentId].includes(childId)) {
      return parentId;
    }
  }
  return void 0;
}
class NestedOverlayRegistry {
  policy;
  dismissInstance;
  instances = /* @__PURE__ */ new Map();
  childIdsByParent = {};
  constructor(policy, dismissInstance) {
    this.policy = policy;
    this.dismissInstance = dismissInstance;
  }
  connect(instance) {
    this.instances.set(instance.getId(), instance);
  }
  disconnect(instance) {
    const id = instance.getId();
    this.removeFromHierarchy(id);
    this.instances.delete(id);
  }
  get(id) {
    return this.instances.get(id);
  }
  keys() {
    return [...this.instances.keys()];
  }
  forEach(callback) {
    this.instances.forEach(callback);
  }
  values() {
    return this.instances.values();
  }
  setChildIds(parentId, childIds) {
    const pendingIds = [...childIds];
    const visitedIds = /* @__PURE__ */ new Set();
    for (const childId of pendingIds) {
      if (childId === parentId) {
        throw new Error(`Cannot assign children to overlay "${parentId}": cyclic hierarchy.`);
      }
      if (visitedIds.has(childId)) {
        continue;
      }
      visitedIds.add(childId);
      pendingIds.push(...this.getChildIds(childId));
    }
    this.childIdsByParent[parentId] = [...childIds];
  }
  deleteChildIdsEntry(parentId) {
    delete this.childIdsByParent[parentId];
  }
  getChildIds(parentId) {
    return [...this.childIdsByParent[parentId] || []];
  }
  getParentId(childId) {
    return getParentId(childId, this.childIdsByParent);
  }
  removeFromHierarchy(id) {
    removeIdFromHierarchy(id, this.childIdsByParent, this.instances.keys());
  }
  buildComposedPath(id, path = /* @__PURE__ */ new Set()) {
    return buildComposedPath(id, this.childIdsByParent, path);
  }
  buildPathIncluding(id) {
    return buildPathIncluding(id, this.childIdsByParent);
  }
  dismissChildren(parentId) {
    for (const childId of this.getChildIds(parentId)) {
      const child = this.instances.get(childId);
      if (child) {
        this.dismissInstance(child);
      }
    }
  }
  dismissAll(options = {}) {
    const { ignorePolicyForIds = [], ignoreRelatedInHierarchy = false } = options;
    this.forEach((instance) => {
      const id = instance.getId();
      const shouldIgnorePolicy = ignorePolicyForIds.includes(id);
      const path = buildComposedPath(id, this.childIdsByParent, /* @__PURE__ */ new Set());
      if (ignorePolicyForIds.length > 0 && ignoreRelatedInHierarchy) {
        let skipRelated = false;
        for (const ignoreId of ignorePolicyForIds) {
          if (path.has(ignoreId)) {
            skipRelated = true;
            break;
          }
        }
        if (!skipRelated) {
          return;
        }
      }
      if (!shouldIgnorePolicy && this.policy.blocksOutsideDismiss(instance)) {
        return;
      }
      this.dismissInstance(instance);
    });
  }
  dismissOthers(activeId, relatedIds = []) {
    const path = this.buildPathIncluding(activeId);
    relatedIds.forEach((id) => path.add(id));
    this.forEach((instance) => {
      if (!this.policy.blocksOutsideDismiss(instance) && !path.has(instance.getId())) {
        this.dismissInstance(instance);
      }
    });
  }
}
const getOverlayKey = (kind, id) => `${kind}:${id}`;
const getComposedDistance = (host, target) => {
  let current = target;
  let distance = 0;
  while (current) {
    if (current === host) {
      return distance;
    }
    if (current instanceof Element && current.assignedSlot) {
      current = current.assignedSlot;
      distance++;
      continue;
    }
    if (current.parentNode) {
      current = current.parentNode;
      distance++;
      continue;
    }
    const root = current.getRootNode();
    current = root instanceof ShadowRoot ? root.host : null;
    distance++;
  }
  return void 0;
};
const composedContains = (host, target) => getComposedDistance(host, target) !== void 0;
class OverlayCoordinator {
  entries = /* @__PURE__ */ new Map();
  presentationOrder = [];
  isListening = false;
  onWindowClick = (event) => {
    this.dismissOutside(event.composedPath());
  };
  onWindowKeydown = (event) => {
    if (event.key !== "Escape") {
      return;
    }
    this.getTopmost()?.dismiss("escape");
  };
  connect(entry) {
    this.entries.set(entry.key, entry);
    this.addListeners();
  }
  disconnect(key) {
    this.dismissed(key);
    this.entries.delete(key);
    if (this.entries.size === 0) {
      this.removeListeners();
    }
  }
  dispose() {
    this.entries.clear();
    this.presentationOrder.length = 0;
    this.removeListeners();
  }
  presented(key) {
    this.dismissed(key);
    this.presentationOrder.push(key);
  }
  dismissed(key) {
    const index = this.presentationOrder.indexOf(key);
    if (index !== -1) {
      this.presentationOrder.splice(index, 1);
    }
  }
  isTopmostHost(host) {
    return this.getTopmost()?.hostElement === host;
  }
  isTopmostInHierarchy(key, kind) {
    const topmost = this.getTopmost();
    return topmost?.kind === kind && (topmost.key === key || this.isDescendantOf(topmost.key, key));
  }
  shouldDeferFocusTrap(host, activeElement) {
    const topmost = this.getTopmost();
    return topmost !== void 0 && topmost.hostElement !== host && activeElement !== null && composedContains(topmost.hostElement, activeElement);
  }
  getFocusTrapExcludedHosts(host, activeElement) {
    const topmost = this.getTopmost();
    if (topmost === void 0 || topmost.hostElement === host || activeElement === null || composedContains(topmost.hostElement, activeElement)) {
      return [];
    }
    const excludedHosts = [];
    const visitedKeys = /* @__PURE__ */ new Set();
    let current = topmost;
    while (current && current.hostElement !== host && !visitedKeys.has(current.key)) {
      visitedKeys.add(current.key);
      excludedHosts.push(current.hostElement);
      const parentKey = this.getParentKey(current.key);
      current = parentKey ? this.entries.get(parentKey) : void 0;
    }
    return current?.hostElement === host ? excludedHosts : [];
  }
  getParentFocusExitTarget(childKey, current, backwards) {
    const parentKey = this.getParentKey(childKey);
    const child = this.entries.get(childKey);
    const parent = parentKey ? this.entries.get(parentKey) : void 0;
    if (!parent || !child) {
      return void 0;
    }
    const excludedHosts = this.getFocusTrapExcludedHosts(parent.hostElement, current);
    return parent.getAdjacentFocusElement?.(current, backwards, excludedHosts.length > 0 ? excludedHosts : [child.hostElement]);
  }
  getAncestorKeys(childKey) {
    const ancestors = /* @__PURE__ */ new Set();
    let parentKey = this.getParentKey(childKey);
    while (parentKey && !ancestors.has(parentKey)) {
      ancestors.add(parentKey);
      parentKey = this.getParentKey(parentKey);
    }
    return ancestors;
  }
  hasAncestorOfKind(childKey, kind) {
    for (const ancestorKey of this.getAncestorKeys(childKey)) {
      if (this.entries.get(ancestorKey)?.kind === kind) {
        return true;
      }
    }
    return false;
  }
  pathIncludesChildTrigger(parentKey, path) {
    for (const entry of this.entries.values()) {
      if (entry.key === parentKey || this.getParentKey(entry.key) !== parentKey) {
        continue;
      }
      const trigger = entry.getTriggerElement();
      if (trigger && this.pathIncludesNode(path, trigger)) {
        return true;
      }
    }
    return false;
  }
  pathIncludesDescendant(parentKey, path) {
    for (const entry of this.entries.values()) {
      if (entry.key !== parentKey && entry.isPresent() && this.isDescendantOf(entry.key, parentKey) && this.pathIncludesEntry(path, entry)) {
        return true;
      }
    }
    return false;
  }
  dismissCrossTypeChildren(parentKey, parentKind, reason = "parent-close") {
    const children = this.getPresentedEntries().filter((entry) => entry.kind !== parentKind && this.getParentKey(entry.key) === parentKey);
    children.reverse();
    children.forEach((entry) => entry.dismiss(reason));
  }
  getParentKey(childKey) {
    const child = this.entries.get(childKey);
    const trigger = child?.getTriggerElement();
    if (!child || !trigger) {
      return void 0;
    }
    let parentKey;
    let parentDistance = Number.POSITIVE_INFINITY;
    for (const candidate of this.getPresentedEntries()) {
      if (candidate.key === childKey || !candidate.isPresent()) {
        continue;
      }
      const distance = getComposedDistance(candidate.hostElement, trigger);
      if (distance !== void 0 && distance <= parentDistance) {
        parentKey = candidate.key;
        parentDistance = distance;
      }
    }
    return parentKey;
  }
  isDescendantOf(childKey, parentKey) {
    const visitedKeys = /* @__PURE__ */ new Set();
    let current = this.getParentKey(childKey);
    while (current && !visitedKeys.has(current)) {
      visitedKeys.add(current);
      if (current === parentKey) {
        return true;
      }
      current = this.getParentKey(current);
    }
    return false;
  }
  pathIncludesNode(path, node) {
    return path.some((target) => target instanceof Node && composedContains(node, target));
  }
  pathIncludesEntry(path, entry) {
    const trigger = entry.getTriggerElement();
    return this.pathIncludesNode(path, entry.hostElement) || trigger !== void 0 && this.pathIncludesNode(path, trigger);
  }
  pathIncludesHierarchy(rootKey, path) {
    const root = this.entries.get(rootKey);
    if (root && this.pathIncludesEntry(path, root)) {
      return true;
    }
    return this.pathIncludesDescendant(rootKey, path);
  }
  getPresentedEntries() {
    const entries = [];
    const seen = /* @__PURE__ */ new Set();
    for (const key of this.presentationOrder) {
      const entry = this.entries.get(key);
      if (entry) {
        entries.push(entry);
        seen.add(key);
      }
    }
    for (const entry of this.entries.values()) {
      if (!seen.has(entry.key) && entry.isPresent()) {
        entries.push(entry);
      }
    }
    return entries;
  }
  getTopmost() {
    const entries = this.getPresentedEntries();
    for (let index = entries.length - 1; index >= 0; index--) {
      if (entries[index].isPresent()) {
        return entries[index];
      }
    }
    return void 0;
  }
  dismissOutside(path) {
    const entries = this.getPresentedEntries().reverse();
    for (const entry of entries) {
      if (entry.isPresent() && entry.dismissOnOutside() && !this.pathIncludesHierarchy(entry.key, path)) {
        entry.dismiss("outside");
      }
    }
  }
  addListeners() {
    if (this.isListening) {
      return;
    }
    this.isListening = true;
    window.addEventListener("click", this.onWindowClick);
    window.addEventListener("keydown", this.onWindowKeydown);
  }
  removeListeners() {
    if (!this.isListening) {
      return;
    }
    this.isListening = false;
    window.removeEventListener("click", this.onWindowClick);
    window.removeEventListener("keydown", this.onWindowKeydown);
  }
}
const overlayCoordinator = new OverlayCoordinator();
function pathIncludesTrigger(eventTargets, triggerAttribute) {
  for (const eventTarget of eventTargets) {
    if (eventTarget instanceof HTMLElement && eventTarget.hasAttribute(triggerAttribute)) {
      return eventTarget;
    }
  }
  return void 0;
}
export {
  NestedOverlayRegistry as N,
  OverlayCoordinator as O,
  getOverlayKey as g,
  overlayCoordinator as o,
  pathIncludesTrigger as p
};
