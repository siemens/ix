import "./global.2bfd6008.js";
import { r as registerEChartsThemes, c as convertThemeName, g as getComputedCSSProperty } from "./index.esm.40fdebf6.js";
import "./index.50971e87.js";
import { t as themeSwitcher } from "./theme-switcher-5fcf712d.42146bb7.js";
import "./init.aa12a02f.js";
import "./logical-filter-operator-d793d1c3.ce417adc.js";
import "./flip-tile-state-76dd224a.ffe63233.js";
import "./upload-file-state-de676cd5.96d9c6b3.js";
import "./modal-101eef04.04114a11.js";
import "./typed-event-ad6484c5.eb731a3b.js";
import "./animation-4a73b1c3.59b7eda0.js";
const echartsSpecial3d = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(
    document.querySelector("#main"),
    convertThemeName(theme)
  );
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
registerEChartsThemes(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
window.onresize = function() {
  myChart.resize();
};
