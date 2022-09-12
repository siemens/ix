import {
    SupportedFrameworks,
    useFramework
} from '@site/src/utils/useFramework';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useCopyToClipboard = (
  templates:
    | Record<SupportedFrameworks, (data: any) => string>
    | ((data: any) => string)
) => {
  const framework = useFramework();
  return (input: HTMLInputElement) => {
    if (!input) {
      return;
    }

    input.focus();

    const originalValue = input.value;

    if (typeof templates === 'function') {
      input.value = templates(originalValue);
    } else {
      input.value = templates[framework](originalValue);
    }

    input.select();
    input.setSelectionRange(0, 999999);

    document.execCommand('copy', true);

    toast('Copied!', {
      autoClose: 800,
      position: 'top-center',
    });

    input.value = originalValue;
  };
};
