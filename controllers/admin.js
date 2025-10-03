const Product = require('../models/product');

exports.getAddProduct=(req,res,next) =>{
    res.render('admin/create_products',
        {pageTitle:'Create Product',
            path: '/admin/create_products',
            productCss: true,
        });
};
exports.postAddProduct=(req,res,next)=>{
    // const {title, description, price, imageUrl} = req.body;
    // // const title     = req.body.title;
    // // const imageUrl  = req.body.imageUrl;
    // // const price     = req.body.price;
    // // const description   = req.body.description; 
    // const product = new Product(title,imageUrl,price,description);
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req,res,next)=>{
  Product.fetechAll(products =>{
         res.render('admin/products',
        {prods: products, 
            pageTitle: 'Admin Products', 
            path:'/admin/products',
            // prods: products || [],
            // hasProducts: products && products.length > 0 
        });
       
     });
};