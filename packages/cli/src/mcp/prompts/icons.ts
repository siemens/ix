/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import dedent from 'dedent';

export const usageReact = dedent`\`\`\`tsx
            import { iconAddShieldHalf } from '@siemens/ix-icons/icons';

            <IxIcon name={iconAddShieldHalf}></IxIcon>
            \`\`\``;

export const usageAngular = dedent`

      The usage in Angular is as follows:

      "addIcons" is also not necessary if the svg folder is provided as asset in the angular.json file like:
      \`\`\`
      "assets": [
        "src/favicon.ico",
        "src/assets",
        {
        "glob": "**/*.svg",
        "input": "node_modules/@siemens/ix-icons/svg",
        "output": "./svg"
        }
      ],
      \`\`\`

      Important: Preferred solution is using the icon import as class property, but keep it consistent with your project style.

      \`\`\`import { Component } from '@angular/core';
            import { IxIcon } from '@siemens/ix-angular/standalone';
            import { addIcons } from '@siemens/ix-icons';
            import { iconStar } from '@siemens/ix-icons/icons';

            @Component({
              selector: 'app-example',
              template: \`
                <ix-icon [name]="icons.iconStar"></ix-icon>
                <ix-icon name="star"></ix-icon>
              \`,
              styleUrls: ['./add-icons.css'],
              imports: [IxIcon],
            })
            export default class AddIcons {
              // Make the icons available as class property for usage in the template
              readonly icons = { iconStar, iconStarFilled };

              constructor() {
                // Register the icons you want to use in your application as string name
                addIcons({ iconStar, iconStarFilled });
              }
            }\`\`\``;
