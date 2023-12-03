import Flicking from "../../../Flicking";
import ElementProvider from "./ElementProvider";
declare class VanillaElementProvider implements ElementProvider {
    private _element;
    private _rendered;
    get element(): HTMLElement;
    get rendered(): boolean;
    constructor(element: HTMLElement);
    show(flicking: Flicking): void;
    hide(flicking: Flicking): void;
}
export default VanillaElementProvider;
