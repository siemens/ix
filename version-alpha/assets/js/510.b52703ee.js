"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[510],{77010:(n,e,r)=>{r.d(e,{a:()=>an});var t={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},o=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],i={CSS:{},springs:{}};function u(n,e,r){return Math.min(Math.max(n,e),r)}function s(n,e){return n.indexOf(e)>-1}function c(n,e){return n.apply(null,e)}var l={arr:function(n){return Array.isArray(n)},obj:function(n){return s(Object.prototype.toString.call(n),"Object")},pth:function(n){return l.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||l.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return l.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return l.hex(n)||l.rgb(n)||l.hsl(n)},key:function(n){return!t.hasOwnProperty(n)&&!a.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function f(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map((function(n){return parseFloat(n)})):[]}function d(n,e){var r=f(n),t=u(l.und(r[0])?1:r[0],.1,100),a=u(l.und(r[1])?100:r[1],.1,100),o=u(l.und(r[2])?10:r[2],.1,100),s=u(l.und(r[3])?0:r[3],.1,100),c=Math.sqrt(a/t),d=o/(2*Math.sqrt(a*t)),h=d<1?c*Math.sqrt(1-d*d):0,p=d<1?(d*c-s)/h:-s+c;function v(n){var r=e?e*n/1e3:n;return r=d<1?Math.exp(-r*d*c)*(1*Math.cos(h*r)+p*Math.sin(h*r)):(1+p*r)*Math.exp(-r*c),0===n||1===n?n:1-r}return e?v:function(){var e=i.springs[n];if(e)return e;for(var r=1/6,t=0,a=0;;)if(1===v(t+=r)){if(++a>=16)break}else a=0;var o=t*r*1e3;return i.springs[n]=o,o}}function h(n){return void 0===n&&(n=10),function(e){return Math.ceil(u(e,1e-6,1)*n)*(1/n)}}var p,v,g=function(){var n=.1;function e(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function t(n){return 3*n}function a(n,a,o){return((e(a,o)*n+r(a,o))*n+t(a))*n}function o(n,a,o){return 3*e(a,o)*n*n+2*r(a,o)*n+t(a)}return function(e,r,t,i){if(0<=e&&e<=1&&0<=t&&t<=1){var u=new Float32Array(11);if(e!==r||t!==i)for(var s=0;s<11;++s)u[s]=a(s*n,e,t);return function(n){return e===r&&t===i||0===n||1===n?n:a(c(n),r,i)}}function c(r){for(var i=0,s=1;10!==s&&u[s]<=r;++s)i+=n;--s;var c=i+(r-u[s])/(u[s+1]-u[s])*n,l=o(c,e,t);return l>=.001?function(n,e,r,t){for(var i=0;i<4;++i){var u=o(e,r,t);if(0===u)return e;e-=(a(e,r,t)-n)/u}return e}(r,c,e,t):0===l?c:function(n,e,r,t,o){var i,u,s=0;do{(i=a(u=e+(r-e)/2,t,o)-n)>0?r=u:e=u}while(Math.abs(i)>1e-7&&++s<10);return u}(r,i,i+n,e,t)}}}(),m=(p={linear:function(){return function(n){return n}}},v={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,r=4;n<((e=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var r=u(n,1,10),t=u(e,.1,2);return function(n){return 0===n||1===n?n:-r*Math.pow(2,10*(n-1))*Math.sin((n-1-t/(2*Math.PI)*Math.asin(1/r))*(2*Math.PI)/t)}}},["Quad","Cubic","Quart","Quint"].forEach((function(n,e){v[n]=function(){return function(n){return Math.pow(n,e+2)}}})),Object.keys(v).forEach((function(n){var e=v[n];p["easeIn"+n]=e,p["easeOut"+n]=function(n,r){return function(t){return 1-e(n,r)(1-t)}},p["easeInOut"+n]=function(n,r){return function(t){return t<.5?e(n,r)(2*t)/2:1-e(n,r)(-2*t+2)/2}},p["easeOutIn"+n]=function(n,r){return function(t){return t<.5?(1-e(n,r)(1-2*t))/2:(e(n,r)(2*t-1)+1)/2}}})),p);function b(n,e){if(l.fnc(n))return n;var r=n.split("(")[0],t=m[r],a=f(n);switch(r){case"spring":return d(n,e);case"cubicBezier":return c(g,a);case"steps":return c(h,a);default:return c(t,a)}}function y(n){try{return document.querySelectorAll(n)}catch(e){return}}function w(n,e){for(var r=n.length,t=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<r;o++)if(o in n){var i=n[o];e.call(t,i,o,n)&&a.push(i)}return a}function x(n){return n.reduce((function(n,e){return n.concat(l.arr(e)?x(e):e)}),[])}function k(n){return l.arr(n)?n:(l.str(n)&&(n=y(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function M(n,e){return n.some((function(n){return n===e}))}function C(n){var e={};for(var r in n)e[r]=n[r];return e}function O(n,e){var r=C(n);for(var t in n)r[t]=e.hasOwnProperty(t)?e[t]:n[t];return r}function I(n,e){var r=C(n);for(var t in e)r[t]=l.und(n[t])?e[t]:n[t];return r}function P(n){return l.rgb(n)?(r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+r[1]+",1)":e:l.hex(n)?function(n){var e=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(n,e,r,t){return e+e+r+r+t+t})),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(r[1],16)+","+parseInt(r[2],16)+","+parseInt(r[3],16)+",1)"}(n):l.hsl(n)?function(n){var e,r,t,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function c(n,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+6*(e-n)*r:r<.5?e:r<2/3?n+(e-n)*(2/3-r)*6:n}if(0==i)e=r=t=u;else{var l=u<.5?u*(1+i):u+i-u*i,f=2*u-l;e=c(f,l,o+1/3),r=c(f,l,o),t=c(f,l,o-1/3)}return"rgba("+255*e+","+255*r+","+255*t+","+s+")"}(n):void 0;var e,r}function D(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function T(n,e){return l.fnc(n)?n(e.target,e.id,e.total):n}function B(n,e){return n.getAttribute(e)}function E(n,e,r){if(M([r,"deg","rad","turn"],D(e)))return e;var t=i.CSS[e+r];if(!l.und(t))return t;var a=document.createElement(n.tagName),o=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+r;var u=100/a.offsetWidth;o.removeChild(a);var s=u*parseFloat(e);return i.CSS[e+r]=s,s}function A(n,e,r){if(e in n.style){var t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(t)||"0";return r?E(n,a,r):a}}function F(n,e){return l.dom(n)&&!l.inp(n)&&(!l.nil(B(n,e))||l.svg(n)&&n[e])?"attribute":l.dom(n)&&M(o,e)?"transform":l.dom(n)&&"transform"!==e&&A(n,e)?"css":null!=n[e]?"object":void 0}function N(n){if(l.dom(n)){for(var e,r=n.style.transform||"",t=/(\w+)\(([^)]*)\)/g,a=new Map;e=t.exec(r);)a.set(e[1],e[2]);return a}}function S(n,e,r,t){var a=s(e,"scale")?1:0+function(n){return s(n,"translate")||"perspective"===n?"px":s(n,"rotate")||s(n,"skew")?"deg":void 0}(e),o=N(n).get(e)||a;return r&&(r.transforms.list.set(e,o),r.transforms.last=e),t?E(n,o,t):o}function L(n,e,r,t){switch(F(n,e)){case"transform":return S(n,e,t,r);case"css":return A(n,e,r);case"attribute":return B(n,e);default:return n[e]||0}}function j(n,e){var r=/^(\*=|\+=|-=)/.exec(n);if(!r)return n;var t=D(n)||0,a=parseFloat(e),o=parseFloat(n.replace(r[0],""));switch(r[0][0]){case"+":return a+o+t;case"-":return a-o+t;case"*":return a*o+t}}function q(n,e){if(l.col(n))return P(n);if(/\s/g.test(n))return n;var r=D(n),t=r?n.substr(0,n.length-r.length):n;return e?t+e:t}function H(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function V(n){for(var e,r=n.points,t=0,a=0;a<r.numberOfItems;a++){var o=r.getItem(a);a>0&&(t+=H(e,o)),e=o}return t}function $(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return function(n){return 2*Math.PI*B(n,"r")}(n);case"rect":return function(n){return 2*B(n,"width")+2*B(n,"height")}(n);case"line":return function(n){return H({x:B(n,"x1"),y:B(n,"y1")},{x:B(n,"x2"),y:B(n,"y2")})}(n);case"polyline":return V(n);case"polygon":return function(n){var e=n.points;return V(n)+H(e.getItem(e.numberOfItems-1),e.getItem(0))}(n)}}function W(n,e){var r=e||{},t=r.el||function(n){for(var e=n.parentNode;l.svg(e)&&l.svg(e.parentNode);)e=e.parentNode;return e}(n),a=t.getBoundingClientRect(),o=B(t,"viewBox"),i=a.width,u=a.height,s=r.viewBox||(o?o.split(" "):[0,0,i,u]);return{el:t,viewBox:s,x:s[0]/1,y:s[1]/1,w:i,h:u,vW:s[2],vH:s[3]}}function z(n,e,r){function t(r){void 0===r&&(r=0);var t=e+r>=1?e+r:0;return n.el.getPointAtLength(t)}var a=W(n.el,n.svg),o=t(),i=t(-1),u=t(1),s=r?1:a.w/a.vW,c=r?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*s;case"y":return(o.y-a.y)*c;case"angle":return 180*Math.atan2(u.y-i.y,u.x-i.x)/Math.PI}}function X(n,e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,t=q(l.pth(n)?n.totalLength:n,e)+"";return{original:t,numbers:t.match(r)?t.match(r).map(Number):[0],strings:l.str(n)||e?t.split(r):[]}}function Y(n){return w(n?x(l.arr(n)?n.map(k):k(n)):[],(function(n,e,r){return r.indexOf(n)===e}))}function Z(n){var e=Y(n);return e.map((function(n,r){return{target:n,id:r,total:e.length,transforms:{list:N(n)}}}))}function _(n,e){var r=C(e);if(/^spring/.test(r.easing)&&(r.duration=d(r.easing)),l.arr(n)){var t=n.length;2===t&&!l.obj(n[0])?n={value:n}:l.fnc(e.duration)||(r.duration=e.duration/t)}var a=l.arr(n)?n:[n];return a.map((function(n,r){var t=l.obj(n)&&!l.pth(n)?n:{value:n};return l.und(t.delay)&&(t.delay=r?0:e.delay),l.und(t.endDelay)&&(t.endDelay=r===a.length-1?e.endDelay:0),t})).map((function(n){return I(n,r)}))}function G(n,e){var r=[],t=e.keyframes;for(var a in t&&(e=I(function(n){for(var e=w(x(n.map((function(n){return Object.keys(n)}))),(function(n){return l.key(n)})).reduce((function(n,e){return n.indexOf(e)<0&&n.push(e),n}),[]),r={},t=function(t){var a=e[t];r[a]=n.map((function(n){var e={};for(var r in n)l.key(r)?r==a&&(e.value=n[r]):e[r]=n[r];return e}))},a=0;a<e.length;a++)t(a);return r}(t),e)),e)l.key(a)&&r.push({name:a,tweens:_(e[a],n)});return r}function Q(n,e){var r;return n.tweens.map((function(t){var a=function(n,e){var r={};for(var t in n){var a=T(n[t],e);l.arr(a)&&1===(a=a.map((function(n){return T(n,e)}))).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(t,e),o=a.value,i=l.arr(o)?o[1]:o,u=D(i),s=L(e.target,n.name,u,e),c=r?r.to.original:s,f=l.arr(o)?o[0]:c,d=D(f)||D(s),h=u||d;return l.und(i)&&(i=c),a.from=X(f,h),a.to=X(j(i,f),h),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=b(a.easing,a.duration),a.isPath=l.pth(o),a.isPathTargetInsideSVG=a.isPath&&l.svg(e.target),a.isColor=l.col(a.from.original),a.isColor&&(a.round=1),r=a,a}))}var R={css:function(n,e,r){return n.style[e]=r},attribute:function(n,e,r){return n.setAttribute(e,r)},object:function(n,e,r){return n[e]=r},transform:function(n,e,r,t,a){if(t.list.set(e,r),e===t.last||a){var o="";t.list.forEach((function(n,e){o+=e+"("+n+") "})),n.style.transform=o}}};function J(n,e){Z(n).forEach((function(n){for(var r in e){var t=T(e[r],n),a=n.target,o=D(t),i=L(a,r,o,n),u=j(q(t,o||D(i)),i),s=F(a,r);R[s](a,r,u,n.transforms,!0)}}))}function K(n,e){return w(x(n.map((function(n){return e.map((function(e){return function(n,e){var r=F(n.target,e.name);if(r){var t=Q(e,n),a=t[t.length-1];return{type:r,property:e.name,animatable:n,tweens:t,duration:a.end,delay:t[0].delay,endDelay:a.endDelay}}}(n,e)}))}))),(function(n){return!l.und(n)}))}function U(n,e){var r=n.length,t=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=r?Math.max.apply(Math,n.map((function(n){return t(n)+n.duration}))):e.duration,a.delay=r?Math.min.apply(Math,n.map((function(n){return t(n)+n.delay}))):e.delay,a.endDelay=r?a.duration-Math.max.apply(Math,n.map((function(n){return t(n)+n.duration-n.endDelay}))):e.endDelay,a}var nn=0;var en=[],rn=function(){var n;function e(r){for(var t=en.length,a=0;a<t;){var o=en[a];o.paused?(en.splice(a,1),t--):(o.tick(r),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){an.suspendWhenDocumentHidden&&(tn()?n=cancelAnimationFrame(n):(en.forEach((function(n){return n._onDocumentVisibility()})),rn()))})),function(){n||tn()&&an.suspendWhenDocumentHidden||!(en.length>0)||(n=requestAnimationFrame(e))}}();function tn(){return!!document&&document.hidden}function an(n){void 0===n&&(n={});var e,r=0,o=0,i=0,s=0,c=null;function l(n){var e=window.Promise&&new Promise((function(n){return c=n}));return n.finished=e,e}var f=function(n){var e=O(t,n),r=O(a,n),o=G(r,n),i=Z(n.targets),u=K(i,o),s=U(u,r),c=nn;return nn++,I(e,{id:c,children:[],animatables:i,animations:u,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}(n);function d(){var n=f.direction;"alternate"!==n&&(f.direction="normal"!==n?"normal":"reverse"),f.reversed=!f.reversed,e.forEach((function(n){return n.reversed=f.reversed}))}function h(n){return f.reversed?f.duration-n:n}function p(){r=0,o=h(f.currentTime)*(1/an.speed)}function v(n,e){e&&e.seek(n-e.timelineOffset)}function g(n){for(var e=0,r=f.animations,t=r.length;e<t;){var a=r[e],o=a.animatable,i=a.tweens,s=i.length-1,c=i[s];s&&(c=w(i,(function(e){return n<e.end}))[0]||c);for(var l=u(n-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(l)?1:c.easing(l),h=c.to.strings,p=c.round,v=[],g=c.to.numbers.length,m=void 0,b=0;b<g;b++){var y=void 0,x=c.to.numbers[b],k=c.from.numbers[b]||0;y=c.isPath?z(c.value,d*x,c.isPathTargetInsideSVG):k+d*(x-k),p&&(c.isColor&&b>2||(y=Math.round(y*p)/p)),v.push(y)}var M=h.length;if(M){m=h[0];for(var C=0;C<M;C++){var O=h[C+1],I=v[C];isNaN(I)||(m+=O?I+O:I+" ")}}else m=v[0];R[a.type](o.target,a.property,m,o.transforms),a.currentValue=m,e++}}function m(n){f[n]&&!f.passThrough&&f[n](f)}function b(n){var t=f.duration,a=f.delay,p=t-f.endDelay,b=h(n);f.progress=u(b/t*100,0,100),f.reversePlayback=b<f.currentTime,e&&function(n){if(f.reversePlayback)for(var r=s;r--;)v(n,e[r]);else for(var t=0;t<s;t++)v(n,e[t])}(b),!f.began&&f.currentTime>0&&(f.began=!0,m("begin")),!f.loopBegan&&f.currentTime>0&&(f.loopBegan=!0,m("loopBegin")),b<=a&&0!==f.currentTime&&g(0),(b>=p&&f.currentTime!==t||!t)&&g(t),b>a&&b<p?(f.changeBegan||(f.changeBegan=!0,f.changeCompleted=!1,m("changeBegin")),m("change"),g(b)):f.changeBegan&&(f.changeCompleted=!0,f.changeBegan=!1,m("changeComplete")),f.currentTime=u(b,0,t),f.began&&m("update"),n>=t&&(o=0,f.remaining&&!0!==f.remaining&&f.remaining--,f.remaining?(r=i,m("loopComplete"),f.loopBegan=!1,"alternate"===f.direction&&d()):(f.paused=!0,f.completed||(f.completed=!0,m("loopComplete"),m("complete"),!f.passThrough&&"Promise"in window&&(c(),l(f)))))}return l(f),f.reset=function(){var n=f.direction;f.passThrough=!1,f.currentTime=0,f.progress=0,f.paused=!0,f.began=!1,f.loopBegan=!1,f.changeBegan=!1,f.completed=!1,f.changeCompleted=!1,f.reversePlayback=!1,f.reversed="reverse"===n,f.remaining=f.loop,e=f.children;for(var r=s=e.length;r--;)f.children[r].reset();(f.reversed&&!0!==f.loop||"alternate"===n&&1===f.loop)&&f.remaining++,g(f.reversed?f.duration:0)},f._onDocumentVisibility=p,f.set=function(n,e){return J(n,e),f},f.tick=function(n){i=n,r||(r=i),b((i+(o-r))*an.speed)},f.seek=function(n){b(h(n))},f.pause=function(){f.paused=!0,p()},f.play=function(){f.paused&&(f.completed&&f.reset(),f.paused=!1,en.push(f),p(),rn())},f.reverse=function(){d(),f.completed=!f.reversed,p()},f.restart=function(){f.reset(),f.play()},f.remove=function(n){un(Y(n),f)},f.reset(),f.autoplay&&f.play(),f}function on(n,e){for(var r=e.length;r--;)M(n,e[r].animatable.target)&&e.splice(r,1)}function un(n,e){var r=e.animations,t=e.children;on(n,r);for(var a=t.length;a--;){var o=t[a],i=o.animations;on(n,i),i.length||o.children.length||t.splice(a,1)}r.length||t.length||e.pause()}an.version="3.2.1",an.speed=1,an.suspendWhenDocumentHidden=!0,an.running=en,an.remove=function(n){for(var e=Y(n),r=en.length;r--;){un(e,en[r])}},an.get=L,an.set=J,an.convertPx=E,an.path=function(n,e){var r=l.str(n)?y(n)[0]:n,t=e||100;return function(n){return{property:n,el:r,svg:W(r),totalLength:$(r)*(t/100)}}},an.setDashoffset=function(n){var e=$(n);return n.setAttribute("stroke-dasharray",e),e},an.stagger=function(n,e){void 0===e&&(e={});var r=e.direction||"normal",t=e.easing?b(e.easing):null,a=e.grid,o=e.axis,i=e.from||0,u="first"===i,s="center"===i,c="last"===i,f=l.arr(n),d=f?parseFloat(n[0]):parseFloat(n),h=f?parseFloat(n[1]):0,p=D(f?n[1]:n)||0,v=e.start||0+(f?d:0),g=[],m=0;return function(n,e,l){if(u&&(i=0),s&&(i=(l-1)/2),c&&(i=l-1),!g.length){for(var b=0;b<l;b++){if(a){var y=s?(a[0]-1)/2:i%a[0],w=s?(a[1]-1)/2:Math.floor(i/a[0]),x=y-b%a[0],k=w-Math.floor(b/a[0]),M=Math.sqrt(x*x+k*k);"x"===o&&(M=-x),"y"===o&&(M=-k),g.push(M)}else g.push(Math.abs(i-b));m=Math.max.apply(Math,g)}t&&(g=g.map((function(n){return t(n/m)*m}))),"reverse"===r&&(g=g.map((function(n){return o?n<0?-1*n:-n:Math.abs(m-n)})))}return v+(f?(h-d)/m:d)*(Math.round(100*g[e])/100)+p}},an.timeline=function(n){void 0===n&&(n={});var e=an(n);return e.duration=0,e.add=function(r,t){var o=en.indexOf(e),i=e.children;function u(n){n.passThrough=!0}o>-1&&en.splice(o,1);for(var s=0;s<i.length;s++)u(i[s]);var c=I(r,O(a,n));c.targets=c.targets||n.targets;var f=e.duration;c.autoplay=!1,c.direction=e.direction,c.timelineOffset=l.und(t)?f:j(t,f),u(e),e.seek(c.timelineOffset);var d=an(c);u(d),i.push(d);var h=U(i,n);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},an.easing=b,an.penner=m,an.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n}},70510:(n,e,r)=>{r.r(e),r.d(e,{ix_application_sidebar:()=>i});var t=r(6694),a=r(77010),o=r(44761);const i=class{constructor(n){(0,t.r)(this,n),this.visible=!0}listenToggleEvent(){const n=!this.visible,e={targets:this.hostElement,width:n?["0","22rem"]:["22rem","0"],opacity:n?[0,1]:[1,0],easing:"easeInSine",duration:o.A.defaultTime},r=()=>{this.visible=n};n?e.begin=r.bind(this):e.complete=r.bind(this),(0,a.a)(e)}render(){return(0,t.h)(t.H,{key:"452d80151fb0e848c50ac7a2551929893fbc31f6",slot:"application-sidebar",class:{visible:this.visible}},this.visible?(0,t.h)("slot",null):null)}get hostElement(){return(0,t.g)(this)}};i.style=":host{display:block;position:relative;width:22rem;height:100%;padding:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(.visible){border-right:2px solid var(--theme-color-soft-bdr);padding:1.5rem 0.5rem 0}"}}]);