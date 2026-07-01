import "./global-C8IWpzMv.js";
import "./init-CVkHVy98.js";
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
const value = 68;
function getOptions() {
  return {
    series: [
      {
        id: "1",
        type: "gauge",
        axisLine: {
          show: true,
          lineStyle: {
            width: 15,
            color: [[1, getComputedCSSProperty("color-neutral-40")]]
          }
        },
        axisTick: {
          show: false
        },
        radius: "100%",
        startAngle: 200,
        endAngle: -20,
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          width: 35,
          itemStyle: {
            borderMiterLimit: 16,
            color: getComputedCSSProperty("color-success")
          }
        },
        pointer: {
          show: false
        },
        data: [
          {
            value,
            detail: {
              offsetCenter: [0, 0],
              overflow: "break",
              fontSize: "2rem",
              fontWeight: "normal",
              color: getComputedCSSProperty("color-soft-text"),
              width: 250,
              lineHeight: 35,
              formatter: "{value} / 100 \n completed"
            },
            pointer: {
              show: false
            }
          }
        ]
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
