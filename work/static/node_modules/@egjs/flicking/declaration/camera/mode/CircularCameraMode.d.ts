import Panel from "../../core/panel/Panel";
import AnchorPoint from "../../core/AnchorPoint";
import CameraMode from "./CameraMode";
declare class CircularCameraMode extends CameraMode {
    checkAvailability(): boolean;
    getRange(): {
        min: number;
        max: number;
    };
    getAnchors(): AnchorPoint[];
    findNearestAnchor(position: number): AnchorPoint | null;
    findAnchorIncludePosition(position: number): AnchorPoint | null;
    getCircularOffset(): number;
    clampToReachablePosition(position: number): number;
    canReach(panel: Panel): boolean;
    canSee(panel: Panel): boolean;
    private _calcPanelAreaSum;
}
export default CircularCameraMode;
