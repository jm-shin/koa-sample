const Joi = require('joi');

const Account = require('../../models/account');

exports.localRegister = async (ctx) => {
  const schema = Joi.object({
    username: String,
    email: String,
    password: String,
    createdAt: { type: Date, default: Date.now },
  });

  const result = schema.validateAsync(ctx.request.body);
  if (result.error) {
    ctx.status = 400; //bad request.
    return;
  }

  let account = null;
  try {
    account = await Account.localRegister(ctx.request.body);
  } catch (error) {
    ctx.throw(500, error);
  }
};
