import { a as applyPolyfills, d as defineCustomElements } from "./index.b1292ea0.js";
(async () => {
  await applyPolyfills();
  await defineCustomElements();
  console.log("Hello World!");
  const button = document.getElementById("test-button");
  button.addEventListener("click", () => {
    alert("Alert works!");
  });
})();
