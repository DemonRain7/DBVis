import Flicking from "../Flicking";
declare class AutoResizer {
    private _flicking;
    private _enabled;
    private _resizeObserver;
    private _resizeTimer;
    private _maxResizeDebounceTimer;
    get enabled(): boolean;
    constructor(flicking: Flicking);
    enable(): this;
    disable(): this;
    private _onResize;
    private _doScheduledResize;
    private _skipFirstResize;
}
export default AutoResizer;
