import { Ref } from 'vue';
import { TreeMate } from 'treemate';
import type { Expandable, InternalRowData, RowKey, DataTableSetupProps } from './interface';
export declare function useExpand(props: DataTableSetupProps, treeMateRef: Ref<TreeMate<InternalRowData, InternalRowData, InternalRowData>>): {
    stickyExpandedRowsRef: Ref<boolean>;
    mergedExpandedRowKeysRef: import("vue").ComputedRef<import("treemate").Key[]>;
    renderExpandRef: import("vue").ComputedRef<import("./interface").RenderExpand<any> | undefined>;
    expandableRef: import("vue").ComputedRef<Expandable<any> | undefined>;
    doUpdateExpandedRowKeys: (expandedKeys: RowKey[]) => void;
};
