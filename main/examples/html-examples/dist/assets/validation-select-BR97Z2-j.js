import "./global-J3MXEG4q.js";
import "./init-0SuWNs5o.js";
import "./index-CgUi6DzV-DmPVhzFD.js";
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
