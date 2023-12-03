import Flicking from "../../../Flicking";
interface ElementProvider {
    element: HTMLElement;
    rendered: boolean;
    show(flicking: Flicking): void;
    hide(flicking: Flicking): void;
}
export default ElementProvider;
