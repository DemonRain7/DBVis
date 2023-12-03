import Flicking from "../Flicking";
import VirtualPanel from "./panel/VirtualPanel";
export interface VirtualOptions {
    renderPanel: (panel: VirtualPanel, index: number) => string;
    initialPanelCount: number;
    cache?: boolean;
    panelClass?: string;
}
declare class VirtualManager {
    private _flicking;
    private _renderPanel;
    private _initialPanelCount;
    private _cache;
    private _panelClass;
    private _elements;
    get elements(): {
        nativeElement: HTMLElement;
        visible: boolean;
    }[];
    get renderPanel(): VirtualOptions["renderPanel"];
    get initialPanelCount(): number;
    get cache(): NonNullable<VirtualOptions["cache"]>;
    get panelClass(): NonNullable<VirtualOptions["panelClass"]>;
    set renderPanel(val: VirtualOptions["renderPanel"]);
    set cache(val: NonNullable<VirtualOptions["cache"]>);
    set panelClass(val: NonNullable<VirtualOptions["panelClass"]>);
    constructor(flicking: Flicking, options: VirtualOptions | null);
    init(): void;
    show(index: number): void;
    hide(index: number): void;
    append(count?: number): VirtualPanel[];
    prepend(count?: number): VirtualPanel[];
    insert(index: number, count?: number): VirtualPanel[];
    remove(index: number, count: number): VirtualPanel[];
    private _initVirtualElements;
}
export default VirtualManager;
