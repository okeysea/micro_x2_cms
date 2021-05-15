"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./config/routes");
var express_openapi_1 = require("express-openapi");
var ApiDoc_1 = require("@config/ApiDoc");
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', routes_1.routes);

console.log(ApiDoc_1.ApiDoc);
console.log(ApiDoc_1.ExpressOpenApiDoc);
express_openapi_1.initialize({
    apiDoc: ApiDoc_1.ExpressOpenApiDoc,
    app: app,
    paths: "./app/api",
    routesGlob: "**/*.{ts,js}",
    routesIndexFileRegExp: /(?:index)?\.[tj]s$/
});

var server = app.listen(4000, function () {
    var addr = server.address();
    if (addr != null) {
        var host = addr.address;
        var port = addr.port;
        console.log("app listening at http://%s:%s", host, port);
    }
});
