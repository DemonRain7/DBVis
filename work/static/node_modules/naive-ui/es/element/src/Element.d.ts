import type { ExtractPublicPropTypes } from '../../_utils';
export declare const elementProps: {
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
    readonly theme: import("vue").PropType<import("../../_mixins").Theme<"Element", {}, any>>;
    readonly themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Element", {}, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Element", {}, any>>>;
};
export type ElementProps = ExtractPublicPropTypes<typeof elementProps>;
declare const _default: import("vue").DefineComponent<{
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
    readonly theme: import("vue").PropType<import("../../_mixins").Theme<"Element", {}, any>>;
    readonly themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Element", {}, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Element", {}, any>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    cssVars: import("vue").ComputedRef<Record<string, string>> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
    readonly theme: import("vue").PropType<import("../../_mixins").Theme<"Element", {}, any>>;
    readonly themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Element", {}, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Element", {}, any>>>;
}>>, {
    readonly tag: string;
}>;
export default _default;
