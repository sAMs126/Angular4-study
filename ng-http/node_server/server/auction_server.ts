import * as express from 'express';
import { Product } from '../class/product';
// websocket
import { Server } from "ws";
import { Comment } from '../class/comment';
import QueryString = require('qs');

const app = express();

const products: Product[] = [
  new Product(1, "第一个商品", 1.78, 1, "这是商品的描述，第一个商品", [
    "电子产品",
    "外设产品"
  ]),
  new Product(2, "第二个商品", 2.78, 2.5, "这是商品的描述，第二个商品", [
    "硬件设备"
  ]),
  new Product(3, "第三个商品", 3.78, 3, "这是商品的描述，第三个商品", [
    "电子产品",
    "外设产品"
  ]),
  new Product(4, "第四个商品", 4.78, 4, "这是商品的描述，第四个商品", [
    "电子产品",
    "硬件设备",
    "外设产品"
  ]),
  new Product(5, "第五个商品", 5.78, 5, "这是商品的描述，第五个商品", [
    "硬件设备",
    "外设产品"
  ]),
  new Product(6, "第六个商品", 6.78, 3, "这是商品的描述，第六个商品", [
    "电子产品",
    "硬件设备",
    "外设产品"
  ])
];

const comments: Comment[] = [
  new Comment(1, 1, "2018/2/8 16:33:27", 4, "还行！", "张三"),
  new Comment(2, 1, "2019/1/5 11:03:19", 3, "还行！", "张三"),
  new Comment(3, 2, "2018/2/8 16:33:27", 2, "还行！", "张三"),
  new Comment(4, 2, "2019/1/5 11:03:19", 1, "还行！", "张三"),
  new Comment(5, 3, "2018/2/8 16:33:27", 2, "还行！", "张三"),
  new Comment(6, 3, "2019/1/5 11:03:19", 3, "还行！", "张三"),
  new Comment(7, 4, "2018/2/8 16:33:27", 4, "还行！", "张三"),
  new Comment(8, 5, "2019/1/5 11:03:19", 5, "还行！", "张三"),
  new Comment(9, 6, "2018/2/8 16:33:27", 1, "还行！", "张三"),
];

app.get('/', (req, res) => {
  res.end("Hello Express");
})

app.get('/api/products', (req, res) => {
  let result = products;
  let params = req.query;
  console.log(params);
  if (null != params.title && '' != params.title) {
    result = result.filter(
      (product: Product) => product.title.indexOf(String(params.title)) !== -1);

  }
  if (params.price && result.length > 0) {
    result = result.filter(
      (product: Product) => product.price <= Number(params.price));
  }
  if (null != params.categ && params.categ !== '-1' && 0 <= result.length) {
    result = result.filter(
      (product: Product) => product.categories.indexOf(String(params.categ)) !== -1);
  }
  res.json(result);
})

app.get('/api/products/:id', (req, res) => {
  let id: number = Number(req.params.id);
  res.json(products.find(
    (product: Product) => product.id === id)
  );
})

app.get('/api/products/:id/comments', (req, res) => {
  let id: number = Number(req.params.id);
  res.json(comments.filter(
    (comment: Comment) => comment.productId == id)
  );
})

const server = app.listen(8000, 'localhost', () => {
  console.log("node 服务已启动");
})

// WbeSocket
const wsServer = new Server({ port: 8085 });
wsServer.on("connection", (webSocket) => {
  webSocket.send("这条消息是服务器主动推送。");
  webSocket.on("message", msg => {
    console.log("接收到的消息：" + msg);
  });
})

// 产生连接就推送消息
setInterval(() => {
  if (wsServer.clients) {
    wsServer.clients.forEach(client => {
      client.send("这是定时推送。")
    })
  }
}, 2000)
