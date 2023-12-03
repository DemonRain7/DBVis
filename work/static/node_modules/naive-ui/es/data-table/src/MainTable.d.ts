declare const _default: import("vue").DefineComponent<{}, {
    getHeaderElement: () => HTMLElement | null;
    getBodyElement: () => HTMLElement | null;
    scrollTo: import("../../scrollbar/src/Scrollbar").ScrollTo;
    maxHeight: import("vue").Ref<string | number | undefined>;
    mergedClsPrefix: import("vue").Ref<string>;
    selfElRef: import("vue").Ref<HTMLElement | null>;
    headerInstRef: import("vue").Ref<{
        $el: HTMLElement | null;
    } | null>;
    bodyInstRef: import("vue").Ref<{
        getScrollContainer: () => HTMLElement | null;
        scrollTo: import("../../scrollbar/src/Scrollbar").ScrollTo;
    } | null>;
    bodyStyle: import("vue").ComputedRef<{
        maxHeight: string | undefined;
        minHeight: string | undefined;
    }>;
    flexHeight: import("vue").Ref<boolean>;
    handleBodyResize: (entry: ResizeObserverEntry) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
