/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
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

@Component({
  tag: 'ix-upload',
  styleUrl: 'upload.scss',
  scoped: true,
})
export class Upload {
  /**
   * The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload).
   * [accept]{@link https://www.w3schools.com/tags/att_input_accept.asp}
   */
  @Prop() accept: string;

  /**
   * If multiple is true the user can drop or select multiple files
   */
  @Prop() multiple = false;

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
  @Prop() selectFileText: string;

  /**
   * Will be used by state = UploadFileState.LOADING
   */
  @Prop() loadingText: string;

  /**
   * Will be used by state = UploadFileState.UPLOAD_FAILED
   */
  @Prop() uploadFailedText: string;

  /**
   * Will be used by state = UploadFileState.UPLOAD_SUCCESSED
   */
  @Prop() uploadSuccessText: string;

  /**
   * Label for upload file button
   */
  @Prop() i18nUploadFile = 'Upload file...';

  /**
   * You get an array of Files after drop-action or browse action is finished
   */
  @Event() filesChanged: EventEmitter<Array<File>>;

  @Element() hostElement!: HTMLIxUploadElement;

  get inputElement(): HTMLInputElement {
    return this.hostElement.querySelector('#upload-browser');
  }

  @State() isFileOver = false;

  private filesToUpload: Array<File>;

  constructor() {}

  private fileDroped(evt: DragEvent) {
    evt.preventDefault();

    const file: File | FileList = evt.dataTransfer.files;
    this.isFileOver = false;

    this.filesToUpload = this.convertToFileArray(file);

    this.filesChanged.emit(this.filesToUpload);
  }

  private fileOver(event: DragEvent) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';

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

  private fileChangeEvent(event: any) {
    this.filesToUpload = this.convertToFileArray(event.target.files);

    this.filesChanged.emit(this.filesToUpload);

    // Workaround for bug in native input element, that prevents the user from uploading
    // a file with the same name as the most recent one, but with changed content.
    this.inputElement.type = '';
    this.inputElement.type = 'file';
  }

  private convertToFileArray(filesFromEvent: FileList | File): File[] {
    let files = [];
    if (filesFromEvent instanceof FileList) {
      files = Array.from(filesFromEvent);
    } else {
      files = [filesFromEvent];
    }
    return files;
  }

  private renderUploadState() {
    switch (this.state) {
      case UploadFileState.SELECT_FILE:
        return (
          <span class="state">
            {this.selectFileText ? this.selectFileText : '+ Drag files here or'}
          </span>
        );
      case UploadFileState.LOADING:
        return (
          <span class="state">
            <ix-spinner variant="primary"></ix-spinner>
            {this.loadingText ? this.loadingText : 'Checking files...'}
          </span>
        );
      case UploadFileState.UPLOAD_FAILED:
        return (
          <span class="state">
            <i class="glyph glyph-error"></i>
            {this.uploadFailedText
              ? this.uploadFailedText
              : 'Upload failed. Please try again.'}
          </span>
        );
      case UploadFileState.UPLOAD_SUCCESSED:
        return (
          <span class="state">
            <i class="glyph glyph-success"></i>
            {this.uploadSuccessText
              ? this.uploadSuccessText
              : 'Upload successful'}
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
    return (
      <Host>
        <div
          class={{
            'file-upload-area': true,
            'file-over': this.isFileOver,
          }}
          onDrop={(e) => this.fileDroped(e)}
          onDragOver={(e) => this.fileOver(e)}
          onDragLeave={() => this.fileLeave()}
          draggable={!this.disabled}
        >
          {this.renderUploadState()}
          <div>
            <input
              multiple={this.multiple}
              type="file"
              class="upload-browser"
              id="upload-browser"
              onChange={(e) => {
                this.fileChangeEvent(e);
              }}
              accept={this.accept}
            />
            <button
              tabindex="-1"
              type="button"
              class="btn btn-outline-secondary"
              onClick={() => this.inputElement.click()}
              disabled={this.disabled || this.state === UploadFileState.LOADING}
            >
              {this.i18nUploadFile}
            </button>
          </div>
        </div>
      </Host>
    );
  }
}
