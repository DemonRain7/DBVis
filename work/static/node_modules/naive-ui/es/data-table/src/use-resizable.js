import { ref } from 'vue';
import { isColumnResizable } from './utils';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useResizable() {
    const resizableWidthsRef = ref({});
    function getResizableWidth(key) {
        return resizableWidthsRef.value[key];
    }
    function doUpdateResizableWidth(column, width) {
        if (isColumnResizable(column) && 'key' in column) {
            resizableWidthsRef.value[column.key] = width;
        }
    }
    function clearResizableWidth() {
        resizableWidthsRef.value = {};
    }
    return {
        getResizableWidth,
        doUpdateResizableWidth,
        clearResizableWidth
    };
}
