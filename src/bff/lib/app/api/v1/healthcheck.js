"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
var ApiDoc_1 = require("@config/ApiDoc");
exports.GET = [
    function (req, res, next) {
        res.status(200).json();
    },
];
exports.GET.apiDoc = (_a = ApiDoc_1.ApiDoc.paths["/healthcheck"]) === null || _a === void 0 ? void 0 : _a.get;
