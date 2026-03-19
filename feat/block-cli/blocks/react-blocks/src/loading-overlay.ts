import './loading-overlay.css';

const MINIMUM_LOADING_TIME_MS = 1000;

const appendToDocument = (element: HTMLElement) => {
  if (document.body) {
    document.body.appendChild(element);
    return;
  }

  window.addEventListener(
    'DOMContentLoaded',
    () => {
      document.body.appendChild(element);
    },
    { once: true }
  );
};

export const showLoadingOverlay = () => {
  const loadingOverlay = document.createElement('div');
  loadingOverlay.className = 'ix-preview-loading-overlay';
  loadingOverlay.setAttribute('role', 'status');
  loadingOverlay.setAttribute('aria-live', 'polite');
  loadingOverlay.setAttribute('aria-label', 'We prepare your preview');

  const loadingPanel = document.createElement('div');
  loadingPanel.className = 'ix-preview-loading-panel';

  const loadingSpinner = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  loadingSpinner.classList.add('ix-preview-loading-spinner');
  loadingSpinner.setAttribute('aria-hidden', 'true');
  loadingSpinner.setAttribute('viewBox', '0 0 64 64');
  loadingSpinner.setAttribute('width', '64');
  loadingSpinner.setAttribute('height', '64');

  const loadingSpinnerTrack = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );
  loadingSpinnerTrack.classList.add('ix-preview-loading-spinner-track');
  loadingSpinnerTrack.setAttribute('cx', '32');
  loadingSpinnerTrack.setAttribute('cy', '32');
  loadingSpinnerTrack.setAttribute('r', '20');
  loadingSpinnerTrack.setAttribute('fill', 'none');
  loadingSpinnerTrack.setAttribute('stroke-width', '6');

  const loadingSpinnerArc = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  loadingSpinnerArc.classList.add('ix-preview-loading-spinner-arc');
  loadingSpinnerArc.setAttribute('d', 'M 32 12 A 20 20 0 0 1 52 32');
  loadingSpinnerArc.setAttribute('fill', 'none');
  loadingSpinnerArc.setAttribute('stroke-width', '6');
  loadingSpinnerArc.setAttribute('stroke-linecap', 'round');

  const loadingSpinnerCore = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );
  loadingSpinnerCore.classList.add('ix-preview-loading-spinner-core');
  loadingSpinnerCore.setAttribute('cx', '32');
  loadingSpinnerCore.setAttribute('cy', '32');
  loadingSpinnerCore.setAttribute('r', '4');

  const loadingMessage = document.createElement('div');
  loadingMessage.className = 'ix-preview-loading-message';
  loadingMessage.textContent = 'We prepare your preview';

  loadingSpinner.append(
    loadingSpinnerTrack,
    loadingSpinnerArc,
    loadingSpinnerCore
  );
  loadingPanel.append(loadingSpinner, loadingMessage);
  loadingOverlay.append(loadingPanel);
  appendToDocument(loadingOverlay);

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

    loadingOverlay.classList.add('ix-preview-loading-overlay--hidden');
    window.setTimeout(() => {
      loadingOverlay.remove();
    }, 180);
  };
};
