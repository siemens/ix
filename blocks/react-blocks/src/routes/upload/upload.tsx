/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { iconTrashcan, iconTxtDocument } from '@siemens/ix-icons/icons';
import { IxIcon, IxIconButton, IxUpload } from '@siemens/ix-react';
import { useState } from 'react';
import styles from './upload.module.css';

interface UploadedFileItem {
  id: string;
  name: string;
}

const initialFiles: UploadedFileItem[] = [
  {
    id: 'example-document-1',
    name: 'example_document.txt',
  },
  {
    id: 'example-document-2',
    name: 'example_document.txt',
  },
  {
    id: 'example-document-3',
    name: 'example_document.txt',
  },
];

export default function Upload() {
  const [files, setFiles] = useState<UploadedFileItem[]>(initialFiles);

  const handleFilesChanged = (event: CustomEvent<File[]>) => {
    const nextFiles = event.detail.map((file, index) => ({
      id: `${file.name}-${Date.now()}-${index}`,
      name: file.name,
    }));

    if (nextFiles.length === 0) {
      return;
    }

    setFiles((currentFiles) => [...currentFiles, ...nextFiles]);
  };

  const removeFile = (id: string) => {
    setFiles((currentFiles) => currentFiles.filter((file) => file.id !== id));
  };

  return (
    <section className={styles.panel} aria-label="Upload example">
      <IxUpload multiple onFilesChanged={handleFilesChanged} />

      <ul className={styles.fileList} aria-label="Uploaded files">
        {files.map((file) => (
          <li key={file.id} className={styles.fileItem}>
            <span className={styles.fileIcon} aria-hidden="true">
              <IxIcon name={iconTxtDocument} size="24" />
            </span>

            <span className={styles.fileName}>{file.name}</span>

            <IxIconButton
              aria-label={`Remove ${file.name}`}
              className={styles.removeButton}
              icon={iconTrashcan}
              onClick={() => removeFile(file.id)}
              variant="tertiary"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
