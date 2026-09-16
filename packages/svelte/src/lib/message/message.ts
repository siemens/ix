import { createShowMessage } from '@siemens/ix/components';
import { defineCustomElement as defineIxButton } from '@siemens/ix/components/ix-button.js';
import { defineCustomElement as defineIxModal } from '@siemens/ix/components/ix-modal.js';
import { defineCustomElement as defineIxModalContent } from '@siemens/ix/components/ix-modal-content.js';
import { defineCustomElement as defineIxModalFooter } from '@siemens/ix/components/ix-modal-footer.js';
import { defineCustomElement as defineIxModalHeader } from '@siemens/ix/components/ix-modal-header.js';

export const showMessage = createShowMessage([
  { tag: 'ix-modal', define: defineIxModal },
  { tag: 'ix-modal-header', define: defineIxModalHeader },
  { tag: 'ix-modal-content', define: defineIxModalContent },
  { tag: 'ix-modal-footer', define: defineIxModalFooter },
  { tag: 'ix-button', define: defineIxButton },
]);
