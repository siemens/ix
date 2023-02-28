/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs';
import fse from 'fs-extra';
import fsp from 'fs/promises';
import path from 'path';

function isExternalTemplate(componentCode: string) {
  return /@Component.*templateUrl.*}\)/gms.test(componentCode);
}

export async function writeAngularPreviews(
  staticPath: string,
  htmlPreviewPath: string,
  __dirname: string,
  generateMarkdown: (previewPath: any, type: any, code: any) => string
) {
  const angularPreviewSourceCodePath = path.join(staticPath, 'angular');
  fse.ensureDirSync(angularPreviewSourceCodePath);

  const angularPreviewPath = path.join(
    __dirname,
    '../angular-test-app/src/preview-examples'
  );

  const angularPreviews = fs.readdirSync(angularPreviewPath);

  await Promise.all(
    angularPreviews.flatMap((previewPath) => {
      const writePath = path.join(
        __dirname,
        'docs',
        'auto-generated',
        'previews',
        'angular'
      );
      fse.ensureDirSync(writePath);
      const fileType = previewPath.substring(previewPath.lastIndexOf('.') + 1);

      const code = fs
        .readFileSync(path.join(angularPreviewPath, previewPath))
        .toString();
      return [
        fsp.writeFile(
          path.join(writePath, `${previewPath}.md`),
          generateMarkdown(previewPath, fileType, code)
        ),
        fsp.writeFile(
          path.join(angularPreviewSourceCodePath, `${previewPath}.txt`),
          code
        ),
      ];
    })
  );
}
