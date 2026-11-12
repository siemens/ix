import "./global-Xvppo2lv.js";
import { a as addIcons } from "./ix-icon.entry-CGiLGChb.js";
import { V as iconTextUnderline, W as iconTextItalic, X as iconTextBold } from "./index-MpHERktc.js";
import "./init-Ci5NqT6B.js";
import "./index-CgUi6DzV-vubC4vyH.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
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
