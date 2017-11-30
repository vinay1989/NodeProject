
var ProductController = function(Product){

var list_all_products = function(req, res) {
    Product.find(req.query, function(err, products) {
    if (err)
      res.send(err);
      else
         res.json(products);
  });
};

var create_a_products = function(req, res) {
  var new_product = new Product(req.body);
  new_product.save(function(err, product) {
    if (err)
      res.send(err);
    else
      res.json(product);
  });
};

var read_a_product = function(req, res) {
    Product.findById(req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

var put = function(req,res){
  console.log(req.body);
  Store.findByIdAndUpdate(req.params.id, {$set:req.body}, {runValidators:true, new:true},function(err,updatedStore){
      if (err){
          res.status(500).send(err);
          console.log('Save Caused this error: '+err);
      } else {
          res.status(202).send(updatedStore);
      }
  })
};

var update_a_product = function(req, res) {
  //   Product.findOneAndUpdate({id: req.params.productId}, req.body, {new: true}, function(err, product) {
  //   if (err)
  //     res.send(err);
  //   res.json(product);
  // });

  Product.findOneAndUpdate({id:req.params.productId}, {$set:req.body}, {runValidators:true, new:true},function(err,updatedProduct){
    if (err){
        res.status(500).send(err);
        console.log('Save Caused this error: '+err);
    } else {
        res.status(202).send(updatedProduct);
    }
})
};

var delete_a_product = function(req, res) {
  Product.remove({
    id: req.params.productId
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });

};

return {list_all_products:list_all_products,create_a_products:create_a_products, read_a_product:read_a_product,update_a_product:update_a_product,delete_a_product:delete_a_product}
};

module.exports = ProductController

