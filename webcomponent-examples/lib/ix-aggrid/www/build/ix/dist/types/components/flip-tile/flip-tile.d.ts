import { FlipTileState } from './flip-tile-state';
export declare class FlipTile {
  private readonly ANIMATION_DURATION;
  private contentContainerElement;
  private contentItems;
  hostElement: HTMLIxFlipTileElement;
  index: number;
  isFlipAnimationActive: boolean;
  /**
   * Variation of the Flip
   */
  state: FlipTileState;
  /**
   * Tmp property name
   */
  footer: string;
  componentDidLoad(): void;
  private toggleIndex;
  private toggleContentItem;
  private doFlipAnimation;
  render(): any;
}
