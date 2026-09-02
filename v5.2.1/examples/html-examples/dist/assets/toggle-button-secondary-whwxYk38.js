import "./global-Do6maBom.js";
import { a as addIcons } from "./ix-icon.entry-BdQBfvO9.js";
import { R as iconTextUnderline, S as iconTextItalic, T as iconTextBold } from "./index-lQqpelqO.js";
import "./init-BB6hGSJy.js";
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
