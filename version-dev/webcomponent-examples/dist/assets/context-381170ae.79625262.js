function isBasicNavigationLayout(element) {
  return element && element.tagName === "IX-BASIC-NAVIGATION";
}
const hostContext = (selector, element) => {
  return element.closest(selector);
};
const menuContext = (element) => {
  const menuElement = element.closest("ix-menu");
  return menuElement;
};
export {
  hostContext as h,
  isBasicNavigationLayout as i,
  menuContext as m
};
