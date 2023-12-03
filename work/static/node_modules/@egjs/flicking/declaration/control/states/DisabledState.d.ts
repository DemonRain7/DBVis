import State from "./State";
declare class DisabledState extends State {
    readonly holding = false;
    readonly animating = true;
    onAnimationEnd(ctx: Parameters<State["onAnimationEnd"]>[0]): void;
    onChange(ctx: Parameters<State["onChange"]>[0]): void;
    onRelease(ctx: Parameters<State["onRelease"]>[0]): void;
}
export default DisabledState;
