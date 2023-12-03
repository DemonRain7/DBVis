import Flicking from "../../Flicking";
import { PanelOptions } from "../../core/panel/Panel";
import VirtualPanel from "../../core/panel/VirtualPanel";
import RenderingStrategy from "./RenderingStrategy";
declare class VirtualRenderingStrategy implements RenderingStrategy {
    renderPanels(flicking: Flicking): void;
    getRenderingIndexesByOrder(flicking: Flicking): number[];
    getRenderingElementsByOrder(flicking: Flicking): HTMLElement[];
    updateRenderingPanels(flicking: Flicking): void;
    collectPanels(flicking: Flicking): VirtualPanel[];
    createPanel(_el: any, options: PanelOptions): VirtualPanel;
    updatePanelSizes(flicking: Flicking, size: Partial<{
        width: number | string;
        height: number | string;
    }>): void;
}
export default VirtualRenderingStrategy;
