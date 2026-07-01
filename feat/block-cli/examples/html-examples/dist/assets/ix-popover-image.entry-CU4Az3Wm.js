import { r as registerInstance, h, H as Host } from "./global-C8IWpzMv.js";
const popoverImageCss = () => `:host{display:block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host img{display:block;width:100%;-o-object-fit:cover;object-fit:cover}`;
const PopoverImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Image source URL
   *
   * @since 5.1.0
   */
  image;
  /**
   * Alt text for the image.
   * Use an empty string for decorative images; provide descriptive text for content images.
   *
   * @since 5.1.0
   */
  imageAlt = "";
  render() {
    if (!this.image) {
      return null;
    }
    return h(Host, null, h("img", { src: this.image, alt: this.imageAlt }));
  }
};
PopoverImage.style = popoverImageCss();
export {
  PopoverImage as ix_popover_image
};
