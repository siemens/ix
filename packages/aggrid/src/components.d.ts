/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { GridOptions } from "ag-grid-community";
export { GridOptions } from "ag-grid-community";
export namespace Components {
    interface IxAgGrid {
        "gridOptions": GridOptions;
    }
    interface MyComponent {
    }
}
declare global {
    interface HTMLIxAgGridElement extends Components.IxAgGrid, HTMLStencilElement {
    }
    var HTMLIxAgGridElement: {
        prototype: HTMLIxAgGridElement;
        new (): HTMLIxAgGridElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "ix-ag-grid": HTMLIxAgGridElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface IxAgGrid {
        "gridOptions"?: GridOptions;
    }
    interface MyComponent {
    }
    interface IntrinsicElements {
        "ix-ag-grid": IxAgGrid;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ix-ag-grid": LocalJSX.IxAgGrid & JSXBase.HTMLAttributes<HTMLIxAgGridElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
