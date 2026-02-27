import { r as registerInstance, c as createEvent, h, H as Host } from "./global-DXu0UsM0.js";
import { q as iconClose, x as iconShout } from "./index-8HpPmDK_-DinFJk0z.js";
const menuAboutNewsCss = ":host{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-2);border-radius:0.25rem;padding:1rem;left:3.4rem;z-index:10000;transition:left var(--theme-default-time);margin-inline-start:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:0.0625rem;left:1rem}:host .banner-container svg{position:absolute;height:3.625rem;width:3rem}:host .banner-container svg polygon{fill:var(--theme-color-primary)}:host .banner-container ix-icon{margin:0.5rem;position:absolute;z-index:1}:host .cui-popover-news-header{margin-bottom:2.5rem;margin-inline-start:4rem;margin-block-start:-0.25rem}:host .popover-body{color:var(--theme-color-std-text)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:1rem}:host ix-icon-button{top:0.5rem;right:0.5rem;position:absolute}:host #arrow{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-2);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}:host(.expanded){left:calc(3.4rem + 12.7rem)}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:calc(100vh - 4.75rem);width:calc(100% - 2rem);max-width:30rem;transform:translateX(calc(1rem - 50%));left:calc(50% - 1rem) !important;bottom:1rem !important;margin-inline:0 !important;z-index:calc(var(--theme-z-index-sticky) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}";
const MenuAboutNews = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showMore = createEvent(this, "showMore", 7);
    this.closePopover = createEvent(this, "closePopover", 7);
    this.show = false;
    this.i18nShowMore = "Show more";
    this.expanded = false;
  }
  render() {
    return h(Host, { key: "f551cd697886ce3de6cd6fff1d36b44082b7309e", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "27f1da08ef634213771942cf956edb42f543cbbd", class: "banner-container" }, h("ix-icon", { key: "fc04d32c19bd2afb6641468a3c26f51dd4986098", color: "color-inv-contrast-text", name: iconShout, size: "32" }), h("svg", { key: "6b731dc97bd2df65ce15317bbc0c3a0418c3c94d", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "9ee1924d94185cf917b01adc274f573045fc5622", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "853a970824dde4f9874612575ce429677d8a1a9c", class: "cui-popover-news-header" }, h("ix-typography", { key: "37eec452db3b92e61703a6a143f0016d9fd70883", format: "label", bold: true }, this.label)), h("ix-icon-button", { key: "2133fd1894d3ee10ad3db335e2da6ac5d8119474", size: "24", icon: iconClose, iconColor: "color-soft-text", variant: "tertiary", onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "88189788e0e6b9df8de244f6b4f3b632483fdf9d", class: "slot-container" }, h("slot", { key: "a5fd1afea29eef48b7cddd92ffaa476b1b485860" })), this.aboutItemLabel ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
      this.show = false;
      this.showMore.emit(e);
    } }, this.i18nShowMore)) : null, h("div", { key: "0831ec396cbcf404a9a1328de058d5044bc0693d", id: "arrow" }));
  }
};
MenuAboutNews.style = menuAboutNewsCss;
export {
  MenuAboutNews as ix_menu_about_news
};
