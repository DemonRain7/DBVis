import Flicking from "../../Flicking";
import { ALIGN, DIRECTION } from "../../const/external";
import { LiteralUnion, ValueOf } from "../../type/internal";
import ElementProvider from "./provider/ElementProvider";
export interface PanelOptions {
    index: number;
    align: LiteralUnion<ValueOf<typeof ALIGN>> | number;
    flicking: Flicking;
    elementProvider: ElementProvider;
}
declare class Panel {
    protected _flicking: Flicking;
    protected _elProvider: ElementProvider;
    protected _index: number;
    protected _pos: number;
    protected _size: number;
    protected _height: number;
    protected _margin: {
        prev: number;
        next: number;
    };
    protected _alignPos: number;
    protected _rendered: boolean;
    protected _removed: boolean;
    protected _loading: boolean;
    protected _toggleDirection: ValueOf<typeof DIRECTION>;
    protected _toggled: boolean;
    protected _togglePosition: number;
    protected _align: PanelOptions["align"];
    get element(): HTMLElement;
    get elementProvider(): ElementProvider;
    get index(): number;
    get position(): number;
    get size(): number;
    get sizeIncludingMargin(): number;
    get height(): number;
    get margin(): {
        prev: number;
        next: number;
    };
    get alignPosition(): number;
    get removed(): boolean;
    get rendered(): boolean;
    get loading(): boolean;
    get range(): {
        min: number;
        max: number;
    };
    get toggled(): boolean;
    get toggleDirection(): any;
    get offset(): number;
    get progress(): number;
    get outsetProgress(): number;
    get visibleRatio(): number;
    set loading(val: boolean);
    get align(): PanelOptions["align"];
    set align(val: PanelOptions["align"]);
    constructor({ index, align, flicking, elementProvider }: PanelOptions);
    markForShow(): void;
    markForHide(): void;
    resize(cached?: {
        size: number;
        height?: number;
        margin: {
            prev: number;
            next: number;
        };
    }): this;
    setSize(size: Partial<{
        width: number | string;
        height: number | string;
    }>): this;
    contains(element: HTMLElement): boolean;
    destroy(): void;
    includePosition(pos: number, includeMargin?: boolean): boolean;
    includeRange(min: number, max: number, includeMargin?: boolean): boolean;
    isVisibleOnRange(min: number, max: number): boolean;
    focus(duration?: number): Promise<void>;
    prev(): Panel | null;
    next(): Panel | null;
    increaseIndex(val: number): this;
    decreaseIndex(val: number): this;
    updatePosition(): this;
    toggle(prevPos: number, newPos: number): boolean;
    updateCircularToggleDirection(): this;
    private _updateAlignPos;
    private _resetInternalStates;
}
export default Panel;
