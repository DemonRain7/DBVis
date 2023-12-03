import { defineComponent, h, inject } from 'vue';
import { NRadio } from '../../../radio';
import { dataTableInjectionKey } from '../interface';
// Extract the radio to avoid useless rendering in table body
export default defineComponent({
    name: 'DataTableBodyRadio',
    props: {
        rowKey: {
            type: [String, Number],
            required: true
        },
        disabled: {
            type: Boolean,
            required: true
        },
        onUpdateChecked: {
            type: Function,
            required: true
        }
    },
    setup(props) {
        const { mergedCheckedRowKeySetRef, componentId
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
         } = inject(dataTableInjectionKey);
        return () => {
            const { rowKey } = props;
            return (h(NRadio, { name: componentId, disabled: props.disabled, checked: mergedCheckedRowKeySetRef.value.has(rowKey), onUpdateChecked: props.onUpdateChecked }));
        };
    }
});
