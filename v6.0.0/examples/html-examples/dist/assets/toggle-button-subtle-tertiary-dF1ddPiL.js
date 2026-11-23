import "./global-CKozOrvB.js";
import { a as addIcons } from "./ix-icon.entry-DLz_2po8.js";
import { V as iconTextUnderline, W as iconTextItalic, X as iconTextBold } from "./index-MpHERktc.js";
import "./init-CtF-OQE4.js";
import "./index-CgUi6DzV-Bxg10rB6.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-lVo38FW7.js";
addIcons({
  iconTextBold,
  iconTextItalic,
  iconTextUnderline
});
document.addEventListener("DOMContentLoaded", function() {
  const boldButton = document.getElementById("boldButton");
  const underlineButton = document.getElementById("underlineButton");
  const loremIpsum = document.getElementById("loremIpsum");
  function updateStyle() {
    loremIpsum.style.fontWeight = boldButton.hasAttribute("pressed") ? "bold" : "normal";
    loremIpsum.style.textDecoration = underlineButton.hasAttribute(
      "pressed"
    ) ? "underline" : "none";
  }
  updateStyle();
  boldButton.addEventListener("click", function() {
    boldButton.toggleAttribute("pressed");
    updateStyle();
  });
  underlineButton.addEventListener("click", function() {
    underlineButton.toggleAttribute("pressed");
    updateStyle();
  });
});
