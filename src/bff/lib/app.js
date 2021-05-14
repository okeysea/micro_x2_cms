"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (_, res) {
    res.send('Hello, world!');
});
var server = app.listen(3000, function () {
    var addr = server.address();
    if (addr != null) {
        var host = addr.address;
        var port = addr.port;
        console.log("app listening at http://%s:%s", host, port);
    }
});
