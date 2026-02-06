import "./global-wi9VneMU.js";
import "./init-Bt8gb6Dd.js";
import { r as registerTheme } from "./index-9C4SZZZA.js";
import "./index-ShyC1ag0.js";
import { t as themeSwitcher } from "./theme-switcher-DRqJGlG2-DVSIP9tc.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-DCXtePY2-Cy6rmdf-.js";
import "./index-8HpPmDK_-DinFJk0z.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-C5MWUgDN-BXCJNYHu.js";
await globalThis.ixInitPromise;
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
const options = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  legend: {
    icon: "rect",
    bottom: 0,
    left: 0
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "7%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
    {
      name: "Direct",
      type: "bar",
      emphasis: {
        focus: "series"
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: "Email",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series"
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "Union Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series"
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: "Video Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series"
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: "Search Engine",
      type: "bar",
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: "series"
      },
      markLine: {
        lineStyle: {
          type: "dashed"
        },
        data: [[{ type: "min" }, { type: "max" }]]
      }
    },
    {
      name: "Baidu",
      type: "bar",
      barWidth: 5,
      stack: "Search Engine",
      emphasis: {
        focus: "series"
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120]
    },
    {
      name: "Google",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series"
      },
      data: [120, 132, 101, 134, 290, 230, 220]
    },
    {
      name: "Bing",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series"
      },
      data: [60, 72, 71, 74, 190, 130, 110]
    },
    {
      name: "Others",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series"
      },
      data: [62, 82, 91, 84, 109, 110, 120]
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
