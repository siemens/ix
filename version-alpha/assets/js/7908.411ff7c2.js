"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7908],{47323:(t,e,n)=>{n.d(e,{a:()=>at});var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],o={CSS:{},springs:{}};function u(t,e,n){return Math.min(Math.max(t,e),n)}function s(t,e){return t.indexOf(e)>-1}function c(t,e){return t.apply(null,e)}var l={arr:function(t){return Array.isArray(t)},obj:function(t){return s(Object.prototype.toString.call(t),"Object")},pth:function(t){return l.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||l.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},nil:function(t){return l.und(t)||null===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return l.hex(t)||l.rgb(t)||l.hsl(t)},key:function(t){return!r.hasOwnProperty(t)&&!a.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function f(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map((function(t){return parseFloat(t)})):[]}function d(t,e){var n=f(t),r=u(l.und(n[0])?1:n[0],.1,100),a=u(l.und(n[1])?100:n[1],.1,100),i=u(l.und(n[2])?10:n[2],.1,100),s=u(l.und(n[3])?0:n[3],.1,100),c=Math.sqrt(a/r),d=i/(2*Math.sqrt(a*r)),h=d<1?c*Math.sqrt(1-d*d):0,m=d<1?(d*c-s)/h:-s+c;function v(t){var n=e?e*t/1e3:t;return n=d<1?Math.exp(-n*d*c)*(1*Math.cos(h*n)+m*Math.sin(h*n)):(1+m*n)*Math.exp(-n*c),0===t||1===t?t:1-n}return e?v:function(){var e=o.springs[t];if(e)return e;for(var n=1/6,r=0,a=0;;)if(1===v(r+=n)){if(++a>=16)break}else a=0;var i=r*n*1e3;return o.springs[t]=i,i}}function h(t){return void 0===t&&(t=10),function(e){return Math.ceil(u(e,1e-6,1)*t)*(1/t)}}var m,v,p=function(){var t=.1;function e(t,e){return 1-3*e+3*t}function n(t,e){return 3*e-6*t}function r(t){return 3*t}function a(t,a,i){return((e(a,i)*t+n(a,i))*t+r(a))*t}function i(t,a,i){return 3*e(a,i)*t*t+2*n(a,i)*t+r(a)}return function(e,n,r,o){if(0<=e&&e<=1&&0<=r&&r<=1){var u=new Float32Array(11);if(e!==n||r!==o)for(var s=0;s<11;++s)u[s]=a(s*t,e,r);return function(t){return e===n&&r===o||0===t||1===t?t:a(c(t),n,o)}}function c(n){for(var o=0,s=1;10!==s&&u[s]<=n;++s)o+=t;--s;var c=o+(n-u[s])/(u[s+1]-u[s])*t,l=i(c,e,r);return l>=.001?function(t,e,n,r){for(var o=0;o<4;++o){var u=i(e,n,r);if(0===u)return e;e-=(a(e,n,r)-t)/u}return e}(n,c,e,r):0===l?c:function(t,e,n,r,i){var o,u,s=0;do{(o=a(u=e+(n-e)/2,r,i)-t)>0?n=u:e=u}while(Math.abs(o)>1e-7&&++s<10);return u}(n,o,o+t,e,r)}}}(),g=(m={linear:function(){return function(t){return t}}},v={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Expo:function(){return function(t){return t?Math.pow(2,10*t-10):0}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}},Elastic:function(t,e){void 0===t&&(t=1),void 0===e&&(e=.5);var n=u(t,1,10),r=u(e,.1,2);return function(t){return 0===t||1===t?t:-n*Math.pow(2,10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint"].forEach((function(t,e){v[t]=function(){return function(t){return Math.pow(t,e+2)}}})),Object.keys(v).forEach((function(t){var e=v[t];m["easeIn"+t]=e,m["easeOut"+t]=function(t,n){return function(r){return 1-e(t,n)(1-r)}},m["easeInOut"+t]=function(t,n){return function(r){return r<.5?e(t,n)(2*r)/2:1-e(t,n)(-2*r+2)/2}},m["easeOutIn"+t]=function(t,n){return function(r){return r<.5?(1-e(t,n)(1-2*r))/2:(e(t,n)(2*r-1)+1)/2}}})),m);function y(t,e){if(l.fnc(t))return t;var n=t.split("(")[0],r=g[n],a=f(t);switch(n){case"spring":return d(t,e);case"cubicBezier":return c(p,a);case"steps":return c(h,a);default:return c(r,a)}}function b(t){try{return document.querySelectorAll(t)}catch(e){return}}function w(t,e){for(var n=t.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in t){var o=t[i];e.call(r,o,i,t)&&a.push(o)}return a}function x(t){return t.reduce((function(t,e){return t.concat(l.arr(e)?x(e):e)}),[])}function k(t){return l.arr(t)?t:(l.str(t)&&(t=b(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function M(t,e){return t.some((function(t){return t===e}))}function C(t){var e={};for(var n in t)e[n]=t[n];return e}function O(t,e){var n=C(t);for(var r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function I(t,e){var n=C(t);for(var r in e)n[r]=l.und(t[r])?e[r]:t[r];return n}function D(t){return l.rgb(t)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=t))?"rgba("+n[1]+",1)":e:l.hex(t)?function(t){var e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,n,r){return e+e+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(t):l.hsl(t)?function(t){var e,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(0==o)e=n=r=u;else{var l=u<.5?u*(1+o):u+o-u*o,f=2*u-l;e=c(f,l,i+1/3),n=c(f,l,i),r=c(f,l,i-1/3)}return"rgba("+255*e+","+255*n+","+255*r+","+s+")"}(t):void 0;var e,n}function E(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function P(t,e){return l.fnc(t)?t(e.target,e.id,e.total):t}function S(t,e){return t.getAttribute(e)}function B(t,e,n){if(M([n,"deg","rad","turn"],E(e)))return e;var r=o.CSS[e+n];if(!l.und(r))return r;var a=document.createElement(t.tagName),i=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var u=100/a.offsetWidth;i.removeChild(a);var s=u*parseFloat(e);return o.CSS[e+n]=s,s}function F(t,e,n){if(e in t.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=t.style[e]||getComputedStyle(t).getPropertyValue(r)||"0";return n?B(t,a,n):a}}function A(t,e){return l.dom(t)&&!l.inp(t)&&(!l.nil(S(t,e))||l.svg(t)&&t[e])?"attribute":l.dom(t)&&M(i,e)?"transform":l.dom(t)&&"transform"!==e&&F(t,e)?"css":null!=t[e]?"object":void 0}function N(t){if(l.dom(t)){for(var e,n=t.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(n);)a.set(e[1],e[2]);return a}}function T(t,e,n,r){var a=s(e,"scale")?1:0+function(t){return s(t,"translate")||"perspective"===t?"px":s(t,"rotate")||s(t,"skew")?"deg":void 0}(e),i=N(t).get(e)||a;return n&&(n.transforms.list.set(e,i),n.transforms.last=e),r?B(t,i,r):i}function H(t,e,n,r){switch(A(t,e)){case"transform":return T(t,e,r,n);case"css":return F(t,e,n);case"attribute":return S(t,e);default:return t[e]||0}}function L(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=E(t)||0,a=parseFloat(e),i=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function q(t,e){if(l.col(t))return D(t);if(/\s/g.test(t))return t;var n=E(t),r=n?t.substr(0,t.length-n.length):t;return e?r+e:r}function j(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function $(t){for(var e,n=t.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=j(e,i)),e=i}return r}function z(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*S(t,"r")}(t);case"rect":return function(t){return 2*S(t,"width")+2*S(t,"height")}(t);case"line":return function(t){return j({x:S(t,"x1"),y:S(t,"y1")},{x:S(t,"x2"),y:S(t,"y2")})}(t);case"polyline":return $(t);case"polygon":return function(t){var e=t.points;return $(t)+j(e.getItem(e.numberOfItems-1),e.getItem(0))}(t)}}function V(t,e){var n=e||{},r=n.el||function(t){for(var e=t.parentNode;l.svg(e)&&l.svg(e.parentNode);)e=e.parentNode;return e}(t),a=r.getBoundingClientRect(),i=S(r,"viewBox"),o=a.width,u=a.height,s=n.viewBox||(i?i.split(" "):[0,0,o,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:o,h:u,vW:s[2],vH:s[3]}}function W(t,e,n){function r(n){void 0===n&&(n=0);var r=e+n>=1?e+n:0;return t.el.getPointAtLength(r)}var a=V(t.el,t.svg),i=r(),o=r(-1),u=r(1),s=n?1:a.w/a.vW,c=n?1:a.h/a.vH;switch(t.property){case"x":return(i.x-a.x)*s;case"y":return(i.y-a.y)*c;case"angle":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}}function X(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=q(l.pth(t)?t.totalLength:t,e)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:l.str(t)||e?r.split(n):[]}}function Y(t){return w(t?x(l.arr(t)?t.map(k):k(t)):[],(function(t,e,n){return n.indexOf(t)===e}))}function Z(t){var e=Y(t);return e.map((function(t,n){return{target:t,id:n,total:e.length,transforms:{list:N(t)}}}))}function _(t,e){var n=C(e);if(/^spring/.test(n.easing)&&(n.duration=d(n.easing)),l.arr(t)){var r=t.length;2===r&&!l.obj(t[0])?t={value:t}:l.fnc(e.duration)||(n.duration=e.duration/r)}var a=l.arr(t)?t:[t];return a.map((function(t,n){var r=l.obj(t)&&!l.pth(t)?t:{value:t};return l.und(r.delay)&&(r.delay=n?0:e.delay),l.und(r.endDelay)&&(r.endDelay=n===a.length-1?e.endDelay:0),r})).map((function(t){return I(t,n)}))}function G(t,e){var n=[],r=e.keyframes;for(var a in r&&(e=I(function(t){for(var e=w(x(t.map((function(t){return Object.keys(t)}))),(function(t){return l.key(t)})).reduce((function(t,e){return t.indexOf(e)<0&&t.push(e),t}),[]),n={},r=function(r){var a=e[r];n[a]=t.map((function(t){var e={};for(var n in t)l.key(n)?n==a&&(e.value=t[n]):e[n]=t[n];return e}))},a=0;a<e.length;a++)r(a);return n}(r),e)),e)l.key(a)&&n.push({name:a,tweens:_(e[a],t)});return n}function Q(t,e){var n;return t.tweens.map((function(r){var a=function(t,e){var n={};for(var r in t){var a=P(t[r],e);l.arr(a)&&1===(a=a.map((function(t){return P(t,e)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,e),i=a.value,o=l.arr(i)?i[1]:i,u=E(o),s=H(e.target,t.name,u,e),c=n?n.to.original:s,f=l.arr(i)?i[0]:c,d=E(f)||E(s),h=u||d;return l.und(o)&&(o=c),a.from=X(f,h),a.to=X(L(o,f),h),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=l.pth(i),a.isPathTargetInsideSVG=a.isPath&&l.svg(e.target),a.isColor=l.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var R={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,a){if(r.list.set(e,n),e===r.last||a){var i="";r.list.forEach((function(t,e){i+=e+"("+t+") "})),t.style.transform=i}}};function J(t,e){Z(t).forEach((function(t){for(var n in e){var r=P(e[n],t),a=t.target,i=E(r),o=H(a,n,i,t),u=L(q(r,i||E(o)),o),s=A(a,n);R[s](a,n,u,t.transforms,!0)}}))}function K(t,e){return w(x(t.map((function(t){return e.map((function(e){return function(t,e){var n=A(t.target,e.name);if(n){var r=Q(e,t),a=r[r.length-1];return{type:n,property:e.name,animatable:t,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(t,e)}))}))),(function(t){return!l.und(t)}))}function U(t,e){var n=t.length,r=function(t){return t.timelineOffset?t.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,t.map((function(t){return r(t)+t.duration}))):e.duration,a.delay=n?Math.min.apply(Math,t.map((function(t){return r(t)+t.delay}))):e.delay,a.endDelay=n?a.duration-Math.max.apply(Math,t.map((function(t){return r(t)+t.duration-t.endDelay}))):e.endDelay,a}var tt=0;var et=[],nt=function(){var t;function e(n){for(var r=et.length,a=0;a<r;){var i=et[a];i.paused?(et.splice(a,1),r--):(i.tick(n),a++)}t=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){at.suspendWhenDocumentHidden&&(rt()?t=cancelAnimationFrame(t):(et.forEach((function(t){return t._onDocumentVisibility()})),nt()))})),function(){t||rt()&&at.suspendWhenDocumentHidden||!(et.length>0)||(t=requestAnimationFrame(e))}}();function rt(){return!!document&&document.hidden}function at(t){void 0===t&&(t={});var e,n=0,i=0,o=0,s=0,c=null;function l(t){var e=window.Promise&&new Promise((function(t){return c=t}));return t.finished=e,e}var f=function(t){var e=O(r,t),n=O(a,t),i=G(n,t),o=Z(t.targets),u=K(o,i),s=U(u,n),c=tt;return tt++,I(e,{id:c,children:[],animatables:o,animations:u,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}(t);function d(){var t=f.direction;"alternate"!==t&&(f.direction="normal"!==t?"normal":"reverse"),f.reversed=!f.reversed,e.forEach((function(t){return t.reversed=f.reversed}))}function h(t){return f.reversed?f.duration-t:t}function m(){n=0,i=h(f.currentTime)*(1/at.speed)}function v(t,e){e&&e.seek(t-e.timelineOffset)}function p(t){for(var e=0,n=f.animations,r=n.length;e<r;){var a=n[e],i=a.animatable,o=a.tweens,s=o.length-1,c=o[s];s&&(c=w(o,(function(e){return t<e.end}))[0]||c);for(var l=u(t-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(l)?1:c.easing(l),h=c.to.strings,m=c.round,v=[],p=c.to.numbers.length,g=void 0,y=0;y<p;y++){var b=void 0,x=c.to.numbers[y],k=c.from.numbers[y]||0;b=c.isPath?W(c.value,d*x,c.isPathTargetInsideSVG):k+d*(x-k),m&&(c.isColor&&y>2||(b=Math.round(b*m)/m)),v.push(b)}var M=h.length;if(M){g=h[0];for(var C=0;C<M;C++){var O=h[C+1],I=v[C];isNaN(I)||(g+=O?I+O:I+" ")}}else g=v[0];R[a.type](i.target,a.property,g,i.transforms),a.currentValue=g,e++}}function g(t){f[t]&&!f.passThrough&&f[t](f)}function y(t){var r=f.duration,a=f.delay,m=r-f.endDelay,y=h(t);f.progress=u(y/r*100,0,100),f.reversePlayback=y<f.currentTime,e&&function(t){if(f.reversePlayback)for(var n=s;n--;)v(t,e[n]);else for(var r=0;r<s;r++)v(t,e[r])}(y),!f.began&&f.currentTime>0&&(f.began=!0,g("begin")),!f.loopBegan&&f.currentTime>0&&(f.loopBegan=!0,g("loopBegin")),y<=a&&0!==f.currentTime&&p(0),(y>=m&&f.currentTime!==r||!r)&&p(r),y>a&&y<m?(f.changeBegan||(f.changeBegan=!0,f.changeCompleted=!1,g("changeBegin")),g("change"),p(y)):f.changeBegan&&(f.changeCompleted=!0,f.changeBegan=!1,g("changeComplete")),f.currentTime=u(y,0,r),f.began&&g("update"),t>=r&&(i=0,f.remaining&&!0!==f.remaining&&f.remaining--,f.remaining?(n=o,g("loopComplete"),f.loopBegan=!1,"alternate"===f.direction&&d()):(f.paused=!0,f.completed||(f.completed=!0,g("loopComplete"),g("complete"),!f.passThrough&&"Promise"in window&&(c(),l(f)))))}return l(f),f.reset=function(){var t=f.direction;f.passThrough=!1,f.currentTime=0,f.progress=0,f.paused=!0,f.began=!1,f.loopBegan=!1,f.changeBegan=!1,f.completed=!1,f.changeCompleted=!1,f.reversePlayback=!1,f.reversed="reverse"===t,f.remaining=f.loop,e=f.children;for(var n=s=e.length;n--;)f.children[n].reset();(f.reversed&&!0!==f.loop||"alternate"===t&&1===f.loop)&&f.remaining++,p(f.reversed?f.duration:0)},f._onDocumentVisibility=m,f.set=function(t,e){return J(t,e),f},f.tick=function(t){o=t,n||(n=o),y((o+(i-n))*at.speed)},f.seek=function(t){y(h(t))},f.pause=function(){f.paused=!0,m()},f.play=function(){f.paused&&(f.completed&&f.reset(),f.paused=!1,et.push(f),m(),nt())},f.reverse=function(){d(),f.completed=!f.reversed,m()},f.restart=function(){f.reset(),f.play()},f.remove=function(t){ot(Y(t),f)},f.reset(),f.autoplay&&f.play(),f}function it(t,e){for(var n=e.length;n--;)M(t,e[n].animatable.target)&&e.splice(n,1)}function ot(t,e){var n=e.animations,r=e.children;it(t,n);for(var a=r.length;a--;){var i=r[a],o=i.animations;it(t,o),o.length||i.children.length||r.splice(a,1)}n.length||r.length||e.pause()}at.version="3.2.1",at.speed=1,at.suspendWhenDocumentHidden=!0,at.running=et,at.remove=function(t){for(var e=Y(t),n=et.length;n--;){ot(e,et[n])}},at.get=H,at.set=J,at.convertPx=B,at.path=function(t,e){var n=l.str(t)?b(t)[0]:t,r=e||100;return function(t){return{property:t,el:n,svg:V(n),totalLength:z(n)*(r/100)}}},at.setDashoffset=function(t){var e=z(t);return t.setAttribute("stroke-dasharray",e),e},at.stagger=function(t,e){void 0===e&&(e={});var n=e.direction||"normal",r=e.easing?y(e.easing):null,a=e.grid,i=e.axis,o=e.from||0,u="first"===o,s="center"===o,c="last"===o,f=l.arr(t),d=f?parseFloat(t[0]):parseFloat(t),h=f?parseFloat(t[1]):0,m=E(f?t[1]:t)||0,v=e.start||0+(f?d:0),p=[],g=0;return function(t,e,l){if(u&&(o=0),s&&(o=(l-1)/2),c&&(o=l-1),!p.length){for(var y=0;y<l;y++){if(a){var b=s?(a[0]-1)/2:o%a[0],w=s?(a[1]-1)/2:Math.floor(o/a[0]),x=b-y%a[0],k=w-Math.floor(y/a[0]),M=Math.sqrt(x*x+k*k);"x"===i&&(M=-x),"y"===i&&(M=-k),p.push(M)}else p.push(Math.abs(o-y));g=Math.max.apply(Math,p)}r&&(p=p.map((function(t){return r(t/g)*g}))),"reverse"===n&&(p=p.map((function(t){return i?t<0?-1*t:-t:Math.abs(g-t)})))}return v+(f?(h-d)/g:d)*(Math.round(100*p[e])/100)+m}},at.timeline=function(t){void 0===t&&(t={});var e=at(t);return e.duration=0,e.add=function(n,r){var i=et.indexOf(e),o=e.children;function u(t){t.passThrough=!0}i>-1&&et.splice(i,1);for(var s=0;s<o.length;s++)u(o[s]);var c=I(n,O(a,t));c.targets=c.targets||t.targets;var f=e.duration;c.autoplay=!1,c.direction=e.direction,c.timelineOffset=l.und(r)?f:L(r,f),u(e),e.seek(c.timelineOffset);var d=at(c);u(d),o.push(d);var h=U(o,t);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},at.easing=y,at.penner=g,at.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t}},57908:(t,e,n)=>{n.r(e),n.d(e,{ix_event_list:()=>u});var r=n(71273),a=n(82686),i=n(44228),o=n(47323);const u=class{constructor(t){(0,r.r)(this,t),this.mutationObserver=(0,a.c)(this.onMutation.bind(this)),this.itemHeight="S",this.compact=!1,this.animated=!0,this.chevron=!1}watchChevron(t){this.handleChevron(t)}componentDidLoad(){if(this.animated&&this.triggerFadeIn(),!Number.isNaN(Number(this.itemHeight))){const t=(0,i.c)(this.itemHeight);this.hostElement.querySelectorAll("ix-event-list-item").forEach((e=>{this.setCustomHeight(e,t)}))}this.handleChevron(this.chevron),this.mutationObserver.observe(this.hostElement,{childList:!0,subtree:!0})}onMutation(t){this.triggerFadeOut().then((()=>{if("number"==typeof this.itemHeight){const e=(0,i.c)(this.itemHeight);t.filter((t=>"childList"===t.type)).forEach((t=>t.addedNodes.forEach((t=>{const n=t;this.setCustomHeight(n,e)}))))}this.handleChevron(this.chevron),this.triggerFadeIn()}))}setCustomHeight(t,e){t.style.setProperty("--event-list-item-height",e)}triggerFadeOut(){return new Promise((t=>{this.animated||t();const e=this.hostElement.shadowRoot.querySelector("ul");(0,o.a)({targets:e,opacity:[{opacity:1,easing:"easeInSine"},{opacity:0}],duration:u.fadeOutDuration,complete:()=>{t()}})}))}triggerFadeIn(){if(!this.animated)return;this.hostElement.querySelectorAll("ix-event-list-item").forEach(((t,e)=>{const n=80*e,r=n/(n+u.fadeInDuration);(0,o.a)({targets:t,offset:r,duration:u.fadeInDuration+n,opacity:[0,1],easing:"easeInOutSine",delay:n,autoplay:!0})}))}handleChevron(t){this.hostElement.querySelectorAll("ix-event-list-item").forEach((e=>{t?e.setAttribute("chevron","true"):void 0!==t&&e.removeAttribute("chevron")}))}render(){return(0,r.h)(r.H,{key:"1f76181a73b8720c0488893e24fb570d6cab0122",class:{"item-size-s":"S"===this.itemHeight,"item-size-l":"L"===this.itemHeight,compact:this.compact}},(0,r.h)("div",{key:"16339473f805eee2ca37fe4f8b3bbbfc7eb6dd48",role:"list"},(0,r.h)("slot",{key:"c542a35c05eada1c9ed14622108ddf31731977d7"})))}get hostElement(){return(0,r.g)(this)}static get watchers(){return{chevron:["watchChevron"]}}};u.fadeOutDuration=50,u.fadeInDuration=150,u.style=":host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(.item-size-l){--event-list-item-height:6.5rem;--event-list-item-content-white-space:normal}:host(.compact){--event-list-item-border-radius:0;--event-list-item-margin-bottom:0}"},82686:(t,e,n)=>{n.d(e,{c:()=>r});const r=t=>new MutationObserver(t)},44228:(t,e,n)=>{n.d(e,{c:()=>r});const r=t=>`${t/16}rem`}}]);