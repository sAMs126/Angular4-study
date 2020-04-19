"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.end("Hello Express");
});
app.get('/products', function (req, res) {
    res.end("Hello Products");
});
var server = app.listen(8000, 'localhost', function () {
    console.log("node 服务已启动");
});
//# sourceMappingURL=auction_server.js.map