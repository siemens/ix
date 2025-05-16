import { FrameworkDelegate, registerFrameworkDelegate } from '@siemens/ix';
import { VNode } from 'vue';

let viewInstance = 0;

function createViewInstance() {
  return `ix-vue-view-${viewInstance++}`;
}

export class VueFrameworkDelegate implements FrameworkDelegate {
  attachViewToPortal?: (id: string, view: VNode) => Promise<Element>;
  removeViewFromPortal?: (id: string) => void;

  resolvePortalInitPromise: (() => void) | undefined;
  portalInitPromise: Promise<void>;

  constructor() {
    this.portalInitPromise = new Promise<void>(
      (resolve) => (this.resolvePortalInitPromise = resolve)
    );
  }

  async attachView<R = HTMLElement>(view: VNode): Promise<R> {
    const id = createViewInstance();

    await this.isPortalReady();

    if (this.attachViewToPortal) {
      const element = await this.attachViewToPortal(id, view);
      return element as R;
    }

    console.error('Portal could not be initialized');
  }

  async removeView(view: Element): Promise<void> {
    if (!this.removeViewFromPortal) {
      return;
    }

    const parent = view.parentElement;
    const id = parent.getAttribute('data-portal-id');

    this.removeViewFromPortal(id);
  }

  portalReady() {
    this.resolvePortalInitPromise?.();
  }

  private isPortalReady() {
    return this.portalInitPromise;
  }
}

export const vueFrameworkDelegate = new VueFrameworkDelegate();
registerFrameworkDelegate(vueFrameworkDelegate);
