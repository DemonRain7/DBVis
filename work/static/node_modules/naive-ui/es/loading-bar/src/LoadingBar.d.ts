import { PropType, CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    containerStyle: PropType<string | CSSProperties>;
}, {
    mergedClsPrefix: import("vue").Ref<string>;
    loadingBarRef: import("vue").Ref<HTMLElement | null>;
    started: import("vue").Ref<boolean>;
    loading: import("vue").Ref<boolean>;
    entering: import("vue").Ref<boolean>;
    transitionDisabled: import("vue").Ref<boolean>;
    start: (fromProgress?: number, toProgress?: number, status?: 'starting' | 'error') => Promise<void>;
    error: () => void;
    finish: () => void;
    handleEnter: () => void;
    handleAfterEnter: () => void;
    handleAfterLeave: () => Promise<void>;
    mergedLoadingBarStyle: import("vue").ComputedRef<string | CSSProperties | undefined>;
    cssVars: import("vue").ComputedRef<{
        '--n-height': string;
        '--n-color-loading': string;
        '--n-color-error': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    containerStyle: PropType<string | CSSProperties>;
}>>, {}>;
export default _default;
