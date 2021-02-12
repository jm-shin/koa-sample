require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('mongodb connect ', process.env.MONGO_URI);
});

const port = process.env.PORT || 4000;

router.get('/', (ctx) => {
  ctx.body = 'Home';
});

app.use(router.routes());

app.listen(port, () => {
  console.log('server listening to port:', port);
});
