import { onBeforeMount, watchEffect, computed } from 'vue';
import { exists } from 'css-render';
import { useSsrAdapter } from '@css-render/vue3-ssr';
import { cssrAnchorMetaName } from './common';
export function useRtl(mountId, rtlStateRef, clsPrefixRef) {
    if (!rtlStateRef)
        return undefined;
    const ssrAdapter = useSsrAdapter();
    const componentRtlStateRef = computed(() => {
        const { value: rtlState } = rtlStateRef;
        if (!rtlState) {
            return undefined;
        }
        const componentRtlState = rtlState[mountId];
        if (!componentRtlState) {
            return undefined;
        }
        return componentRtlState;
    });
    const mountStyle = () => {
        watchEffect(() => {
            const { value: clsPrefix } = clsPrefixRef;
            const id = `${clsPrefix}${mountId}Rtl`;
            // if it already exists, we only need to watch clsPrefix, although in most
            // of time it's unnecessary... However we can at least listen less
            // handlers, which is great.
            if (exists(id, ssrAdapter))
                return;
            const { value: componentRtlState } = componentRtlStateRef;
            if (!componentRtlState)
                return;
            componentRtlState.style.mount({
                id,
                head: true,
                anchorMetaName: cssrAnchorMetaName,
                props: {
                    bPrefix: clsPrefix ? `.${clsPrefix}-` : undefined
                },
                ssr: ssrAdapter
            });
        });
    };
    if (ssrAdapter) {
        mountStyle();
    }
    else {
        onBeforeMount(mountStyle);
    }
    return componentRtlStateRef;
}
