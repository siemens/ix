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
class NestedOverlayStack {
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
    this.childIdsByParent[parentId] = childIds;
  }
  deleteChildIdsEntry(parentId) {
    delete this.childIdsByParent[parentId];
  }
  getChildIds(parentId) {
    return this.childIdsByParent[parentId] || [];
  }
  getChildIdsByParent() {
    return this.childIdsByParent;
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
  dismissOthers(activeId) {
    const path = this.buildPathIncluding(activeId);
    this.forEach((instance) => {
      if (!this.policy.blocksOutsideDismiss(instance) && !path.has(instance.getId())) {
        this.dismissInstance(instance);
      }
    });
  }
}
function pathIncludesTrigger(eventTargets, triggerAttribute) {
  for (const eventTarget of eventTargets) {
    if (eventTarget instanceof HTMLElement && eventTarget.hasAttribute(triggerAttribute)) {
      return eventTarget;
    }
  }
  return void 0;
}
export {
  NestedOverlayStack as N,
  getParentId as g,
  pathIncludesTrigger as p
};
