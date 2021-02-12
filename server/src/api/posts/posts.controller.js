const Joi = require('joi');
const Account = require('../../models/account');

exports.createAccount = async (ctx) => {
  //검증할 스키마
  const schema = Joi.object({
    username: Joi.string().alphanum().min(5).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: Joi.ref('password'),
  });

  const result = schema.validateAsync(ctx.request.body); //유효성 검사

  if (result.error) {
    ctx.status = 400; //bad request
    return;
  }

  const { username, email, password } = ctx.request.body;

  let posts = null;
  try {
    posts = await Account.;
  } catch (error) {
    ctx.throw(500, error);
  }


};
