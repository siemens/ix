import "./global.78f61b49.js";
import { a as addIcons } from "./icon-1f00a566.c138dee3.js";
import "./init.d5e03d48.js";
import { d as iconInfo } from "./index.d8c24d78.js";
import { r as registerTheme } from "./index.660df32e.js";
import "./index.1a6c2bf1.js";
import { t as themeSwitcher } from "./theme-switcher-CA3k28fo.db6435f7.js";
import "./logical-filter-operator-BH3f5fa3.777c0249.js";
import "./flip-tile-state-BQ6999e5.70579bb3.js";
import "./upload-file-state-BGzrnl_l.166f4809.js";
import "./modal-DUew4SCE.40a294ca.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
import "./animation-Dp15M30K.7b5f0f8a.js";
const echartsEmptyState = "";
addIcons({
  iconInfo
});
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
function toggleOverlay() {
  const overlay2 = document.getElementById("empty-state-container");
  if (overlay2.style.display === "block") {
    overlay2.style.display = "none";
  } else {
    overlay2.style.display = "block";
  }
}
async function loadData(chart) {
  toggleOverlay();
  chart.showLoading({
    text: "Loading...",
    textStyle: {
      fontSize: 30
    }
  });
  await new Promise((resolve) => setTimeout(resolve, 2e3));
  chart.hideLoading();
  toggleOverlay();
}
const data = {
  weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  value: []
};
const options = {
  xAxis: {
    type: "category",
    data: data.weekdays
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: data.value,
      type: "line"
    }
  ]
};
const overlay = document.getElementById("empty-state-container");
if (data.value.length === 0) {
  overlay.style.display = "block";
} else {
  overlay.style.display = "none";
}
registerTheme(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
(async function() {
  await window.customElements.whenDefined("ix-empty-state");
  const emptyState = document.querySelector("ix-empty-state");
  emptyState.addEventListener(
    "actionClick",
    (event) => loadData(myChart)
  );
})();
window.onresize = function() {
  myChart.resize();
};
