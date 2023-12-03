import AnchorPoint from "../../core/AnchorPoint";
import CameraMode from "./CameraMode";
declare class BoundCameraMode extends CameraMode {
    checkAvailability(): boolean;
    getRange(): {
        min: number;
        max: number;
    };
    getAnchors(): AnchorPoint[];
    findAnchorIncludePosition(position: number): AnchorPoint | null;
    private _findNearestPanel;
}
export default BoundCameraMode;
