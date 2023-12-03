"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreciseEventTarget = void 0;
function getPreciseEventTarget(event) {
    return event.composedPath()[0] || null;
}
exports.getPreciseEventTarget = getPreciseEventTarget;
