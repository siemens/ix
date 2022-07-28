/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

// tslint:disable-next-line: variable-name
/**
 * @deprecated Will be removed in 7.0.0 and will not be updated anymore. (See https://***REMOVED***/pd-de/ui-library/core-ui/-/issues/547)
 */
export const theme_base_colors = {
  color_1: '#fff',
  color_1_85: 'rgba(255, 255, 255, 0.85)',
  color_1_60: 'rgba(255, 255, 255, 0.6)',
  color_1_40: 'rgba(255, 255, 255, 0.4)',
  color_1_25: 'rgba(255, 255, 255, 0.25)',
  color_1_10: 'rgba(255, 255, 255, 0.14)',
  color_1_05: 'rgba(255, 255, 255, 0.07)',
  color_2: '#f5f8fa',
  color_3: '#ebf0f5',
  color_3_60: 'rgba(235, 240, 245, 0.6)',
  color_3_40: 'rgba(235, 240, 245, 0.4)',
  color_3_25: 'rgba(235, 240, 245, 0.25)',
  color_3_15: 'rgba(235, 240, 245, 0.15)',
  color_4: '#dfe6ed',
  color_4a: '#d6dfe7',
  color_5: '#ced9e2',
  color_6: '#becdd7',
  color_7: '#879baa',
  color_8: '#6e7d89',
  color_8_60: 'rgba(65, 95, 117, 0.6)',
  color_8_40: 'rgba(65, 95, 117, 0.4)',
  color_9: '#555f69',
  color_9a: '#3e4b51',
  color_10: '#3c464b',
  color_11: '#293339',
  color_12: '#172126',
  color_12_55: 'rgba(23, 33, 38, 0.55)',
  color_12_40: 'rgba(23, 33, 38, 0.4)',
  color_12_25: 'rgba(23, 33, 38, 0.25)',
  color_12_15: 'rgba(23, 33, 38, 0.15)',
  color_13: '#10181c',
  color_14: 'rgba(0, 0, 0, 1)',
  color_14_75: 'rgba(0, 0, 0, 0.75)',
  color_14_55: 'rgba(0, 0, 0, 0.55)',
  color_14_40: 'rgba(0, 0, 0, 0.4)',
  color_14_30: 'rgba(0, 0, 0, 0.3)',
  color_14_15: 'rgba(0, 0, 0, 0.15)',
  color_14_10: 'rgba(0, 0, 0, 0.1)',
  color_14_05: 'rgba(0, 0, 0, 0.05)',
  color_teal: '#0e777c',
  color_light_teal: '#41aaaa',
  color_light_teal_25: 'rgba(50, 160, 160, 0.25)',
  color_light_teal_15: 'rgba(50, 160, 160, 0.15)',
  color_red: '#dc0031',
  color_orange: '#eb780a',
  color_yellow: '#ffb900',
  color_green: '#339b00',
  color_marine: '#1e54b3',
};

// tslint:disable-next-line: variable-name
/**
 * @deprecated Will be removed in 7.0.0 and will not be updated anymore. (See https://***REMOVED***/pd-de/ui-library/core-ui/-/issues/547)
 */
export const theme_colors = {
  'color-primary': {
    light: theme_base_colors.color_teal,
    dark: theme_base_colors.color_light_teal,
  },
  'color-1': {
    light: theme_base_colors.color_1,
    dark: theme_base_colors.color_13,
  },
  'color-2': {
    light: theme_base_colors.color_2,
    dark: theme_base_colors.color_12,
  },
  'color-3': {
    light: theme_base_colors.color_3,
    dark: theme_base_colors.color_11,
  },
  'color-4': {
    light: theme_base_colors.color_4,
    dark: theme_base_colors.color_10,
  },
  'color-4-a': {
    light: theme_base_colors.color_4a,
    dark: theme_base_colors.color_9a,
  },
  'color-5': {
    light: theme_base_colors.color_5,
    dark: theme_base_colors.color_9,
  },
  'color-6': {
    light: theme_base_colors.color_6,
    dark: theme_base_colors.color_8,
  },
  'color-7': {
    light: theme_base_colors.color_7,
    dark: theme_base_colors.color_7,
  },
  'color-alarm': {
    light: theme_base_colors.color_red,
    dark: theme_base_colors.color_red,
  },
  'color-critical': {
    light: theme_base_colors.color_orange,
    dark: theme_base_colors.color_orange,
  },
  'color-info': {
    light: theme_base_colors.color_marine,
    dark: theme_base_colors.color_marine,
  },
  'color-neutral': {
    light: theme_base_colors.color_7,
    dark: theme_base_colors.color_7,
  },
  'color-success': {
    light: theme_base_colors.color_green,
    dark: theme_base_colors.color_green,
  },
  'color-warning': {
    light: theme_base_colors.color_yellow,
    dark: theme_base_colors.color_yellow,
  },
  'color-contrast-text': {
    light: theme_base_colors.color_14,
    dark: theme_base_colors.color_1,
  },
  'color-std-text': {
    light: theme_base_colors.color_14_75,
    dark: theme_base_colors.color_1_85,
  },
  'color-soft-text': {
    light: theme_base_colors.color_14_55,
    dark: theme_base_colors.color_1_60,
  },
  'color-weak-text': {
    light: theme_base_colors.color_14_30,
    dark: theme_base_colors.color_1_40,
  },
  'color-inv-contrast-text': {
    light: theme_base_colors.color_1,
    dark: theme_base_colors.color_14,
  },
  'color-inv-std-text': {
    light: theme_base_colors.color_1_85,
    dark: theme_base_colors.color_14_75,
  },
  'color-inv-soft-text': {
    light: theme_base_colors.color_1_60,
    dark: theme_base_colors.color_14_55,
  },
  'color-inv-weak-text': {
    light: theme_base_colors.color_1_40,
    dark: theme_base_colors.color_14_30,
  },
  'color-disabled-btn': {
    light: theme_base_colors.color_12_25,
    dark: theme_base_colors.color_1_25,
  },
};
