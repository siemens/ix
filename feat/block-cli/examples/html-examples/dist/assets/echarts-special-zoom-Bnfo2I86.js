import "./global-C_dy4gBz.js";
import "./init-BbGiJe2Q.js";
import { g as getComputedCSSProperty, r as registerTheme } from "./index-VcTKdkWt.js";
import "./index-OaqJ8Udo.js";
import { t as themeSwitcher } from "./theme-switcher-CeIh1wFd-CqevnQ5w.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-DJRSsubD-CRBh3lJr.js";
import "./index-DFdo1y_u-D_8X33yw.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-CZUo7Z4G-DSUp_D74.js";
await globalThis.ixInitPromise;
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1e3;
let date = [];
let data = [Math.random() * 300];
for (let i = 1; i < 2e4; i++) {
  var now = new Date(base += oneDay);
  date.push(
    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
  );
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}
const options = {
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: "none"
      }
    }
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: date
  },
  yAxis: {
    type: "value",
    boundaryGap: [0, "100%"]
  },
  dataZoom: [
    {
      type: "inside",
      start: 0,
      end: 10
    },
    {
      start: 0,
      end: 10
    }
  ],
  series: [
    {
      name: "Synthetic data",
      type: "line",
      symbol: "none",
      sampling: "lttb",
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: getComputedCSSProperty("color-primary")
          },
          {
            offset: 1,
            color: "transparent"
          }
        ])
      },
      data
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
