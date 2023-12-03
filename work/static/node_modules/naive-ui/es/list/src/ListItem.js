import { h, defineComponent, inject } from 'vue';
import { throwError } from '../../_utils';
import { listInjectionKey } from './List';
export default defineComponent({
    name: 'ListItem',
    setup() {
        const listInjection = inject(listInjectionKey, null);
        if (!listInjection) {
            throwError('list-item', '`n-list-item` must be placed in `n-list`.');
        }
        return {
            showDivider: listInjection.showDividerRef,
            mergedClsPrefix: listInjection.mergedClsPrefixRef
        };
    },
    render() {
        const { $slots, mergedClsPrefix } = this;
        return (h("li", { class: `${mergedClsPrefix}-list-item` },
            $slots.prefix ? (h("div", { class: `${mergedClsPrefix}-list-item__prefix` }, $slots.prefix())) : null,
            $slots.default ? (h("div", { class: `${mergedClsPrefix}-list-item__main` }, $slots)) : null,
            $slots.suffix ? (h("div", { class: `${mergedClsPrefix}-list-item__suffix` }, $slots.suffix())) : null,
            this.showDivider && (h("div", { class: `${mergedClsPrefix}-list-item__divider` }))));
    }
});
