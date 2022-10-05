export declare class Popover {
  private readonly hostElement;
  private readonly popoverElement;
  private readonly outsideCallback;
  constructor(hostElement: HTMLElement, popoverElement: HTMLElement, outsideCallback: (e: Event) => void);
  outside(e: Event): void;
  open(maxWidth?: number): void;
  destroy(): void;
}
