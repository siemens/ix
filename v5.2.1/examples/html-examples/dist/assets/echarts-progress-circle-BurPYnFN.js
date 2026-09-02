import "./global-Do6maBom.js";
import "./init-BB6hGSJy.js";
import { r as registerTheme, a as resolveEChartThemeName, g as getComputedCSSProperty } from "./index-z-hdKcHr.js";
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
            color: getComputedCSSProperty("--si-sys-background-success")
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
              color: getComputedCSSProperty("--si-sys-text-secondary"),
              rich: {
                valueStyle: {
                  fontSize: "2rem",
                  color: getComputedCSSProperty(
                    "--si-sys-text-secondary"
                  ),
                  fontWeight: "bold"
                },
                textStyle: {
                  fontSize: "1.5rem",
                  color: getComputedCSSProperty(
                    "--si-sys-text-secondary"
                  )
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
