import { OnRelease } from "@egjs/axes";
import Control from "./Control";
export interface SnapControlOptions {
    count: number;
}
declare class SnapControl extends Control {
    private _count;
    get count(): SnapControlOptions["count"];
    set count(val: SnapControlOptions["count"]);
    constructor({ count }?: Partial<SnapControlOptions>);
    moveToPosition(position: number, duration: number, axesEvent?: OnRelease): Promise<void>;
    private _findSnappedAnchor;
    private _findAdjacentAnchor;
    private _calcSnapThreshold;
}
export default SnapControl;
