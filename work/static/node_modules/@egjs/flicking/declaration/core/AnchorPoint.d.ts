import Panel from "./panel/Panel";
declare class AnchorPoint {
    private _index;
    private _pos;
    private _panel;
    get index(): number;
    get position(): number;
    get panel(): Panel;
    constructor({ index, position, panel }: {
        index: number;
        position: number;
        panel: Panel;
    });
}
export default AnchorPoint;
