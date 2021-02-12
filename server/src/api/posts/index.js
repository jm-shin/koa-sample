const Router = require('koa-router');
const posts = new Router();

const postsCtrl = require('./posts.controller');

posts.post('/', postsCtrl.create);

module.exports = posts;
