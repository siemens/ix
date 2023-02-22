const convertToRemString = (value) => {
  const valueRem = value / 16;
  return `${valueRem}rem`;
};
const convertToAbbreviationString = (num) => {
  if (isNaN(num) || num === null || num === void 0) {
    return "";
  }
  let unit = "";
  const units = [
    { unit: "q", value: Math.pow(10, 15) },
    { unit: "t", value: Math.pow(10, 12) },
    { unit: "B", value: Math.pow(10, 9) },
    { unit: "M", value: Math.pow(10, 6) },
    { unit: "K", value: Math.pow(10, 3) }
  ];
  units.some((pow) => {
    let formattedNum = Math.abs(num);
    if (formattedNum >= pow.value) {
      formattedNum /= pow.value;
      num = Math.round(formattedNum * 10) / 10;
      unit = pow.unit;
      return true;
    }
    return false;
  });
  return num + unit;
};
export {
  convertToRemString as a,
  convertToAbbreviationString as c
};
