/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require('fs');
const path = require('path');

function deleteFolderContents(folderPath) {
  fs.readdir(folderPath, (err, files) => {
      if (err) throw err;

      files.forEach(file => {
          let filePath = path.join(folderPath, file);
          fs.unlink(filePath, err => {
              if (err) throw err;
              console.log(`${file} was deleted from ${folderPath}`);
          });
      });
  });
}

function copyFiles(sourceDir, targetDirs) {
    fs.readdir(sourceDir, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            let sourceFile = path.join(sourceDir, file);

            targetDirs.forEach(dir => {
                let destFile = path.join(dir, file);
                fs.copyFile(sourceFile, destFile, err => {
                    if (err) throw err;
                    console.log(`${file} was copied to ${dir}`);
                });
            });
        });
    });
}

const htmlRootPath = path.join('..', 'html-test-app')
const angularRootPath = path.join('..', 'angular-test-app')
const reactRootPath = path.join('..', 'react-test-app')
const vueRootPath = path.join('..', 'vue-test-app')

const stylesPath = path.join("src", "preview-examples", "styles-auto-gen")

const htmlDestination = path.join(htmlRootPath, stylesPath)
const angularDestination = path.join(angularRootPath, stylesPath)
const reactDestination = path.join(reactRootPath, stylesPath)
const vueDestination = path.join(vueRootPath, stylesPath)

const destinationDirs = [htmlDestination, angularDestination, reactDestination, vueDestination]

// delete folder contents
destinationDirs.forEach(dir => deleteFolderContents(dir));

// copy files
copyFiles(path.join(".", "src"), destinationDirs);
