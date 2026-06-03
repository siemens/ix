import "./global-DUJ9DtiD.js";
import "./init-DphxZyE4.js";
import { r as registerTheme, a as resolveEChartThemeName, g as getComputedCSSProperty } from "./index-CIm9Z0Vg.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
await globalThis.ixInitPromise;
function initChart(options) {
  const theme = resolveEChartThemeName();
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options);
  return myChart2;
}
let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1e3;
let date = [];
let data = [Math.random() * 300];
for (let i = 1; i < 2e4; i++) {
  var now = new Date(base += oneDay);
  date.push(
    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
  );
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}
function getOptions() {
  return {
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none"
        }
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: date
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"]
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 10
      },
      {
        start: 0,
        end: 10
      }
    ],
    series: [
      {
        name: "Synthetic data",
        type: "line",
        symbol: "none",
        sampling: "lttb",
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: getComputedCSSProperty("color-primary")
            },
            {
              offset: 1,
              color: "transparent"
            }
          ])
        },
        data
      }
    ]
  };
}
registerTheme(echarts);
var myChart = initChart(getOptions());
const disposer = themeSwitcher.themeChanged.on(() => {
  myChart.dispose();
  myChart = initChart(getOptions());
});
window.onresize = function() {
  myChart.resize();
};
window.addEventListener("unload", () => {
  disposer.dispose();
});
