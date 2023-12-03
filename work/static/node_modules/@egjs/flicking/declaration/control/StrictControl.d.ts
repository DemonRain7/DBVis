import { OnRelease } from "@egjs/axes";
import Panel from "../core/panel/Panel";
import Control from "./Control";
export interface StrictControlOptions {
    count: number;
}
declare class StrictControl extends Control {
    private _count;
    private _indexRange;
    get count(): StrictControlOptions["count"];
    set count(val: StrictControlOptions["count"]);
    constructor({ count }?: Partial<StrictControlOptions>);
    destroy(): void;
    updateInput(): this;
    moveToPanel(panel: Panel, options: Parameters<Control["moveToPanel"]>[1]): Promise<void>;
    moveToPosition(position: number, duration: number, axesEvent?: OnRelease): Promise<void>;
    setActive: (newActivePanel: Panel, prevActivePanel: Panel | null, isTrusted: boolean) => void;
    private _resetIndexRange;
}
export default StrictControl;
