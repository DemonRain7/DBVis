import Flicking from "../Flicking";
import { SnapControlOptions, FreeControlOptions, StrictControlOptions } from "../control";
import { MOVE_TYPE } from "../const/external";
import { ValueOf } from "../type/internal";
export declare type ElementLike = string | HTMLElement;
export interface Plugin {
    init(flicking: Flicking): void;
    destroy(): void;
    update(flicking: Flicking): void;
}
export interface Status {
    index?: number;
    position?: {
        panel: number;
        progressInPanel: number;
    };
    visibleOffset?: number;
    panels: Array<{
        index: number;
        html?: string;
    }>;
}
export declare type MoveTypeOptions<T extends ValueOf<typeof MOVE_TYPE>> = T extends typeof MOVE_TYPE.SNAP ? [T] | [T, Partial<SnapControlOptions>] : T extends typeof MOVE_TYPE.FREE_SCROLL ? [T] | [T, Partial<FreeControlOptions>] : T extends typeof MOVE_TYPE.STRICT ? [T] | [T, Partial<StrictControlOptions>] : [T];
export interface ControlParams {
    range: {
        min: number;
        max: number;
    };
    position: number;
    circular: boolean;
}
