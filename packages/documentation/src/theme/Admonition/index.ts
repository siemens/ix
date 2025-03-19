import {type ComponentType, type ReactNode, createElement} from 'react';
import {processAdmonitionProps} from '@docusaurus/theme-common';
import type {Props} from '@theme/Admonition';
import AdmonitionTypes from '@site/src/components/Admonition/Types';

function getAdmonitionTypeComponent(type: string): ComponentType<Props> {
  const component = AdmonitionTypes[type];
  if (component) {
    return component;
  }
  console.warn(
    `No admonition component found for admonition type "${type}". Using Info as fallback.`,
  );
  return AdmonitionTypes.info!;
}

export default function Admonition(unprocessedProps: Props): ReactNode {
  const props = processAdmonitionProps(unprocessedProps);
  const AdmonitionTypeComponent = getAdmonitionTypeComponent(props.type);
  return createElement(AdmonitionTypeComponent, props);
}
