import{a as r}from"./index-VKx-1EY8.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const c="ION-CONTENT",T="ion-content",l=".ion-content-scroll-host",N="".concat(T,", ").concat(l),s=o=>o.tagName===c,i=async o=>s(o)?(await new Promise(t=>r(o,t)),o.getScrollElement()):o,O=o=>o.closest(N),C=(o,t)=>s(o)?o.scrollToTop(t):Promise.resolve(o.scrollTo({top:0,left:0,behavior:"smooth"})),m=(o,t,n,e)=>s(o)?o.scrollByPoint(t,n,e):Promise.resolve(o.scrollBy({top:n,left:t,behavior:e>0?"smooth":"auto"}));export{m as a,O as f,i as g,C as s};
