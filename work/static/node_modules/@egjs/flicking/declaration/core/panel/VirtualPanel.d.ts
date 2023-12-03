import Panel, { PanelOptions } from "./Panel";
import VirtualElementProvider from "./provider/VirtualElementProvider";
interface VirtualPanelOptions extends PanelOptions {
    elementProvider: VirtualElementProvider;
}
declare class VirtualPanel extends Panel {
    protected _elProvider: VirtualElementProvider;
    protected _cachedInnerHTML: string | null;
    get element(): HTMLElement;
    get cachedInnerHTML(): string;
    get elementIndex(): number;
    constructor(options: VirtualPanelOptions);
    cacheRenderResult(result: string): void;
    uncacheRenderResult(): void;
    render(): void;
    increaseIndex(val: number): this;
    decreaseIndex(val: number): this;
}
export default VirtualPanel;
