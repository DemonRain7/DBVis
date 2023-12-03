import Flicking, { FlickingOptions } from "../Flicking";
import Panel, { PanelOptions } from "../core/panel/Panel";
import RenderingStrategy from "./strategy/RenderingStrategy";
export interface RendererOptions {
    align?: FlickingOptions["align"];
    strategy: RenderingStrategy;
}
declare abstract class Renderer {
    protected _flicking: Flicking | null;
    protected _panels: Panel[];
    protected _rendering: boolean;
    protected _align: NonNullable<RendererOptions["align"]>;
    protected _strategy: RendererOptions["strategy"];
    get panels(): Panel[];
    get rendering(): boolean;
    get panelCount(): number;
    get strategy(): RenderingStrategy;
    get align(): NonNullable<RendererOptions["align"]>;
    set align(val: NonNullable<RendererOptions["align"]>);
    constructor({ align, strategy }: RendererOptions);
    abstract render(): Promise<void>;
    protected abstract _collectPanels(): void;
    protected abstract _createPanel(el: any, options: Omit<PanelOptions, "elementProvider">): Panel;
    init(flicking: Flicking): this;
    destroy(): void;
    getPanel(index: number): Panel | null;
    forceRenderAllPanels(): Promise<void>;
    updatePanelSize(): this;
    batchInsert(...items: Array<{
        index: number;
        elements: any[];
        hasDOMInElements: boolean;
    }>): Panel[];
    batchInsertDefer(...items: Array<{
        index: number;
        elements: any[];
        hasDOMInElements: boolean;
    }>): any[];
    batchRemove(...items: Array<{
        index: number;
        deleteCount: number;
        hasDOMInElements: boolean;
    }>): Panel[];
    batchRemoveDefer(...items: Array<{
        index: number;
        deleteCount: number;
        hasDOMInElements: boolean;
    }>): any[];
    updateAfterPanelChange(panelsAdded: Panel[], panelsRemoved: Panel[]): void;
    checkPanelContentsReady(checkingPanels: Panel[]): void;
    protected _updateCameraAndControl(): void;
    protected _showOnlyVisiblePanels(flicking: Flicking): void;
    protected _updatePanelSizeByGrid(referencePanel: Panel, panels: Panel[]): void;
    protected _removeAllChildsFromCamera(): void;
    protected _insertPanelElements(panels: Panel[], nextSibling?: Panel | null): void;
    protected _removePanelElements(panels: Panel[]): void;
    protected _afterRender(): void;
}
export default Renderer;
