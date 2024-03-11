import { r as registerInstance, c as createEvent, h, H as Host } from "./index.a3ddea4c.js";
const menuAboutNewsCss = ":host{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-1);border:var(--theme-weak-bdr-1);border-radius:0.25rem;padding:1rem;left:3.4rem;z-index:10000;transition:left var(--animate-duration);margin-inline-start:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:0.0625rem;left:1rem}:host .banner-container svg{position:absolute;height:3.625rem;width:3rem}:host .banner-container svg polygon{fill:var(--theme-color-primary)}:host .banner-container ix-icon{margin:0.5rem;position:absolute;z-index:1}:host .cui-popover-news-header{margin-bottom:2.5rem;margin-inline-start:4rem;margin-block-start:-0.25rem}:host .popover-body{color:var(--theme-color-std-text)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:1rem}:host ix-icon-button{top:0.5rem;right:0.5rem;position:absolute}:host #arrow{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-1);border-left:var(--theme-weak-bdr-1);border-bottom:var(--theme-weak-bdr-1);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}:host(.expanded){left:calc(3.4rem + 12.7rem)}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:calc(100vh - 4.75rem);width:calc(100% - 2rem);max-width:30rem;transform:translateX(calc(1rem - 50%));left:calc(50% - 1rem) !important;bottom:1rem !important;margin-inline:0 !important;z-index:calc(var(--theme-z-index-sticky) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}";
const IxMenuAboutNewsStyle0 = menuAboutNewsCss;
const MenuAboutNews = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showMore = createEvent(this, "showMore", 7);
    this.closePopover = createEvent(this, "closePopover", 7);
    this.show = false;
    this.label = void 0;
    this.i18nShowMore = "Show more";
    this.aboutItemLabel = void 0;
    this.offsetBottom = 0;
    this.expanded = false;
  }
  render() {
    return h(Host, { key: "898cc2c7a58c5f72409315bbf6a76712d6f68107", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "ba59ad360a74c8292333cef460451fea2958ef55", class: "banner-container" }, h("ix-icon", { key: "c793669e809f38c806a85fe3ad65c7b540a1a083", color: "color-inv-contrast-text", name: "shout", size: "32" }), h("svg", { key: "2be02100b53ce3b0821b471b0caf1709e055e596", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "85707c452b6daafc049c0e402acb25ca3a6f4e8a", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "79718e6e4beb576c30bcbeda44b6cd9bed4b0a0f", class: "cui-popover-news-header" }, h("ix-typography", { key: "90ab8d14cbf596760fe9460f35e769d66edde38b", variant: "default-title-single" }, this.label)), h("ix-icon-button", { key: "5b539527337b9fd8d6bb10b4997ad6d50fa33339", size: "24", icon: "close-small", ghost: true, onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "d3c397f5ececa4f330089070e23ad04799fb3f11", class: "slot-container" }, h("slot", { key: "359fb32ce27b4c1cde5f993a9f7f4c686a47ea27" })), this.aboutItemLabel ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
      this.show = false;
      this.showMore.emit(e);
    } }, this.i18nShowMore)) : null, h("div", { key: "89fa2c2b881f0df4e998435ffc207d2439368cac", id: "arrow" }));
  }
};
MenuAboutNews.style = IxMenuAboutNewsStyle0;
export {
  MenuAboutNews as ix_menu_about_news
};
