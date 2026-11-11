import "./global-DVoc4iFv.js";
import "./init-DxSmhtUO.js";
import "./index-CgUi6DzV-DSXWMbmA.js";
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
