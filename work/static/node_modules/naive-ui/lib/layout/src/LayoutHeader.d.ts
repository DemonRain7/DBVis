import { ExtractPublicPropTypes } from '../../_utils';
export declare const headerProps: {
    readonly position: {
        readonly type: import("vue").PropType<"static" | "absolute">;
        readonly default: "static";
    };
    readonly inverted: BooleanConstructor;
    readonly bordered: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export type LayoutHeaderProps = ExtractPublicPropTypes<typeof headerProps>;
declare const _default: import("vue").DefineComponent<{
    position: {
        readonly type: import("vue").PropType<"static" | "absolute">;
        readonly default: "static";
    };
    inverted: BooleanConstructor;
    bordered: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    theme: import("vue").PropType<import("../../_mixins").Theme<"Layout", {
        textColor: string;
        textColorInverted: string;
        color: string;
        colorEmbedded: string;
        headerColor: string;
        headerColorInverted: string;
        footerColor: string;
        footerColorInverted: string;
        headerBorderColor: string;
        headerBorderColorInverted: string;
        footerBorderColor: string;
        footerBorderColorInverted: string;
        siderBorderColor: string;
        siderBorderColorInverted: string;
        siderColor: string;
        siderColorInverted: string;
        siderToggleButtonBorder: string;
        siderToggleButtonColor: string;
        siderToggleButtonIconColor: string;
        siderToggleButtonIconColorInverted: string;
        siderToggleBarColor: string;
        siderToggleBarColorHover: string;
        __invertScrollbar: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>;
    themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Layout", {
        textColor: string;
        textColorInverted: string;
        color: string;
        colorEmbedded: string;
        headerColor: string;
        headerColorInverted: string;
        footerColor: string;
        footerColorInverted: string;
        headerBorderColor: string;
        headerBorderColorInverted: string;
        footerBorderColor: string;
        footerBorderColorInverted: string;
        siderBorderColor: string;
        siderBorderColorInverted: string;
        siderColor: string;
        siderColorInverted: string;
        siderToggleButtonBorder: string;
        siderToggleButtonColor: string;
        siderToggleButtonIconColor: string;
        siderToggleButtonIconColorInverted: string;
        siderToggleBarColor: string;
        siderToggleBarColorHover: string;
        __invertScrollbar: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
    builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Layout", {
        textColor: string;
        textColorInverted: string;
        color: string;
        colorEmbedded: string;
        headerColor: string;
        headerColorInverted: string;
        footerColor: string;
        footerColorInverted: string;
        headerBorderColor: string;
        headerBorderColorInverted: string;
        footerBorderColor: string;
        footerBorderColorInverted: string;
        siderBorderColor: string;
        siderBorderColorInverted: string;
        siderColor: string;
        siderColorInverted: string;
        siderToggleButtonBorder: string;
        siderToggleButtonColor: string;
        siderToggleButtonIconColor: string;
        siderToggleButtonIconColorInverted: string;
        siderToggleBarColor: string;
        siderToggleBarColorHover: string;
        __invertScrollbar: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    cssVars: import("vue").ComputedRef<any> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        readonly type: import("vue").PropType<"static" | "absolute">;
        readonly default: "static";
    };
    inverted: BooleanConstructor;
    bordered: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    theme: import("vue").PropType<import("../../_mixins").Theme<"Layout", {
        textColor: string;
        textColorInverted: string;
        color: string;
        colorEmbedded: string;
        headerColor: string;
        headerColorInverted: string;
        footerColor: string;
        footerColorInverted: string;
        headerBorderColor: string;
        headerBorderColorInverted: string;
        footerBorderColor: string;
        footerBorderColorInverted: string;
        siderBorderColor: string;
        siderBorderColorInverted: string;
        siderColor: string;
        siderColorInverted: string;
        siderToggleButtonBorder: string;
        siderToggleButtonColor: string;
        siderToggleButtonIconColor: string;
        siderToggleButtonIconColorInverted: string;
        siderToggleBarColor: string;
        siderToggleBarColorHover: string;
        __invertScrollbar: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>;
    themeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Layout", {
        textColor: string;
        textColorInverted: string;
        color: string;
        colorEmbedded: string;
        headerColor: string;
        headerColorInverted: string;
        footerColor: string;
        footerColorInverted: string;
        headerBorderColor: string;
        headerBorderColorInverted: string;
        footerBorderColor: string;
        footerBorderColorInverted: string;
        siderBorderColor: string;
        siderBorderColorInverted: string;
        siderColor: string;
        siderColorInverted: string;
        siderToggleButtonBorder: string;
        siderToggleButtonColor: string;
        siderToggleButtonIconColor: string;
        siderToggleButtonIconColorInverted: string;
        siderToggleBarColor: string;
        siderToggleBarColorHover: string;
        __invertScrollbar: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
    builtinThemeOverrides: import("vue").PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Layout", {
        textColor: string;
        textColorInverted: string;
        color: string;
        colorEmbedded: string;
        headerColor: string;
        headerColorInverted: string;
        footerColor: string;
        footerColorInverted: string;
        headerBorderColor: string;
        headerBorderColorInverted: string;
        footerBorderColor: string;
        footerBorderColorInverted: string;
        siderBorderColor: string;
        siderBorderColorInverted: string;
        siderColor: string;
        siderColorInverted: string;
        siderToggleButtonBorder: string;
        siderToggleButtonColor: string;
        siderToggleButtonIconColor: string;
        siderToggleButtonIconColorInverted: string;
        siderToggleBarColor: string;
        siderToggleBarColorHover: string;
        __invertScrollbar: string;
    }, {
        Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
            color: string;
            colorHover: string;
        }, any>;
    }>>>;
}>>, {
    position: "static" | "absolute";
    bordered: boolean;
    inverted: boolean;
}>;
export default _default;
