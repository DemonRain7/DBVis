declare const _default: import("vue").DefineComponent<{
    line: {
        type: StringConstructor;
        default: string;
    };
}, {
    highlight: import("vue").Ref<boolean>;
    selfRef: import("vue").Ref<HTMLElement | null>;
    maybeTrimmedLines: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    line: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    line: string;
}>;
export default _default;
