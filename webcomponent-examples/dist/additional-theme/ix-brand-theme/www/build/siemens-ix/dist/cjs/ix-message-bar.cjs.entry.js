'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');
const anime_es = require('./anime.es-8822f296.js');

const messageBarCss = ".message-container.sc-ix-message-bar{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;margin:0.5rem 0.5rem 0rem 0.5rem;padding:calc(0.75rem - var(--theme-message-bar--border-thickness)) 0.75rem calc(0.75rem - var(--theme-message-bar--border-thickness)) 1rem;border-radius:var(--theme-message-bar--border-radius);background-color:var(--theme-messagebar--background)}.danger.sc-ix-message-bar{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}.warning.sc-ix-message-bar{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-warning)}.info.sc-ix-message-bar{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-info)}.message-content.sc-ix-message-bar{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:bold;white-space:normal}ix-icon.sc-ix-message-bar{margin-top:0.25rem}";

const MessageBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.closedChange = index.createEvent(this, "closedChange", 7);
    this.type = 'info';
    this.dismissible = true;
    this.icon = undefined;
    this.color = undefined;
  }
  componentWillRender() {
    if (this.type === 'danger') {
      this.icon = 'error';
      this.color = 'color-alarm';
    }
    if (this.type === 'info') {
      this.icon = 'info';
      this.color = 'color-info';
    }
    if (this.type === 'warning') {
      this.icon = 'warning';
      this.color = 'color-warning';
    }
  }
  closeAlert(el) {
    anime_es.anime({
      targets: el,
      duration: MessageBar.duration,
      opacity: [1, 0],
      easing: 'easeOutSine',
      complete: () => {
        el.classList.add('d-none');
      },
    });
    this.closedChange.emit();
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: { 'message-container': true, [this.type]: true }, role: "alert", ref: (el) => (this.divElement = el) }, index.h("ix-icon", { color: this.color, name: this.icon }), index.h("div", { class: "message-content" }, index.h("slot", null)), this.dismissible ? (index.h("ix-icon-button", { icon: "close", size: "24", ghost: true, onClick: () => {
        this.closeAlert(this.divElement);
      }, "data-testid": "close-btn" })) : (''))));
  }
};
MessageBar.duration = 300;
MessageBar.style = messageBarCss;

exports.ix_message_bar = MessageBar;
