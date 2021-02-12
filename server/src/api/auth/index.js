const Router = require('koa-router');
const auth = new Router();

const authCtrl = require('./auth.controller');

auth.post('/', authCtrl.localRegister);

module.exports = auth;
