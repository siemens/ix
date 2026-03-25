/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IxIcon, IxIconButton, IxUpload } from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import { iconTrashcan, iconTxtDocument } from '@siemens/ix-icons/icons';

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

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, IxIcon, IxIconButton, IxUpload],
  templateUrl: './upload.html',
  styleUrl: './upload.css',
})
export class Upload {
  readonly icons = {
    iconTrashcan,
    iconTxtDocument,
  };

  files: UploadedFileItem[] = [...initialFiles];

  constructor() {
    addIcons({ iconTrashcan, iconTxtDocument });
  }

  onFilesChanged(event: CustomEvent<File[]>): void {
    const nextFiles = event.detail.map((file, index) => ({
      id: `${file.name}-${Date.now()}-${index}`,
      name: file.name,
    }));

    if (nextFiles.length === 0) {
      return;
    }

    this.files = [...this.files, ...nextFiles];
  }

  removeFile(id: string): void {
    this.files = this.files.filter((file) => file.id !== id);
  }
}