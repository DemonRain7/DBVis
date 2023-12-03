import State from "./State";
declare class DraggingState extends State {
    readonly holding = true;
    readonly animating = true;
    onChange(ctx: Parameters<State["onChange"]>[0]): void;
    onRelease(ctx: Parameters<State["onRelease"]>[0]): void;
}
export default DraggingState;
