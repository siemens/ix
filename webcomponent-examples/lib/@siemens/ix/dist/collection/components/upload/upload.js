/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, Event, h, Host, Method, Prop, State } from '@stencil/core';
import { UploadFileState } from './upload-file-state';
export class Upload {
  constructor() {
    /**
     * If multiple is true the user can drop or select multiple files
     */
    this.multiple = false;
    /**
     * Whether the text should wrap to more than one line
     */
    this.multiline = false;
    /**
     * Disable all input events
     */
    this.disabled = false;
    /**
     * After a file is uploaded you can set the upload component to a defined state
     */
    this.state = UploadFileState.SELECT_FILE;
    /**
     * Will be used by state = UploadFileState.SELECT_FILE
     */
    this.selectFileText = '+ Drag files here or…';
    /**
     * Will be used by state = UploadFileState.LOADING
     */
    this.loadingText = 'Checking files…';
    /**
     * Will be used by state = UploadFileState.UPLOAD_FAILED
     */
    this.uploadFailedText = 'Upload failed. Please try again.';
    /**
     * Will be used by state = UploadFileState.UPLOAD_SUCCESSED
     */
    this.uploadSuccessText = 'Upload successful';
    /**
     * Label for upload file button
     */
    this.i18nUploadFile = 'Upload file…';
    /**
     * Text for disabled state
     */
    this.i18nUploadDisabled = 'File upload currently not possible.';
    this.isFileOver = false;
  }
  get inputElement() {
    return this.hostElement.querySelector('#upload-browser');
  }
  fileDropped(evt) {
    evt.preventDefault();
    const file = evt.dataTransfer.files;
    this.isFileOver = false;
    this.filesToUpload = this.convertToFileArray(file);
    this.filesChanged.emit(this.filesToUpload);
  }
  fileOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    if (!this.multiple && event.dataTransfer.items.length > 1) {
      event.preventDefault();
      event.stopPropagation();
      event.dataTransfer.effectAllowed = 'none';
      event.dataTransfer.dropEffect = 'none';
    }
    else {
      this.isFileOver = true;
    }
  }
  fileLeave() {
    this.isFileOver = false;
  }
  fileChangeEvent(event) {
    this.filesToUpload = this.convertToFileArray(event.target.files);
    this.filesChanged.emit(this.filesToUpload);
    // Workaround for bug in native input element, that prevents the user from uploading
    // a file with the same name as the most recent one, but with changed content.
    this.inputElement.type = '';
    this.inputElement.type = 'file';
  }
  convertToFileArray(filesFromEvent) {
    let files = [];
    if (filesFromEvent instanceof FileList) {
      files = Array.from(filesFromEvent);
    }
    else {
      files = [filesFromEvent];
    }
    return files;
  }
  renderUploadState() {
    if (this.disabled) {
      return (h("span", { class: "state" },
        h("span", { class: "upload-text" }, this.i18nUploadDisabled)));
    }
    switch (this.state) {
      case UploadFileState.SELECT_FILE:
        return (h("span", { class: "state" },
          h("span", { class: "upload-text" }, this.selectFileText)));
      case UploadFileState.LOADING:
        return (h("span", { class: "state" },
          h("ix-spinner", { variant: "primary" }),
          h("span", { class: "upload-text" }, this.loadingText)));
      case UploadFileState.UPLOAD_FAILED:
        return (h("span", { class: "state" },
          h("i", { class: "glyph glyph-error" }),
          h("span", { class: "upload-text" }, this.uploadFailedText)));
      case UploadFileState.UPLOAD_SUCCESSED:
        return (h("span", { class: "state" },
          h("i", { class: "glyph glyph-success" }),
          h("span", { class: "upload-text" }, this.uploadSuccessText)));
      default:
        return '';
    }
  }
  /**
   * Set files
   * @param obj
   */
  async setFilesToUpload(obj) {
    this.filesToUpload = obj;
  }
  render() {
    return (h(Host, null,
      h("div", { class: {
          'file-upload-area': true,
          'file-over': this.isFileOver,
          checking: this.state === UploadFileState.LOADING,
          disabled: this.disabled,
          multiline: this.multiline,
        }, onDrop: (e) => this.fileDropped(e), onDragOver: (e) => this.fileOver(e), onDragLeave: () => this.fileLeave(), draggable: !this.disabled },
        this.renderUploadState(),
        h("div", null,
          h("input", { multiple: this.multiple, type: "file", class: "upload-browser", id: "upload-browser", onChange: (e) => {
              this.fileChangeEvent(e);
            }, accept: this.accept }),
          h("ix-button", { tabindex: "-1", outline: true, onClick: () => this.inputElement.click(), disabled: this.disabled || this.state === UploadFileState.LOADING }, this.i18nUploadFile)))));
  }
  static get is() { return "ix-upload"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["upload.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["upload.css"]
  }; }
  static get properties() { return {
    "accept": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload).\n[accept]{@link https ://www.w3schools.com/tags/att_input_accept.asp}"
      },
      "attribute": "accept",
      "reflect": false
    },
    "multiple": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If multiple is true the user can drop or select multiple files"
      },
      "attribute": "multiple",
      "reflect": false,
      "defaultValue": "false"
    },
    "multiline": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether the text should wrap to more than one line"
      },
      "attribute": "multiline",
      "reflect": false,
      "defaultValue": "false"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Disable all input events"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "state": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "UploadFileState",
        "resolved": "UploadFileState.LOADING | UploadFileState.SELECT_FILE | UploadFileState.UPLOAD_FAILED | UploadFileState.UPLOAD_SUCCESSED",
        "references": {
          "UploadFileState": {
            "location": "import",
            "path": "./upload-file-state"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "After a file is uploaded you can set the upload component to a defined state"
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "UploadFileState.SELECT_FILE"
    },
    "selectFileText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Will be used by state = UploadFileState.SELECT_FILE"
      },
      "attribute": "select-file-text",
      "reflect": false,
      "defaultValue": "'+ Drag files here or\u2026'"
    },
    "loadingText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Will be used by state = UploadFileState.LOADING"
      },
      "attribute": "loading-text",
      "reflect": false,
      "defaultValue": "'Checking files\u2026'"
    },
    "uploadFailedText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Will be used by state = UploadFileState.UPLOAD_FAILED"
      },
      "attribute": "upload-failed-text",
      "reflect": false,
      "defaultValue": "'Upload failed. Please try again.'"
    },
    "uploadSuccessText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Will be used by state = UploadFileState.UPLOAD_SUCCESSED"
      },
      "attribute": "upload-success-text",
      "reflect": false,
      "defaultValue": "'Upload successful'"
    },
    "i18nUploadFile": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Label for upload file button"
      },
      "attribute": "i-1-8n-upload-file",
      "reflect": false,
      "defaultValue": "'Upload file\u2026'"
    },
    "i18nUploadDisabled": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Text for disabled state"
      },
      "attribute": "i-1-8n-upload-disabled",
      "reflect": false,
      "defaultValue": "'File upload currently not possible.'"
    }
  }; }
  static get states() { return {
    "isFileOver": {}
  }; }
  static get events() { return [{
      "method": "filesChanged",
      "name": "filesChanged",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "You get an array of Files after drop-action or browse action is finished"
      },
      "complexType": {
        "original": "Array<File>",
        "resolved": "File[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "File": {
            "location": "global"
          }
        }
      }
    }]; }
  static get methods() { return {
    "setFilesToUpload": {
      "complexType": {
        "signature": "(obj: any) => Promise<void>",
        "parameters": [{
            "tags": [{
                "name": "param",
                "text": "obj"
              }],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Set files",
        "tags": [{
            "name": "param",
            "text": "obj"
          }]
      }
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
