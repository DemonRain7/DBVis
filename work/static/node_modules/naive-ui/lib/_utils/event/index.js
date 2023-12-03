"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventEffectNotPerformed = exports.markEventEffectPerformed = void 0;
const eventSet = new WeakSet();
function markEventEffectPerformed(event) {
    eventSet.add(event);
}
exports.markEventEffectPerformed = markEventEffectPerformed;
function eventEffectNotPerformed(event) {
    return !eventSet.has(event);
}
exports.eventEffectNotPerformed = eventEffectNotPerformed;
