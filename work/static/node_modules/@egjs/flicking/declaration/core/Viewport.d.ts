import Flicking from "../Flicking";
declare class Viewport {
    private _flicking;
    private _el;
    private _width;
    private _height;
    private _isBorderBoxSizing;
    private _padding;
    get element(): HTMLElement;
    get width(): number;
    get height(): number;
    get padding(): {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    constructor(flicking: Flicking, el: HTMLElement);
    setSize({ width, height }: Partial<{
        width: number | string;
        height: number | string;
    }>): void;
    resize(): void;
}
export default Viewport;
