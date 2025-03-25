import "./global.23f98c2e.js";
import { g as getComputedCSSProperty, r as registerTheme } from "./index.660df32e.js";
import "./index.00c3d634.js";
import { t as themeSwitcher } from "./theme-switcher-CA3k28fo.db6435f7.js";
import "./init.c292510a.js";
import "./logical-filter-operator-BH3f5fa3.777c0249.js";
import "./flip-tile-state-BQ6999e5.70579bb3.js";
import "./upload-file-state-BGzrnl_l.166f4809.js";
import "./modal-DUew4SCE.40a294ca.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
import "./animation-Dp15M30K.7b5f0f8a.js";
const echartsGauge = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme, {
    renderer: "svg"
  });
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
registerTheme(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
window.onresize = function() {
  myChart.resize();
};
