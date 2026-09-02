import "./global-Do6maBom.js";
import "./init-BB6hGSJy.js";
import { r as registerTheme, g as getComputedCSSProperty, a as resolveEChartThemeName } from "./index-z-hdKcHr.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
await globalThis.ixInitPromise;
function initChart(options) {
  const theme = resolveEChartThemeName();
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
  return getComputedCSSProperty("--si-sys-background-warning");
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
            color: [
              [
                1,
                getComputedCSSProperty(
                  "--si-sys-data-sequential-deep-blue-4"
                )
              ]
            ]
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
          color: getComputedCSSProperty("--si-sys-text-primary")
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
              color: getComputedCSSProperty("--si-sys-text-secondary"),
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
              [
                0.25,
                getComputedCSSProperty("--si-sys-background-danger")
              ],
              [
                0.6,
                getComputedCSSProperty("--si-sys-background-warning")
              ],
              [1, getComputedCSSProperty("--si-sys-background-success")]
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
  const colorValue = getComputedCSSProperty("--si-sys-text-primary");
  if (!colorValue || colorValue.trim() === "") {
    requestAnimationFrame(() => waitForThemeAndInit(retries - 1));
    return;
  }
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
}
waitForThemeAndInit();
