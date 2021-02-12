require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

const auth = require('./api/auth');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, () => {
  console.log('mongodb connect ', process.env.MONGO_URI);
});

const port = process.env.PORT || 4000;

app.use(bodyParser()); //router 적용 코드보다 상단에 있어야함.

router.use('/auth', auth.routes());
app.use(router.routes()).use(router.allowedMethods);

router.get('/', (ctx, next) => {
  ctx.body = 'Home';
  next();
});

app.listen(port, () => {
  console.log('server listening to port:', port);
});
