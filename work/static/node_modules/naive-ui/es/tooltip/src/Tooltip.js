// Tooltip: popover wearing waistcoat
import { h, defineComponent, ref, computed } from 'vue';
import { NPopover } from '../../popover';
import { popoverBaseProps } from '../../popover/src/Popover';
import { useTheme } from '../../_mixins';
import { tooltipLight } from '../styles';
export const tooltipProps = Object.assign(Object.assign({}, popoverBaseProps), useTheme.props);
export default defineComponent({
    name: 'Tooltip',
    props: tooltipProps,
    __popover__: true,
    setup(props) {
        const themeRef = useTheme('Tooltip', '-tooltip', undefined, tooltipLight, props);
        const popoverRef = ref(null);
        const tooltipExposedMethod = {
            syncPosition() {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                popoverRef.value.syncPosition();
            },
            setShow(show) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                popoverRef.value.setShow(show);
            }
        };
        return Object.assign(Object.assign({}, tooltipExposedMethod), { popoverRef, mergedTheme: themeRef, popoverThemeOverrides: computed(() => {
                return themeRef.value.self;
            }) });
    },
    render() {
        const { mergedTheme, internalExtraClass } = this;
        return h(NPopover, Object.assign(Object.assign({}, this.$props), { theme: mergedTheme.peers.Popover, themeOverrides: mergedTheme.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: internalExtraClass.concat('tooltip'), ref: 'popoverRef' }), this.$slots);
    }
});
