import "./global-Do6maBom.js";
import { M as ModuleRegistry, A as AllCommunityModule, g as getIxTheme, c as createGrid, a as agGridCommunity } from "./main.esm-Ce-oWLJa.js";
import "./init-BB6hGSJy.js";
ModuleRegistry.registerModules([AllCommunityModule]);
const ixTheme = getIxTheme(agGridCommunity, {
  stripedRows: true
});
const container = document.querySelector("#grid-container");
const gridOptions = {
  theme: ixTheme,
  rowDragManaged: true,
  tooltipShowDelay: 500,
  rowSelection: {
    mode: "multiRow",
    checkboxes: true,
    headerCheckbox: true,
    selectAll: "filtered"
  },
  columnDefs: [
    {
      field: "type",
      headerName: "Type",
      resizable: true,
      rowDrag: true,
      tooltipField: "type"
    },
    {
      field: "status",
      headerName: "Status",
      resizable: true,
      sortable: true,
      filter: true,
      tooltipValueGetter: (params) => {
        return `Status: ${params.value} - Type: ${params.data.type}`;
      }
    },
    {
      field: "hwVersion",
      headerName: "HW version",
      resizable: true,
      tooltipValueGetter: (params) => {
        if (params.value === "N/A") {
          return "Hardware version not available";
        }
        return `Hardware Version ${params.value}`;
      }
    }
  ],
  autoSizeStrategy: {
    type: "fitGridWidth"
  },
  rowData: [
    {
      type: "Equipment",
      status: "Normal",
      hwVersion: "2.0"
    },
    {
      type: "Positioner",
      status: "Maintenance",
      hwVersion: "1.0"
    },
    {
      type: "Pressure sensor",
      status: "Unknown",
      hwVersion: "N/A"
    },
    {
      type: "Flow meter",
      status: "Normal",
      hwVersion: "3.1"
    },
    {
      type: "Temperature sensor",
      status: "Warning",
      hwVersion: "2.2"
    },
    {
      type: "Valve",
      status: "Normal",
      hwVersion: "1.5"
    },
    {
      type: "Actuator",
      status: "Maintenance",
      hwVersion: "2.0"
    },
    {
      type: "Controller",
      status: "Normal",
      hwVersion: "4.0"
    },
    {
      type: "Safety relay",
      status: "Unknown",
      hwVersion: "N/A"
    },
    {
      type: "Power supply",
      status: "Normal",
      hwVersion: "1.8"
    }
  ],
  suppressCellFocus: true
};
createGrid(container, gridOptions);
