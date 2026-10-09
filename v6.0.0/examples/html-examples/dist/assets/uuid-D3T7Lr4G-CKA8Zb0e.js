const createSequentialId = (prefix, sequenceId) => {
  return `${prefix}-${sequenceId++}`;
};
export {
  createSequentialId as c
};
