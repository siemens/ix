import "./global-CtBDOAVb.js";
import { a as addIcons } from "./ix-icon.entry-d_uyGuVH.js";
import { c as iconInfo } from "./index-BWsIQ1EH.js";
import "./init-BauzXIH0.js";
import { r as registerTheme, a as resolveEChartThemeName } from "./index-BXDOBI09.js";
import "./index-Bxr9lWwd.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-C4Qfy2jB-BDz70pVv.js";
import "./index-Dn2eQInl-mXhHymhu.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
addIcons({
  iconInfo
});
await globalThis.ixInitPromise;
function initChart(options2) {
  const theme = resolveEChartThemeName();
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
var myChart = initChart(options);
const disposer = themeSwitcher.themeChanged.on(() => {
  myChart.dispose();
  myChart = initChart(options);
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
window.addEventListener("unload", () => {
  disposer.dispose();
});
