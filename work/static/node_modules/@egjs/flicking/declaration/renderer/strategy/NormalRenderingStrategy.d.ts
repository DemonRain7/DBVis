import Flicking from "../../Flicking";
import Panel, { PanelOptions } from "../../core/panel/Panel";
import ElementProvider from "../../core/panel/provider/ElementProvider";
import RenderingStrategy from "./RenderingStrategy";
export interface NormalRenderingStrategyOptions {
    providerCtor: new (...args: any) => ElementProvider;
}
declare class NormalRenderingStrategy implements RenderingStrategy {
    private _providerCtor;
    constructor({ providerCtor }: NormalRenderingStrategyOptions);
    renderPanels(): void;
    getRenderingIndexesByOrder(flicking: Flicking): number[];
    getRenderingElementsByOrder(flicking: Flicking): HTMLElement[];
    updateRenderingPanels(flicking: Flicking): void;
    collectPanels(flicking: Flicking, elements: any[]): Panel[];
    createPanel(element: any, options: Omit<PanelOptions, "elementProvider">): Panel;
    updatePanelSizes(flicking: Flicking, size: Partial<{
        width: number | string;
        height: number | string;
    }>): void;
    private _showOnlyVisiblePanels;
}
export default NormalRenderingStrategy;
