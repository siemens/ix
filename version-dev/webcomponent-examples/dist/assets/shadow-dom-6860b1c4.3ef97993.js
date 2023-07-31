function getSlottedElements(slot) {
  return slot.assignedElements({ flatten: true });
}
function hasSlottedElements(slot) {
  return slot.assignedElements({ flatten: true }).length !== 0;
}
export {
  getSlottedElements as g,
  hasSlottedElements as h
};
