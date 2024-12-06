/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
} from '@stencil/core';
import { UploadFileState } from './upload-file-state';
import { A11yAttributes, a11yHostAttributes } from '../utils/a11y';

@Component({
  tag: 'ix-upload',
  styleUrl: 'upload.scss',
  shadow: true,
})
export class Upload {
  /**
   * The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload).
   * [accept]{@link "https://www.w3schools.com/tags/att_input_accept.asp"}
   */
  @Prop() accept?: string;

  /**
   * If multiple is true the user can drop or select multiple files
   */
  @Prop() multiple = false;

  /**
   * Whether the text should wrap to more than one line
   */
  @Prop() multiline = false;

  /**
   * Disable all input events
   */
  @Prop() disabled = false;

  /**
   * After a file is uploaded you can set the upload component to a defined state
   */
  @Prop() state: UploadFileState = UploadFileState.SELECT_FILE;

  /**
   * Will be used by state = UploadFileState.SELECT_FILE
   */
  @Prop() selectFileText = '+ Drag files here or…';

  /**
   * Label for Select file text
   */
  @Prop() i18nSelectFileText = '+ Drag files here or…';

  /**
   * Will be used by state = UploadFileState.LOADING
   */
  @Prop() loadingText = 'Checking files…';

  /**
   * Will be used by state = UploadFileState.UPLOAD_FAILED
   */
  @Prop() uploadFailedText = 'Upload failed. Please try again.';

  /**
   * Will be used by state = UploadFileState.UPLOAD_SUCCESSED
   */
  @Prop() uploadSuccessText = 'Upload successful';

  /**
   * Label for upload file button
   */
  @Prop() i18nUploadFile = 'Upload file…';

  /**
   * Text for disabled state
   */
  @Prop() i18nUploadDisabled = 'File upload currently not possible.';

  /**
   * You get an array of Files after drop-action or browse action is finished
   */
  @Event() filesChanged!: EventEmitter<Array<File>>;

  @Element() hostElement!: HTMLIxUploadElement;

  get inputElement(): HTMLInputElement {
    return this.hostElement.shadowRoot!.querySelector('#upload-browser')!;
  }

  @State() isFileOver = false;

  private filesToUpload?: Array<File>;

  private a11y: A11yAttributes = {};

  constructor() {}

  componentWillLoad() {
    this.a11y = a11yHostAttributes(this.hostElement);
  }

  private fileDropped(evt: DragEvent) {
    evt.preventDefault();

    if (this.disabled) {
      return;
    }

    if (!evt.dataTransfer) {
      return;
    }

    const file: File | FileList = evt.dataTransfer.files;
    this.isFileOver = false;

    this.filesToUpload = this.convertToFileArray(file);
    this.filesChanged.emit(this.filesToUpload);
  }

  private fileOver(event: DragEvent) {
    if (!event.dataTransfer) {
      return;
    }

    if (this.state !== UploadFileState.LOADING) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    }

    if (!this.multiple && event.dataTransfer.items.length > 1) {
      event.preventDefault();
      event.stopPropagation();
      event.dataTransfer.effectAllowed = 'none';
      event.dataTransfer.dropEffect = 'none';
    } else {
      this.isFileOver = true;
    }
  }

  private fileLeave() {
    this.isFileOver = false;
  }

  private fileChangeEvent(event: Event) {
    if (this.disabled) {
      return;
    }

    if (!event.target) {
      return;
    }

    this.filesToUpload = this.convertToFileArray(
      (event.target as HTMLInputElement).files
    );

    this.filesChanged.emit(this.filesToUpload);

    // Workaround for bug in native input element, that prevents the user from uploading
    // a file with the same name as the most recent one, but with changed content.
    this.inputElement.type = '';
    this.inputElement.type = 'file';
  }

  private convertToFileArray(filesFromEvent: FileList | File | null): File[] {
    let files = [];

    if (!filesFromEvent) {
      return [];
    }

    if (filesFromEvent instanceof FileList) {
      files = Array.from(filesFromEvent);
    } else {
      files = [filesFromEvent];
    }
    return files;
  }

  private renderUploadState() {
    if (this.disabled) {
      return (
        <span class="state">
          <span class="upload-text">{this.i18nUploadDisabled}</span>
        </span>
      );
    }

    switch (this.state) {
      case UploadFileState.SELECT_FILE:
        return (
          <span class="state">
            <span class="upload-text">{this.i18nSelectFileText || this.selectFileText}</span>
          </span>
        );
      case UploadFileState.LOADING:
        return (
          <span class="state">
            <ix-spinner variant="primary"></ix-spinner>
            <span class="upload-text">{this.loadingText}</span>
          </span>
        );
      case UploadFileState.UPLOAD_FAILED:
        return (
          <span class="state">
            <ix-icon name="error" class="icon-error"></ix-icon>
            <span class="upload-text">{this.uploadFailedText}</span>
          </span>
        );
      case UploadFileState.UPLOAD_SUCCESSED:
        return (
          <span class="state">
            <ix-icon name="success" class="icon-success"></ix-icon>
            <span class="upload-text">{this.uploadSuccessText}</span>
          </span>
        );
      default:
        return '';
    }
  }

  /**
   * Set files
   * @param obj
   */
  @Method()
  async setFilesToUpload(obj: any) {
    this.filesToUpload = obj;
  }

  render() {
    const disabled = this.disabled || this.state === UploadFileState.LOADING;
    const { 'aria-label': ariaLabel = 'Upload files', ...a11y } = this.a11y;
    return (
      <Host {...a11y} aria-disabled={disabled}>
        <div
          class={{
            'file-upload-area': true,
            'file-over':
              this.state !== UploadFileState.LOADING && this.isFileOver,
            checking: this.state === UploadFileState.LOADING,
            disabled: this.disabled,
            multiline: this.multiline,
          }}
          onDrop={(e) => {
            if (this.state !== UploadFileState.LOADING) {
              this.fileDropped(e);
            }
          }}
          onDragOver={(e) => this.fileOver(e)}
          onDragLeave={() => this.fileLeave()}
          draggable={!this.disabled}
        >
          {this.renderUploadState()}
          <div>
            <input
              aria-label={ariaLabel}
              aria-disabled={disabled}
              multiple={this.multiple}
              type="file"
              class="upload-browser"
              id="upload-browser"
              onChange={(e) => {
                this.fileChangeEvent(e);
              }}
              accept={this.accept}
              disabled={disabled}
            />
            <ix-button
              tabindex="-1"
              outline
              onClick={() => this.inputElement.click()}
              disabled={disabled}
            >
              {this.i18nUploadFile}
            </ix-button>
          </div>
        </div>
      </Host>
    );
  }
}
