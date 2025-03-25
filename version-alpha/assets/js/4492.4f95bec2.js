"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4492],{14954:(e,t,n)=>{n.d(t,{a:()=>r,b:()=>i,g:()=>a});const r=e=>e?"true":"false",a=e=>{if(!e)return"Unknown";if((e=>{if(!e)return!1;let t;try{t=new URL(e)}catch(n){return!1}return"http:"===t.protocol||"https:"===t.protocol})(e))return"Unknown";if((t=e)&&"string"==typeof t&&t.startsWith("data:image/svg+xml"))return"Unknown";var t;const n=e.replace("-filled","").split("-").map((e=>{const t=e.trim(),n=t.replace(/\d+/g,"");return 0===n.length?t:n})).map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");return 0===n.length?"Unknown":n},i=function(e,t){void 0===t&&(t=[]);const n={};return o.forEach((r=>{var a;if(e.hasAttribute(r)){null===e.getAttribute(r)||t.includes(r)||(n[r]=null!==(a=e.getAttribute(r))&&void 0!==a?a:"",e.removeAttribute(r))}})),n},o=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},77010:(e,t,n)=>{n.d(t,{a:()=>ae});var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],o={CSS:{},springs:{}};function s(e,t,n){return Math.min(Math.max(e,t),n)}function u(e,t){return e.indexOf(t)>-1}function l(e,t){return e.apply(null,t)}var c={arr:function(e){return Array.isArray(e)},obj:function(e){return u(Object.prototype.toString.call(e),"Object")},pth:function(e){return c.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||c.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return c.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return c.hex(e)||c.rgb(e)||c.hsl(e)},key:function(e){return!r.hasOwnProperty(e)&&!a.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function d(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function f(e,t){var n=d(e),r=s(c.und(n[0])?1:n[0],.1,100),a=s(c.und(n[1])?100:n[1],.1,100),i=s(c.und(n[2])?10:n[2],.1,100),u=s(c.und(n[3])?0:n[3],.1,100),l=Math.sqrt(a/r),f=i/(2*Math.sqrt(a*r)),h=f<1?l*Math.sqrt(1-f*f):0,p=f<1?(f*l-u)/h:-u+l;function g(e){var n=t?t*e/1e3:e;return n=f<1?Math.exp(-n*f*l)*(1*Math.cos(h*n)+p*Math.sin(h*n)):(1+p*n)*Math.exp(-n*l),0===e||1===e?e:1-n}return t?g:function(){var t=o.springs[e];if(t)return t;for(var n=1/6,r=0,a=0;;)if(1===g(r+=n)){if(++a>=16)break}else a=0;var i=r*n*1e3;return o.springs[e]=i,i}}function h(e){return void 0===e&&(e=10),function(t){return Math.ceil(s(t,1e-6,1)*e)*(1/e)}}var p,g,m=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function a(e,a,i){return((t(a,i)*e+n(a,i))*e+r(a))*e}function i(e,a,i){return 3*t(a,i)*e*e+2*n(a,i)*e+r(a)}return function(t,n,r,o){if(0<=t&&t<=1&&0<=r&&r<=1){var s=new Float32Array(11);if(t!==n||r!==o)for(var u=0;u<11;++u)s[u]=a(u*e,t,r);return function(e){return t===n&&r===o||0===e||1===e?e:a(l(e),n,o)}}function l(n){for(var o=0,u=1;10!==u&&s[u]<=n;++u)o+=e;--u;var l=o+(n-s[u])/(s[u+1]-s[u])*e,c=i(l,t,r);return c>=.001?function(e,t,n,r){for(var o=0;o<4;++o){var s=i(t,n,r);if(0===s)return t;t-=(a(t,n,r)-e)/s}return t}(n,l,t,r):0===c?l:function(e,t,n,r,i){var o,s,u=0;do{(o=a(s=t+(n-t)/2,r,i)-e)>0?n=s:t=s}while(Math.abs(o)>1e-7&&++u<10);return s}(n,o,o+e,t,r)}}}(),v=(p={linear:function(){return function(e){return e}}},g={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Expo:function(){return function(e){return e?Math.pow(2,10*e-10):0}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=s(e,1,10),r=s(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint"].forEach((function(e,t){g[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(g).forEach((function(e){var t=g[e];p["easeIn"+e]=t,p["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},p["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},p["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),p);function b(e,t){if(c.fnc(e))return e;var n=e.split("(")[0],r=v[n],a=d(e);switch(n){case"spring":return f(e,t);case"cubicBezier":return l(m,a);case"steps":return l(h,a);default:return l(r,a)}}function y(e){try{return document.querySelectorAll(e)}catch(t){return}}function x(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in e){var o=e[i];t.call(r,o,i,e)&&a.push(o)}return a}function w(e){return e.reduce((function(e,t){return e.concat(c.arr(t)?w(t):t)}),[])}function k(e){return c.arr(e)?e:(c.str(e)&&(e=y(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function M(e,t){return e.some((function(e){return e===t}))}function O(e){var t={};for(var n in e)t[n]=e[n];return t}function C(e,t){var n=O(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function D(e,t){var n=O(e);for(var r in t)n[r]=c.und(e[r])?t[r]:e[r];return n}function E(e){return c.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:c.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):c.hsl(e)?function(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,s=parseInt(a[3],10)/100,u=a[4]||1;function l(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==o)t=n=r=s;else{var c=s<.5?s*(1+o):s+o-s*o,d=2*s-c;t=l(d,c,i+1/3),n=l(d,c,i),r=l(d,c,i-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+u+")"}(e):void 0;var t,n}function P(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function A(e,t){return c.fnc(e)?e(t.target,t.id,t.total):e}function I(e,t){return e.getAttribute(t)}function B(e,t,n){if(M([n,"deg","rad","turn"],P(t)))return t;var r=o.CSS[t+n];if(!c.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var s=100/a.offsetWidth;i.removeChild(a);var u=s*parseFloat(t);return o.CSS[t+n]=u,u}function T(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?B(e,a,n):a}}function _(e,t){return c.dom(e)&&!c.inp(e)&&(!c.nil(I(e,t))||c.svg(e)&&e[t])?"attribute":c.dom(e)&&M(i,t)?"transform":c.dom(e)&&"transform"!==t&&T(e,t)?"css":null!=e[t]?"object":void 0}function L(e){if(c.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function S(e,t,n,r){var a=u(t,"scale")?1:0+function(e){return u(e,"translate")||"perspective"===e?"px":u(e,"rotate")||u(e,"skew")?"deg":void 0}(t),i=L(e).get(t)||a;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?B(e,i,r):i}function j(e,t,n,r){switch(_(e,t)){case"transform":return S(e,t,r,n);case"css":return T(e,t,n);case"attribute":return I(e,t);default:return e[t]||0}}function N(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=P(e)||0,a=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function F(e,t){if(c.col(e))return E(e);if(/\s/g.test(e))return e;var n=P(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function z(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function V(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=z(t,i)),t=i}return r}function $(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*I(e,"r")}(e);case"rect":return function(e){return 2*I(e,"width")+2*I(e,"height")}(e);case"line":return function(e){return z({x:I(e,"x1"),y:I(e,"y1")},{x:I(e,"x2"),y:I(e,"y2")})}(e);case"polyline":return V(e);case"polygon":return function(e){var t=e.points;return V(e)+z(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function q(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;c.svg(t)&&c.svg(t.parentNode);)t=t.parentNode;return t}(e),a=r.getBoundingClientRect(),i=I(r,"viewBox"),o=a.width,s=a.height,u=n.viewBox||(i?i.split(" "):[0,0,o,s]);return{el:r,viewBox:u,x:u[0]/1,y:u[1]/1,w:o,h:s,vW:u[2],vH:u[3]}}function W(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=q(e.el,e.svg),i=r(),o=r(-1),s=r(1),u=n?1:a.w/a.vW,l=n?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*u;case"y":return(i.y-a.y)*l;case"angle":return 180*Math.atan2(s.y-o.y,s.x-o.x)/Math.PI}}function R(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=F(c.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:c.str(e)||t?r.split(n):[]}}function H(e){return x(e?w(c.arr(e)?e.map(k):k(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function X(e){var t=H(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:L(e)}}}))}function Y(e,t){var n=O(t);if(/^spring/.test(n.easing)&&(n.duration=f(n.easing)),c.arr(e)){var r=e.length;2===r&&!c.obj(e[0])?e={value:e}:c.fnc(t.duration)||(n.duration=t.duration/r)}var a=c.arr(e)?e:[e];return a.map((function(e,n){var r=c.obj(e)&&!c.pth(e)?e:{value:e};return c.und(r.delay)&&(r.delay=n?0:t.delay),c.und(r.endDelay)&&(r.endDelay=n===a.length-1?t.endDelay:0),r})).map((function(e){return D(e,n)}))}function U(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=D(function(e){for(var t=x(w(e.map((function(e){return Object.keys(e)}))),(function(e){return c.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)c.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}(r),t)),t)c.key(a)&&n.push({name:a,tweens:Y(t[a],e)});return n}function Z(e,t){var n;return e.tweens.map((function(r){var a=function(e,t){var n={};for(var r in e){var a=A(e[r],t);c.arr(a)&&1===(a=a.map((function(e){return A(e,t)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),i=a.value,o=c.arr(i)?i[1]:i,s=P(o),u=j(t.target,e.name,s,t),l=n?n.to.original:u,d=c.arr(i)?i[0]:l,f=P(d)||P(u),h=s||f;return c.und(o)&&(o=l),a.from=R(d,h),a.to=R(N(o,d),h),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=b(a.easing,a.duration),a.isPath=c.pth(i),a.isPathTargetInsideSVG=a.isPath&&c.svg(t.target),a.isColor=c.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var G={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var i="";r.list.forEach((function(e,t){i+=t+"("+e+") "})),e.style.transform=i}}};function Q(e,t){X(e).forEach((function(e){for(var n in t){var r=A(t[n],e),a=e.target,i=P(r),o=j(a,n,i,e),s=N(F(r,i||P(o)),o),u=_(a,n);G[u](a,n,s,e.transforms,!0)}}))}function J(e,t){return x(w(e.map((function(e){return t.map((function(t){return function(e,t){var n=_(e.target,t.name);if(n){var r=Z(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,t)}))}))),(function(e){return!c.und(e)}))}function K(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var ee=0;var te=[],ne=function(){var e;function t(n){for(var r=te.length,a=0;a<r;){var i=te[a];i.paused?(te.splice(a,1),r--):(i.tick(n),a++)}e=a>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ae.suspendWhenDocumentHidden&&(re()?e=cancelAnimationFrame(e):(te.forEach((function(e){return e._onDocumentVisibility()})),ne()))})),function(){e||re()&&ae.suspendWhenDocumentHidden||!(te.length>0)||(e=requestAnimationFrame(t))}}();function re(){return!!document&&document.hidden}function ae(e){void 0===e&&(e={});var t,n=0,i=0,o=0,u=0,l=null;function c(e){var t=window.Promise&&new Promise((function(e){return l=e}));return e.finished=t,t}var d=function(e){var t=C(r,e),n=C(a,e),i=U(n,e),o=X(e.targets),s=J(o,i),u=K(s,n),l=ee;return ee++,D(t,{id:l,children:[],animatables:o,animations:s,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}(e);function f(){var e=d.direction;"alternate"!==e&&(d.direction="normal"!==e?"normal":"reverse"),d.reversed=!d.reversed,t.forEach((function(e){return e.reversed=d.reversed}))}function h(e){return d.reversed?d.duration-e:e}function p(){n=0,i=h(d.currentTime)*(1/ae.speed)}function g(e,t){t&&t.seek(e-t.timelineOffset)}function m(e){for(var t=0,n=d.animations,r=n.length;t<r;){var a=n[t],i=a.animatable,o=a.tweens,u=o.length-1,l=o[u];u&&(l=x(o,(function(t){return e<t.end}))[0]||l);for(var c=s(e-l.start-l.delay,0,l.duration)/l.duration,f=isNaN(c)?1:l.easing(c),h=l.to.strings,p=l.round,g=[],m=l.to.numbers.length,v=void 0,b=0;b<m;b++){var y=void 0,w=l.to.numbers[b],k=l.from.numbers[b]||0;y=l.isPath?W(l.value,f*w,l.isPathTargetInsideSVG):k+f*(w-k),p&&(l.isColor&&b>2||(y=Math.round(y*p)/p)),g.push(y)}var M=h.length;if(M){v=h[0];for(var O=0;O<M;O++){var C=h[O+1],D=g[O];isNaN(D)||(v+=C?D+C:D+" ")}}else v=g[0];G[a.type](i.target,a.property,v,i.transforms),a.currentValue=v,t++}}function v(e){d[e]&&!d.passThrough&&d[e](d)}function b(e){var r=d.duration,a=d.delay,p=r-d.endDelay,b=h(e);d.progress=s(b/r*100,0,100),d.reversePlayback=b<d.currentTime,t&&function(e){if(d.reversePlayback)for(var n=u;n--;)g(e,t[n]);else for(var r=0;r<u;r++)g(e,t[r])}(b),!d.began&&d.currentTime>0&&(d.began=!0,v("begin")),!d.loopBegan&&d.currentTime>0&&(d.loopBegan=!0,v("loopBegin")),b<=a&&0!==d.currentTime&&m(0),(b>=p&&d.currentTime!==r||!r)&&m(r),b>a&&b<p?(d.changeBegan||(d.changeBegan=!0,d.changeCompleted=!1,v("changeBegin")),v("change"),m(b)):d.changeBegan&&(d.changeCompleted=!0,d.changeBegan=!1,v("changeComplete")),d.currentTime=s(b,0,r),d.began&&v("update"),e>=r&&(i=0,d.remaining&&!0!==d.remaining&&d.remaining--,d.remaining?(n=o,v("loopComplete"),d.loopBegan=!1,"alternate"===d.direction&&f()):(d.paused=!0,d.completed||(d.completed=!0,v("loopComplete"),v("complete"),!d.passThrough&&"Promise"in window&&(l(),c(d)))))}return c(d),d.reset=function(){var e=d.direction;d.passThrough=!1,d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.loopBegan=!1,d.changeBegan=!1,d.completed=!1,d.changeCompleted=!1,d.reversePlayback=!1,d.reversed="reverse"===e,d.remaining=d.loop,t=d.children;for(var n=u=t.length;n--;)d.children[n].reset();(d.reversed&&!0!==d.loop||"alternate"===e&&1===d.loop)&&d.remaining++,m(d.reversed?d.duration:0)},d._onDocumentVisibility=p,d.set=function(e,t){return Q(e,t),d},d.tick=function(e){o=e,n||(n=o),b((o+(i-n))*ae.speed)},d.seek=function(e){b(h(e))},d.pause=function(){d.paused=!0,p()},d.play=function(){d.paused&&(d.completed&&d.reset(),d.paused=!1,te.push(d),p(),ne())},d.reverse=function(){f(),d.completed=!d.reversed,p()},d.restart=function(){d.reset(),d.play()},d.remove=function(e){oe(H(e),d)},d.reset(),d.autoplay&&d.play(),d}function ie(e,t){for(var n=t.length;n--;)M(e,t[n].animatable.target)&&t.splice(n,1)}function oe(e,t){var n=t.animations,r=t.children;ie(e,n);for(var a=r.length;a--;){var i=r[a],o=i.animations;ie(e,o),o.length||i.children.length||r.splice(a,1)}n.length||r.length||t.pause()}ae.version="3.2.1",ae.speed=1,ae.suspendWhenDocumentHidden=!0,ae.running=te,ae.remove=function(e){for(var t=H(e),n=te.length;n--;){oe(t,te[n])}},ae.get=j,ae.set=Q,ae.convertPx=B,ae.path=function(e,t){var n=c.str(e)?y(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:q(n),totalLength:$(n)*(r/100)}}},ae.setDashoffset=function(e){var t=$(e);return e.setAttribute("stroke-dasharray",t),t},ae.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?b(t.easing):null,a=t.grid,i=t.axis,o=t.from||0,s="first"===o,u="center"===o,l="last"===o,d=c.arr(e),f=d?parseFloat(e[0]):parseFloat(e),h=d?parseFloat(e[1]):0,p=P(d?e[1]:e)||0,g=t.start||0+(d?f:0),m=[],v=0;return function(e,t,c){if(s&&(o=0),u&&(o=(c-1)/2),l&&(o=c-1),!m.length){for(var b=0;b<c;b++){if(a){var y=u?(a[0]-1)/2:o%a[0],x=u?(a[1]-1)/2:Math.floor(o/a[0]),w=y-b%a[0],k=x-Math.floor(b/a[0]),M=Math.sqrt(w*w+k*k);"x"===i&&(M=-w),"y"===i&&(M=-k),m.push(M)}else m.push(Math.abs(o-b));v=Math.max.apply(Math,m)}r&&(m=m.map((function(e){return r(e/v)*v}))),"reverse"===n&&(m=m.map((function(e){return i?e<0?-1*e:-e:Math.abs(v-e)})))}return g+(d?(h-f)/v:f)*(Math.round(100*m[t])/100)+p}},ae.timeline=function(e){void 0===e&&(e={});var t=ae(e);return t.duration=0,t.add=function(n,r){var i=te.indexOf(t),o=t.children;function s(e){e.passThrough=!0}i>-1&&te.splice(i,1);for(var u=0;u<o.length;u++)s(o[u]);var l=D(n,C(a,e));l.targets=l.targets||e.targets;var d=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=c.und(r)?d:N(r,d),s(t),t.seek(l.timelineOffset);var f=ae(l);s(f),o.push(f);var h=K(o,e);return t.delay=h.delay,t.endDelay=h.endDelay,t.duration=h.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},ae.easing=b,ae.penner=v,ae.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},64492:(e,t,n)=>{n.r(t),n.d(t,{ix_modal:()=>l});var r=n(6694),a=n(77010),i=n(14954),o=n(44761),s=n(59199);var u=function(e,t,n,r){var a,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const l=class{constructor(e){(0,r.r)(this,e),this.dialogClose=(0,r.c)(this,"dialogClose",7),this.dialogDismiss=(0,r.c)(this,"dialogDismiss",7),this.ariaAttributes={},this.size="360",this.animation=!0,this.backdrop=!0,this.closeOnBackdropClick=!1,this.centered=!1,this.closeOnEscape=!0,this.modalVisible=!1}onKey(e){"Escape"===e.key&&e.preventDefault()}get dialog(){return this.hostElement.shadowRoot.querySelector("dialog")}slideInModal(){const e=this.animation?o.A.mediumTime:0;let t=this.centered?"-50%":40;(0,a.a)({targets:this.dialog,duration:e,opacity:[0,1],translateY:[0,t],translateX:["-50%","-50%"],easing:"easeOutSine"})}slideOutModal(e){const t=this.animation?o.A.mediumTime:0;let n=this.centered?"-50%":40;(0,a.a)({targets:this.dialog,duration:t,opacity:[1,0],translateY:[n,0],translateX:["-50%","-50%"],easing:"easeInSine",complete:()=>{e&&e()}})}onModalClick(e){if(e.target!==this.dialog)return;const t=this.dialog.getBoundingClientRect();!(t.top<=e.clientY&&e.clientY<=t.top+t.height&&t.left<=e.clientX&&e.clientX<=t.left+t.width)&&this.closeOnBackdropClick&&this.dismissModal()}async showModal(){try{const r=await(e="dialog",t=this.hostElement.shadowRoot,void 0===n&&(n=3e3),new Promise(((r,a)=>{const i=Date.now(),o=()=>{const s=t.querySelector(e);s?r(s):Date.now()-i<n?setTimeout(o):a()};o()})));this.modalVisible=!0,r.showModal()}catch(r){console.error("HTMLDialogElement not existing")}var e,t,n}async dismissModal(e){if(!this.modalVisible)return;let t=!0;void 0!==this.beforeDismiss&&(t=await this.beforeDismiss(e)),t&&this.slideOutModal((()=>{this.modalVisible=!1,this.dialog.close(JSON.stringify({type:"dismiss",reason:e},null,2)),this.dialogDismiss.emit(e)}))}async closeModal(e){this.modalVisible&&this.slideOutModal((()=>{this.modalVisible=!1,this.dialog.close(JSON.stringify({type:"close",reason:e},null,2)),this.dialogClose.emit(e)}))}componentDidLoad(){this.slideInModal()}componentWillLoad(){this.ariaAttributes=(0,i.b)(this.hostElement)}render(){return(0,r.h)(r.H,{key:"2eb4265e1340e363f2fad727ce537166e871c455",class:{visible:this.modalVisible,"no-backdrop":!1===this.backdrop,"align-center":this.centered}},(0,r.h)("div",{key:"0ad32150a4e68a653531d20124fef022c348570f",class:"dialog-backdrop"},(0,r.h)("dialog",{key:"424c214d86b57d7001e4af7bd3894bf5024cc94c","aria-modal":(0,i.a)(!0),"aria-describedby":this.ariaAttributes["aria-describedby"],"aria-labelledby":this.ariaAttributes["aria-labelledby"],class:{modal:!0,[`modal-size-${this.size}`]:!0},onClose:()=>this.dismissModal(),onClick:e=>this.onModalClick(e),onCancel:e=>{e.preventDefault(),this.dismissModal()}},(0,r.h)("slot",{key:"4aa40b5224d791540c8a62f6412bb8b60ce0482c"}))))}get hostElement(){return(0,r.g)(this)}};u([(0,s.O)("keydown",(e=>!e.closeOnEscape))],l.prototype,"onKey",null),l.style="::backdrop{--ix-dialog-backdrop:var(--theme-color-lightbox, #0000008c)}:focus-visible{outline:none !important}:host{display:none}:host dialog{--ix-dialog-padding:1rem;margin:0;padding:var(--ix-dialog-padding);padding-top:calc(var(--ix-dialog-padding) + var(--ix-safe-area-inset-top));padding-bottom:calc(var(--ix-dialog-padding) + var(--ix-safe-area-inset-bottom));left:50%}:host dialog::backdrop{-webkit-backdrop-filter:blur(2.7182817459px);backdrop-filter:blur(2.7182817459px)}:host .modal{display:flex;flex-direction:column;position:relative;border:none;border-radius:var(--theme-default-border-radius);background:var(--theme-modal--background);box-shadow:var(--theme-shadow-4);color:var(--theme-color-std-text);overflow:visible;max-height:80vh;pointer-events:all}:host .modal-size-360{width:22.5rem}:host .modal-size-480{width:30rem}:host .modal-size-600{width:37.5rem}:host .modal-size-720{width:45rem}:host .modal-size-840{width:52.5rem}:host .modal-size-full-width{width:95%}:host .modal-size-full-screen{border-radius:0;left:0 !important;top:0 !important;transform:none !important;box-shadow:none;--ix-dialog-full-screen-height:calc(\n    var(--ix-safe-area-inset-top) + var(--ix-safe-area-inset-bottom)\n  );width:calc(100% - var(--ix-dialog-padding) * 2);min-width:calc(100% - var(--ix-dialog-padding) * 2);max-width:calc(100% - var(--ix-dialog-padding) * 2);min-height:calc(100% - var(--ix-dialog-padding) * 2 - var(--ix-dialog-full-screen-height));max-height:calc(100% - var(--ix-dialog-padding) * 2 - var(--ix-dialog-full-screen-height))}:host dialog.modal-size-full-screen::backdrop{background:var(--theme-modal--background)}:host .dialog-backdrop{display:block;position:fixed;width:100vw;height:100vh;top:0;left:0;pointer-events:none}:host ::slotted(ix-modal-footer){margin-top:auto}:host(.visible){display:block}:host(.align-center) dialog{margin:0;left:50%;top:50%}:host(.no-backdrop) dialog::backdrop{background-color:transparent !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important}:host(.with-icon) ::slotted(ix-modal-footer),:host(.with-icon) ::slotted(ix-modal-content){margin-left:3rem}"},59199:(e,t,n)=>{n.d(t,{O:()=>i});var r=n(6694);const a={target:"window",defaultEnabled:!0};function i(e,t){return(n,i)=>{const{componentWillLoad:o,componentWillRender:s,disconnectedCallback:u}=n;t&&(n.componentWillRender=function(){var e;return null===(e=(0,r.g)(this)[`__ix__${i}`])||void 0===e||e.enable(t(this)),s&&s.call(this)}),n.componentWillLoad=function(){const t=function(e,t){void 0===t&&(t={});const n=Object.assign(Object.assign({},a),t);let r;const i=e=>{r(e)},o={on:e=>{r=e},isEnabled:n.defaultEnabled,enable:t=>{o.isEnabled=t,t?addEventListener(e,i):removeEventListener(e,i)},destroy:()=>{o.enable(!1)}};return o.enable(!!n.defaultEnabled),o}(e),n=(0,r.g)(this),s=this[i];return n[`__ix__${i}`]=t,t.on(s.bind(this)),o&&o.call(this)},n.disconnectedCallback=function(){var e;const t=(0,r.g)(this);return t&&t[`__ix__${i}`]&&(null===(e=t[`__ix__${i}`])||void 0===e||e.destroy(),t[`__ix__${i}`]=null),u&&u.call(this)}}}}}]);