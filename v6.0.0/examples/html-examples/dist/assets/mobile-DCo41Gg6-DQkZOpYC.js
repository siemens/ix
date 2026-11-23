import { a as addBreakpointMediaListener, m as matchBreakpoint } from "./breakpoints-CngdN1zi-CCrbHAVS.js";
import { a as useContextConsumer, A as ApplicationLayoutContext } from "./context-LFrZudC6-CMyhWjAC.js";
import { a as applicationLayoutService } from "./service-C3ifmVz8-BWlcCSeE.js";
function resolveIsMobile(applicationLayoutContext) {
  const forcedBreakpoint = applicationLayoutContext?.forceBreakpoint;
  if (forcedBreakpoint) {
    return forcedBreakpoint === "sm";
  }
  if (applicationLayoutContext) {
    return applicationLayoutService.breakpoint === "sm";
  }
  return matchBreakpoint("sm");
}
function subscribeApplicationLayoutMobile(hostElement, onChange) {
  let applicationLayoutContext;
  const emit = () => {
    onChange(resolveIsMobile(applicationLayoutContext));
  };
  const layoutContextSubscription = useContextConsumer(hostElement, ApplicationLayoutContext, (ctx) => {
    applicationLayoutContext = ctx;
    emit();
  }, true);
  emit();
  const layoutServiceDisposable = applicationLayoutService.onChange.on(() => {
    emit();
  });
  const removeBreakpointMediaListener = addBreakpointMediaListener("sm", () => {
    emit();
  });
  return {
    dispose: () => {
      layoutContextSubscription.unsubscribe();
      layoutServiceDisposable.dispose();
      removeBreakpointMediaListener();
      applicationLayoutContext = void 0;
    }
  };
}
export {
  subscribeApplicationLayoutMobile as s
};
