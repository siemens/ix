const MINIMUM_LOADING_TIME_MS = 800;
const OVERLAY_MESSAGE_TYPE = 'ix-preview-loading-overlay';
const OVERLAY_MESSAGE_SOURCE = 'ix-react-blocks';
let latestLoadingRequestId = 0;

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
  const loadingRequestId = ++latestLoadingRequestId;
  notifyHost(true);

  const waitForDocumentReady =
    document.readyState === 'loading'
      ? new Promise<void>((resolve) => {
          window.addEventListener('DOMContentLoaded', () => resolve(), {
            once: true,
          });
        })
      : Promise.resolve();

  const waitForMinimumDelay = new Promise<void>((resolve) => {
    window.setTimeout(resolve, MINIMUM_LOADING_TIME_MS);
  });

  return async (resourcesReady: Promise<unknown> = Promise.resolve()) => {
    await Promise.all([
      waitForDocumentReady,
      waitForMinimumDelay,
      resourcesReady,
    ]);
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => resolve());
      });
    });

    if (loadingRequestId !== latestLoadingRequestId) {
      return;
    }

    notifyHost(false);
  };
};
