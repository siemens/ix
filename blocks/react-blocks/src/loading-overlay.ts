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
  loadingOverlay.setAttribute('role', 'status');
  loadingOverlay.setAttribute('aria-live', 'polite');
  loadingOverlay.setAttribute('aria-label', 'We prepare your preview');
  loadingOverlay.style.position = 'fixed';
  loadingOverlay.style.inset = '0';
  loadingOverlay.style.zIndex = '9999';
  loadingOverlay.style.display = 'grid';
  loadingOverlay.style.placeItems = 'center';
  loadingOverlay.style.padding = '24px';
  loadingOverlay.style.background =
    'var(--theme-color-1, rgba(255, 255, 255, 0.96))';
  loadingOverlay.style.backdropFilter = 'blur(6px)';
  loadingOverlay.style.transition = 'opacity 180ms ease';
  loadingOverlay.style.opacity = '1';

  const loadingPanel = document.createElement('div');
  loadingPanel.style.minWidth = 'min(320px, calc(100vw - 48px))';
  loadingPanel.style.maxWidth = '420px';
  loadingPanel.style.borderRadius = '16px';
  loadingPanel.style.padding = '24px';
  loadingPanel.style.background = 'var(--theme-color-2, #ffffff)';
  loadingPanel.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.18)';
  loadingPanel.style.border =
    '1px solid var(--theme-color-x-weak-bdr, rgba(0, 0, 0, 0.08))';
  loadingPanel.style.display = 'grid';
  loadingPanel.style.justifyItems = 'center';
  loadingPanel.style.gap = '16px';
  loadingPanel.style.textAlign = 'center';
  loadingPanel.style.color = 'var(--theme-color-std-text, #111111)';
  loadingPanel.style.fontFamily = 'Siemens Sans, sans-serif';

  const loadingSpinner = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  loadingSpinner.setAttribute('aria-hidden', 'true');
  loadingSpinner.setAttribute('viewBox', '0 0 64 64');
  loadingSpinner.setAttribute('width', '64');
  loadingSpinner.setAttribute('height', '64');
  loadingSpinner.style.overflow = 'visible';

  const loadingSpinnerTrack = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );
  loadingSpinnerTrack.setAttribute('cx', '32');
  loadingSpinnerTrack.setAttribute('cy', '32');
  loadingSpinnerTrack.setAttribute('r', '20');
  loadingSpinnerTrack.setAttribute('fill', 'none');
  loadingSpinnerTrack.setAttribute(
    'stroke',
    'var(--theme-color-x-weak-bdr, rgba(0, 0, 0, 0.12))'
  );
  loadingSpinnerTrack.setAttribute('stroke-width', '6');

  const loadingSpinnerArc = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  loadingSpinnerArc.setAttribute('d', 'M 32 12 A 20 20 0 0 1 52 32');
  loadingSpinnerArc.setAttribute('fill', 'none');
  loadingSpinnerArc.setAttribute(
    'stroke',
    'var(--theme-color-primary, #007993)'
  );
  loadingSpinnerArc.setAttribute('stroke-width', '6');
  loadingSpinnerArc.setAttribute('stroke-linecap', 'round');
  loadingSpinnerArc.style.transformOrigin = '32px 32px';
  loadingSpinnerArc.style.animation =
    'ix-preview-loading-orbit 1s cubic-bezier(0.6, 0, 0.4, 1) infinite';

  const loadingSpinnerCore = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );
  loadingSpinnerCore.setAttribute('cx', '32');
  loadingSpinnerCore.setAttribute('cy', '32');
  loadingSpinnerCore.setAttribute('r', '4');
  loadingSpinnerCore.setAttribute(
    'fill',
    'var(--theme-color-primary, #007993)'
  );
  loadingSpinnerCore.style.transformOrigin = '32px 32px';
  loadingSpinnerCore.style.animation =
    'ix-preview-loading-pulse 1s ease-in-out infinite';

  const loadingMessage = document.createElement('div');
  loadingMessage.textContent = 'We prepare your preview';
  loadingMessage.style.fontSize = '1rem';
  loadingMessage.style.fontWeight = '600';
  loadingMessage.style.lineHeight = '1.4';

  loadingSpinner.append(
    loadingSpinnerTrack,
    loadingSpinnerArc,
    loadingSpinnerCore
  );
  loadingPanel.append(loadingSpinner, loadingMessage);
  loadingOverlay.append(loadingPanel);
  appendToDocument(loadingOverlay);

  const loadingSpinnerKeyframes = document.createElement('style');
  loadingSpinnerKeyframes.textContent = `
    @keyframes ix-preview-loading-orbit {
      0% {
        transform: rotate(0deg) scale(0.92);
      }

      50% {
        transform: rotate(180deg) scale(1);
      }

      100% {
        transform: rotate(360deg) scale(0.92);
      }
    }

    @keyframes ix-preview-loading-pulse {
      0%,
      100% {
        transform: scale(0.85);
        opacity: 0.7;
      }

      50% {
        transform: scale(1.15);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(loadingSpinnerKeyframes);

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

    loadingOverlay.style.opacity = '0';
    window.setTimeout(() => {
      loadingOverlay.remove();
      loadingSpinnerKeyframes.remove();
    }, 180);
  };
};
