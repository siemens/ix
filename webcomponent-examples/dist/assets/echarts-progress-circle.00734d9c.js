import "./global.2bfd6008.js";
import { g as getComputedCSSProperty, r as registerEChartsThemes, c as convertThemeName } from "./index.esm.40fdebf6.js";
import "./index.50971e87.js";
import { t as themeSwitcher } from "./theme-switcher-5fcf712d.42146bb7.js";
import "./init.aa12a02f.js";
import "./logical-filter-operator-d793d1c3.ce417adc.js";
import "./flip-tile-state-76dd224a.ffe63233.js";
import "./upload-file-state-de676cd5.96d9c6b3.js";
import "./modal-101eef04.04114a11.js";
import "./typed-event-ad6484c5.eb731a3b.js";
import "./animation-4a73b1c3.59b7eda0.js";
const echartsProgressCircle = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(
    document.querySelector("#main"),
    convertThemeName(theme)
  );
  myChart2.setOption(options2);
  return myChart2;
}
const value = 68;
const options = {
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
      startAngle: 90,
      endAngle: -270,
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
            fontSize: "2rem",
            fontWeight: "normal",
            color: getComputedCSSProperty("color-soft-text"),
            rich: {
              valueStyle: {
                fontSize: "2rem",
                color: getComputedCSSProperty("color-soft-text"),
                fontWeight: "bold"
              },
              textStyle: {
                fontSize: "1.5rem",
                color: getComputedCSSProperty("color-soft-text")
              }
            },
            formatter: `{valueStyle|{value}}/100
{textStyle|completed}`
          },
          pointer: {
            show: false
          }
        }
      ]
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
