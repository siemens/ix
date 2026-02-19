class InputState {
  hasCategory() {
    return this.category !== void 0;
  }
  constructor(token, category) {
    this.token = token;
    this.category = category;
  }
}
var LogicalFilterOperator;
(function(LogicalFilterOperator2) {
  LogicalFilterOperator2["EQUAL"] = "Equal";
  LogicalFilterOperator2["NOT_EQUAL"] = "Not equal";
})(LogicalFilterOperator || (LogicalFilterOperator = {}));
export {
  InputState as I,
  LogicalFilterOperator as L
};
