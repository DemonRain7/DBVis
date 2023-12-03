declare const _default: import("vue").DefineComponent<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    tmNode: {
        type: ObjectConstructor;
        required: true;
    };
}, {
    labelField: import("vue").Ref<string>;
    showIcon: import("vue").Ref<boolean>;
    hasSubmenu: import("vue").Ref<boolean>;
    renderLabel: import("vue").Ref<import("./interface").RenderLabelImpl | undefined>;
    nodeProps: import("vue").Ref<import("../..").MenuNodeProps | undefined>;
    renderOption: import("vue").Ref<import("./interface").RenderOptionImpl | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    tmNode: {
        type: ObjectConstructor;
        required: true;
    };
}>>, {}>;
export default _default;
