import "./global-C1RmXIDt.js";
import "./init-BEYt0nO1.js";
import "./index-CgUi6DzV-CWpkMnfL.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-lVo38FW7.js";
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});
