import { h, defineComponent, provide, Fragment, inject } from 'vue';
import { render } from '../../_utils';
import { useMenuChild } from './use-menu-child';
import { useMenuChildProps } from './use-menu-child-props';
// eslint-disable-next-line import/no-cycle
import { itemRenderer } from './utils';
import { submenuInjectionKey, menuInjectionKey, menuItemGroupInjectionKey } from './context';
export const menuItemGroupProps = Object.assign(Object.assign({}, useMenuChildProps), { tmNode: {
        type: Object,
        required: true
    }, tmNodes: {
        type: Array,
        required: true
    } });
export const NMenuOptionGroup = defineComponent({
    name: 'MenuOptionGroup',
    props: menuItemGroupProps,
    setup(props) {
        provide(submenuInjectionKey, null);
        const MenuChild = useMenuChild(props);
        provide(menuItemGroupInjectionKey, {
            paddingLeftRef: MenuChild.paddingLeft
        });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { mergedClsPrefixRef, props: menuProps } = inject(menuInjectionKey);
        return function () {
            const { value: mergedClsPrefix } = mergedClsPrefixRef;
            const paddingLeft = MenuChild.paddingLeft.value;
            const { nodeProps } = menuProps;
            const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(props.tmNode.rawNode);
            return (h("div", { class: `${mergedClsPrefix}-menu-item-group`, role: "group" },
                h("div", Object.assign({}, attrs, { class: [`${mergedClsPrefix}-menu-item-group-title`, attrs === null || attrs === void 0 ? void 0 : attrs.class], style: [
                        (attrs === null || attrs === void 0 ? void 0 : attrs.style) || '',
                        paddingLeft !== undefined ? `padding-left: ${paddingLeft}px;` : ''
                    ] }),
                    render(props.title),
                    props.extra ? h(Fragment, null,
                        " ",
                        render(props.extra)) : null),
                h("div", null, props.tmNodes.map((tmNode) => itemRenderer(tmNode, menuProps)))));
        };
    }
});
