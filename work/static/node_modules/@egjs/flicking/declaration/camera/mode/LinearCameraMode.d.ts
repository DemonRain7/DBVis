import CameraMode from "./CameraMode";
declare class LinearCameraMode extends CameraMode {
    checkAvailability(): boolean;
    getRange(): {
        min: number;
        max: number;
    };
}
export default LinearCameraMode;
