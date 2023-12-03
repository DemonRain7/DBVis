import Flicking from "../../Flicking";
import Panel from "../../core/panel/Panel";
import AnchorPoint from "../../core/AnchorPoint";
declare abstract class CameraMode {
    protected _flicking: Flicking;
    constructor(flicking: Flicking);
    abstract checkAvailability(): boolean;
    abstract getRange(): {
        min: number;
        max: number;
    };
    getAnchors(): AnchorPoint[];
    findAnchorIncludePosition(position: number): AnchorPoint | null;
    findNearestAnchor(position: number): AnchorPoint | null;
    clampToReachablePosition(position: number): number;
    getCircularOffset(): number;
    canReach(panel: Panel): boolean;
    canSee(panel: Panel): boolean;
}
export default CameraMode;
