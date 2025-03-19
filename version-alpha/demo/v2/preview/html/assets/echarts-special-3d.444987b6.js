import "./global.aa474cf6.js";
import { r as registerTheme, g as getComputedCSSProperty } from "./index.660df32e.js";
import "./index.bf224a66.js";
import { t as themeSwitcher } from "./theme-switcher-CA3k28fo.db6435f7.js";
import "./init.8fde940e.js";
import "./logical-filter-operator-BH3f5fa3.777c0249.js";
import "./flip-tile-state-BQ6999e5.70579bb3.js";
import "./upload-file-state-BGzrnl_l.166f4809.js";
import "./modal-DUew4SCE.40a294ca.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
import "./animation-Dp15M30K.7b5f0f8a.js";
const echartsSpecial3d = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
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
const options = {
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
registerTheme(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
window.onresize = function() {
  myChart.resize();
};
