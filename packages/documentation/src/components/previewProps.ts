export interface PreviewProps {
  name: string;
  height: string;
  hideCode?: boolean;
  framework?: 'webcomponent' | 'angular';
  activeTab?: string;
  theme?: string;
}
