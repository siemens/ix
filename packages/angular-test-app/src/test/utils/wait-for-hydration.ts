export function waitForHydration(
  element: HTMLElement,
  timeout = 5000
): Promise<void> {
  return new Promise((resolve, reject) => {
    const interval = 50;
    let elapsedTime = 0;

    const checkClass = () => {
      if (element.classList.contains('hydrated')) {
        resolve();
      } else if (elapsedTime >= timeout) {
        reject(new Error(`Timeout waiting for hydration`));
      } else {
        elapsedTime += interval;
        setTimeout(checkClass, interval);
      }
    };

    checkClass();
  });
}
