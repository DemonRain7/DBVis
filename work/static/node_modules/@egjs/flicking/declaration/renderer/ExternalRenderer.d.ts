import Panel from "../core/panel/Panel";
import Renderer from "./Renderer";
declare abstract class ExternalRenderer extends Renderer {
    protected _removePanelElements(panels: Panel[]): void;
    protected _removeAllChildsFromCamera(): void;
}
export default ExternalRenderer;
