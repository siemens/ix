function generateUUID() {
  const randomValues = globalThis.crypto.getRandomValues(new Uint32Array(4));
  const randomString = Array.from(randomValues, (value) => value.toString(36)).join("");
  const timestampString = Date.now().toString(36);
  return randomString + timestampString;
}
const createSequentialId = (prefix, sequenceId) => {
  return `${prefix}-${sequenceId++}`;
};
export {
  createSequentialId as c,
  generateUUID as g
};
