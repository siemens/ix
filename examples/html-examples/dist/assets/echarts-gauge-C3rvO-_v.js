import "./global-wi9VneMU.js";
import "./init-Bt8gb6Dd.js";
import { r as registerTheme, g as getComputedCSSProperty } from "./index-9C4SZZZA.js";
import "./index-ShyC1ag0.js";
import { t as themeSwitcher } from "./theme-switcher-DRqJGlG2-DVSIP9tc.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-DCXtePY2-Cy6rmdf-.js";
import "./index-8HpPmDK_-DinFJk0z.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-C5MWUgDN-BXCJNYHu.js";
await globalThis.ixInitPromise;
function initChart(theme, options) {
  var myChart = echarts.init(document.querySelector("#main"), theme, {
    renderer: "svg"
  });
  myChart.setOption(options);
  return myChart;
}
let dates = [];
for (let year = 2013; year < 2025; year++) {
  dates.push(year.toString());
}
let value = 45.3;
function getGaugeColor(value2) {
  return getComputedCSSProperty("color-warning");
}
function getOptions() {
  return {
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
          fontSize: 16,
          color: getComputedCSSProperty("color-std-text")
        },
        progress: {
          show: true,
          overlap: false,
          width: 35,
          itemStyle: {
            borderMiterLimit: 16,
            color: getGaugeColor()
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
}
registerTheme(echarts);
function waitForThemeAndInit(retries = 100) {
  if (retries <= 0) {
    return;
  }
  const colorValue = getComputedCSSProperty("color-std-text");
  if (!colorValue || colorValue.trim() === "") {
    requestAnimationFrame(() => waitForThemeAndInit(retries - 1));
    return;
  }
  var myChart = initChart(themeSwitcher.getCurrentTheme(), getOptions());
  themeSwitcher.themeChanged.on((theme) => {
    myChart.dispose();
    myChart = initChart(theme, getOptions());
  });
  window.onresize = function() {
    myChart.resize();
  };
}
waitForThemeAndInit();
