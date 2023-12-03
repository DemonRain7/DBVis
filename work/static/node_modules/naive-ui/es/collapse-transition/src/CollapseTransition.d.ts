import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const collapseTransitionProps: {
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly appear: BooleanConstructor;
    /** @deprecated */
    readonly collapsed: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly theme: PropType<import("../../_mixins").Theme<"CollapseTransition", {
        bezier: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"CollapseTransition", {
        bezier: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"CollapseTransition", {
        bezier: string;
    }, any>>>;
};
export type CollapseTransitionProps = ExtractPublicPropTypes<typeof collapseTransitionProps>;
declare const _default: import("vue").DefineComponent<{
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly appear: BooleanConstructor;
    /** @deprecated */
    readonly collapsed: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly theme: PropType<import("../../_mixins").Theme<"CollapseTransition", {
        bezier: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"CollapseTransition", {
        bezier: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"CollapseTransition", {
        bezier: string;
    }, any>>>;
}, {
    rtlEnabled: import("vue").Ref<import("../../config-provider/src/internal-interface").RtlItem | undefined> | undefined;
    mergedShow: import("vue").ComputedRef<boolean>;
    mergedClsPrefix: import("vue").ComputedRef<string>;
    cssVars: import("vue").ComputedRef<{
        '--n-bezier': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly appear: BooleanConstructor;
    /** @deprecated */
    readonly collapsed: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly theme: PropType<import("../../_mixins").Theme<"CollapseTransition", {
        bezier: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"CollapseTransition", {
        bezier: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"CollapseTransition", {
        bezier: string;
    }, any>>>;
}>>, {
    readonly show: boolean;
    readonly appear: boolean;
    readonly collapsed: boolean | undefined;
}>;
export default _default;
