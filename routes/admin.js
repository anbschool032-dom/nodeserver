const path = require('path');
const express = require('express');
const router = express.Router();
const rootDirect = require('../util/path');
const { time } = require('console');
const { title } = require('process');
const products = [];
//   /admin/create_products =>GET
router.get('/create_products',(req,res,next) =>{
    // res.send('<form action="/admin/create_products" method="POST"><label for="">Products Name  <br>   </label><input type="text" name="title"><button type="submit" >Save</button></form>')
    // res.sendFile(path.join(rootDirect,'views','create_products.html'));
    res.render('create_products',
        {pageTitle:'Create Product',
            path: '/admin/create_products',
            productCss: true,
            activeCreateProduct: true,
        });
});
///admin/create_products =>POST
router.post('/create_products',(req,res,next)=>{
    // console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
});
// module.exports = router;
exports.routes = router;
exports.products = products;