/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

export type ToastType = 'info' | 'success' | 'error' | 'warning';

export interface ToastConfig {
  title?: string;
  message: string | HTMLElement;
  type?: ToastType;
  autoClose?: boolean;
  autoCloseDelay?: number;
  icon?: string;
  iconColor?: string;
}

function getToastContext() {
  const containerList = Array.from(document.querySelectorAll('cw-toast-container'));
  const [container] = containerList;
  if (containerList.length > 1) {
    console.warn('Multiple toast container are found. Only there first is used.');
    return container.getEvents();
  }
  if (!container) {
    const toastContainer = document.createElement('cw-toast-container');
    document.body.appendChild(toastContainer);

    return toastContainer.getEvents();
  }
  return container.getEvents();
}

function toast(config: ToastConfig) {
  getToastContext().then(onShowToast => {
    onShowToast.emit(config);
  });
}

toast.info = (config: ToastConfig) => {
  toast({
    ...config,
    type: 'info',
  });
};

toast.error = (config: ToastConfig) => {
  toast({
    ...config,
    type: 'error',
  });
};

toast.success = (config: ToastConfig) => {
  toast({
    ...config,
    type: 'success',
  });
};

toast.warning = (config: ToastConfig) => {
  toast({
    ...config,
    type: 'warning',
  });
};

export { toast };
