import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.7dd975c7.js";
import { i as iconCalendar } from "./index-2b76ea55.acc6b31e.js";
import { D as DateTime_1 } from "./luxon-aa110584.36a0b316.js";
import { d as dropdownController } from "./dropdown-controller-cb6d3789.8979871d.js";
import { a as addDisposableChangesAndVisibilityObservers, b as adjustPaddingForStartAndEnd, S as SlotEnd, c as SlotStart } from "./input.util-deca1217.c59f2adf.js";
import { c as createClassMutationObserver, H as HookValidationLifecycle } from "./validation-54137eaa.8ba4a3c5.js";
import { m as makeRef } from "./make-ref-4b76e9b5.1c81bb51.js";
import "./anime.es-a5520566.eae0a8f1.js";
import "./a11y-b10c12e0.27b6344e.js";
import "./mutation-observer-db8757e6.4a24be36.js";
import "./rwd.util-d8e00a88.087cdec0.js";
const dateInputCss = `label{color:var(--theme-color-soft-text);padding:2px 0px}label.label-alignment-left{padding:6px 0px}input{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{padding:calc(0.375rem - var(--theme-input--border-thickness)) calc(0.5rem - var(--theme-input--border-thickness))}textarea~.valid-feedback,textarea~.invalid-feedback,input~.valid-feedback,input~.invalid-feedback{display:none;font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}form textarea~.valid-feedback,form input~.valid-feedback{color:var(--theme-color-success)}form textarea~.invalid-feedback,form input~.invalid-feedback{color:var(--theme-color-alarm-text)}form:not([novalidate]) :invalid,form:not([novalidate]) .is-invalid,form.was-validated :invalid,form.was-validated .is-invalid{background-color:var(--theme-input-error--background);border-color:var(--theme-input-error--border-color);background-image:url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='512px' height='512px' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: sketchtool 62 (101010) - https://sketch.com --%3E%3Ctitle%3Eerror%3C/title%3E%3Cdesc%3ECreated with sketchtool.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.75'%3E%3Cg id='error' fill='%23ff2640'%3E%3Cg id='error/error'%3E%3Cpath d='M256,42.6666667 C373.626371,42.6666667 469.333333,138.373627 469.333333,256 C469.333333,373.626371 373.626371,469.333333 256,469.333333 C138.373627,469.333333 42.6666667,373.626371 42.6666667,256 C42.6666667,138.373627 138.373627,42.6666667 256,42.6666667 Z M256,85.3333333 C161.559631,85.3333333 85.3333333,161.559631 85.3333333,256 C85.3333333,350.44037 161.559631,426.666667 256,426.666667 C350.44037,426.666667 426.666667,350.44037 426.666667,256 C426.666667,161.559631 350.44037,85.3333333 256,85.3333333 Z M326.248389,155.581722 L356.418278,185.751611 L286.168667,255.999667 L356.418278,326.248389 L326.248389,356.418278 L255.999667,286.168667 L185.751611,356.418278 L155.581722,326.248389 L225.829667,255.999667 L155.581722,185.751611 L185.751611,155.581722 L255.999667,225.829667 L326.248389,155.581722 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important;background-position:left calc(0.375em + 0.1875rem) center;padding-right:0.75rem;padding-left:calc(1.5em + 0.75rem);background-size:18px;background-repeat:no-repeat}form:not([novalidate]) :invalid~.invalid-feedback,form:not([novalidate]) .is-invalid~.invalid-feedback,form.was-validated :invalid~.invalid-feedback,form.was-validated .is-invalid~.invalid-feedback{display:block}form:not([novalidate]) :valid~.valid-feedback,form:not([novalidate]) .is-valid~.valid-feedback,form.was-validated :valid~.valid-feedback,form.was-validated .is-valid~.valid-feedback{display:block}form:not(.was-validated) .invalid-feedback,form:not(.was-validated) .valid-feedback{display:none !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]),input.ix-info:not(.disabled):not(:disabled):not([disabled]){border-color:var(--theme-input--border-color--info)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--info--hover) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--info--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]){border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--warning--active) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]){background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--invalid--hover) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--invalid--active) !important}label{color:var(--theme-color-soft-text);padding:2px 0px}label.label-alignment-left{padding:6px 0px}input{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{padding:calc(0.375rem - var(--theme-input--border-thickness)) calc(0.5rem - var(--theme-input--border-thickness))}textarea~.valid-feedback,textarea~.invalid-feedback,input~.valid-feedback,input~.invalid-feedback{display:none;font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}form textarea~.valid-feedback,form input~.valid-feedback{color:var(--theme-color-success)}form textarea~.invalid-feedback,form input~.invalid-feedback{color:var(--theme-color-alarm-text)}form:not([novalidate]) :invalid,form:not([novalidate]) .is-invalid,form.was-validated :invalid,form.was-validated .is-invalid{background-color:var(--theme-input-error--background);border-color:var(--theme-input-error--border-color);background-image:url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='512px' height='512px' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: sketchtool 62 (101010) - https://sketch.com --%3E%3Ctitle%3Eerror%3C/title%3E%3Cdesc%3ECreated with sketchtool.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.75'%3E%3Cg id='error' fill='%23ff2640'%3E%3Cg id='error/error'%3E%3Cpath d='M256,42.6666667 C373.626371,42.6666667 469.333333,138.373627 469.333333,256 C469.333333,373.626371 373.626371,469.333333 256,469.333333 C138.373627,469.333333 42.6666667,373.626371 42.6666667,256 C42.6666667,138.373627 138.373627,42.6666667 256,42.6666667 Z M256,85.3333333 C161.559631,85.3333333 85.3333333,161.559631 85.3333333,256 C85.3333333,350.44037 161.559631,426.666667 256,426.666667 C350.44037,426.666667 426.666667,350.44037 426.666667,256 C426.666667,161.559631 350.44037,85.3333333 256,85.3333333 Z M326.248389,155.581722 L356.418278,185.751611 L286.168667,255.999667 L356.418278,326.248389 L326.248389,356.418278 L255.999667,286.168667 L185.751611,356.418278 L155.581722,326.248389 L225.829667,255.999667 L155.581722,185.751611 L185.751611,155.581722 L255.999667,225.829667 L326.248389,155.581722 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important;background-position:left calc(0.375em + 0.1875rem) center;padding-right:0.75rem;padding-left:calc(1.5em + 0.75rem);background-size:18px;background-repeat:no-repeat}form:not([novalidate]) :invalid~.invalid-feedback,form:not([novalidate]) .is-invalid~.invalid-feedback,form.was-validated :invalid~.invalid-feedback,form.was-validated .is-invalid~.invalid-feedback{display:block}form:not([novalidate]) :valid~.valid-feedback,form:not([novalidate]) .is-valid~.valid-feedback,form.was-validated :valid~.valid-feedback,form.was-validated .is-valid~.valid-feedback{display:block}form:not(.was-validated) .invalid-feedback,form:not(.was-validated) .valid-feedback{display:none !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]),input.ix-info:not(.disabled):not(:disabled):not([disabled]){border-color:var(--theme-input--border-color--info)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--info--hover) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--info--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]){border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--warning--active) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]){background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):hover{border-color:var(--theme-input--border-color--invalid--hover) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):active{border-color:var(--theme-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .input-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%}:host input{width:100%;height:100%}:host .start-container,:host .end-container{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1}:host .start-container{left:0}:host .end-container{right:0}:host .start-container ::slotted(*){margin-left:0.5rem}:host .start-container ::slotted(ix-icon.size-24),:host .start-container ::slotted(ix-icon-button.btn-icon-16){margin-left:0.25rem}:host .start-container ::slotted(ix-icon-button.btn-icon-32){margin-left:0}:host .end-container ::slotted(*){margin-right:0.5rem}:host .end-container ::slotted(ix-icon.size-24),:host .end-container ::slotted(ix-icon-button.btn-icon-16){margin-right:0.25rem}:host .end-container ::slotted(ix-icon-button.btn-icon-32){margin-right:0}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}:host(.disabled){pointer-events:none}:host(.disabled) input,:host(.disabled) textarea{pointer-events:none}:host(.ix-info:not(.disabled):not(:disabled):not([disabled])) input{border-color:var(--theme-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled])) input:hover{border-color:var(--theme-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled])) input:active{border-color:var(--theme-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled])) input{border-color:var(--theme-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled])) input:hover{border-color:var(--theme-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled])) input:active{border-color:var(--theme-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled])) input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled])) input{background-color:var(--theme-input--background--invalid);border-color:var(--theme-input--border-color--invalid) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled])) input:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled])) input:hover{border-color:var(--theme-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled])) input:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled])) input:active{border-color:var(--theme-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host input{width:100%;height:100%}:host .calendar-hidden{display:none}:host(.readonly) input{pointer-events:none}`;
const IxDateInputStyle0 = dateInputCss;
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const DateInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 6);
    this.validityStateChange = createEvent(this, "validityStateChange", 7);
    this.ixFocus = createEvent(this, "ixFocus", 7);
    this.ixBlur = createEvent(this, "ixBlur", 7);
    if (hostRef.$hostElement$["s-ei"]) {
      this.formInternals = hostRef.$hostElement$["s-ei"];
    } else {
      this.formInternals = hostRef.$hostElement$.attachInternals();
      hostRef.$hostElement$["s-ei"] = this.formInternals;
    }
    this.slotStartRef = makeRef();
    this.slotEndRef = makeRef();
    this.datepickerRef = makeRef();
    this.inputElementRef = makeRef();
    this.dropdownElementRef = makeRef();
    this.name = void 0;
    this.placeholder = void 0;
    this.value = "";
    this.locale = void 0;
    this.format = "yyyy/LL/dd";
    this.required = void 0;
    this.helperText = void 0;
    this.label = void 0;
    this.invalidText = void 0;
    this.readonly = false;
    this.disabled = false;
    this.infoText = void 0;
    this.warningText = void 0;
    this.validText = void 0;
    this.showTextAsTooltip = void 0;
    this.i18nErrorDateUnparsable = "Date is not valid";
    this.show = false;
    this.from = null;
    this.isInputInvalid = false;
    this.isInvalid = false;
    this.isValid = false;
    this.isInfo = false;
    this.isWarning = false;
    this.focus = false;
  }
  updateFormInternalValue(value) {
    this.formInternals.setFormValue(value);
    this.value = value;
  }
  connectedCallback() {
    this.classObserver = createClassMutationObserver(this.hostElement, () => this.checkClassList());
    this.disposableChangesAndVisibilityObservers = addDisposableChangesAndVisibilityObservers(this.hostElement, this.updatePaddings.bind(this));
  }
  componentWillLoad() {
    this.onInput(this.value);
    if (this.isInputInvalid) {
      this.from = null;
    } else {
      this.watchValue();
    }
    this.checkClassList();
    this.updateFormInternalValue(this.value);
  }
  updatePaddings() {
    adjustPaddingForStartAndEnd(this.slotStartRef.current, this.slotEndRef.current, this.inputElementRef.current);
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.classObserver) === null || _a === void 0 ? void 0 : _a.destroy();
    (_b = this.disposableChangesAndVisibilityObservers) === null || _b === void 0 ? void 0 : _b.call(this);
  }
  watchValue() {
    this.from = this.value;
  }
  hasValidValue() {
    return Promise.resolve(!!this.value);
  }
  getAssociatedFormElement() {
    return Promise.resolve(this.formInternals.form);
  }
  async onInput(value) {
    this.value = value;
    if (!value) {
      this.valueChange.emit(value);
      return;
    }
    if (!this.format) {
      return;
    }
    const date = DateTime_1.fromFormat(value, this.format);
    if (date.isValid) {
      this.isInputInvalid = false;
      this.updateFormInternalValue(value);
      this.closeDropdown();
    } else {
      this.isInputInvalid = true;
      this.invalidReason = date.invalidReason;
    }
    this.valueChange.emit(value);
  }
  onCalenderClick(event) {
    if (!this.show) {
      event.stopPropagation();
      event.preventDefault();
      this.openDropdown();
    }
    if (this.inputElementRef.current) {
      this.inputElementRef.current.focus();
    }
  }
  async openDropdown() {
    const dropdownElement = await this.dropdownElementRef.waitForCurrent();
    const id = dropdownElement.getAttribute("data-ix-dropdown");
    dropdownController.dismissAll();
    if (!id) {
      return;
    }
    const dropdown = dropdownController.getDropdownById(id);
    if (!dropdown) {
      return;
    }
    dropdownController.present(dropdown);
  }
  async closeDropdown() {
    const dropdownElement = await this.dropdownElementRef.waitForCurrent();
    const id = dropdownElement.getAttribute("data-ix-dropdown");
    if (!id) {
      return;
    }
    const dropdown = dropdownController.getDropdownById(id);
    if (!dropdown) {
      return;
    }
    dropdownController.dismiss(dropdown);
  }
  checkClassList() {
    this.isInvalid = this.hostElement.classList.contains("ix-invalid");
  }
  renderInput() {
    return h("div", { class: "input-wrapper" }, h(SlotStart, { slotStartRef: this.slotStartRef, onSlotChange: () => this.updatePaddings() }), h("input", { autoComplete: "off", class: {
      "is-invalid": this.isInputInvalid
    }, disabled: this.disabled, readOnly: this.readonly, readonly: this.readonly, required: this.required, ref: this.inputElementRef, type: "text", value: this.value, onInput: (event) => {
      const target = event.target;
      this.onInput(target.value);
    }, onClick: (event) => {
      if (this.show) {
        event.stopPropagation();
        event.preventDefault();
      }
    }, onFocus: async () => {
      this.openDropdown();
      this.ixFocus.emit();
    }, onBlur: () => this.ixBlur.emit() }), h(SlotEnd, { slotEndRef: this.slotEndRef, onSlotChange: () => this.updatePaddings() }, h("ix-icon-button", { "data-testid": "open-calendar", class: { "calendar-hidden": this.disabled || this.readonly }, ghost: true, icon: iconCalendar, onClick: (event) => this.onCalenderClick(event) })));
  }
  hookValidationLifecycle({ isInfo, isInvalid, isInvalidByRequired, isValid, isWarning }) {
    this.isInvalid = isInvalid || isInvalidByRequired || this.isInputInvalid;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }
  async onInputValidationChange() {
    const state = await this.getValidityState();
    this.validityStateChange.emit({
      patternMismatch: state.patternMismatch,
      invalidReason: this.invalidReason
    });
  }
  getValidityState() {
    return Promise.resolve({
      badInput: false,
      customError: false,
      patternMismatch: this.isInputInvalid,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valid: !this.isInputInvalid,
      valueMissing: !!this.required && !this.value
    });
  }
  getNativeInputElement() {
    return this.inputElementRef.waitForCurrent();
  }
  async focusInput() {
    return (await this.getNativeInputElement()).focus();
  }
  render() {
    var _a;
    const invalidText = this.isInputInvalid ? this.i18nErrorDateUnparsable : this.invalidText;
    return h(Host, { key: "06cbbfe78b4ca05d37804b38e88dd2255c4ca096", class: {
      disabled: this.disabled,
      readonly: this.readonly
    } }, h("ix-field-wrapper", { key: "9f87f71a0b3fc6c6d269a5efbd2b44ef36a44d1f", label: this.label, helperText: this.helperText, isInvalid: this.isInvalid, invalidText, infoText: this.infoText, isInfo: this.isInfo, isWarning: this.isWarning, warningText: this.warningText, isValid: this.isValid, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, required: this.required, controlRef: this.inputElementRef }, this.renderInput()), h("ix-dropdown", { key: "b579d26bf119985c0312e7265fc65907af5fd526", "data-testid": "date-dropdown", trigger: this.inputElementRef.waitForCurrent(), ref: this.dropdownElementRef, closeBehavior: "outside", suppressOverflowBehavior: true, show: this.show, onShowChanged: (event) => {
      this.show = event.detail;
    } }, h("ix-date-picker", { key: "171da21a0ede7293e7f0d6504cdd7ca01e9348db", ref: this.datepickerRef, format: this.format, locale: this.locale, range: false, from: (_a = this.from) !== null && _a !== void 0 ? _a : "", onDateChange: (event) => {
      const { from } = event.detail;
      this.onInput(from);
    } })));
  }
  static get formAssociated() {
    return true;
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["watchValue"],
      "isInputInvalid": ["onInputValidationChange"]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], DateInput.prototype, "hookValidationLifecycle", null);
DateInput.style = IxDateInputStyle0;
export {
  DateInput as ix_date_input
};
