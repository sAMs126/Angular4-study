import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.end("Hello Express");
})

app.get('/products', (req, res) => {
  res.end("Hello Products");
})

const server = app.listen(8000, 'localhost', () => {
  console.log("node 服务已启动");
})