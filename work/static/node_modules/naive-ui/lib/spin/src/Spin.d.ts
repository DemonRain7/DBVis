import { PropType } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
export declare const spinProps: {
    description: StringConstructor;
    stroke: StringConstructor;
    size: {
        type: PropType<number | "small" | "medium" | "large">;
        default: string;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeWidth: NumberConstructor;
    rotate: {
        type: BooleanConstructor;
        default: boolean;
    };
    spinning: {
        type: BooleanConstructor;
        validator: () => boolean;
        default: undefined;
    };
    theme: PropType<import("../../_mixins").Theme<"Spin", {
        fontSize: string;
        textColor: string;
        sizeTiny: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
        sizeHuge: string;
        color: string;
        opacitySpinning: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Spin", {
        fontSize: string;
        textColor: string;
        sizeTiny: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
        sizeHuge: string;
        color: string;
        opacitySpinning: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Spin", {
        fontSize: string;
        textColor: string;
        sizeTiny: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
        sizeHuge: string;
        color: string;
        opacitySpinning: string;
    }, any>>>;
};
export type SpinProps = ExtractPublicPropTypes<typeof spinProps>;
declare const _default: import("vue").DefineComponent<{
    description: StringConstructor;
    stroke: StringConstructor;
    size: {
        type: PropType<number | "small" | "medium" | "large">;
        default: string;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeWidth: NumberConstructor;
    rotate: {
        type: BooleanConstructor;
        default: boolean;
    };
    spinning: {
        type: BooleanConstructor;
        validator: () => boolean;
        default: undefined;
    };
    theme: PropType<import("../../_mixins").Theme<"Spin", {
        fontSize: string;
        textColor: string;
        sizeTiny: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
        sizeHuge: string;
        color: string;
        opacitySpinning: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Spin", {
        fontSize: string;
        textColor: string;
        sizeTiny: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
        sizeHuge: string;
        color: string;
        opacitySpinning: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Spin", {
        fontSize: string;
        textColor: string;
        sizeTiny: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
        sizeHuge: string;
        color: string;
        opacitySpinning: string;
    }, any>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    compitableShow: import("vue").ComputedRef<boolean>;
    mergedStrokeWidth: import("vue").ComputedRef<number>;
    cssVars: import("vue").ComputedRef<{
        '--n-bezier': string;
        '--n-opacity-spinning': string;
        '--n-size': string;
        '--n-color': string;
        '--n-text-color': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    description: StringConstructor;
    stroke: StringConstructor;
    size: {
        type: PropType<number | "small" | "medium" | "large">;
        default: string;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeWidth: NumberConstructor;
    rotate: {
        type: BooleanConstructor;
        default: boolean;
    };
    spinning: {
        type: BooleanConstructor;
        validator: () => boolean;
        default: undefined;
    };
    theme: PropType<import("../../_mixins").Theme<"Spin", {
        fontSize: string;
        textColor: string;
        sizeTiny: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
        sizeHuge: string;
        color: string;
        opacitySpinning: string;
    }, any>>;
    themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Spin", {
        fontSize: string;
        textColor: string;
        sizeTiny: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
        sizeHuge: string;
        color: string;
        opacitySpinning: string;
    }, any>>>;
    builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Spin", {
        fontSize: string;
        textColor: string;
        sizeTiny: string;
        sizeSmall: string;
        sizeMedium: string;
        sizeLarge: string;
        sizeHuge: string;
        color: string;
        opacitySpinning: string;
    }, any>>>;
}>>, {
    size: number | "small" | "medium" | "large";
    show: boolean;
    rotate: boolean;
    spinning: boolean;
}>;
export default _default;
