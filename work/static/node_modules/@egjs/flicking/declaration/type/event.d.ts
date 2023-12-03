import { OnChange, OnFinish, OnHold, OnRelease } from "@egjs/axes";
import { ComponentEvent } from "@egjs/component";
import Flicking from "../Flicking";
import Panel from "../core/panel/Panel";
import { EVENTS, DIRECTION } from "../const/external";
import { ValueOf } from "../type/internal";
export declare type ReadyEvent<T extends Flicking = Flicking> = ComponentEvent<{}, typeof EVENTS["READY"], T>;
export interface BeforeResizeEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["BEFORE_RESIZE"], T> {
    width: number;
    height: number;
    element: HTMLElement;
}
export interface AfterResizeEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["AFTER_RESIZE"], T> {
    width: number;
    height: number;
    prev: {
        width: number;
        height: number;
    };
    sizeChanged: boolean;
    element: HTMLElement;
}
export interface HoldStartEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["HOLD_START"], T> {
    axesEvent: OnHold;
}
export interface HoldEndEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["HOLD_END"], T> {
    axesEvent: OnRelease;
}
export interface MoveStartEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["MOVE_START"], T> {
    isTrusted: boolean;
    holding: boolean;
    direction: ValueOf<typeof DIRECTION>;
    axesEvent: OnChange;
}
export interface MoveEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["MOVE"], T> {
    isTrusted: boolean;
    holding: boolean;
    direction: ValueOf<typeof DIRECTION>;
    axesEvent: OnChange;
}
export interface MoveEndEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["MOVE_END"], T> {
    isTrusted: boolean;
    direction: ValueOf<typeof DIRECTION>;
    axesEvent: OnFinish;
}
export interface WillChangeEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["WILL_CHANGE"], T> {
    index: number;
    panel: Panel;
    isTrusted: boolean;
    direction: ValueOf<typeof DIRECTION>;
}
export interface ChangedEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["CHANGED"], T> {
    index: number;
    panel: Panel;
    prevIndex: number;
    prevPanel: Panel | null;
    isTrusted: boolean;
    direction: ValueOf<typeof DIRECTION>;
}
export interface WillRestoreEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["WILL_RESTORE"], T> {
    index: number;
    panel: Panel;
    isTrusted: boolean;
    direction: ValueOf<typeof DIRECTION>;
}
export interface RestoredEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["RESTORED"], T> {
    isTrusted: boolean;
}
export interface SelectEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["SELECT"], T> {
    index: number;
    panel: Panel;
    direction: ValueOf<typeof DIRECTION> | null;
}
export interface NeedPanelEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["NEED_PANEL"], T> {
    direction: Exclude<ValueOf<typeof DIRECTION>, null>;
}
export interface VisibleChangeEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["VISIBLE_CHANGE"], T> {
    added: Panel[];
    removed: Panel[];
    visiblePanels: Panel[];
}
export interface ReachEdgeEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["REACH_EDGE"], T> {
    direction: ValueOf<typeof DIRECTION>;
}
export interface PanelChangeEvent<T extends Flicking = Flicking> extends ComponentEvent<{}, typeof EVENTS["PANEL_CHANGE"], T> {
    added: Panel[];
    removed: Panel[];
}
