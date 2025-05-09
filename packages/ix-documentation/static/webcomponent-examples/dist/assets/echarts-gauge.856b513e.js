import "./global.7dd975c7.js";
import { g as getComputedCSSProperty, r as registerEChartsThemes, c as convertThemeName } from "./index.esm.733689a6.js";
import "./index.3225a722.js";
import { t as themeSwitcher } from "./theme-switcher-5fcf712d.42146bb7.js";
import "./init.918cefbc.js";
import "./logical-filter-operator-d793d1c3.ce417adc.js";
import "./flip-tile-state-76dd224a.ffe63233.js";
import "./upload-file-state-de676cd5.96d9c6b3.js";
import "./modal-4b3f8800.9a447ac6.js";
import "./typed-event-ad6484c5.eb731a3b.js";
import "./animation-4a73b1c3.59b7eda0.js";
const echartsGauge = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(
    document.querySelector("#main"),
    convertThemeName(theme),
    { renderer: "svg" }
  );
  myChart2.setOption(options2);
  return myChart2;
}
let dates = [];
for (let year = 2013; year < 2025; year++) {
  dates.push(year.toString());
}
let value = 45.3;
function getGaugeColor(value2) {
  if (value2 > 60)
    return getComputedCSSProperty("color-success");
  else if (value2 > 25)
    return getComputedCSSProperty("color-warning");
  else {
    return getComputedCSSProperty("color-alarm");
  }
}
const options = {
  series: [
    {
      id: "1",
      type: "gauge",
      axisLine: {
        show: true,
        lineStyle: {
          width: 18,
          color: [[1, getComputedCSSProperty("color-neutral-40")]]
        }
      },
      axisTick: {
        show: false
      },
      radius: "75%",
      center: ["50%", "60%"],
      startAngle: 180,
      endAngle: 0,
      splitNumber: 1,
      splitLine: {
        show: true
      },
      axisLabel: {
        show: true,
        distance: 30,
        fontSize: 16
      },
      progress: {
        show: true,
        overlap: false,
        width: 35,
        itemStyle: {
          borderMiterLimit: 16,
          color: getGaugeColor(value)
        }
      },
      pointer: {
        show: false
      },
      data: [
        {
          value,
          title: {
            show: false
          },
          detail: {
            show: true,
            offsetCenter: [0, -70],
            overflow: "break",
            fontSize: "1.5rem",
            width: 250,
            lineHeight: 35,
            color: getComputedCSSProperty("color-soft-text"),
            formatter: "{value}Mbps \nNetwork Speed"
          },
          pointer: {
            show: false
          }
        }
      ]
    },
    {
      id: "2",
      type: "gauge",
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 5,
          color: [
            [0.25, getComputedCSSProperty("color-alarm")],
            [0.6, getComputedCSSProperty("color-warning")],
            [1, getComputedCSSProperty("color-success")]
          ]
        }
      },
      radius: "80%",
      center: ["50%", "60%"],
      startAngle: 180,
      endAngle: 0
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
