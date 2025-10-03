const Product = require('../models/product');
exports.getAddProduct=(req,res,next) =>{
    res.render('admin/create_products',
        {pageTitle:'Create Product',
            path: '/admin/create_products',
            productCss: true,
            activeCreateProduct: true,
        });
};
exports.postAddProduct=(req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getShopProduct=(req,res,next)=>{
     Product.fetechAll(products =>{
         res.render('shop/products-items',
        {prods: products, 
            pageTitle: 'All Products', 
            path:'/products',
        });
       
     });

};

exports.getIndex = (req, res, next ) =>{
   Product.fetechAll(products =>{
         res.render('shop/index',
        {prods: products, 
            pageTitle: 'Shop KH', 
            path:'/',
        });
       
     });
};

exports.getCart = (req, res, next)=>{
    res.render('shop/cart',{
        path: '/cart',
        pageTitle: "Cart",

    });
};

exports.getCheckout = (req,res, next ) =>{
    res.render('shop/checkout',{
       path: '/checkout',
       pageTitle: 'Checkout' 
    });
};