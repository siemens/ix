const convertToRemString = (value) => {
  const valueRem = value / 16;
  return `${valueRem}rem`;
};
export {
  convertToRemString as c
};
