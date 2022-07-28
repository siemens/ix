/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
export interface PreviewProps {
  name: string;
  height: string;
  hideCode?: boolean;
  framework?: 'webcomponent' | 'angular';
  activeTab?: string;
  theme?: string;
}
