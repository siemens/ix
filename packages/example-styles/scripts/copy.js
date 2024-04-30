/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require('fs');
const path = require('path');

function deleteFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmdirSync(folderPath, { recursive: true });
    console.log(`${folderPath} is deleted!`);
  }
}

function createFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`${folderPath} is created!`);
  }
}

function copyFiles(sourceDir, targetDirs) {
  fs.readdir(sourceDir, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
      let sourceFile = path.join(sourceDir, file);

      targetDirs.forEach((dir) => {
        let destFile = path.join(dir, file);
        fs.copyFile(sourceFile, destFile, (err) => {
          if (err) throw err;
          console.log(`${file} was copied to ${dir}`);
        });
      });
    });
  });
}

const distPath = path.join('.', 'dist');

const destinationDirs = [distPath];

// delete folders
destinationDirs.forEach((dir) => deleteFolder(dir));

// recreate folders
destinationDirs.forEach((dir) => createFolder(dir));

// copy files
copyFiles(path.join('.', 'src'), destinationDirs);
