"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressOpenApiDoc = exports.ApiDoc = void 0;
var js_yaml_1 = __importDefault(require("js-yaml"));
var fs_1 = __importDefault(require("fs"));
var docfile = "/app/public/apispec/v1/apidoc.yml";
var doc = js_yaml_1.default.load(fs_1.default.readFileSync(docfile, "utf8"));
var expressOpenApiDoc = __assign(__assign({}, doc), { paths: {} });
exports.ApiDoc = doc;
exports.ExpressOpenApiDoc = expressOpenApiDoc;
