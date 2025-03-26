import { Col, Layout, Item } from '@site/src/components/Admonition';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  'col': Col,
  'layout': Layout,
  'item': Item,
};

export default AdmonitionTypes;
