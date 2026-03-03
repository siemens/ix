import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IxCard,
  IxCardContent,
  IxTypography,
  IxIcon,
  IxButton,
  IxIconButton,
  IxChip,
} from '@siemens/ix-angular/standalone';
import { iconUpload, iconDocument, iconTrashcan } from '@siemens/ix-icons/icons';

interface FileWithPreview {
  file: File;
  id: string;
}

@Component({
  selector: 'app-upload-files',
  standalone: true,
  imports: [
    CommonModule,
    IxCard,
    IxCardContent,
    IxTypography,
    IxIcon,
    IxButton,
    IxIconButton,
    IxChip,
  ],
  templateUrl: './upload-files.html',
  styleUrls: ['./upload-files.css'],
})
export class UploadFiles {
  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;

  files: FileWithPreview[] = [];
  isDragging = false;

  readonly iconUpload = iconUpload;
  readonly iconDocument = iconDocument;
  readonly iconTrashcan = iconTrashcan;

  handleDragEnter(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  handleDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  handleDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  handleDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    if (event.dataTransfer?.files) {
      const droppedFiles = Array.from(event.dataTransfer.files);
      this.addFiles(droppedFiles);
    }
  }

  handleFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const selectedFiles = Array.from(input.files);
      this.addFiles(selectedFiles);
    }
  }

  addFiles(newFiles: File[]): void {
    const filesWithPreview: FileWithPreview[] = newFiles.map((file) => ({
      file,
      id: `${file.name}-${Date.now()}-${Math.random()}`,
    }));
    this.files = [...this.files, ...filesWithPreview];
  }

  removeFile(id: string): void {
    this.files = this.files.filter((f) => f.id !== id);
  }

  handleBrowseClick(): void {
    this.fileInputRef.nativeElement?.click();
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }

  clearAllFiles(): void {
    this.files = [];
    if (this.fileInputRef?.nativeElement) {
      this.fileInputRef.nativeElement.value = '';
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleBrowseClick();
    }
  }
}
