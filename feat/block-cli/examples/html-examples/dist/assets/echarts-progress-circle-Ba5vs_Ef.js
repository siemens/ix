import "./global-B1t25MFd.js";
import "./init-D7MT-x0x.js";
import { r as registerTheme, a as resolveEChartThemeName, g as getComputedCSSProperty } from "./index-zQyUnTuj.js";
import "./index-2vJwyO0t.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-1XS3_9yD-CROtOmyT.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./message-KsI1kigJ-CqWh--pY.js";
import "./index-CwfZ4aN6-mXhHymhu.js";
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
