import State from "./State";
declare class AnimatingState extends State {
    readonly holding = false;
    readonly animating = true;
    onHold(ctx: Parameters<State["onHold"]>[0]): void;
    onChange(ctx: Parameters<State["onChange"]>[0]): void;
    onFinish(ctx: Parameters<State["onFinish"]>[0]): void;
}
export default AnimatingState;
