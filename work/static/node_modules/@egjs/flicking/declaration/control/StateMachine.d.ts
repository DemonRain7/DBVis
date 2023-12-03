import { AxesEvents } from "@egjs/axes";
import Flicking from "../Flicking";
import State, { STATE_TYPE } from "./states/State";
declare class StateMachine {
    private _state;
    get state(): State;
    constructor();
    fire(eventType: keyof AxesEvents, externalCtx: {
        flicking: Flicking;
        axesEvent: any;
    }): void;
    transitTo: (nextStateType: STATE_TYPE) => State;
}
export default StateMachine;
