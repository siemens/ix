<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxInfoPage } from '@siemens/ix-vue';
</script>

<template>
  <IxInfoPage
    title-text="Request timeout"
    copy-text="The server took too long to respond."
    instructions="Check your connection and try again."
  >
    <svg
      slot="image"
      width="260"
      height="196"
      viewBox="0 0 260 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g clip-path="url(#clip0_42_1159)">
        <path d="M8 168V160H0L0 168H8Z" fill="#00C1B6" />
        <path d="M28 168V160H36V168H28Z" fill="#00C1B6" />
        <path d="M64 168V160H56V168H64Z" fill="#00C1B6" />
        <path d="M36 196V188H28V196H36Z" fill="#00C1B6" />
        <path d="M8 140V132H0L0 140H8Z" fill="#00C1B6" />
        <path d="M36 140V132H28V140H36Z" fill="#00C1B6" />
        <path
          d="M224 8.00018L232 8.00018L232 0.000183105L224 0.000182756L224 8.00018Z"
          fill="#00C1B6"
        />
        <path d="M224 36L232 36L232 28L224 28L224 36Z" fill="#00C1B6" />
        <path
          d="M224 64.0002L232 64.0002L232 56.0002L224 56.0002L224 64.0002Z"
          fill="#00C1B6"
        />
        <path d="M196 36L204 36L204 28L196 28L196 36Z" fill="#00C1B6" />
        <path
          d="M252 8.00018L260 8.00018L260 0.000183105L252 0.000182756L252 8.00018Z"
          fill="#00C1B6"
        />
        <path
          d="M252 36.0002L260 36.0002L260 28.0002L252 28.0002L252 36.0002Z"
          fill="#00C1B6"
        />
        <circle
          opacity="0.1"
          cx="130.266"
          cy="98.0127"
          r="66"
          transform="rotate(90 130.266 98.0127)"
          fill="#00D7A0"
        />
        <path
          opacity="0.3"
          d="M168.426 48.3673V36.2905H91.9787V48.3704C91.9787 65.3822 101.84 79.9498 115.824 85.9804C120.399 87.9531 123.384 92.6852 123.384 97.9261C123.384 103.17 120.399 107.899 115.824 109.875C101.84 115.905 91.9787 130.473 91.9787 147.485V159.565H168.426V147.485C168.426 130.473 158.564 115.905 144.58 109.875C140.005 107.902 137.021 103.17 137.021 97.9292C137.021 92.6852 140.005 87.9563 144.58 85.9804C158.564 79.9498 168.426 65.3822 168.426 48.3704V48.3673Z"
          fill="#00D7A0"
        />
        <path
          d="M160.446 64.0934C156.703 71.4282 150.519 77.3462 142.692 80.6217C136.792 83.0916 132.752 88.5609 131.932 94.9371V99.7506C131.953 99.8924 131.969 100.035 131.991 100.176H131.932V136.14L162.199 159.359C162.456 159.62 133.001 159.469 129.397 159.359C125.794 159.469 96.7016 159.621 96.9554 159.359L127.222 136.14V100.179H127.163C127.185 100.038 127.204 99.8924 127.222 99.7506V94.9401C126.399 88.5608 122.362 83.0916 116.462 80.6217C108.638 77.3464 102.454 71.4273 98.7113 64.0934H160.446Z"
          fill="#00D7A0"
        />
        <path d="M176 28H84.0002V36.4848H176V28Z" fill="#009999" />
        <path d="M176 159.515H84.0002V168H176V159.515Z" fill="#009999" />
      </g>
      <defs>
        <clipPath id="clip0_42_1159">
          <rect width="260" height="196" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <IxButton slot="actions" variant="secondary">Go back</IxButton>
    <IxButton slot="actions">Try again</IxButton>
  </IxInfoPage>
</template>
