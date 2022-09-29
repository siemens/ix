import { EventEmitter } from '../../stencil-public-runtime';
import { UploadFileState } from './upload-file-state';
export declare class Upload {
  /**
   * The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload).
   * [accept]{@link https://www.w3schools.com/tags/att_input_accept.asp}
   */
  accept: string;
  /**
   * If multiple is true the user can drop or select multiple files
   */
  multiple: boolean;
  /**
   * Whether the text should wrap to more than one line
   */
  multiline: boolean;
  /**
   * Disable all input events
   */
  disabled: boolean;
  /**
   * After a file is uploaded you can set the upload component to a defined state
   */
  state: UploadFileState;
  /**
   * Will be used by state = UploadFileState.SELECT_FILE
   */
  selectFileText: string;
  /**
   * Will be used by state = UploadFileState.LOADING
   */
  loadingText: string;
  /**
   * Will be used by state = UploadFileState.UPLOAD_FAILED
   */
  uploadFailedText: string;
  /**
   * Will be used by state = UploadFileState.UPLOAD_SUCCESSED
   */
  uploadSuccessText: string;
  /**
   * Label for upload file button
   */
  i18nUploadFile: string;
  /**
   * Text for disabled state
   */
  i18nUploadDisabled: string;
  /**
   * You get an array of Files after drop-action or browse action is finished
   */
  filesChanged: EventEmitter<Array<File>>;
  hostElement: HTMLIxUploadElement;
  get inputElement(): HTMLInputElement;
  isFileOver: boolean;
  private filesToUpload;
  constructor();
  private fileDropped;
  private fileOver;
  private fileLeave;
  private fileChangeEvent;
  private convertToFileArray;
  private renderUploadState;
  /**
   * Set files
   * @param obj
   */
  setFilesToUpload(obj: any): Promise<void>;
  render(): any;
}
