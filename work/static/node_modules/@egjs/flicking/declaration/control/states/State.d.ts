import { OnAnimationEnd, OnChange, OnFinish, OnHold, OnRelease } from "@egjs/axes";
import Flicking from "../../Flicking";
import Panel from "../../core/panel/Panel";
export declare enum STATE_TYPE {
    IDLE = 0,
    HOLDING = 1,
    DRAGGING = 2,
    ANIMATING = 3,
    DISABLED = 4
}
declare abstract class State {
    abstract readonly holding: boolean;
    abstract readonly animating: boolean;
    protected _delta: number;
    protected _targetPanel: Panel | null;
    get delta(): number;
    get targetPanel(): Panel | null;
    set targetPanel(val: Panel | null);
    onEnter(prevState: State): void;
    onHold(ctx: {
        flicking: Flicking;
        axesEvent: OnHold;
        transitTo: (nextState: STATE_TYPE) => State;
    }): void;
    onChange(ctx: {
        flicking: Flicking;
        axesEvent: OnChange;
        transitTo: (nextState: STATE_TYPE) => State;
    }): void;
    onRelease(ctx: {
        flicking: Flicking;
        axesEvent: OnRelease;
        transitTo: (nextState: STATE_TYPE) => State;
    }): void;
    onAnimationEnd(ctx: {
        flicking: Flicking;
        axesEvent: OnAnimationEnd;
        transitTo: (nextState: STATE_TYPE) => State;
    }): void;
    onFinish(ctx: {
        flicking: Flicking;
        axesEvent: OnFinish;
        transitTo: (nextState: STATE_TYPE) => State;
    }): void;
    protected _moveToChangedPosition(ctx: Parameters<State["onChange"]>[0]): void;
}
export default State;
