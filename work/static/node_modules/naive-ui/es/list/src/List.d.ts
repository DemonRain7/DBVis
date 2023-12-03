import { PropType, Ref } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
export declare const listProps: {
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
    };
    bordered: BooleanConstructor;
    clickable: BooleanConstructor;
    hoverable: BooleanConstructor;
    showDivider: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: PropType<import("../../_mixins").Theme<"List", {
        textColor: string;
        color: string;
        colorHover: string;
        colorModal: string;
        colorHoverModal: string;
        colorPopover: string;
        colorHoverPopover: string;
        borderColor: string;
        borderColorModal: string;
        borderColorPopover: string;
        borderRadius: string;
        fontSize: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"List", {
        textColor: string;
        color: string;
        colorHover: string;
        colorModal: string;
        colorHoverModal: string;
        colorPopover: string;
        colorHoverPopover: string;
        borderColor: string;
        borderColorModal: string;
        borderColorPopover: string;
        borderRadius: string;
        fontSize: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"List", {
        textColor: string;
        color: string;
        colorHover: string;
        colorModal: string;
        colorHoverModal: string;
        colorPopover: string;
        colorHoverPopover: string;
        borderColor: string;
        borderColorModal: string;
        borderColorPopover: string;
        borderRadius: string;
        fontSize: string;
    }, any>>>;
};
export type ListProps = ExtractPublicPropTypes<typeof listProps>;
interface ListInjection {
    showDividerRef: Ref<boolean>;
    mergedClsPrefixRef: Ref<string>;
}
export declare const listInjectionKey: import("vue").InjectionKey<ListInjection>;
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
    };
    bordered: BooleanConstructor;
    clickable: BooleanConstructor;
    hoverable: BooleanConstructor;
    showDivider: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: PropType<import("../../_mixins").Theme<"List", {
        textColor: string;
        color: string;
        colorHover: string;
        colorModal: string;
        colorHoverModal: string;
        colorPopover: string;
        colorHoverPopover: string;
        borderColor: string;
        borderColorModal: string;
        borderColorPopover: string;
        borderRadius: string;
        fontSize: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"List", {
        textColor: string;
        color: string;
        colorHover: string;
        colorModal: string;
        colorHoverModal: string;
        colorPopover: string;
        colorHoverPopover: string;
        borderColor: string;
        borderColorModal: string;
        borderColorPopover: string;
        borderRadius: string;
        fontSize: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"List", {
        textColor: string;
        color: string;
        colorHover: string;
        colorModal: string;
        colorHoverModal: string;
        colorPopover: string;
        colorHoverPopover: string;
        borderColor: string;
        borderColorModal: string;
        borderColorPopover: string;
        borderRadius: string;
        fontSize: string;
    }, any>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    rtlEnabled: Ref<import("../../config-provider/src/internal-interface").RtlItem | undefined> | undefined;
    cssVars: import("vue").ComputedRef<{
        '--n-font-size': string;
        '--n-bezier': string;
        '--n-text-color': string;
        '--n-color': string;
        '--n-border-radius': string;
        '--n-border-color': string;
        '--n-border-color-modal': string;
        '--n-border-color-popover': string;
        '--n-color-modal': string;
        '--n-color-popover': string;
        '--n-color-hover': string;
        '--n-color-hover-modal': string;
        '--n-color-hover-popover': string;
    }> | undefined;
    themeClass: Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
    };
    bordered: BooleanConstructor;
    clickable: BooleanConstructor;
    hoverable: BooleanConstructor;
    showDivider: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: PropType<import("../../_mixins").Theme<"List", {
        textColor: string;
        color: string;
        colorHover: string;
        colorModal: string;
        colorHoverModal: string;
        colorPopover: string;
        colorHoverPopover: string;
        borderColor: string;
        borderColorModal: string;
        borderColorPopover: string;
        borderRadius: string;
        fontSize: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"List", {
        textColor: string;
        color: string;
        colorHover: string;
        colorModal: string;
        colorHoverModal: string;
        colorPopover: string;
        colorHoverPopover: string;
        borderColor: string;
        borderColorModal: string;
        borderColorPopover: string;
        borderRadius: string;
        fontSize: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"List", {
        textColor: string;
        color: string;
        colorHover: string;
        colorModal: string;
        colorHoverModal: string;
        colorPopover: string;
        colorHoverPopover: string;
        borderColor: string;
        borderColorModal: string;
        borderColorPopover: string;
        borderRadius: string;
        fontSize: string;
    }, any>>>;
}>>, {
    size: "small" | "medium" | "large";
    bordered: boolean;
    clickable: boolean;
    hoverable: boolean;
    showDivider: boolean;
}>;
export default _default;
