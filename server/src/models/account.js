const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

function hash(password) {
  return crypto
    .createHmac('sha256', process.env.SECRT_KEY)
    .update(password)
    .digest('hex');
}

const Account = new Schema({
  username: String,
  email: String,
  password: String,
});

Account.statics.localRegister = function ({ username, email, password }) {
  const acount = new this({
    username,
    email,
    password,
  });

  return acount.save();
};

module.exports = mongoose.model('Account', Account);
