/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, test } from '@playwright/test';
import type { SetStoriesStory } from '@storybook/types';
import storiesFile from './../storybook-static/stories.json' assert { type: 'json' };

Object.keys(storiesFile.stories).forEach((storyName) => {
  const story = storiesFile.stories[storyName] as SetStoriesStory;

  test.describe(story.kind, () => {
    test(story.name, async ({ page }) => {
      await page.goto(
        `http://127.0.0.1:8080/iframe.html?id=${story.id}&viewMode=story`
      );

      await expect(page).toHaveScreenshot();
    });
  });
});
