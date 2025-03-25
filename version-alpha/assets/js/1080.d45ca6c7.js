"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1080],{22434:(t,e,n)=>{n.d(e,{a:()=>o,b:()=>i});const o=(t,e,n)=>(t.addEventListener(e,n),()=>{t.removeEventListener(e,n)}),i=t=>{const e=t.map((t=>{let{callback:e,element:n,eventType:i}=t;return o(n,i,e)}));return()=>e.forEach((t=>t()))}},1902:(t,e,n)=>{function o(t){return null!==t&&void 0!==t.getDropdownItemElement&&"function"==typeof t.getDropdownItemElement}n.d(e,{d:()=>i,h:()=>o});const i=new class{constructor(){this.dropdowns=new Map,this.submenuIds={},this.isWindowListenerActive=!1}connected(t){this.isWindowListenerActive||this.addOverlayListeners(),this.dropdowns.set(t.getId(),t),t.discoverAllSubmenus&&this.discoverSubmenus()}disconnected(t){const e=t.getId();this.removeFromSubmenuIds(e),this.dropdowns.delete(e)}removeFromSubmenuIds(t){this.dropdowns.forEach((e=>{const n=this.submenuIds[e.getId()];if(n){const e=n.indexOf(t);e>-1&&n.splice(e,1)}})),delete this.submenuIds[t]}getDropdownById(t){return this.dropdowns.get(t)}discoverSubmenus(){this.dropdowns.forEach((t=>{t.discoverSubmenu()}))}present(t){var e;!t.isPresent()&&(null===(e=t.willPresent)||void 0===e?void 0:e.call(t))&&(this.submenuIds[t.getId()]=t.getAssignedSubmenuIds(),t.present())}dismissChildren(t){const e=this.submenuIds[t]||[];for(const n of e){const t=this.dropdowns.get(n);t&&this.dismiss(t)}}dismiss(t){var e;t.isPresent()&&(null===(e=t.willDismiss)||void 0===e?void 0:e.call(t))&&(this.dismissChildren(t.getId()),t.dismiss(),delete this.submenuIds[t.getId()])}dismissAll(t,e){void 0===t&&(t=[]),void 0===e&&(e=!1),this.dropdowns.forEach((n=>{const o="inside"===n.closeBehavior||!1===n.closeBehavior,i=t.includes(n.getId()),r=this.buildComposedPath(n.getId(),new Set);if(t.length>0&&e){let e=!1;if(t.forEach((t=>{r.has(t)&&(e=!0)})),!e)return}!i&&o||this.dismiss(n)}))}dismissOthers(t){let e=this.buildComposedPath(t,new Set);e.add(t),this.dropdowns.forEach((t=>{"inside"===t.closeBehavior||!1===t.closeBehavior||e.has(t.getId())||this.dismiss(t)}))}pathIncludesTrigger(t){for(let e of t)if(e instanceof HTMLElement&&e.hasAttribute("data-ix-dropdown-trigger"))return e}pathIncludesDropdown(t){return!!t.find((t=>"IX-DROPDOWN"===t.tagName))}buildComposedPath(t,e){this.submenuIds[t]&&e.add(t);for(const n of Object.keys(this.submenuIds))this.submenuIds[n].includes(t)&&this.buildComposedPath(n,e).forEach((t=>e.add(t)));return e}addOverlayListeners(){this.isWindowListenerActive=!0,window.addEventListener("click",(t=>{const e=this.pathIncludesTrigger(t.composedPath()),n=this.pathIncludesDropdown(t.composedPath());e||n||this.dismissAll()})),window.addEventListener("keydown",(t=>{"Escape"===t.key&&this.dismissAll([...this.dropdowns.keys()])}))}}},88582:(t,e,n)=>{async function o(t,e){const n=Array.from(document.querySelectorAll(t));if(n.length>0)return Promise.resolve(n);if(void 0===e)return Promise.resolve(void 0);const o=function(t,e){void 0===e&&(e=document.body);if(!t.parentElement&&!t.parentNode)return;if(t.parentNode instanceof ShadowRoot)return t.parentNode;let n=t.parentElement;for(;n;){if(n.shadowRoot)return n.shadowRoot;if(n.parentNode instanceof ShadowRoot)return n.parentNode;n=n.parentElement}return e}(e);if(void 0===o||!(o instanceof ShadowRoot))return Promise.resolve(void 0);const i=Array.from(o.querySelectorAll(t)),r=[...Array.from(o.host.querySelectorAll(t)),...i];return r.length>0?Promise.resolve(r):Promise.resolve(void 0)}function i(t,e){if(t instanceof Promise)return t;if("object"==typeof t)return Promise.resolve(t);return function(t,e,n){return void 0===e&&(e=document),new Promise((i=>{const r=()=>{o(t,n).then((t=>{t&&t.length>0&&(i(t[0]),null==s||s.disconnect())}))};r();const s=new MutationObserver((()=>{r()}));s.observe(e.body,{childList:!0,subtree:!0})}))}(`#${t}`,document,e)}n.d(e,{f:()=>i,r:()=>o})},9295:(t,e,n)=>{n.d(e,{a:()=>dt,b:()=>pt,c:()=>wt,f:()=>ft,h:()=>mt,i:()=>gt,o:()=>ht,s:()=>ut});const o=["top","right","bottom","left"],i=Math.min,r=Math.max,s=Math.round,l=Math.floor,a=t=>({x:t,y:t}),c={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function h(t,e,n){return r(t,i(e,n))}function u(t,e){return"function"==typeof t?t(e):t}function f(t){return t.split("-")[0]}function m(t){return t.split("-")[1]}function p(t){return"x"===t?"y":"x"}function g(t){return"y"===t?"height":"width"}function w(t){return["top","bottom"].includes(f(t))?"y":"x"}function v(t){return p(w(t))}function y(t){return t.replace(/start|end/g,(t=>d[t]))}function b(t){return t.replace(/left|right|bottom|top/g,(t=>c[t]))}function x(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function E(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function k(t,e,n){let{reference:o,floating:i}=t;const r=w(e),s=v(e),l=g(s),a=f(e),c="y"===r,d=o.x+o.width/2-i.width/2,h=o.y+o.height/2-i.height/2,u=o[l]/2-i[l]/2;let p;switch(a){case"top":p={x:d,y:o.y-i.height};break;case"bottom":p={x:d,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:h};break;case"left":p={x:o.x-i.width,y:h};break;default:p={x:o.x,y:o.y}}switch(m(e)){case"start":p[s]-=u*(n&&c?-1:1);break;case"end":p[s]+=u*(n&&c?-1:1)}return p}async function A(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:f=!1,padding:m=0}=u(e,t),p=x(m),g=l[f?"floating"===h?"reference":"floating":h],w=E(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(g)))||n?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),v="floating"===h?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),b=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},k=E(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:a}):v);return{top:(w.top-k.top+p.top)/b.y,bottom:(k.bottom-w.bottom+p.bottom)/b.y,left:(w.left-k.left+p.left)/b.x,right:(k.right-w.right+p.right)/b.x}}function L(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function S(t){return o.some((e=>t[e]>=0))}function R(t){const e=i(...t.map((t=>t.left))),n=i(...t.map((t=>t.top)));return{x:e,y:n,width:r(...t.map((t=>t.right)))-e,height:r(...t.map((t=>t.bottom)))-n}}function I(){return"undefined"!=typeof window}function C(t){return O(t)?(t.nodeName||"").toLowerCase():"#document"}function D(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function P(t){var e;return null==(e=(O(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function O(t){return!!I()&&(t instanceof Node||t instanceof D(t).Node)}function T(t){return!!I()&&(t instanceof Element||t instanceof D(t).Element)}function F(t){return!!I()&&(t instanceof HTMLElement||t instanceof D(t).HTMLElement)}function B(t){return!(!I()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof D(t).ShadowRoot)}function H(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=K(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function M(t){return["table","td","th"].includes(C(t))}function W(t){return[":popover-open",":modal"].some((e=>{try{return t.matches(e)}catch(n){return!1}}))}function z(t){const e=U(),n=T(t)?K(t):t;return["transform","translate","scale","rotate","perspective"].some((t=>!!n[t]&&"none"!==n[t]))||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","translate","scale","rotate","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function U(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function N(t){return["html","body","#document"].includes(C(t))}function K(t){return D(t).getComputedStyle(t)}function q(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function V(t){if("html"===C(t))return t;const e=t.assignedSlot||t.parentNode||B(t)&&t.host||P(t);return B(e)?e.host:e}function j(t){const e=V(t);return N(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&H(e)?e:j(e)}function $(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const i=j(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),s=D(i);if(r){const t=X(s);return e.concat(s,s.visualViewport||[],H(i)?i:[],t&&n?$(t):[])}return e.concat(i,$(i,[],n))}function X(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function _(t){const e=K(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=F(t),r=i?t.offsetWidth:n,l=i?t.offsetHeight:o,a=s(n)!==r||s(o)!==l;return a&&(n=r,o=l),{width:n,height:o,$:a}}function Y(t){return T(t)?t:t.contextElement}function G(t){const e=Y(t);if(!F(e))return a(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=_(e);let l=(r?s(n.width):n.width)/o,c=(r?s(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const J=a(0);function Q(t){const e=D(t);return U()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:J}function Z(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=Y(t);let s=a(1);e&&(o?T(o)&&(s=G(o)):s=G(t));const l=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==D(t))&&e}(r,n,o)?Q(r):a(0);let c=(i.left+l.x)/s.x,d=(i.top+l.y)/s.y,h=i.width/s.x,u=i.height/s.y;if(r){const t=D(r),e=o&&T(o)?D(o):o;let n=t,i=X(n);for(;i&&o&&e!==n;){const t=G(i),e=i.getBoundingClientRect(),o=K(i),r=e.left+(i.clientLeft+parseFloat(o.paddingLeft))*t.x,s=e.top+(i.clientTop+parseFloat(o.paddingTop))*t.y;c*=t.x,d*=t.y,h*=t.x,u*=t.y,c+=r,d+=s,n=D(i),i=X(n)}}return E({width:h,height:u,x:c,y:d})}function tt(t,e){const n=q(t).scrollLeft;return e?e.left+n:Z(P(t)).left+n}function et(t,e,n){void 0===n&&(n=!1);const o=t.getBoundingClientRect();return{x:o.left+e.scrollLeft-(n?0:tt(t,o)),y:o.top+e.scrollTop}}function nt(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=D(t),o=P(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,a=0;if(i){r=i.width,s=i.height;const t=U();(!t||t&&"fixed"===e)&&(l=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:l,y:a}}(t,n);else if("document"===e)o=function(t){const e=P(t),n=q(t),o=t.ownerDocument.body,i=r(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=r(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+tt(t);const a=-n.scrollTop;return"rtl"===K(o).direction&&(l+=r(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:l,y:a}}(P(t));else if(T(e))o=function(t,e){const n=Z(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=F(t)?G(t):a(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=Q(t);o={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return E(o)}function ot(t,e){const n=V(t);return!(n===e||!T(n)||N(n))&&("fixed"===K(n).position||ot(n,e))}function it(t,e,n){const o=F(e),i=P(e),r="fixed"===n,s=Z(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=a(0);if(o||!o&&!r)if(("body"!==C(e)||H(i))&&(l=q(e)),o){const t=Z(e,!0,r,e);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else i&&(c.x=tt(i));const d=!i||o||r?a(0):et(i,l);return{x:s.left+l.scrollLeft-c.x-d.x,y:s.top+l.scrollTop-c.y-d.y,width:s.width,height:s.height}}function rt(t){return"static"===K(t).position}function st(t,e){if(!F(t)||"fixed"===K(t).position)return null;if(e)return e(t);let n=t.offsetParent;return P(t)===n&&(n=n.ownerDocument.body),n}function lt(t,e){const n=D(t);if(W(t))return n;if(!F(t)){let e=V(t);for(;e&&!N(e);){if(T(e)&&!rt(e))return e;e=V(e)}return n}let o=st(t,e);for(;o&&M(o)&&rt(o);)o=st(o,e);return o&&N(o)&&rt(o)&&!z(o)?n:o||function(t){let e=V(t);for(;F(e)&&!N(e);){if(z(e))return e;if(W(e))return null;e=V(e)}return null}(t)||n}const at={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r="fixed"===i,s=P(o),l=!!e&&W(e.floating);if(o===s||l&&r)return n;let c={scrollLeft:0,scrollTop:0},d=a(1);const h=a(0),u=F(o);if((u||!u&&!r)&&(("body"!==C(o)||H(s))&&(c=q(o)),F(o))){const t=Z(o);d=G(o),h.x=t.x+o.clientLeft,h.y=t.y+o.clientTop}const f=!s||u||r?a(0):et(s,c,!0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-c.scrollLeft*d.x+h.x+f.x,y:n.y*d.y-c.scrollTop*d.y+h.y+f.y}},getDocumentElement:P,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const l=[..."clippingAncestors"===n?W(e)?[]:function(t,e){const n=e.get(t);if(n)return n;let o=$(t,[],!1).filter((t=>T(t)&&"body"!==C(t))),i=null;const r="fixed"===K(t).position;let s=r?V(t):t;for(;T(s)&&!N(s);){const e=K(s),n=z(s);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||H(s)&&!n&&ot(t,s))?o=o.filter((t=>t!==s)):i=e,s=V(s)}return e.set(t,o),o}(e,this._c):[].concat(n),o],a=l[0],c=l.reduce(((t,n)=>{const o=nt(e,n,s);return t.top=r(o.top,t.top),t.right=i(o.right,t.right),t.bottom=i(o.bottom,t.bottom),t.left=r(o.left,t.left),t}),nt(e,a,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:lt,getElementRects:async function(t){const e=this.getOffsetParent||lt,n=this.getDimensions,o=await n(t.floating);return{reference:it(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=_(t);return{width:e,height:n}},getScale:G,isElement:T,isRTL:function(t){return"rtl"===K(t).direction}};function ct(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function dt(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:d="function"==typeof IntersectionObserver,animationFrame:h=!1}=o,u=Y(t),f=s||a?[...u?$(u):[],...$(e)]:[];f.forEach((t=>{s&&t.addEventListener("scroll",n,{passive:!0}),a&&t.addEventListener("resize",n)}));const m=u&&d?function(t,e){let n,o=null;const s=P(t);function a(){var t;clearTimeout(n),null==(t=o)||t.disconnect(),o=null}return function c(d,h){void 0===d&&(d=!1),void 0===h&&(h=1),a();const u=t.getBoundingClientRect(),{left:f,top:m,width:p,height:g}=u;if(d||e(),!p||!g)return;const w={rootMargin:-l(m)+"px "+-l(s.clientWidth-(f+p))+"px "+-l(s.clientHeight-(m+g))+"px "+-l(f)+"px",threshold:r(0,i(1,h))||1};let v=!0;function y(e){const o=e[0].intersectionRatio;if(o!==h){if(!v)return c();o?c(!1,o):n=setTimeout((()=>{c(!1,1e-7)}),1e3)}1!==o||ct(u,t.getBoundingClientRect())||c(),v=!1}try{o=new IntersectionObserver(y,{...w,root:s.ownerDocument})}catch(b){o=new IntersectionObserver(y,w)}o.observe(t)}(!0),a}(u,n):null;let p,g=-1,w=null;c&&(w=new ResizeObserver((t=>{let[o]=t;o&&o.target===u&&w&&(w.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var t;null==(t=w)||t.observe(e)}))),n()})),u&&!h&&w.observe(u),w.observe(e));let v=h?Z(t):null;return h&&function e(){const o=Z(t);v&&!ct(v,o)&&n();v=o,p=requestAnimationFrame(e)}(),n(),()=>{var t;f.forEach((t=>{s&&t.removeEventListener("scroll",n),a&&t.removeEventListener("resize",n)})),null==m||m(),null==(t=w)||t.disconnect(),w=null,h&&cancelAnimationFrame(p)}}const ht=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,a=await async function(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),s=f(n),l=m(n),a="y"===w(n),c=["left","top"].includes(s)?-1:1,d=r&&a?-1:1,h=u(e,t);let{mainAxis:p,crossAxis:g,alignmentAxis:v}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof v&&(g="end"===l?-1*v:v),a?{x:g*d,y:p*c}:{x:p*c,y:g*d}}(e,t);return s===(null==(n=l.offset)?void 0:n.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:s}}}}},ut=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=u(t,e),c={x:n,y:o},d=await A(e,a),m=w(f(i)),g=p(m);let v=c[g],y=c[m];if(r){const t="y"===g?"bottom":"right";v=h(v+d["y"===g?"top":"left"],v,v-d[t])}if(s){const t="y"===m?"bottom":"right";y=h(y+d["y"===m?"top":"left"],y,y-d[t])}const b=l.fn({...e,[g]:v,[m]:y});return{...b,data:{x:b.x-n,y:b.y-o}}}}},ft=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:k=!0,...L}=u(t,e);if(null!=(n=r.arrow)&&n.alignmentOffset)return{};const S=f(i),R=w(l),I=f(l)===l,C=await(null==a.isRTL?void 0:a.isRTL(c.floating)),D=p||(I||!k?[b(l)]:function(t){const e=b(t);return[y(t),e,y(e)]}(l)),P="none"!==E;!p&&P&&D.push(...function(t,e,n,o){const i=m(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}(f(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(y)))),r}(l,k,E,C));const O=[l,...D],T=await A(e,L),F=[];let B=(null==(o=r.flip)?void 0:o.overflows)||[];if(d&&F.push(T[S]),h){const t=function(t,e,n){void 0===n&&(n=!1);const o=m(t),i=v(t),r=g(i);let s="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=b(s)),[s,b(s)]}(i,s,C);F.push(T[t[0]],T[t[1]])}if(B=[...B,{placement:i,overflows:F}],!F.every((t=>t<=0))){var H,M;const t=((null==(H=r.flip)?void 0:H.index)||0)+1,e=O[t];if(e)return{data:{index:t,overflows:B},reset:{placement:e}};let n=null==(M=B.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:M.placement;if(!n)switch(x){case"bestFit":{var W;const t=null==(W=B.filter((t=>{if(P){const e=w(t.placement);return e===R||"y"===e}return!0})).map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:W[0];t&&(n=t);break}case"initialPlacement":n=l}if(i!==n)return{reset:{placement:n}}}return{}}}},mt=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=u(t,e);switch(o){case"referenceHidden":{const t=L(await A(e,{...i,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:S(t)}}}case"escaped":{const t=L(await A(e,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:S(t)}}}default:return{}}}}},pt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:s,platform:l,elements:a,middlewareData:c}=e,{element:d,padding:f=0}=u(t,e)||{};if(null==d)return{};const p=x(f),w={x:n,y:o},y=v(r),b=g(y),E=await l.getDimensions(d),k="y"===y,A=k?"top":"left",L=k?"bottom":"right",S=k?"clientHeight":"clientWidth",R=s.reference[b]+s.reference[y]-w[y]-s.floating[b],I=w[y]-s.reference[y],C=await(null==l.getOffsetParent?void 0:l.getOffsetParent(d));let D=C?C[S]:0;D&&await(null==l.isElement?void 0:l.isElement(C))||(D=a.floating[S]||s.floating[b]);const P=R/2-I/2,O=D/2-E[b]/2-1,T=i(p[A],O),F=i(p[L],O),B=T,H=D-E[b]-F,M=D/2-E[b]/2+P,W=h(B,M,H),z=!c.arrow&&null!=m(r)&&M!==W&&s.reference[b]/2-(M<B?T:F)-E[b]/2<0,U=z?M<B?M-B:M-H:0;return{[y]:w[y]+U,data:{[y]:W,centerOffset:M-W-U,...z&&{alignmentOffset:U}},reset:z}}}),gt=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:o,rects:s,platform:l,strategy:a}=e,{padding:c=2,x:d,y:h}=u(t,e),m=Array.from(await(null==l.getClientRects?void 0:l.getClientRects(o.reference))||[]),p=function(t){const e=t.slice().sort(((t,e)=>t.y-e.y)),n=[];let o=null;for(let i=0;i<e.length;i++){const t=e[i];!o||t.y-o.y>o.height/2?n.push([t]):n[n.length-1].push(t),o=t}return n.map((t=>E(R(t))))}(m),g=E(R(m)),v=x(c);const y=await l.getElementRects({reference:{getBoundingClientRect:function(){if(2===p.length&&p[0].left>p[1].right&&null!=d&&null!=h)return p.find((t=>d>t.left-v.left&&d<t.right+v.right&&h>t.top-v.top&&h<t.bottom+v.bottom))||g;if(p.length>=2){if("y"===w(n)){const t=p[0],e=p[p.length-1],o="top"===f(n),i=t.top,r=e.bottom,s=o?t.left:e.left,l=o?t.right:e.right;return{top:i,bottom:r,left:s,right:l,width:l-s,height:r-i,x:s,y:i}}const t="left"===f(n),e=r(...p.map((t=>t.right))),o=i(...p.map((t=>t.left))),s=p.filter((n=>t?n.left===o:n.right===e)),l=s[0].top,a=s[s.length-1].bottom;return{top:l,bottom:a,left:o,right:e,width:e-o,height:a-l,x:o,y:l}}return g}},floating:o.floating,strategy:a});return s.reference.x!==y.reference.x||s.reference.y!==y.reference.y||s.reference.width!==y.reference.width||s.reference.height!==y.reference.height?{reset:{rects:y}}:{}}}},wt=(t,e,n)=>{const o=new Map,i={platform:at,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),a=await(null==s.isRTL?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:h}=k(c,o,a),u=o,f={},m=0;for(let p=0;p<l.length;p++){const{name:n,fn:r}=l[p],{x:g,y:w,data:v,reset:y}=await r({x:d,y:h,initialPlacement:o,placement:u,strategy:i,middlewareData:f,rects:c,platform:s,elements:{reference:t,floating:e}});d=null!=g?g:d,h=null!=w?w:h,f={...f,[n]:{...f[n],...v}},y&&m<=50&&(m++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(c=!0===y.rects?await s.getElementRects({reference:t,floating:e,strategy:i}):y.rects),({x:d,y:h}=k(c,u,a))),p=-1)}return{x:d,y:h,placement:u,strategy:i,middlewareData:f}})(t,e,{...i,platform:r})}},46687:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(22434);class i{constructor(t,e,n){this.wrap=!1,this.items=t,this.container=e,this.callback=n,this.keyListener=(0,o.a)(e,"keydown",(t=>this.onKeyDown(t)))}getActiveIndex(){return document.activeElement?this.items.indexOf(document.activeElement):-1}onKeyDown(t){var e,n,o,i;const r=this.getActiveIndex();if(!(r<0))switch(t.key){case"ArrowDown":r<this.items.length-1?(t.preventDefault(),null===(e=this.callback)||void 0===e||e.call(this,r+1)):this.wrap&&(t.preventDefault(),null===(n=this.callback)||void 0===n||n.call(this,0));break;case"ArrowUp":r>0?(t.preventDefault(),null===(o=this.callback)||void 0===o||o.call(this,r-1)):this.wrap&&0===r&&(t.preventDefault(),null===(i=this.callback)||void 0===i||i.call(this,this.items.length-1))}}disconnect(){this.keyListener&&this.keyListener(),this.container=void 0,this.callback=void 0}}},1080:(t,e,n)=>{n.r(e),n.d(e,{ix_dropdown:()=>d});var o=n(6694),i=n(9295),r=n(46687),s=n(1902),l=n(88582),a=n(22434);let c=0;const d=class{constructor(t){(0,o.r)(this,t),this.showChanged=(0,o.c)(this,"showChanged",7),this.suppressAutomaticPlacement=!1,this.show=!1,this.closeBehavior="both",this.placement="bottom-start",this.positioningStrategy="fixed",this.discoverAllSubmenus=!1,this.ignoreRelatedSubmenu=!1,this.suppressOverflowBehavior=!1,this.localUId="dropdown-"+c++,this.assignedSubmenu=[],this.itemObserver=new MutationObserver((()=>{this.arrowFocusController&&(this.arrowFocusController.items=this.dropdownItems)}))}connectedCallback(){s.d.connected(this),null!=this.trigger&&this.registerListener(this.trigger)}cacheSubmenuId(t){t.stopImmediatePropagation(),t.preventDefault();const{detail:e}=t;-1===this.assignedSubmenu.indexOf(e)&&this.assignedSubmenu.push(e)}disconnectedCallback(){var t;s.d.dismiss(this),s.d.disconnected(this),this.arrowFocusController&&(null===(t=this.arrowFocusController)||void 0===t||t.disconnect(),this.arrowFocusController=void 0),this.itemObserver&&(this.itemObserver.disconnect(),this.itemObserver=void 0),this.disposeClickListener&&(this.disposeClickListener(),this.disposeClickListener=void 0),this.disposeKeyListener&&(this.disposeKeyListener(),this.disposeKeyListener=void 0),this.autoUpdateCleanup&&(this.autoUpdateCleanup(),this.autoUpdateCleanup=void 0)}getAssignedSubmenuIds(){return this.assignedSubmenu}isPresent(){return this.show}present(){this.show=!0}dismiss(){this.show=!1}getId(){return this.localUId}willDismiss(){const{defaultPrevented:t}=this.showChanged.emit(!1);return!t}willPresent(){const{defaultPrevented:t}=this.showChanged.emit(!0);return!t}get dropdownItems(){return Array.from(this.hostElement.querySelectorAll("ix-dropdown-item"))}get slotElement(){return this.hostElement.shadowRoot.querySelector("slot")}addEventListenersFor(){var t,e,n;null===(t=this.disposeClickListener)||void 0===t||t.call(this),null===(e=this.disposeKeyListener)||void 0===e||e.call(this);const o=()=>{this.isPresent()?s.d.dismiss(this):s.d.present(this),s.d.dismissOthers(this.getId())};this.triggerElement&&(this.disposeClickListener=(0,a.a)(this.triggerElement,"click",(t=>{t.defaultPrevented||o()})),null===(n=this.triggerElement)||void 0===n||n.setAttribute("data-ix-dropdown-trigger",this.localUId))}async discoverSubmenu(){var t;null===(t=this.triggerElement)||void 0===t||t.dispatchEvent(new CustomEvent("ix-assign-sub-menu",{bubbles:!0,composed:!0,cancelable:!0,detail:this.localUId}))}registerKeyListener(){this.triggerElement&&(this.disposeKeyListener=(0,a.a)(this.triggerElement,"keydown",(t=>{"ArrowDown"===t.key&&document.activeElement===this.triggerElement&&(s.d.present(this),setTimeout((()=>{this.focusDropdownItem(0)})))})))}async registerListener(t){this.triggerElement=await this.resolveElement(t),this.triggerElement&&(this.addEventListenersFor(),this.discoverSubmenu())}async resolveElement(t){const e=await(0,l.f)(t);return this.checkForSubmenuAnchor(e)}async checkForSubmenuAnchor(t){if(t){if((0,s.h)(t)){(await t.getDropdownItemElement()).isSubMenu=!0,this.hostElement.style.zIndex="var(--theme-z-index-dropdown)"}return"IX-DROPDOWN-ITEM"===t.tagName&&(t.isSubMenu=!0,this.hostElement.style.zIndex="var(--theme-z-index-dropdown)"),t}}async resolveAnchorElement(){this.anchor?this.anchorElement=await this.resolveElement(this.anchor):this.trigger&&(this.anchorElement=await this.resolveElement(this.trigger))}async changedShow(t){var e,n,o,i;t?(await this.resolveAnchorElement(),this.anchorElement&&this.applyDropdownPosition(),this.arrowFocusController=new r.A(this.dropdownItems,this.hostElement,(t=>this.focusDropdownItem(t))),null===(e=this.itemObserver)||void 0===e||e.observe(this.hostElement,{childList:!0,subtree:!0}),this.registerKeyListener()):(this.destroyAutoUpdate(),null===(n=this.arrowFocusController)||void 0===n||n.disconnect(),null===(o=this.itemObserver)||void 0===o||o.disconnect(),null===(i=this.disposeKeyListener)||void 0===i||i.call(this))}changedTrigger(t){this.registerListener(t)}destroyAutoUpdate(){this.autoUpdateCleanup&&(this.autoUpdateCleanup(),this.autoUpdateCleanup=void 0)}isAnchorSubmenu(){var t;return!!(0,s.h)(this.anchorElement)||!!(null===(t=this.anchorElement)||void 0===t?void 0:t.closest("ix-dropdown-item"))}async applyDropdownPosition(){var t,e;if(!this.show)return;if(!this.anchorElement)return;const n=this.isAnchorSubmenu();let o={strategy:this.positioningStrategy,middleware:[]};this.suppressAutomaticPlacement||null===(t=o.middleware)||void 0===t||t.push((0,i.f)({fallbackStrategy:"initialPlacement"})),o.placement=n?"right-start":this.placement,o.middleware=[...(null===(e=o.middleware)||void 0===e?void 0:e.filter(Boolean))||[],(0,i.i)(),(0,i.s)()],this.offset&&o.middleware.push((0,i.o)(this.offset)),this.destroyAutoUpdate(),this.anchorElement&&(this.autoUpdateCleanup=(0,i.a)(this.anchorElement,this.hostElement,(async()=>{if(this.anchorElement){const t=await(0,i.c)(this.anchorElement,this.hostElement,o);Object.assign(this.hostElement.style,{top:"0",left:"0",transform:`translate(${Math.round(t.x)}px,${Math.round(t.y)}px)`})}if(this.overwriteDropdownStyle){const t=await this.overwriteDropdownStyle({dropdownRef:this.hostElement,triggerRef:this.triggerElement});Object.assign(this.hostElement.style,t)}}),{ancestorResize:!0,ancestorScroll:!0,elementResize:!0}))}focusDropdownItem(t){requestAnimationFrame((()=>{var e,n;const o=null===(n=null===(e=this.dropdownItems[t])||void 0===e?void 0:e.shadowRoot)||void 0===n?void 0:n.querySelector("button");o&&o.focus()}))}async componentDidLoad(){this.trigger&&this.changedTrigger(this.trigger)}async componentDidRender(){await this.applyDropdownPosition(),await this.resolveAnchorElement()}isTriggerElement(t){return!!t.hasAttribute("data-ix-dropdown-trigger")}onDropdownClick(t){const e=s.d.pathIncludesTrigger(t.composedPath());e&&(e!==this.triggerElement&&t.preventDefault(),this.isTriggerElement(e))?"outside"===this.closeBehavior&&t.preventDefault():t.defaultPrevented||"inside"!==this.closeBehavior&&"both"!==this.closeBehavior?s.d.dismissOthers(this.getId()):s.d.dismissAll([this.getId()],this.ignoreRelatedSubmenu)}async updatePosition(){this.applyDropdownPosition()}render(){return(0,o.h)(o.H,{key:"8cb74ddd59a4160b1d85285244391fc8ae275c6d","data-ix-dropdown":this.localUId,class:{"dropdown-menu":!0,show:this.show,overflow:!this.suppressOverflowBehavior},style:{margin:"0",minWidth:"0px",position:this.positioningStrategy},role:"list",onClick:t=>this.onDropdownClick(t)},(0,o.h)("div",{key:"ebbec839d63ecf94c025d7d20018a150dee89162",style:{display:"contents"}},this.header&&(0,o.h)("div",{key:"9a25904cd90dbec2f738567350bf0f0ada723abf",class:"dropdown-header"},this.header),this.show&&(0,o.h)("slot",{key:"f0b63a8335765d212f72fdc04f155e367a65c0a6"})))}get hostElement(){return(0,o.g)(this)}static get watchers(){return{show:["changedShow"],trigger:["changedTrigger"]}}};d.style=":host{background-color:var(--theme-color-2);border-radius:var(--theme-default-border-radius);min-width:0px;z-index:var(--theme-z-index-dropdown);box-shadow:var(--theme-shadow-4);padding:0.25rem 0px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}:host(.overflow){max-height:50vh;overflow-y:auto}:host(:not(.show)){display:none}"}}]);