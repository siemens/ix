import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { f as iconApps, I as iconCogwheel, J as iconLightDark, d as iconInfo } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { A as Animation } from "./animation-BqeSHO6C-CazTJry4.js";
import { s as showAppSwitch } from "./index-nCVTBc9Y-D1jH4M5R.js";
import { a as useContextConsumer, A as ApplicationLayoutContext } from "./context-zqk3Dkv--Bgf_9ScM.js";
import { a as applicationLayoutService } from "./service-CEglFEKY-CaUBmgY_.js";
import { m as menuController } from "./menu-service-DYOa8RGJ-B6sy0L8-.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { c as convertToRemString } from "./rwd.util-DIEEaulE-B7dE3uhl.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./breakpoints-D_Hmobxf-DBbixPq4.js";
const menuCss = () => `@charset "UTF-8";:root{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}.animate__animated{animation-duration:1s;animation-duration:var(--animate-duration);animation-fill-mode:both}.animate__animated.animate__infinite{animation-iteration-count:infinite}.animate__animated.animate__repeat-1{animation-iteration-count:1;animation-iteration-count:var(--animate-repeat)}.animate__animated.animate__repeat-2{animation-iteration-count:2;animation-iteration-count:calc(var(--animate-repeat) * 2)}.animate__animated.animate__repeat-3{animation-iteration-count:3;animation-iteration-count:calc(var(--animate-repeat) * 3)}.animate__animated.animate__delay-1s{animation-delay:1s;animation-delay:var(--animate-delay)}.animate__animated.animate__delay-2s{animation-delay:2s;animation-delay:calc(var(--animate-delay) * 2)}.animate__animated.animate__delay-3s{animation-delay:3s;animation-delay:calc(var(--animate-delay) * 3)}.animate__animated.animate__delay-4s{animation-delay:4s;animation-delay:calc(var(--animate-delay) * 4)}.animate__animated.animate__delay-5s{animation-delay:5s;animation-delay:calc(var(--animate-delay) * 5)}.animate__animated.animate__faster{animation-duration:0.5s;animation-duration:calc(var(--animate-duration) / 2)}.animate__animated.animate__fast{animation-duration:0.8s;animation-duration:calc(var(--animate-duration) * 0.8)}.animate__animated.animate__slow{animation-duration:2s;animation-duration:calc(var(--animate-duration) * 2)}.animate__animated.animate__slower{animation-duration:3s;animation-duration:calc(var(--animate-duration) * 3)}@media (prefers-reduced-motion: reduce), print{.animate__animated{animation-duration:1ms !important;transition-duration:1ms !important;animation-iteration-count:1 !important}.animate__animated[class*=Out]{opacity:0}}@keyframes bounce{0%,20%,53%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);transform:translateZ(0)}40%,43%{animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);transform:translate3d(0, -30px, 0) scaleY(1.1)}70%{animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);transform:translate3d(0, -15px, 0) scaleY(1.05)}80%{transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);transform:translateZ(0) scaleY(0.95)}90%{transform:translate3d(0, -4px, 0) scaleY(1.02)}}.animate__bounce{animation-name:bounce;transform-origin:center bottom}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.animate__flash{animation-name:flash}@keyframes pulse{0%{transform:scaleX(1)}50%{transform:scale3d(1.05, 1.05, 1.05)}to{transform:scaleX(1)}}.animate__pulse{animation-name:pulse;animation-timing-function:ease-in-out}@keyframes rubberBand{0%{transform:scaleX(1)}30%{transform:scale3d(1.25, 0.75, 1)}40%{transform:scale3d(0.75, 1.25, 1)}50%{transform:scale3d(1.15, 0.85, 1)}65%{transform:scale3d(0.95, 1.05, 1)}75%{transform:scale3d(1.05, 0.95, 1)}to{transform:scaleX(1)}}.animate__rubberBand{animation-name:rubberBand}@keyframes shakeX{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px, 0, 0)}20%,40%,60%,80%{transform:translate3d(10px, 0, 0)}}.animate__shakeX{animation-name:shakeX}@keyframes shakeY{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(0, -10px, 0)}20%,40%,60%,80%{transform:translate3d(0, 10px, 0)}}.animate__shakeY{animation-name:shakeY}@keyframes headShake{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}.animate__headShake{animation-timing-function:ease-in-out;animation-name:headShake}@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}.animate__swing{transform-origin:top center;animation-name:swing}@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(0.9, 0.9, 0.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1, 1.1, 1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1, 1.1, 1.1) rotate(-3deg)}to{transform:scaleX(1)}}.animate__tada{animation-name:tada}@keyframes wobble{0%{transform:translateZ(0)}15%{transform:translate3d(-25%, 0, 0) rotate(-5deg)}30%{transform:translate3d(20%, 0, 0) rotate(3deg)}45%{transform:translate3d(-15%, 0, 0) rotate(-3deg)}60%{transform:translate3d(10%, 0, 0) rotate(2deg)}75%{transform:translate3d(-5%, 0, 0) rotate(-1deg)}to{transform:translateZ(0)}}.animate__wobble{animation-name:wobble}@keyframes jello{0%,11.1%,to{transform:translateZ(0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-0.78125deg) skewY(-0.78125deg)}77.7%{transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{transform:skewX(-0.1953125deg) skewY(-0.1953125deg)}}.animate__jello{animation-name:jello;transform-origin:center}@keyframes heartBeat{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}.animate__heartBeat{animation-name:heartBeat;animation-duration:1.3s;animation-duration:calc(var(--animate-duration) * 1.3);animation-timing-function:ease-in-out}@keyframes backInDown{0%{transform:translateY(-1200px) scale(0.7);opacity:0.7}80%{transform:translateY(0) scale(0.7);opacity:0.7}to{transform:scale(1);opacity:1}}.animate__backInDown{animation-name:backInDown}@keyframes backInLeft{0%{transform:translateX(-2000px) scale(0.7);opacity:0.7}80%{transform:translateX(0) scale(0.7);opacity:0.7}to{transform:scale(1);opacity:1}}.animate__backInLeft{animation-name:backInLeft}@keyframes backInRight{0%{transform:translateX(2000px) scale(0.7);opacity:0.7}80%{transform:translateX(0) scale(0.7);opacity:0.7}to{transform:scale(1);opacity:1}}.animate__backInRight{animation-name:backInRight}@keyframes backInUp{0%{transform:translateY(1200px) scale(0.7);opacity:0.7}80%{transform:translateY(0) scale(0.7);opacity:0.7}to{transform:scale(1);opacity:1}}.animate__backInUp{animation-name:backInUp}@keyframes backOutDown{0%{transform:scale(1);opacity:1}20%{transform:translateY(0) scale(0.7);opacity:0.7}to{transform:translateY(700px) scale(0.7);opacity:0.7}}.animate__backOutDown{animation-name:backOutDown}@keyframes backOutLeft{0%{transform:scale(1);opacity:1}20%{transform:translateX(0) scale(0.7);opacity:0.7}to{transform:translateX(-2000px) scale(0.7);opacity:0.7}}.animate__backOutLeft{animation-name:backOutLeft}@keyframes backOutRight{0%{transform:scale(1);opacity:1}20%{transform:translateX(0) scale(0.7);opacity:0.7}to{transform:translateX(2000px) scale(0.7);opacity:0.7}}.animate__backOutRight{animation-name:backOutRight}@keyframes backOutUp{0%{transform:scale(1);opacity:1}20%{transform:translateY(0) scale(0.7);opacity:0.7}to{transform:translateY(-700px) scale(0.7);opacity:0.7}}.animate__backOutUp{animation-name:backOutUp}@keyframes bounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}20%{transform:scale3d(1.1, 1.1, 1.1)}40%{transform:scale3d(0.9, 0.9, 0.9)}60%{opacity:1;transform:scale3d(1.03, 1.03, 1.03)}80%{transform:scale3d(0.97, 0.97, 0.97)}to{opacity:1;transform:scaleX(1)}}.animate__bounceIn{animation-duration:0.75s;animation-duration:calc(var(--animate-duration) * 0.75);animation-name:bounceIn}@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;transform:translate3d(0, -3000px, 0) scaleY(3)}60%{opacity:1;transform:translate3d(0, 25px, 0) scaleY(0.9)}75%{transform:translate3d(0, -10px, 0) scaleY(0.95)}90%{transform:translate3d(0, 5px, 0) scaleY(0.985)}to{transform:translateZ(0)}}.animate__bounceInDown{animation-name:bounceInDown}@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;transform:translate3d(-3000px, 0, 0) scaleX(3)}60%{opacity:1;transform:translate3d(25px, 0, 0) scaleX(1)}75%{transform:translate3d(-10px, 0, 0) scaleX(0.98)}90%{transform:translate3d(5px, 0, 0) scaleX(0.995)}to{transform:translateZ(0)}}.animate__bounceInLeft{animation-name:bounceInLeft}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;transform:translate3d(3000px, 0, 0) scaleX(3)}60%{opacity:1;transform:translate3d(-25px, 0, 0) scaleX(1)}75%{transform:translate3d(10px, 0, 0) scaleX(0.98)}90%{transform:translate3d(-5px, 0, 0) scaleX(0.995)}to{transform:translateZ(0)}}.animate__bounceInRight{animation-name:bounceInRight}@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;transform:translate3d(0, 3000px, 0) scaleY(5)}60%{opacity:1;transform:translate3d(0, -20px, 0) scaleY(0.9)}75%{transform:translate3d(0, 10px, 0) scaleY(0.95)}90%{transform:translate3d(0, -5px, 0) scaleY(0.985)}to{transform:translateZ(0)}}.animate__bounceInUp{animation-name:bounceInUp}@keyframes bounceOut{20%{transform:scale3d(0.9, 0.9, 0.9)}50%,55%{opacity:1;transform:scale3d(1.1, 1.1, 1.1)}to{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}}.animate__bounceOut{animation-duration:0.75s;animation-duration:calc(var(--animate-duration) * 0.75);animation-name:bounceOut}@keyframes bounceOutDown{20%{transform:translate3d(0, 10px, 0) scaleY(0.985)}40%,45%{opacity:1;transform:translate3d(0, -20px, 0) scaleY(0.9)}to{opacity:0;transform:translate3d(0, 2000px, 0) scaleY(3)}}.animate__bounceOutDown{animation-name:bounceOutDown}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px, 0, 0) scaleX(0.9)}to{opacity:0;transform:translate3d(-2000px, 0, 0) scaleX(2)}}.animate__bounceOutLeft{animation-name:bounceOutLeft}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px, 0, 0) scaleX(0.9)}to{opacity:0;transform:translate3d(2000px, 0, 0) scaleX(2)}}.animate__bounceOutRight{animation-name:bounceOutRight}@keyframes bounceOutUp{20%{transform:translate3d(0, -10px, 0) scaleY(0.985)}40%,45%{opacity:1;transform:translate3d(0, 20px, 0) scaleY(0.9)}to{opacity:0;transform:translate3d(0, -2000px, 0) scaleY(3)}}.animate__bounceOutUp{animation-name:bounceOutUp}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.animate__fadeIn{animation-name:fadeIn}@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0, -100%, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInDown{animation-name:fadeInDown}@keyframes fadeInDownBig{0%{opacity:0;transform:translate3d(0, -2000px, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInDownBig{animation-name:fadeInDownBig}@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%, 0, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeftBig{0%{opacity:0;transform:translate3d(-2000px, 0, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInLeftBig{animation-name:fadeInLeftBig}@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%, 0, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInRight{animation-name:fadeInRight}@keyframes fadeInRightBig{0%{opacity:0;transform:translate3d(2000px, 0, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInRightBig{animation-name:fadeInRightBig}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0, 100%, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInUp{animation-name:fadeInUp}@keyframes fadeInUpBig{0%{opacity:0;transform:translate3d(0, 2000px, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInUpBig{animation-name:fadeInUpBig}@keyframes fadeInTopLeft{0%{opacity:0;transform:translate3d(-100%, -100%, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInTopLeft{animation-name:fadeInTopLeft}@keyframes fadeInTopRight{0%{opacity:0;transform:translate3d(100%, -100%, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInTopRight{animation-name:fadeInTopRight}@keyframes fadeInBottomLeft{0%{opacity:0;transform:translate3d(-100%, 100%, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInBottomLeft{animation-name:fadeInBottomLeft}@keyframes fadeInBottomRight{0%{opacity:0;transform:translate3d(100%, 100%, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInBottomRight{animation-name:fadeInBottomRight}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animate__fadeOut{animation-name:fadeOut}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0, 100%, 0)}}.animate__fadeOutDown{animation-name:fadeOutDown}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;transform:translate3d(0, 2000px, 0)}}.animate__fadeOutDownBig{animation-name:fadeOutDownBig}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%, 0, 0)}}.animate__fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px, 0, 0)}}.animate__fadeOutLeftBig{animation-name:fadeOutLeftBig}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%, 0, 0)}}.animate__fadeOutRight{animation-name:fadeOutRight}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;transform:translate3d(2000px, 0, 0)}}.animate__fadeOutRightBig{animation-name:fadeOutRightBig}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0, -100%, 0)}}.animate__fadeOutUp{animation-name:fadeOutUp}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;transform:translate3d(0, -2000px, 0)}}.animate__fadeOutUpBig{animation-name:fadeOutUpBig}@keyframes fadeOutTopLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%, -100%, 0)}}.animate__fadeOutTopLeft{animation-name:fadeOutTopLeft}@keyframes fadeOutTopRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%, -100%, 0)}}.animate__fadeOutTopRight{animation-name:fadeOutTopRight}@keyframes fadeOutBottomRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%, 100%, 0)}}.animate__fadeOutBottomRight{animation-name:fadeOutBottomRight}@keyframes fadeOutBottomLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%, 100%, 0)}}.animate__fadeOutBottomLeft{animation-name:fadeOutBottomLeft}@keyframes flip{0%{transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);animation-timing-function:ease-out}40%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(0.95, 0.95, 0.95) translateZ(0) rotateY(0deg);animation-timing-function:ease-in}to{transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);animation-timing-function:ease-in}}.animate__animated.animate__flip{backface-visibility:visible;animation-name:flip}@keyframes flipInX{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}.animate__flipInX{backface-visibility:visible !important;animation-name:flipInX}@keyframes flipInY{0%{transform:perspective(400px) rotateY(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateY(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateY(10deg);opacity:1}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}.animate__flipInY{backface-visibility:visible !important;animation-name:flipInY}@keyframes flipOutX{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}.animate__flipOutX{animation-duration:0.75s;animation-duration:calc(var(--animate-duration) * 0.75);animation-name:flipOutX;backface-visibility:visible !important}@keyframes flipOutY{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateY(-15deg);opacity:1}to{transform:perspective(400px) rotateY(90deg);opacity:0}}.animate__flipOutY{animation-duration:0.75s;animation-duration:calc(var(--animate-duration) * 0.75);backface-visibility:visible !important;animation-name:flipOutY}@keyframes lightSpeedInRight{0%{transform:translate3d(100%, 0, 0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg)}to{transform:translateZ(0)}}.animate__lightSpeedInRight{animation-name:lightSpeedInRight;animation-timing-function:ease-out}@keyframes lightSpeedInLeft{0%{transform:translate3d(-100%, 0, 0) skewX(30deg);opacity:0}60%{transform:skewX(-20deg);opacity:1}80%{transform:skewX(5deg)}to{transform:translateZ(0)}}.animate__lightSpeedInLeft{animation-name:lightSpeedInLeft;animation-timing-function:ease-out}@keyframes lightSpeedOutRight{0%{opacity:1}to{transform:translate3d(100%, 0, 0) skewX(30deg);opacity:0}}.animate__lightSpeedOutRight{animation-name:lightSpeedOutRight;animation-timing-function:ease-in}@keyframes lightSpeedOutLeft{0%{opacity:1}to{transform:translate3d(-100%, 0, 0) skewX(-30deg);opacity:0}}.animate__lightSpeedOutLeft{animation-name:lightSpeedOutLeft;animation-timing-function:ease-in}@keyframes rotateIn{0%{transform:rotate(-200deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateIn{animation-name:rotateIn;transform-origin:center}@keyframes rotateInDownLeft{0%{transform:rotate(-45deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateInDownLeft{animation-name:rotateInDownLeft;transform-origin:left bottom}@keyframes rotateInDownRight{0%{transform:rotate(45deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateInDownRight{animation-name:rotateInDownRight;transform-origin:right bottom}@keyframes rotateInUpLeft{0%{transform:rotate(45deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateInUpLeft{animation-name:rotateInUpLeft;transform-origin:left bottom}@keyframes rotateInUpRight{0%{transform:rotate(-90deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateInUpRight{animation-name:rotateInUpRight;transform-origin:right bottom}@keyframes rotateOut{0%{opacity:1}to{transform:rotate(200deg);opacity:0}}.animate__rotateOut{animation-name:rotateOut;transform-origin:center}@keyframes rotateOutDownLeft{0%{opacity:1}to{transform:rotate(45deg);opacity:0}}.animate__rotateOutDownLeft{animation-name:rotateOutDownLeft;transform-origin:left bottom}@keyframes rotateOutDownRight{0%{opacity:1}to{transform:rotate(-45deg);opacity:0}}.animate__rotateOutDownRight{animation-name:rotateOutDownRight;transform-origin:right bottom}@keyframes rotateOutUpLeft{0%{opacity:1}to{transform:rotate(-45deg);opacity:0}}.animate__rotateOutUpLeft{animation-name:rotateOutUpLeft;transform-origin:left bottom}@keyframes rotateOutUpRight{0%{opacity:1}to{transform:rotate(90deg);opacity:0}}.animate__rotateOutUpRight{animation-name:rotateOutUpRight;transform-origin:right bottom}@keyframes hinge{0%{animation-timing-function:ease-in-out}20%,60%{transform:rotate(80deg);animation-timing-function:ease-in-out}40%,80%{transform:rotate(60deg);animation-timing-function:ease-in-out;opacity:1}to{transform:translate3d(0, 700px, 0);opacity:0}}.animate__hinge{animation-duration:2s;animation-duration:calc(var(--animate-duration) * 2);animation-name:hinge;transform-origin:top left}@keyframes jackInTheBox{0%{opacity:0;transform:scale(0.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{opacity:1;transform:scale(1)}}.animate__jackInTheBox{animation-name:jackInTheBox}@keyframes rollIn{0%{opacity:0;transform:translate3d(-100%, 0, 0) rotate(-120deg)}to{opacity:1;transform:translateZ(0)}}.animate__rollIn{animation-name:rollIn}@keyframes rollOut{0%{opacity:1}to{opacity:0;transform:translate3d(100%, 0, 0) rotate(120deg)}}.animate__rollOut{animation-name:rollOut}@keyframes zoomIn{0%{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}50%{opacity:1}}.animate__zoomIn{animation-name:zoomIn}@keyframes zoomInDown{0%{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.animate__zoomInDown{animation-name:zoomInDown}@keyframes zoomInLeft{0%{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.animate__zoomInLeft{animation-name:zoomInLeft}@keyframes zoomInRight{0%{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.animate__zoomInRight{animation-name:zoomInRight}@keyframes zoomInUp{0%{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.animate__zoomInUp{animation-name:zoomInUp}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}to{opacity:0}}.animate__zoomOut{animation-name:zoomOut}@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}to{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.animate__zoomOutDown{animation-name:zoomOutDown;transform-origin:center bottom}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)}to{opacity:0;transform:scale(0.1) translate3d(-2000px, 0, 0)}}.animate__zoomOutLeft{animation-name:zoomOutLeft;transform-origin:left center}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)}to{opacity:0;transform:scale(0.1) translate3d(2000px, 0, 0)}}.animate__zoomOutRight{animation-name:zoomOutRight;transform-origin:right center}@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}to{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.animate__zoomOutUp{animation-name:zoomOutUp;transform-origin:center bottom}@keyframes slideInDown{0%{transform:translate3d(0, -100%, 0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInDown{animation-name:slideInDown}@keyframes slideInLeft{0%{transform:translate3d(-100%, 0, 0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInLeft{animation-name:slideInLeft}@keyframes slideInRight{0%{transform:translate3d(100%, 0, 0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInRight{animation-name:slideInRight}@keyframes slideInUp{0%{transform:translate3d(0, 100%, 0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInUp{animation-name:slideInUp}@keyframes slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0, 100%, 0)}}.animate__slideOutDown{animation-name:slideOutDown}@keyframes slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-100%, 0, 0)}}.animate__slideOutLeft{animation-name:slideOutLeft}@keyframes slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(100%, 0, 0)}}.animate__slideOutRight{animation-name:slideOutRight}@keyframes slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0, -100%, 0)}}.animate__slideOutUp{animation-name:slideOutUp}:host{--ix-menu-tabs-shadow--border-color:var(--si-sys-color-border-4);--ix-menu-tabs-shadow--box-shadow:var(--si-sys-color-effects-shadow-2);--ix-menu-overlay--background:rgba(0, 0, 0, 0);--ix-menu-tabs--outline-color--focus:var(--si-sys-color-effects-focus);--ix-menu-navigation--outline-color--focus:var(--si-sys-color-effects-focus);--ix-menu--background:var(--si-sys-color-background-1);--ix-menu--box-shadow:var(--si-sys-color-effects-shadow-2)}:host{--ix-menu-overlay--blur-radius:1rem;--ix-menu-tabs-shadow-container--margin-bottom:var(--si-sys-sizing-spacing-y-50);--ix-menu--z-index:var(--theme-z-index-sticky);--ix-menu-tabs-shadow--transition-duration:var(--theme-default-time);--ix-menu-panel--transition-duration:var(--theme-default-time);--ix-menu-overlay--transition-duration:var(--theme-default-time);--ix-menu--expanded-width:calc(     var(--si-sys-sizing-size-160) + var(--si-sys-sizing-spacing-x-60)   );--ix-menu--width:calc(     var(--si-sys-sizing-size-100) + var(--si-sys-sizing-spacing-x-20) +       var(--ix-application-menu-safe-area-left, 0rem)   );--ix-menu--padding-block-end:calc(     var(--si-sys-sizing-spacing-y-60) + var(--ix-safe-area-inset-bottom, 0rem)   );--ix-menu-overlay--width:calc(     100vw - var(--si-sys-sizing-size-100) - var(--si-sys-sizing-spacing-x-20)   );--ix-menu-overlay--left:calc(     var(--si-sys-sizing-size-100) + var(--si-sys-sizing-spacing-x-20)   );--ix-menu-avatar--max-height:var(--si-sys-sizing-size-100);--ix-menu-avatar--margin-bottom:var(--si-sys-sizing-spacing-y-90);--ix-menu-cui-imprint-product-name--margin-bottom:var(--si-sys-sizing-spacing-y-60);--ix-menu-cui-imprint-product-description--margin-bottom:var(--si-sys-sizing-spacing-y-90);--ix-menu-buttons--margin:var(--si-sys-sizing-spacing-y-50) 0 0 calc(var(--si-sys-sizing-spacing-x-40) +         var(--si-sys-sizing-spacing-x-10));--ix-menu-empty--margin-bottom:var(--si-sys-sizing-spacing-y-50);--ix-menu--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-menu-tabs--outline-offset:calc(     calc(var(--si-sys-sizing-focus-ring-offset) / 2) * -1   );--ix-menu-navigation--outline-offset:calc(     calc(var(--si-sys-sizing-focus-ring-offset) / 2) * -1   );--ix-menu-tabs-shadow--height:var(--si-sys-sizing-border-width-default)}:host{display:flex;flex-direction:row;position:absolute;height:100%;min-height:-moz-min-content;min-height:min-content;z-index:var(--ix-menu--z-index);width:auto;bottom:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .tabs{height:100%;position:relative;overflow-y:auto;pointer-events:all;-ms-overflow-style:none;scrollbar-width:none}:host .tabs::-webkit-scrollbar{display:none}:host .tabs:focus-visible{outline:var(--ix-menu--outline-width--focus) solid var(--ix-menu-tabs--outline-color--focus);outline-offset:var(--ix-menu-tabs--outline-offset)}:host .show-scrollbar{scrollbar-width:inherit}:host .show-scrollbar::-webkit-scrollbar{display:inherit}:host .tabs-shadow-container{overflow:hidden;display:block;position:relative;margin-bottom:var(--ix-menu-tabs-shadow-container--margin-bottom);flex:1 1 auto;min-height:0}:host .menu-navigation{display:flex;flex-direction:column;min-height:0}:host .menu-navigation.menu-navigation--fill{flex:1 1 auto}:host .menu-navigation:focus-visible{outline:var(--ix-menu--outline-width--focus) solid var(--ix-menu-navigation--outline-color--focus);outline-offset:var(--ix-menu-navigation--outline-offset)}:host .tabs--shadow{opacity:0;position:absolute;width:100%;height:var(--ix-menu-tabs-shadow--height);background-color:var(--ix-menu--background);box-sizing:border-box;box-shadow:var(--ix-menu-tabs-shadow--box-shadow);pointer-events:none;z-index:var(--ix-menu--z-index);transition:opacity var(--ix-menu-tabs-shadow--transition-duration)}:host .tabs--shadow-top{top:0}:host .tabs--shadow-bottom{transform:rotate(180deg)}:host .tabs--shadow--show{opacity:1}:host .menu{display:flex;flex-direction:column;position:relative;width:var(--ix-menu--width);height:100%;padding-block-end:var(--ix-menu--padding-block-end);overflow:hidden;padding-left:var(--ix-application-menu-safe-area-left, 0)}:host .menu.expanded{box-shadow:var(--ix-menu--box-shadow)}:host .menu{background-color:var(--ix-menu--background);transition:width var(--ix-menu-panel--transition-duration) ease-in-out}:host .menu-overlay{display:none;position:absolute;width:var(--ix-menu-overlay--width);height:100%;left:var(--ix-menu-overlay--left);z-index:-1;-webkit-backdrop-filter:blur(var(--ix-menu-overlay--blur-radius));backdrop-filter:blur(var(--ix-menu-overlay--blur-radius));background-color:var(--ix-menu-overlay--background);transition:left var(--ix-menu-overlay--transition-duration) ease-in-out}:host .menu-overlay.visible{display:block}:host .menu.expanded{width:var(--ix-menu--expanded-width)}:host .menu-overlay.expanded{width:calc(100vw - var(--ix-menu--expanded-width));left:var(--ix-menu--expanded-width)}:host .menu-overlay-container{display:contents}:host .menu-avatar{max-height:var(--ix-menu-avatar--max-height)}:host .avatar{margin-bottom:var(--ix-menu-avatar--margin-bottom)}:host #cui-imprint .cui-imprint-product-name{margin-bottom:var(--ix-menu-cui-imprint-product-name--margin-bottom)}:host #cui-imprint .cui-imprint-product-description{margin-bottom:var(--ix-menu-cui-imprint-product-description--margin-bottom)}:host #cui-imprint .cui-imprint-link-container{display:flex;align-items:center}:host .bottom-tab-divider{margin-top:auto}:host .menu-buttons{margin:var(--ix-menu-buttons--margin)}:host .menu-buttons:not(:empty){margin-bottom:var(--ix-menu-empty--margin-bottom)}:host(.breakpoint-sm) .menu:not(.expanded){width:0}:host(.breakpoint-sm) .menu-overlay{left:0;width:100vw}:host(.breakpoint-lg){position:relative}:host(.breakpoint-lg) .menu.expanded{box-shadow:none}:host ::slotted(a[href]){all:unset}`;
const Menu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expandChange = createEvent(this, "expandChange", 7);
    this.mapExpandChange = createEvent(this, "mapExpandChange", 7);
    this.openAppSwitch = createEvent(this, "openAppSwitch", 7);
    this.openSettings = createEvent(this, "openSettings", 7);
    this.openAbout = createEvent(this, "openAbout", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Is settings tab visible
   */
  showSettings = false;
  /**
   * Is about tab visible
   */
  showAbout = false;
  /**
   * Show toggle between light and dark variant. Only if the provided theme have implemented both!
   */
  enableToggleTheme = false;
  /**
   * Should only be set if you use ix-menu standalone
   */
  applicationName;
  /**
   * Should only be set if you use ix-menu standalone
   */
  applicationDescription = "";
  /**
   *  Toggle the expand state of the menu
   */
  expand = false;
  expandChanged(newExpand, oldExpand) {
    if (newExpand === oldExpand) {
      return;
    }
    this.toggleMenu(newExpand);
  }
  /**
   *  If set the menu will be expanded initially. This will only take effect at the breakpoint 'lg'.
   */
  startExpanded = false;
  /**
   * Menu stays pinned to the left
   */
  pinned = false;
  pinnedChange(newPinned) {
    this.setPinned(this.pinned);
    if (newPinned) {
      applicationLayoutService.disableBreakpointDetection();
      applicationLayoutService.setBreakpoint("lg");
      return;
    }
    applicationLayoutService.enableBreakpointDetection();
  }
  /**
   * i18n aria-label for menu. Gets read out by screen readers when first focusing the menu
   *
   * @since 5.1.0
   */
  i18nAriaLabelMenu = "Application Navigation";
  /**
   * i18n description for menu keyboard navigation hint, read by screen readers when focusing the menu
   *
   * @since 5.1.0
   */
  i18nNavigationHint = "Use Up and Down arrow keys to navigate between menu items";
  /**
   *  i18n label for 'About & legal information' button
   */
  i18nLegal = "About & legal information";
  /**
   * i18n label for 'Settings' button
   */
  i18nSettings = "Settings";
  /**
   * i18n label for 'Toggle theme' button
   */
  i18nToggleTheme = "Toggle theme";
  /**
   * i18n label for 'Expand' button
   */
  i18nExpand = "Expand";
  /**
   * i18n label for 'Collapse' button
   */
  i18nCollapse = "Collapse";
  /**
   * Menu expanded
   */
  expandChange;
  /**
   * Map Sidebar expanded
   */
  mapExpandChange;
  /**
   * Event emitted when the app switch button is clicked
   *
   * @since 3.0.0
   */
  openAppSwitch;
  /**
   * Event emitted when the settings button is clicked
   * @since 3.0.0
   */
  openSettings;
  /**
   * Event emitted when the about button is clicked
   * @since 3.0.0
   */
  openAbout;
  showPinned = false;
  mapExpand = true;
  breakpoint = "lg";
  itemsScrollShadowTop = false;
  itemsScrollShadowBottom = false;
  hasBottomSlotItems = false;
  applicationLayoutContext;
  isDarkMode = false;
  isTransitionDisabled = false;
  lastFocusedMenuItem;
  themeNameDisposer;
  // FBC IAM workaround #488
  isVisible = (elm) => {
    return elm.style.display !== "none" && elm.parentElement?.parentElement?.style.display !== "none";
  };
  get popoverArea() {
    return this.hostElement.shadowRoot.querySelector("#popover-area");
  }
  get menu() {
    return this.hostElement.shadowRoot.querySelector(".menu");
  }
  get menuItemsContainer() {
    const menuItemsContainer = this.menu?.querySelector(".tabs");
    if (!menuItemsContainer) {
      throw new Error("Menu items container not found");
    }
    return menuItemsContainer;
  }
  get menuNavigationContainer() {
    const menu = this.menu;
    if (!menu) {
      throw new Error("Menu element not found");
    }
    const menuNavigationContainer = menu.querySelector(".menu-navigation");
    if (!menuNavigationContainer) {
      throw new Error("Menu navigation container not found");
    }
    return menuNavigationContainer;
  }
  get overlayContainer() {
    return this.hostElement.shadowRoot.querySelector(".menu-overlay");
  }
  get menuItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-menu-item:not(.internal-tab):not(.home-tab):not(.bottom-tab):not([slot="bottom"])')).filter((elm) => this.isVisible(elm));
  }
  get menuBottomItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-menu-item.bottom-tab:not(.internal-tab):not(.home-tab)")).filter((elm) => this.isVisible(elm));
  }
  get homeTab() {
    return this.hostElement.querySelector("ix-menu-item.home-tab");
  }
  get moreItemsDropdown() {
    return this.hostElement.shadowRoot.querySelector(".internal-tab ix-dropdown");
  }
  get isMoreItemsDropdownEmpty() {
    return this.hostElement.shadowRoot.querySelectorAll(".internal-tab ix-dropdown .appended").length === 0;
  }
  get moreItemsDropdownItems() {
    return this.hostElement.shadowRoot.querySelectorAll(".internal-tab ix-dropdown ix-menu-item");
  }
  get activeMoreTabContainer() {
    return this.hostElement.shadowRoot.querySelector(".active-more-tab");
  }
  get activeMoreTab() {
    return this.hostElement.shadowRoot.querySelector(".active-more-tab ix-menu-item");
  }
  get aboutPopoverContainer() {
    return this.hostElement.querySelector(".about-news");
  }
  get aboutNewsPopover() {
    return document.querySelector("ix-menu-about-news") ?? this.hostElement.querySelector("ix-menu-about-news");
  }
  get aboutTab() {
    return this.hostElement.shadowRoot.querySelector("#aboutAndLegal");
  }
  get about() {
    return this.hostElement.querySelector("ix-menu-about");
  }
  get settings() {
    return this.hostElement.querySelector("ix-menu-settings");
  }
  get isSettingsEmpty() {
    return Array.from(this.hostElement.shadowRoot.querySelectorAll("ix-menu-settings-item")).length === 0;
  }
  get hasUtilityMenuItems() {
    return !!this.settings || this.enableToggleTheme || !!this.about;
  }
  get shouldFillMenuNavigation() {
    return this.hasUtilityMenuItems || this.hasBottomSlotItems;
  }
  get tabsContainer() {
    return this.hostElement;
  }
  componentDidLoad() {
    requestAnimationFrame(() => {
      this.suppressAnchorWrapperTabStops();
      this.handleOverflowIndicator();
      const items = this.getAllFocusableItems();
      this.resetRovingTabIndex(items);
    });
    if (this.pinned) {
      this.pinnedChange(this.pinned);
    }
  }
  componentWillLoad() {
    this.updateBottomSlotState();
    useContextConsumer(this.hostElement, ApplicationLayoutContext, (ctx) => {
      this.applicationLayoutContext = ctx;
      if (ctx.hideHeader === true) {
        this.onBreakpointChange("md");
        return;
      }
      this.onBreakpointChange(applicationLayoutService.breakpoint);
    }, true);
    applicationLayoutService.onChange.on((breakpoint) => this.onBreakpointChange(breakpoint));
    this.onBreakpointChange(applicationLayoutService.breakpoint, true);
    this.updateThemeState();
    this.themeNameDisposer = themeSwitcher.themeChanged.on(() => {
      this.updateThemeState();
    });
  }
  componentDidRender() {
    if (!this.about && this.aboutNewsPopover) {
      this.aboutNewsPopover.show = false;
    }
    this.appendFragments();
  }
  connectedCallback() {
    menuController.register(this.hostElement);
  }
  disconnectedCallback() {
    this.themeNameDisposer?.dispose();
    menuController.unregister(this.hostElement);
  }
  updateThemeState() {
    this.isDarkMode = themeSwitcher.getMode() === "dark";
  }
  setPinned(pinned) {
    this.showPinned = pinned;
    menuController.setIsPinned(pinned);
  }
  onBreakpointChange(mode, initial = false) {
    if (!this.applicationLayoutContext && mode === "sm") {
      return;
    }
    if (!this.applicationLayoutContext) {
      return;
    }
    if (this.applicationLayoutContext.hideHeader && mode === "sm") {
      return;
    }
    this.setPinned(mode === "lg");
    if (initial || mode !== this.breakpoint)
      this.toggleMenu(mode === "lg" && this.startExpanded);
    this.breakpoint = mode;
  }
  appendFragments() {
    this.appendAboutNewsPopover();
  }
  getAboutPopoverVerticalPosition() {
    const heightArrow = 12;
    const offsetArrow = 6;
    const rectAbout = this.aboutTab?.getBoundingClientRect() || {
      bottom: -window.innerHeight,
      height: 0
    };
    const offset = window.innerHeight - (rectAbout.bottom - rectAbout.height / 2 + heightArrow / 2 + offsetArrow);
    return convertToRemString(offset);
  }
  appendAboutNewsPopover() {
    if (!this.aboutNewsPopover || !this.about) {
      return;
    }
    this.aboutNewsPopover.style.bottom = this.getAboutPopoverVerticalPosition();
    if (!this.popoverArea?.contains(this.aboutNewsPopover)) {
      const showMore = () => {
        if (this.aboutNewsPopover?.activeAboutTabKey && this.about) {
          this.about.activeTabKey = this.aboutNewsPopover.activeAboutTabKey;
          this.toggleAbout(true);
        }
      };
      this.aboutNewsPopover.addEventListener("showMore", () => showMore());
      document.body.appendChild(this.aboutNewsPopover);
    }
  }
  /**
   * Toggle map sidebar expand
   * @param show
   */
  async toggleMapExpand(show) {
    if (show !== void 0) {
      this.mapExpand = show;
    } else {
      this.mapExpand = !this.mapExpand;
    }
  }
  /**
   * Toggle menu
   * @param show
   */
  async toggleMenu(show) {
    const oldExpand = this.expand;
    if (show !== void 0) {
      this.expand = show;
    } else {
      this.expand = !this.expand;
    }
    if (this.aboutNewsPopover) {
      this.aboutNewsPopover.expanded = this.expand;
    }
    const { defaultPrevented } = this.expandChange.emit(this.expand);
    if (defaultPrevented) {
      this.expand = oldExpand;
      if (this.aboutNewsPopover) {
        this.aboutNewsPopover.expanded = oldExpand;
      }
      return;
    }
    this.isTransitionDisabled = false;
    this.checkTransition();
    if (this.breakpoint == "sm" && this.expand) {
      setTimeout(() => {
        this.handleOverflowIndicator();
      }, 100);
    }
  }
  /**
   * Disable transition of overlay while menu animation is running.
   */
  checkTransition() {
    const container = this.overlayContainer;
    if (!container) {
      return;
    }
    if (this.isTransitionDisabled) {
      container.style.transitionProperty = "left";
    } else {
      container.style.transitionProperty = "all";
    }
  }
  isOverlayVisible() {
    return this.showAbout || this.showSettings;
  }
  /**
   * Toggle Settings tabs
   * @param show
   */
  async toggleSettings(show) {
    if (!this.settings) {
      return;
    }
    const { defaultPrevented } = this.openSettings.emit();
    if (defaultPrevented) {
      return;
    }
    if (!this.isOverlayVisible()) {
      this.animateOverlayFadeIn();
    }
    if (show) {
      this.resetOverlay();
      this.showSettings = show;
      this.settings.show = this.showSettings;
    } else {
      this.onOverlayClose();
    }
  }
  /**
   * Toggle About tabs
   * @param show
   */
  async toggleAbout(show) {
    if (!this.about) {
      return;
    }
    const { defaultPrevented } = this.openAbout.emit();
    if (defaultPrevented) {
      return;
    }
    if (!this.isOverlayVisible()) {
      this.animateOverlayFadeIn();
    }
    if (show) {
      this.resetOverlay();
      this.showAbout = show;
      this.about.show = this.showAbout;
    } else {
      this.onOverlayClose();
    }
  }
  resetOverlay() {
    this.showSettings = false;
    this.showAbout = false;
    if (this.settings) {
      this.settings.show = false;
    }
    if (this.about) {
      this.about.show = false;
    }
  }
  isMenuItemClicked(event) {
    if (event.target instanceof HTMLElement) {
      return event.target.tagName === "IX-MENU-ITEM";
    }
    return false;
  }
  handleOverflowIndicator() {
    const { clientHeight, scrollTop, scrollHeight } = this.menuItemsContainer;
    this.itemsScrollShadowTop = scrollTop > 0;
    this.itemsScrollShadowBottom = Math.round(scrollTop + clientHeight) < scrollHeight;
  }
  onOverlayClose(event) {
    const shouldRestoreFocus = this.shouldRestoreMenuFocus(event);
    this.animateOverlayFadeOut(() => {
      this.resetOverlay();
      if (shouldRestoreFocus) {
        this.focusMenuNavigationContainer();
      }
    });
  }
  shouldRestoreMenuFocus(event) {
    return !!event;
  }
  focusMenuNavigationContainer() {
    const menuNavigation = this.menuNavigationContainer;
    if (!menuNavigation) {
      return;
    }
    requestAnimationFrameNoNgZone(() => {
      menuNavigation.focus();
    });
  }
  animateOverlayFadeIn() {
    requestAnimationFrame(() => {
      const overlayContainer = this.overlayContainer;
      if (!overlayContainer) {
        return;
      }
      animate(overlayContainer, {
        duration: Animation.mediumTime,
        backdropFilter: [0, "blur(1rem)"],
        translateX: ["-4rem", 0],
        opacity: [0, 1],
        easing: "easeInSine",
        onBegin: () => {
          if (this.showPinned) {
            return;
          }
          this.toggleMenu(false);
        }
      });
    });
  }
  animateOverlayFadeOut(onComplete) {
    requestAnimationFrame(() => {
      const overlayContainer = this.overlayContainer;
      if (!overlayContainer) {
        onComplete();
        return;
      }
      animate(overlayContainer, {
        duration: Animation.mediumTime,
        backdropFilter: ["blur(1rem)", 0],
        translateX: [0, "-4rem"],
        opacity: [1, 0],
        easing: "easeInSine",
        onComplete: () => onComplete()
      });
    });
  }
  onMenuItemsClick(event) {
    if (this.isMenuItemClicked(event)) {
      if (!this.showPinned) {
        this.toggleMenu(false);
      }
      this.onOverlayClose();
    }
  }
  updateBottomSlotState() {
    this.hasBottomSlotItems = Array.from(this.hostElement.children).some((element) => element.getAttribute("slot") === "bottom");
  }
  isHiddenFromViewport() {
    return this.breakpoint === "sm" && this.expand === false;
  }
  updateRovingTabIndex(items, activeIndex) {
    this.updateMenuItemPositionMetadata(items);
    items.forEach((item, i) => {
      item.setTabIndex?.(i === activeIndex ? 0 : -1);
    });
  }
  resetRovingTabIndex(items = this.getAllFocusableItems()) {
    this.updateMenuItemPositionMetadata(items);
    items.forEach((item) => {
      item.setTabIndex?.(-1);
    });
  }
  // item positions and menu size has to be set manually because slotted items and utility controls are separated into two groups
  updateMenuItemPositionMetadata(items) {
    const allMenuItems = [
      ...Array.from(this.hostElement.querySelectorAll("ix-menu-item")),
      ...Array.from(this.hostElement.shadowRoot?.querySelectorAll(".menu-utility-controls > ix-menu-item") ?? [])
    ];
    allMenuItems.forEach((item) => {
      item.removeAttribute("aria-posinset");
      item.removeAttribute("aria-setsize");
    });
    const total = items.length;
    items.forEach((item, index) => {
      item.setAttribute("aria-posinset", String(index + 1));
      item.setAttribute("aria-setsize", String(total));
    });
  }
  handleMenuFocusIn(event) {
    const items = this.getAllFocusableItems();
    const path = event.composedPath();
    const activeIndex = items.findIndex((item) => path.includes(item));
    if (activeIndex !== -1) {
      this.lastFocusedMenuItem = items[activeIndex];
      this.updateRovingTabIndex(items, activeIndex);
    } else if (event.target instanceof HTMLElement) {
      this.resetRovingTabIndex(items);
    }
  }
  getAllFocusableItems() {
    const isNavigable = (el) => !el.hasAttribute("disabled") && !el.hasAttribute("hidden") && this.isVisible(el);
    const lightItems = Array.from(this.hostElement.querySelectorAll(":scope > ix-menu-item, :scope > ix-menu-category, :scope > a > ix-menu-item, :scope > a > ix-menu-category")).filter(isNavigable);
    const utilityItems = Array.from(this.hostElement.shadowRoot?.querySelectorAll(".menu-utility-controls > ix-menu-item") ?? []).filter(isNavigable);
    return [...lightItems, ...utilityItems];
  }
  suppressAnchorWrapperTabStops() {
    Array.from(this.hostElement.querySelectorAll(":scope > a")).filter((a) => a.querySelector("ix-menu-item, ix-menu-category")).forEach((a) => {
      if (a.getAttribute("tabindex") !== "-1") {
        a.setAttribute("tabindex", "-1");
      }
    });
  }
  isEventFromExpandedCategoryItems(event) {
    return event.composedPath().some((el) => el instanceof HTMLElement && el.getAttribute?.("role") === "menu");
  }
  handleMenuKeyDown(event) {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      return;
    }
    if (this.isEventFromExpandedCategoryItems(event)) {
      return;
    }
    const items = this.getAllFocusableItems();
    if (items.length === 0) {
      return;
    }
    const path = event.composedPath();
    const currentIndex = items.findIndex((item) => path.includes(item));
    const isMenuNavigationFocused = currentIndex === -1 && path.includes(this.menuNavigationContainer);
    if (!isMenuNavigationFocused && currentIndex === -1) {
      return;
    }
    event.preventDefault();
    if (isMenuNavigationFocused) {
      const lastFocusedMenuItem = this.lastFocusedMenuItem;
      let index = lastFocusedMenuItem ? items.indexOf(lastFocusedMenuItem) : -1;
      if (event.key === "Home") {
        index = 0;
      } else if (event.key === "End") {
        index = items.length - 1;
      } else if (index === -1) {
        index = event.key === "ArrowDown" ? 0 : items.length - 1;
      }
      this.updateRovingTabIndex(items, index);
      this.lastFocusedMenuItem = items[index];
      items[index].focus();
      return;
    }
    switch (event.key) {
      case "ArrowDown": {
        const next = (currentIndex + 1) % items.length;
        this.updateRovingTabIndex(items, next);
        this.lastFocusedMenuItem = items[next];
        items[next].focus();
        break;
      }
      case "ArrowUp": {
        const prev = (currentIndex - 1 + items.length) % items.length;
        this.updateRovingTabIndex(items, prev);
        this.lastFocusedMenuItem = items[prev];
        items[prev].focus();
        break;
      }
      case "Home":
        this.updateRovingTabIndex(items, 0);
        this.lastFocusedMenuItem = items[0];
        items[0].focus();
        break;
      case "End":
        this.updateRovingTabIndex(items, items.length - 1);
        this.lastFocusedMenuItem = items.at(-1);
        items.at(-1)?.focus();
        break;
    }
  }
  async showAppSwitch() {
    const { defaultPrevented } = this.openAppSwitch.emit();
    if (defaultPrevented) {
      return;
    }
    if (this.applicationLayoutContext?.appSwitchConfig) {
      showAppSwitch(this.applicationLayoutContext.appSwitchConfig);
    }
  }
  render() {
    let overlayLabel;
    if (this.showSettings) {
      overlayLabel = this.i18nSettings;
    } else if (this.showAbout) {
      overlayLabel = this.i18nLegal;
    }
    return h(Host, { key: "ae35f76dfd5cfdb7991b99b415243142179ed74d", class: {
      expanded: this.expand,
      [`breakpoint-${this.breakpoint}`]: true
    }, slot: "menu" }, h("nav", { key: "d216bc857782a2ffce294b08233c32012af081db", "aria-label": this.applicationName, class: {
      menu: true,
      expanded: this.expand
    } }, h("div", { key: "05a5455e62150bbcfd37ceedf819cd771c457909", class: "menu-buttons" }, this.breakpoint !== "sm" && h("ix-menu-expand-icon", { key: "bcd6ef1a5cac329a794028e9620aa860d57b3017", breakpoint: this.breakpoint, expanded: this.expand, "i18n-expand": this.i18nExpand, "i18n-collapse": this.i18nCollapse, pinned: this.pinned, class: "menu-expand-icon", onClick: async () => this.toggleMenu(), "data-testid": "expand-collapse-menu" }), this.breakpoint === "sm" && this.applicationLayoutContext?.appSwitchConfig && h("ix-icon-button", { key: "7805307642bbd16eb83a5b2777825afa4ea5c5fa", onClick: () => {
      this.showAppSwitch();
    }, icon: iconApps, size: "24", variant: "subtle-tertiary" })), h("div", { key: "fb827d0b7d09d2063a3ea11a1ce1b9769485f7ad", role: "menubar", "aria-orientation": "vertical", "aria-label": this.i18nAriaLabelMenu, "aria-description": this.i18nNavigationHint, class: {
      "menu-navigation": true,
      "menu-navigation--fill": this.shouldFillMenuNavigation
    }, tabIndex: 0, onKeyDown: (e) => this.handleMenuKeyDown(e), onFocusin: (e) => this.handleMenuFocusIn(e), onFocusout: () => this.resetRovingTabIndex() }, h("div", { key: "ce2d25c3b1d1e37dd008eda9e87533e576097170", id: "menu-tabs", style: {
      display: "contents"
    }, onClick: (e) => this.onMenuItemsClick(e) }, h("div", { key: "d3ee716b17740f5e6229fbe7812410fcbb851371", class: "tabs-shadow-container" }, h("div", { key: "ec61419f54753c5e5e84780468382c50299feb06", class: {
      "tabs--shadow": true,
      "tabs--shadow-top": true,
      "tabs--shadow--show": this.itemsScrollShadowTop
    } }), h("div", { key: "9b436d627944dfb6bd5d201c12fbc9d40af6430e", class: {
      tabs: true,
      "show-scrollbar": this.expand
    }, onScroll: () => this.handleOverflowIndicator() }, h("div", { key: "365767aef6ba74c1e0637181ff05a233dc69b3cf", class: "menu-avatar" }, h("slot", { key: "57c74ead4cf7ee99c36490c8aa2370c8286f1125", name: "ix-menu-avatar" })), h("slot", { key: "f5fdb1b2a9e9c08712b1091a6a70a129edb9e7e3", name: "home" }), this.breakpoint !== "sm" || !this.isHiddenFromViewport() ? h("slot", null) : null), h("div", { key: "896632bc77abfce941994d40725d527825598798", class: {
      "tabs--shadow": true,
      "tabs--shadow-bottom": true,
      "tabs--shadow--show": this.itemsScrollShadowBottom
    } }))), h("div", { key: "73a9d2569940f63b0207f0254698bb2e26d2909c", onClick: (e) => this.onMenuItemsClick(e) }, h("slot", { key: "4366380249407b81fb761ca798187e5f70e66fd6", name: "bottom", onSlotchange: () => this.updateBottomSlotState() })), h("div", { key: "97805fa53659c85e47a260d18b421a8f0e71559a", class: "bottom-tab-divider" }), h("div", { key: "6c4026222e07f39199ab82ba6319086e667ef250", class: "menu-utility-controls" }, this.settings ? h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "settings", class: {
      "internal-tab": true,
      "bottom-tab": true,
      active: this.showSettings
    }, icon: iconCogwheel, onClick: async () => this.toggleSettings(!this.showSettings), label: this.i18nSettings, "aria-haspopup": "dialog", "aria-expanded": this.showSettings.toString(), "aria-controls": "menu-overlay" }) : null, this.enableToggleTheme ? h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "toggleTheme", onClick: () => themeSwitcher.toggleMode(), class: "internal-tab bottom-tab", icon: iconLightDark, label: this.i18nToggleTheme, role: "menuitemcheckbox", "aria-checked": this.isDarkMode.toString() }) : null, this.about ? h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "aboutAndLegal", class: {
      "internal-tab": true,
      "bottom-tab": true,
      active: this.showAbout
    }, icon: iconInfo, onClick: async () => this.toggleAbout(!this.showAbout), label: this.i18nLegal, "aria-haspopup": "dialog", "aria-expanded": this.showAbout.toString(), "aria-controls": "menu-overlay" }) : null)), h("div", { key: "ffb352d03dd8a951729c4134786491d6bc52c02f", id: "popover-area" })), h("section", { key: "6fb20ce4203197e7be2deef045a63cc032f0bcd1", id: "menu-overlay", role: "dialog", "aria-label": overlayLabel, class: {
      "menu-overlay": true,
      visible: this.isOverlayVisible(),
      expanded: this.expand
    }, onTransitionEnd: () => {
      this.isTransitionDisabled = true;
      this.checkTransition();
    } }, h("div", { key: "a74b6d9724123bf25a1ed8bd6463dad937411e5b", class: "menu-overlay-container" }, this.showSettings ? h("slot", { name: "ix-menu-settings" }) : null), h("div", { key: "c6d3d22ffa98d7114fb38b07a74b1e3b54a06abc", class: "menu-overlay-container" }, this.showAbout ? h("slot", { name: "ix-menu-about" }) : null)));
  }
  static get watchers() {
    return {
      "expand": [{
        "expandChanged": 0
      }],
      "pinned": [{
        "pinnedChange": 0
      }]
    };
  }
};
Menu.style = menuCss();
export {
  Menu as ix_menu
};
