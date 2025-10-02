
const path = require('path');
const express = require('express');
const router = express.Router();
const rootDirect = require('../util/path');
const adminData = require('./admin')
router.get('/',(req,res,next)=>{
    const products = adminData.products
    // res.render('shop',{prods: products, pageTitle: 'Shop KH', path:'/'});
    res.render('shop',
        {prods: products, 
            pageTitle: 'Shop KH', 
            path:'/',someProducts: products.length >0,
            activeShop: true,
            productCss: true,
            layout:false
        });

})
module.exports = router;