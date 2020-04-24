"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var product_1 = require("../class/product");
var app = express();
var products = [
    new product_1.Product(1, "第一个商品", 1.78, 1, "这是商品的描述，第一个商品", [
        "电子产品",
        "硬件设备",
        "外设产品"
    ]),
    new product_1.Product(2, "第二个商品", 2.78, 2.5, "这是商品的描述，第二个商品", [
        "硬件设备"
    ]),
    new product_1.Product(3, "第三个商品", 3.78, 3, "这是商品的描述，第三个商品", [
        "电子产品",
        "外设产品"
    ]),
    new product_1.Product(4, "第四个商品", 4.78, 4, "这是商品的描述，第四个商品", [
        "电子产品",
        "硬件设备",
        "外设产品"
    ]),
    new product_1.Product(5, "第五个商品", 5.78, 5, "这是商品的描述，第五个商品", [
        "硬件设备",
        "外设产品"
    ]),
    new product_1.Product(6, "第六个商品", 6.78, 3, "这是商品的描述，第六个商品", [
        "电子产品",
        "硬件设备",
        "外设产品"
    ])
];
app.get('/', function (req, res) {
    res.end("Hello Express");
});
app.get('/api/products', function (req, res) {
    res.json(products);
});
app.get('/api/products/:id', function (req, res) {
    var id = Number(req.params.id);
    res.json(products.find(function (product) { return product.id === id; }));
});
var server = app.listen(8000, 'localhost', function () {
    console.log("node 服务已启动");
});
//# sourceMappingURL=auction_server.js.map