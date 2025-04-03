/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const markdownMeta = [
  '---',
  'sidebar_title: Changelog',
  'hide_table_of_contents: true',
  'title: Changelog',
  "doc-type: 'banner'",
  '---',
].join('\n');

function getChangelogMarkdown(
  releases: {
    html_url: string;
    id: number;
    name: string | null;
    body?: string | null | undefined;
    published_at: string | null;
  }[]
) {
  const markdownReleases = releases.map((release) => {
    const markdownReleaseTitle = `## [${release.name}](${release.html_url}) (${release.published_at})`;
    const markdownReleaseBody = release.body;
    return [markdownReleaseTitle, markdownReleaseBody].join('\n');
  });

  return [markdownMeta, ...markdownReleases].join('\n');
}

async function fetchGitHubReleases() {
  const { Octokit } = await import('octokit');
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
  const result = await octokit.rest.repos.listReleases({
    owner: 'siemens',
    repo: 'ix',
  });

  if (result.status !== 200) {
    throw new Error('Failed to fetch releases');
  }

  return result.data;
}

export async function fetchChangelog() {
  const releases = await fetchGitHubReleases();
  const markdown = getChangelogMarkdown(releases);

  return markdown;
}
