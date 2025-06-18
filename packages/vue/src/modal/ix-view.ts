import { defineComponent, h, PropType, VNode, Teleport } from 'vue';
import { DATA_PORTAL_ID_ATTRIBUTE } from './constants';

export default defineComponent({
  name: 'IxView',
  props: {
    teleportId: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    node: {
      type: Object as PropType<VNode>,
      required: true,
    },
  },
  render() {
    const div = h(
      'div',
      { [DATA_PORTAL_ID_ATTRIBUTE]: this.id, style: 'display: contents' },
      this.node
    );

    return h(Teleport, { to: this.teleportId }, div);
  },
});
