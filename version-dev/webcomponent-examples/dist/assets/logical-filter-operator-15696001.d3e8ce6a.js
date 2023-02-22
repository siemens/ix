class InputState {
  constructor(token, category) {
    this.token = token;
    this.category = category;
  }
  hasCategory() {
    return this.category !== void 0;
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
