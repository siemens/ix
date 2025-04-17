"use client";
class C extends HTMLElement {
  constructor() {
    super();
    const e = document.createElement("template");
    e.innerHTML = /*html*/
    `
      <style>
      :host {
        display: inline-block;
        position: relative;

        height: 2rem;
        width: 4.8125rem;

        .logo > path {
          fill: var(--theme-app-header-logo--color);
        }
      }
      </style>
      <svg width="100%" height="100%" viewBox="0 0 77 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.498696 21.6161V19.3321C1.79974 19.7413 2.95099 19.9459 3.95244 19.9459C5.33511 19.9459 6.02656 19.5807 6.02656 18.8508C6.02656 18.5787 5.92593 18.3501 5.72423 18.165C5.51796 17.9686 4.98969 17.6963 4.14077 17.3476C2.61758 16.7217 1.62433 16.188 1.16233 15.7466C0.563524 15.1639 0.26416 14.4291 0.26416 13.5412C0.26416 12.3977 0.7004 11.5262 1.57227 10.9272C2.43449 10.3335 3.55724 10.037 4.94226 10.037C5.70538 10.037 6.80989 10.1773 8.25457 10.4584V12.6555C7.17963 12.2265 6.18182 12.0124 5.25994 12.0124C3.96179 12.0124 3.31275 12.3686 3.31275 13.0825C3.31275 13.3493 3.44347 13.5669 3.70529 13.7357C3.92303 13.8722 4.52297 14.1606 5.50383 14.6018C6.91614 15.2286 7.85633 15.7733 8.3248 16.2367C8.88066 16.7864 9.15913 17.4976 9.15913 18.3694C9.15913 19.6225 8.61367 20.5783 7.52353 21.2369C6.64033 21.771 5.49509 22.0369 4.08848 22.0369C2.9006 22.0369 1.70375 21.8971 0.498696 21.6161ZM10.9849 10.238H14.218V21.8033H10.9849V10.238ZM17.183 21.8033V10.238H25.475V12.3298H20.299V14.9413H24.8044V16.8493H20.299V19.5938H25.6083V21.8033H17.183ZM27.7189 21.8033V10.238H31.9107L34.823 17.6277L37.8082 10.238H41.7898V21.8033H38.7244V13.6148L35.33 21.9207H33.3259L29.9968 13.6148V21.8033H27.7189ZM44.7554 21.8033V10.238H53.0472V12.3298H47.8717V14.9413H52.377V16.8493H47.8717V19.5938H53.1814V21.8033H44.7554ZM55.3088 21.8033V10.238H59.0559L63.0313 17.98V10.238H65.3085V21.8033H61.6678L57.5869 13.957V21.8033H55.3088ZM67.6037 21.6161V19.3321C68.8938 19.7413 70.0449 19.9459 71.0581 19.9459C72.4409 19.9459 73.1315 19.5807 73.1315 18.8508C73.1315 18.5787 73.0336 18.3501 72.8386 18.165C72.6313 17.9686 72.1008 17.6963 71.2468 17.3476C69.7282 16.7269 68.7339 16.1934 68.2677 15.7466C67.6692 15.1691 67.3703 14.4316 67.3703 13.5333C67.3703 12.3947 67.8055 11.5261 68.6783 10.9272C69.5392 10.3335 70.6633 10.0369 72.0484 10.0369C72.8272 10.0369 73.8363 10.1605 75.074 10.4087L75.3598 10.4583V12.6554C74.2848 12.2264 73.2841 12.0123 72.3572 12.0123C71.064 12.0123 70.419 12.3685 70.419 13.0824C70.419 13.3492 70.549 13.5669 70.8102 13.7356C71.0177 13.8669 71.62 14.1555 72.6173 14.6018C74.0189 15.2285 74.9571 15.7733 75.4297 16.2366C75.9864 16.7863 76.2642 17.4975 76.2642 18.3693C76.2642 19.6224 75.7219 20.5782 74.6373 21.2368C73.7489 21.7709 72.6008 22.0369 71.1944 22.0369C70.0053 22.0369 68.8079 21.8971 67.6037 21.6161Z" fill="currentColor"/>
      </svg>
    `, this.attachShadow({ mode: "open" }).appendChild(e.content.cloneNode(!0));
  }
}
customElements.define("ix-siemens-logo", C);
export {
  C as SiemensLogo
};
