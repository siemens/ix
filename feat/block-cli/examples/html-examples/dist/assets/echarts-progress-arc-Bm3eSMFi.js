import "./global-X6m21_-k.js";
import "./init-Bj9jZK19.js";
import { g as getComputedCSSProperty, r as registerTheme } from "./index-VcTKdkWt.js";
import "./index-B7XIDU4C.js";
import { t as themeSwitcher } from "./theme-switcher-JLPGWWvy-Dx1a6sv8.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-C4Qfy2jB-BDz70pVv.js";
import "./index-Dn2eQInl-mXhHymhu.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
await globalThis.ixInitPromise;
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
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
      startAngle: 200,
      endAngle: -20,
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
            overflow: "break",
            fontSize: "2rem",
            fontWeight: "normal",
            color: getComputedCSSProperty("color-soft-text"),
            width: 250,
            lineHeight: 35,
            formatter: "{value} / 100 \n completed"
          },
          pointer: {
            show: false
          }
        }
      ]
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
