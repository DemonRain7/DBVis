"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("./_utils");
// https://github.com/jsdom/jsdom/issues/1422
if (_utils_1.isBrowser) {
    HTMLDivElement.prototype.scrollTo = () => { };
}
