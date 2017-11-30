
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
id: {
    type: String,
    },
name: {
    type: String,
  },
description: {
    type: String,
},
price: {
    type: String,
}
},{ collection : 'Products' });

var productModel = mongoose.model('Products', ProductSchema);
module.exports = productModel;