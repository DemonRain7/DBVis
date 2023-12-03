"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTitleAttribute = void 0;
function getTitleAttribute(value) {
    switch (typeof value) {
        case 'string':
            // The empty string should also be reset to undefined.
            return value || undefined;
        case 'number':
            return String(value);
        default:
            return undefined;
    }
}
exports.getTitleAttribute = getTitleAttribute;
