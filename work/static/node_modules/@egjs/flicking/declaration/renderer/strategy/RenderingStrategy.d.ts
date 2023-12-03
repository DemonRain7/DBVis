import Flicking from "../../Flicking";
import Panel, { PanelOptions } from "../../core/panel/Panel";
interface RenderingStrategy {
    renderPanels(flicking: Flicking): void;
    getRenderingIndexesByOrder(flicking: Flicking): number[];
    getRenderingElementsByOrder(flicking: Flicking): HTMLElement[];
    updateRenderingPanels(flicking: Flicking): void;
    createPanel(element: any, options: Omit<PanelOptions, "elementProvider">): Panel;
    collectPanels(flicking: Flicking, elements: any[]): Panel[];
    updatePanelSizes(flicking: Flicking, size: Partial<{
        width: number | string;
        height: number | string;
    }>): void;
}
export default RenderingStrategy;
