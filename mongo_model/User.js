/**
 *
 * @type {exports}
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//定义user对象模型
var userScheme = new Schema({
    name: String,
    email: String,
    address: String,
    phone: {type: Number, default: 000}
});

//访问device对象模型
module.exports = mongoose.model('user', userScheme);