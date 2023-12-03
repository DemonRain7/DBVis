import { inject, computed, ref } from 'vue';
import { get } from 'lodash-es';
import { formInjectionKey } from './context';
import { formatLength } from '../../_utils';
export function formItemSize(props) {
    const NForm = inject(formInjectionKey, null);
    return {
        mergedSize: computed(() => {
            if (props.size !== undefined)
                return props.size;
            if ((NForm === null || NForm === void 0 ? void 0 : NForm.props.size) !== undefined)
                return NForm.props.size;
            return 'medium';
        })
    };
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function formItemMisc(props) {
    const NForm = inject(formInjectionKey, null);
    const mergedLabelPlacementRef = computed(() => {
        const { labelPlacement } = props;
        if (labelPlacement !== undefined)
            return labelPlacement;
        if (NForm === null || NForm === void 0 ? void 0 : NForm.props.labelPlacement)
            return NForm.props.labelPlacement;
        return 'top';
    });
    const isAutoLabelWidthRef = computed(() => {
        return (mergedLabelPlacementRef.value === 'left' &&
            (props.labelWidth === 'auto' || (NForm === null || NForm === void 0 ? void 0 : NForm.props.labelWidth) === 'auto'));
    });
    const mergedLabelWidthRef = computed(() => {
        if (mergedLabelPlacementRef.value === 'top')
            return;
        const { labelWidth } = props;
        if (labelWidth !== undefined && labelWidth !== 'auto') {
            return formatLength(labelWidth);
        }
        if (isAutoLabelWidthRef.value) {
            const autoComputedWidth = NForm === null || NForm === void 0 ? void 0 : NForm.maxChildLabelWidthRef.value;
            if (autoComputedWidth !== undefined) {
                return formatLength(autoComputedWidth);
            }
            else {
                return undefined;
            }
        }
        if ((NForm === null || NForm === void 0 ? void 0 : NForm.props.labelWidth) !== undefined) {
            return formatLength(NForm.props.labelWidth);
        }
        return undefined;
    });
    const mergedLabelAlignRef = computed(() => {
        const { labelAlign } = props;
        if (labelAlign)
            return labelAlign;
        if (NForm === null || NForm === void 0 ? void 0 : NForm.props.labelAlign)
            return NForm.props.labelAlign;
        return undefined;
    });
    const mergedLabelStyleRef = computed(() => {
        var _a;
        return [
            (_a = props.labelProps) === null || _a === void 0 ? void 0 : _a.style,
            props.labelStyle,
            {
                width: mergedLabelWidthRef.value
            }
        ];
    });
    const mergedShowRequireMarkRef = computed(() => {
        const { showRequireMark } = props;
        if (showRequireMark !== undefined)
            return showRequireMark;
        return NForm === null || NForm === void 0 ? void 0 : NForm.props.showRequireMark;
    });
    const mergedRequireMarkPlacementRef = computed(() => {
        const { requireMarkPlacement } = props;
        if (requireMarkPlacement !== undefined)
            return requireMarkPlacement;
        return (NForm === null || NForm === void 0 ? void 0 : NForm.props.requireMarkPlacement) || 'right';
    });
    const validationErroredRef = ref(false);
    const mergedValidationStatusRef = computed(() => {
        const { validationStatus } = props;
        if (validationStatus !== undefined)
            return validationStatus;
        if (validationErroredRef.value)
            return 'error';
        return undefined;
    });
    const mergedShowFeedbackRef = computed(() => {
        const { showFeedback } = props;
        if (showFeedback !== undefined)
            return showFeedback;
        if ((NForm === null || NForm === void 0 ? void 0 : NForm.props.showFeedback) !== undefined)
            return NForm.props.showFeedback;
        return true;
    });
    const mergedShowLabelRef = computed(() => {
        const { showLabel } = props;
        if (showLabel !== undefined)
            return showLabel;
        if ((NForm === null || NForm === void 0 ? void 0 : NForm.props.showLabel) !== undefined)
            return NForm.props.showLabel;
        return true;
    });
    return {
        validationErrored: validationErroredRef,
        mergedLabelStyle: mergedLabelStyleRef,
        mergedLabelPlacement: mergedLabelPlacementRef,
        mergedLabelAlign: mergedLabelAlignRef,
        mergedShowRequireMark: mergedShowRequireMarkRef,
        mergedRequireMarkPlacement: mergedRequireMarkPlacementRef,
        mergedValidationStatus: mergedValidationStatusRef,
        mergedShowFeedback: mergedShowFeedbackRef,
        mergedShowLabel: mergedShowLabelRef,
        isAutoLabelWidth: isAutoLabelWidthRef
    };
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function formItemRule(props) {
    const NForm = inject(formInjectionKey, null);
    const compatibleRulePathRef = computed(() => {
        const { rulePath } = props;
        if (rulePath !== undefined)
            return rulePath;
        const { path } = props;
        if (path !== undefined)
            return path;
        return undefined;
    });
    const mergedRulesRef = computed(() => {
        const rules = [];
        const { rule } = props;
        if (rule !== undefined) {
            if (Array.isArray(rule))
                rules.push(...rule);
            else
                rules.push(rule);
        }
        if (NForm) {
            const { rules: formRules } = NForm.props;
            const { value: rulePath } = compatibleRulePathRef;
            if (formRules !== undefined && rulePath !== undefined) {
                const formRule = get(formRules, rulePath);
                if (formRule !== undefined) {
                    if (Array.isArray(formRule)) {
                        rules.push(...formRule);
                    }
                    else {
                        // terminate object must be a form item rule
                        rules.push(formRule);
                    }
                }
            }
        }
        return rules;
    });
    const hasRequiredRuleRef = computed(() => {
        return mergedRulesRef.value.some((rule) => rule.required);
    });
    // deprecated
    const mergedRequiredRef = computed(() => {
        return hasRequiredRuleRef.value || props.required;
    });
    return {
        mergedRules: mergedRulesRef,
        mergedRequired: mergedRequiredRef
    };
}
