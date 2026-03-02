import { useState, useRef } from 'react';
import type { DragEvent, ChangeEvent } from 'react';
import {
  IxCard,
  IxCardContent,
  IxTypography,
  IxIcon,
  IxButton,
  IxIconButton,
  IxChip,
} from '@siemens/ix-react';
import {
  iconUpload,
  iconDocument,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import styles from './upload-files.module.css';

interface FileWithPreview {
  file: File;
  id: string;
}

export default function UploadFiles() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      addFiles(selectedFiles);
    }
  };

  const addFiles = (newFiles: File[]) => {
    const filesWithPreview: FileWithPreview[] = newFiles.map((file) => ({
      file,
      id: `${file.name}-${Date.now()}-${Math.random()}`,
    }));
    setFiles((prev) => [...prev, ...filesWithPreview]);
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const clearAllFiles = () => {
    setFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={styles.container}>
      <IxCard variant="outline" className={styles.uploadCard}>
        <IxCardContent>
          <div className={styles.header}>
            <IxTypography format="h3" bold>
              File Upload
            </IxTypography>
            <IxTypography className={styles.subtitle}>
              Upload your files by dragging and dropping or browsing
            </IxTypography>
          </div>

          <div
            className={`${styles.dropZone} ${isDragging ? styles.dragging : ''}`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            role="button"
            tabIndex={0}
            aria-label="File upload drop zone. Press Enter to browse files"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleBrowseClick();
              }
            }}
          >
            <IxIcon
              name={iconUpload}
              size="32"
              className={styles.uploadIcon}
            ></IxIcon>
            <IxTypography format="h4" bold className={styles.dropZoneTitle}>
              Drag and drop files here
            </IxTypography>
            <IxTypography className={styles.dropZoneText}>
              or
            </IxTypography>
            <IxButton variant="primary" onClick={handleBrowseClick}>
              Browse Files
            </IxButton>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileInput}
              className={styles.hiddenInput}
              aria-label="File input"
            />
          </div>

          {files.length > 0 && (
            <div className={styles.filesSection}>
              <div className={styles.filesSectionHeader}>
                <IxTypography format="h5" bold>
                  Uploaded Files ({files.length})
                </IxTypography>
                <IxButton
                  variant="subtle-primary"
                  onClick={clearAllFiles}
                  aria-label="Clear all files"
                >
                  Clear All
                </IxButton>
              </div>

              <div
                className={styles.filesList}
                role="list"
                aria-label="List of uploaded files"
              >
                {files.map((fileItem) => (
                  <div
                    key={fileItem.id}
                    className={styles.fileItem}
                    role="listitem"
                  >
                    <div className={styles.fileIcon}>
                      <IxIcon name={iconDocument} size="24"></IxIcon>
                    </div>
                    <div className={styles.fileInfo}>
                      <IxTypography bold className={styles.fileName}>
                        {fileItem.file.name}
                      </IxTypography>
                      <IxTypography className={styles.fileSize}>
                        {formatFileSize(fileItem.file.size)}
                      </IxTypography>
                    </div>
                    <div className={styles.fileActions}>
                      <IxChip className={styles.fileChip}>
                        {fileItem.file.type || 'Unknown type'}
                      </IxChip>
                      <IxIconButton
                        variant="tertiary"
                        icon={iconTrashcan}
                        onClick={() => removeFile(fileItem.id)}
                        aria-label={`Remove ${fileItem.file.name}`}
                      ></IxIconButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </IxCardContent>
      </IxCard>
    </div>
  );
}
