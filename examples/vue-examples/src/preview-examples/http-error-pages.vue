<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  IxButton,
  IxInfoPage,
  IxSelect,
  IxSelectItem,
} from '@siemens/ix-vue';
import { computed, ref } from 'vue';

const errorPages = {
  '400': {
    title: '400 Bad Request',
    instructions:
      'Failed to process the request. Check your request and try again.',
    illustration: {
      alt: 'Bad Request',
      src: new URL(
        '../../../../packages/storybook-docs/src/stories/http-error-pages/document.svg',
        import.meta.url
      ).href,
    },
    actions: ['Go back', 'Open homepage'],
  },
  '401': {
    title: '401 Unauthorized',
    instructions:
      'Authorization is required to access this page. Check your credentials and try again.',
    illustration: {
      alt: 'Unauthorized',
      src: new URL(
        '../../../../packages/storybook-docs/src/stories/http-error-pages/lock.svg',
        import.meta.url
      ).href,
    },
    actions: ['Go back', 'Log in'],
  },
  '404': {
    title: '404 Not Found',
    instructions:
      'We are not able to find that page. It may have been deleted or moved.',
    illustration: {
      alt: 'Not Found',
      src: new URL(
        '../../../../packages/storybook-docs/src/stories/http-error-pages/magnifier.svg',
        import.meta.url
      ).href,
    },
    actions: ['Search app', 'Open homepage'],
  },
  '418': {
    title: "418 I'm a Teapot",
    instructions:
      "The server refuses to brew coffee because, well... it's a teapot.",
    illustration: {
      alt: "I'm a Teapot",
      src: new URL(
        '../../../../packages/storybook-docs/src/stories/http-error-pages/teapot.svg',
        import.meta.url
      ).href,
    },
    actions: [],
  },
  '500': {
    title: '500 Internal Server Error',
    instructions:
      'This page is not available right now. Try refreshing the page or try again later.',
    illustration: {
      alt: 'Internal Server Error',
      src: new URL(
        '../../../../packages/storybook-docs/src/stories/http-error-pages/plug.svg',
        import.meta.url
      ).href,
    },
    actions: ['Go back', 'Open homepage'],
  },
  '504': {
    title: '504 Gateway Timeout',
    instructions:
      'The server is taking too long to respond. Try again or change your timeout settings.',
    illustration: {
      alt: 'Gateway Timeout',
      src: new URL(
        '../../../../packages/storybook-docs/src/stories/http-error-pages/hourglass.svg',
        import.meta.url
      ).href,
    },
    actions: ['Go back', 'Open homepage'],
  },
} as const;

type ErrorCode = keyof typeof errorPages;

const errorCode = ref<ErrorCode>('404');
const errorPage = computed(() => errorPages[errorCode.value]);

const selectErrorPage = (event: CustomEvent<string | string[]>) => {
  errorCode.value = event.detail as ErrorCode;
};
</script>

<template>
  <div class="example">
    <IxSelect
      label="HTTP error code"
      :value="errorCode"
      @valueChange="selectErrorPage"
    >
      <IxSelectItem
        v-for="(page, code) in errorPages"
        :key="code"
        :label="page.title"
        :value="code"
      />
    </IxSelect>

    <IxInfoPage
      class="error-page"
      :title-text="errorPage.title"
      :instructions="errorPage.instructions"
    >
      <img
        slot="image"
        :src="errorPage.illustration.src"
        :alt="errorPage.illustration.alt"
        width="260"
        height="196"
      />
      <IxButton
        v-for="(action, index) in errorPage.actions"
        :key="action"
        slot="actions"
        :variant="index === 0 ? 'secondary' : 'primary'"
      >
        {{ action }}
      </IxButton>
    </IxInfoPage>
  </div>
</template>

<style scoped>
.example {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.error-page {
  flex: 1;
  min-height: 0;
}
</style>
