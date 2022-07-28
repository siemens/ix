/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { newSpecPage } from '@stencil/core/testing';
import { CwToast } from '../cw-toast';

describe('cw-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CwToast],
      html: `<cw-toast toast-title="Test title">Test message</cw-toast>`,
    });

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <cw-toast class=\"animate__animated animate__fadeIn\" toast-title=\"Test title\">
      <div class=\"toast-body\">
        <div class=\"toast-content\">
          <div class=\"text-default-title-single toast-title\">
            Test title
          </div>
          <div class=\"text-default toast-message\">
            Test message
          </div>
        </div>
        <div class=\"toast-close\">
          <cw-icon-button icon=\"close\" ghost=\"\" size=\"24\"></cw-icon-button>
        </div>
      </div>
      <div class=\"toast-progress-bar toast-progress-bar--animated\" style=\"animation-duration: 5000ms; animation-play-state: running;\"></div>
    </cw-toast>
      `);
  });
});
