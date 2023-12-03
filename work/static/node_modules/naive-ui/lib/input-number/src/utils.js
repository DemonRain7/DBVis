"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNumber = exports.format = exports.validator = exports.isWipValue = exports.parse = void 0;
// string => string (expected, not implemented)
// string => number (legacy)
function parse(value) {
    if (value === undefined ||
        value === null ||
        (typeof value === 'string' && value.trim() === '')) {
        return null;
    }
    return Number(value);
}
exports.parse = parse;
// can be parsed to number but shouldn't be applied when inputing
// when value includes `.`, ending with 0 and`.`, doesn't update, if 0 parse func will remove 0
function isWipValue(value) {
    return (value.includes('.') &&
        (/^(-)?\d+.*(\.|0)$/.test(value) || /^\.\d+$/.test(value)));
}
exports.isWipValue = isWipValue;
// string => boolean (expected, not implemented)
// number => boolean (legacy)
function validator(value) {
    if (value === undefined || value === null)
        return true;
    if (Number.isNaN(value))
        return false;
    return true;
}
exports.validator = validator;
// string => string (expected, not implemented)
// number => string (legacy)
function format(value, precision) {
    if (value === undefined || value === null)
        return '';
    return precision === undefined ? String(value) : value.toFixed(precision);
}
exports.format = format;
function parseNumber(number) {
    if (number === null)
        return null;
    if (typeof number === 'number') {
        return number;
    }
    else {
        const parsedNumber = Number(number);
        if (Number.isNaN(parsedNumber))
            return null;
        else {
            return parsedNumber;
        }
    }
}
exports.parseNumber = parseNumber;
