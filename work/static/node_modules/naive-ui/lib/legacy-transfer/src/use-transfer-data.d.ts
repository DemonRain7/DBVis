import { Ref } from 'vue';
import type { Option, OptionValue, Filter, CheckedStatus } from './interface';
interface UseTransferDataProps {
    defaultValue: OptionValue[] | null;
    value?: OptionValue[] | null;
    options: Option[];
    filterable: boolean;
    filter: Filter;
}
export declare function useTransferData(props: UseTransferDataProps, mergedDisabledRef: Ref<boolean>): {
    uncontrolledValue: Ref<OptionValue[] | null>;
    mergedValue: import("vue").ComputedRef<OptionValue[] | null>;
    avlSrcValueSet: import("vue").ComputedRef<Set<OptionValue>>;
    avlTgtValueSet: import("vue").ComputedRef<Set<any>>;
    tgtOpts: import("vue").ComputedRef<any[]>;
    srcOpts: import("vue").ComputedRef<Option[]>;
    filteredSrcOpts: import("vue").ComputedRef<Option[]>;
    filteredTgtOpts: import("vue").ComputedRef<any[]>;
    srcCheckedValues: Ref<OptionValue[]>;
    tgtCheckedValues: Ref<OptionValue[]>;
    srcCheckedStatus: import("vue").ComputedRef<CheckedStatus>;
    tgtCheckedStatus: import("vue").ComputedRef<{
        checked: boolean;
        indeterminate: boolean;
        disabled: boolean;
    } | {
        checked: boolean;
        indeterminate: boolean;
        disabled?: undefined;
    }>;
    srcPattern: Ref<string>;
    tgtPattern: Ref<string>;
    isInputing: Ref<boolean>;
    fromButtonDisabled: import("vue").ComputedRef<boolean>;
    toButtonDisabled: import("vue").ComputedRef<boolean>;
    handleInputFocus: () => void;
    handleInputBlur: () => void;
    handleTgtFilterUpdateValue: (value: string | null) => void;
    handleSrcFilterUpdateValue: (value: string | null) => void;
};
export {};
