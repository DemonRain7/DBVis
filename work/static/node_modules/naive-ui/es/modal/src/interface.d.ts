import { Ref, ComponentPublicInstance } from 'vue';
import type { MergedTheme } from '../../_mixins';
import type { ModalTheme } from '../styles';
export type ModalBodyInjection = Ref<HTMLElement | ComponentPublicInstance | null> | null;
export declare const modalBodyInjectionKey: import("vue").InjectionKey<ModalBodyInjection>;
export interface ModalInjection {
    getMousePosition: () => {
        x: number;
        y: number;
    } | null;
    mergedClsPrefixRef: Ref<string>;
    mergedThemeRef: Ref<MergedTheme<ModalTheme>>;
    isMountedRef: Ref<boolean>;
    appearRef: Ref<boolean | undefined>;
    transformOriginRef: Ref<'mouse' | 'center'>;
}
export declare const modalInjectionKey: import("vue").InjectionKey<ModalInjection>;
