import { PropType, Ref } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
export interface RowInjection {
    gutterRef: Ref<string | number | [number, number]>;
    verticalGutterRef: Ref<number>;
    horizontalGutterRef: Ref<number>;
    mergedClsPrefixRef: Ref<string>;
}
export declare const rowInjectionKey: import("vue").InjectionKey<RowInjection>;
export declare const rowProps: {
    readonly gutter: {
        readonly type: PropType<string | number | [number, number]>;
        readonly default: 0;
    };
    readonly alignItems: StringConstructor;
    readonly justifyContent: StringConstructor;
};
export declare const rowPropKeys: ("alignItems" | "justifyContent" | "gutter")[];
export type RowProps = ExtractPublicPropTypes<typeof rowProps>;
declare const _default: import("vue").DefineComponent<{
    readonly gutter: {
        readonly type: PropType<string | number | [number, number]>;
        readonly default: 0;
    };
    readonly alignItems: StringConstructor;
    readonly justifyContent: StringConstructor;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    rtlEnabled: Ref<import("../../config-provider/src/internal-interface").RtlItem | undefined> | undefined;
    styleMargin: import("vue").ComputedRef<string>;
    styleWidth: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly gutter: {
        readonly type: PropType<string | number | [number, number]>;
        readonly default: 0;
    };
    readonly alignItems: StringConstructor;
    readonly justifyContent: StringConstructor;
}>>, {
    readonly gutter: string | number | [number, number];
}>;
export default _default;
