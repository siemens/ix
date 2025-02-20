export function waitForHydration(
  element: HTMLElement,
  timeout = 1000
): Promise<void> {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (element.classList.contains('hydrated')) {
        clearInterval(interval);
        clearTimeout(timeoutId);
        resolve();
      }
    }, 50);

    const timeoutId = setTimeout(() => {
      clearInterval(interval);
      reject(new Error('Timeout waiting for hydration'));
    }, timeout);
  });
}
