var express = require('express');
var routes = function(Product) {
 
  var productRouter = express.Router();
  var productControl = require('../controllers/ProductController')(Product);
  
  // todoList Routes
  productRouter.route('/products')
    .get(productControl.list_all_products)
    .post(productControl.create_a_products);
    // productRouter.post('/products'), function(req, res){
    //     productControl.create_a_products
    // });
    productRouter.route('/products/:productId')
    .put(productControl.update_a_product)
    .delete(productControl.delete_a_product);
   
    return productRouter;
};
module.exports = routes;