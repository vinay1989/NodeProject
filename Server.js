var express = require('express'),
mongoose = require('mongoose'),
cors = require('cors'),
bodyParser = require('body-parser');

var port = 3000;

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors()); 
var productModel = require('./api/models/ProductModel');
var ProductRoutes = require('./api/routes/ProductRoutes')(productModel);

app.use(ProductRoutes);

var db;
db = mongoose.connect('mongodb://vinaysin-w7:27017/Products',{useMongoClient:true});

db.once('open', function callback () {
    console.log("Database Connected");
  });

app.get('/', function(req,res) {
res.send('Welcome to PSStore API!');
});

app.listen(port,function() {
console.log('Running on PORT:' + port);
});

module.exports = app;