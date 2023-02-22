function getAlignment(placement) {
  if (placement.includes("-end")) {
    return "end";
  } else if (placement.includes("-start")) {
    return "start";
  }
  return void 0;
}
export {
  getAlignment as g
};
