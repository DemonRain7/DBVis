import Flicking from "../../../Flicking";
import VirtualPanel from "../VirtualPanel";
import ElementProvider from "./ElementProvider";
declare class VirtualElementProvider implements ElementProvider {
    private _flicking;
    private _panel;
    get element(): HTMLElement;
    get rendered(): boolean;
    private get _virtualElement();
    constructor(flicking: Flicking);
    init(panel: VirtualPanel): void;
    show(): void;
    hide(): void;
}
export default VirtualElementProvider;
