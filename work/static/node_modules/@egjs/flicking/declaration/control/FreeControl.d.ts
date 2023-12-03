import { OnRelease } from "@egjs/axes";
import Control from "./Control";
export interface FreeControlOptions {
    stopAtEdge: boolean;
}
declare class FreeControl extends Control {
    private _stopAtEdge;
    get stopAtEdge(): FreeControlOptions["stopAtEdge"];
    set stopAtEdge(val: FreeControlOptions["stopAtEdge"]);
    constructor({ stopAtEdge }?: Partial<FreeControlOptions>);
    updatePosition(progressInPanel: number): void;
    moveToPosition(position: number, duration: number, axesEvent?: OnRelease): Promise<void>;
}
export default FreeControl;
