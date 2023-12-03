import Panel, { PanelOptions } from "../core/panel/Panel";
import Renderer from "./Renderer";
declare class VanillaRenderer extends Renderer {
    render(): Promise<void>;
    protected _collectPanels(): void;
    protected _createPanel(el: HTMLElement, options: Omit<PanelOptions, "elementProvider">): Panel;
    private _resetPanelElementOrder;
    private _removeAllTextNodes;
}
export default VanillaRenderer;
