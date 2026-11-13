import "./global-ZSnfBtFG.js";
import "./init-DwRGT7Uh.js";
import "./index-CgUi6DzV-Dp-uZHvv.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});
