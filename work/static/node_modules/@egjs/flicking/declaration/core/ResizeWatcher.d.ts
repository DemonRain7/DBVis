export interface ResizeWatherOptions {
    resizeDebounce?: number;
    maxResizeDebounce?: number;
    useResizeObserver?: boolean;
    useWindowResize?: boolean;
    watchDirection?: "width" | "height" | "box" | false;
    rectBox?: "border-box" | "content-box";
}
declare class ResizeWatcher {
    private _container;
    private _rect;
    private _resizeTimer;
    private _maxResizeDebounceTimer;
    private _emitter;
    private _observer;
    private _options;
    constructor(container: HTMLElement | string, options?: ResizeWatherOptions);
    getRect(): {
        width: number;
        height: number;
    };
    setRect(rect: {
        width: number;
        height: number;
    }): void;
    resize(): void;
    listen(callback: () => void): this;
    destroy(): void;
    private _init;
    private _onResize;
    private _scheduleResize;
}
export default ResizeWatcher;
