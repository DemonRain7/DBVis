import State from "./State";
declare class IdleState extends State {
    readonly holding = false;
    readonly animating = false;
    onEnter(): void;
    onHold(ctx: Parameters<State["onHold"]>[0]): void;
    onChange(ctx: Parameters<State["onChange"]>[0]): void;
}
export default IdleState;
