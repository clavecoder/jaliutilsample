"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const console = require("console");
const util = require("@jali-ms/util");
// https://twitter.com/rauschma/status/807585673049837568
(() => __awaiter(this, void 0, void 0, function* () {
    const result = yield util.Iterables.concat(['Hi', ','], [' ', 'Mom', '!']);
    const str = [...result].join('');
    console.log(str);
}))();
//# sourceMappingURL=server.js.map