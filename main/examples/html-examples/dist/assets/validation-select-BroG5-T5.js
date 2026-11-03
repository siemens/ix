import "./global-CFt3Lh3W.js";
import "./init-0MVmv6RF.js";
import "./index-CgUi6DzV-D9U7VN9L.js";
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
