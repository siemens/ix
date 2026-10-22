const isHttpUrl = (link) => {
  if (!link) {
    return false;
  }
  let url;
  try {
    url = new URL(link);
  } catch (e) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};
const isSvgDataUrl = (url) => {
  if (!url) {
    return false;
  }
  if (typeof url !== "string") {
    return false;
  }
  return url.startsWith("data:image/svg+xml");
};
function isSameStringOrUnset(a, b) {
  return (a || void 0) === (b || void 0);
}
export {
  isSvgDataUrl as a,
  isSameStringOrUnset as b,
  isHttpUrl as i
};
