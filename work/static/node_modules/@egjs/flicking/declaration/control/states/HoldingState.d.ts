import State from "./State";
declare class HoldingState extends State {
    readonly holding = true;
    readonly animating = false;
    private _releaseEvent;
    onChange(ctx: Parameters<State["onChange"]>[0]): void;
    onRelease(ctx: Parameters<State["onRelease"]>[0]): void;
    onFinish(ctx: Parameters<State["onFinish"]>[0]): void;
}
export default HoldingState;
