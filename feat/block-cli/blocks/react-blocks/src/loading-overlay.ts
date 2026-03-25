const MINIMUM_LOADING_TIME_MS = 1000;
const OVERLAY_MESSAGE_TYPE = 'ix-preview-loading-overlay';
const OVERLAY_MESSAGE_SOURCE = 'ix-react-blocks';

type LoadingOverlayHostMessage = {
  source: typeof OVERLAY_MESSAGE_SOURCE;
  type: typeof OVERLAY_MESSAGE_TYPE;
  visible: boolean;
  message: string;
};

const LOADING_MESSAGE = 'We prepare your preview';

const getHostTargetOrigin = () => {
  if (!document.referrer) {
    return '*';
  }

  try {
    return new URL(document.referrer).origin;
  } catch {
    return '*';
  }
};

const notifyHost = (visible: boolean) => {
  if (window.parent === window) {
    return;
  }

  const message: LoadingOverlayHostMessage = {
    source: OVERLAY_MESSAGE_SOURCE,
    type: OVERLAY_MESSAGE_TYPE,
    visible,
    message: LOADING_MESSAGE,
  };

  window.parent.postMessage(message, getHostTargetOrigin());
};

export const showLoadingOverlay = () => {
  notifyHost(true);

  const waitForWindowLoad =
    document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise<void>((resolve) => {
          window.addEventListener('load', () => resolve(), { once: true });
        });

  const waitForMinimumDelay = new Promise<void>((resolve) => {
    window.setTimeout(resolve, MINIMUM_LOADING_TIME_MS);
  });

  return async (resourcesReady: Promise<unknown> = Promise.resolve()) => {
    await Promise.all([waitForWindowLoad, waitForMinimumDelay, resourcesReady]);
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => resolve());
      });
    });

    notifyHost(false);
  };
};
