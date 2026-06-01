import "./global-Ba1Wm6ph.js";
import "./init-Ds7NGRa2.js";
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
function gridConfig() {
  return {
    type: "value",
    axisLine: {
      lineStyle: {
        color: getComputedCSSProperty("chart-axes")
      }
    },
    splitLine: {
      lineStyle: {
        color: getComputedCSSProperty("chart-grid-lines")
      }
    },
    axisLabel: {
      color: getComputedCSSProperty("color-std-text")
    }
  };
}
function getOptions() {
  return {
    tooltip: {},
    visualMap: {
      show: false,
      dimension: 2,
      min: -1,
      max: 1
    },
    xAxis3D: gridConfig(),
    yAxis3D: gridConfig(),
    zAxis3D: gridConfig(),
    grid3D: {
      viewControl: {
        projection: "orthographic"
      }
    },
    series: [
      {
        type: "surface",
        equation: {
          x: {
            step: 0.05
          },
          y: {
            step: 0.05
          },
          z: function(x, y) {
            if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
              return "-";
            }
            return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
          }
        }
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
