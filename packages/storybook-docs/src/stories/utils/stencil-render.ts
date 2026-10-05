import { render, type VNode } from '@stencil/core';

export function stencil<T>(callback: (args: T) => VNode) {
  return (args: T) => {
    const container = document.createElement('div');
    render(callback(args), container);
    return container.firstElementChild as HTMLElement;
  }
}
