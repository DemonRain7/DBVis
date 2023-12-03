"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createKey = void 0;
function createKey(prefix, suffix) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (prefix +
        (suffix === 'default'
            ? ''
            : suffix.replace(/^[a-z]/, (startChar) => startChar.toUpperCase())));
}
exports.createKey = createKey;
createKey('abc', 'def');
