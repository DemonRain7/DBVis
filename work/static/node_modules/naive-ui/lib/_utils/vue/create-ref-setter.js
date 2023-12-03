"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRefSetter = void 0;
function createRefSetter(ref) {
    return (inst) => {
        if (inst) {
            ref.value = inst.$el;
        }
        else {
            ref.value = null;
        }
    };
}
exports.createRefSetter = createRefSetter;
