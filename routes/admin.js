const path = require('path');

const express = require('express');

const router = express.Router();


const adminController =require('../controllers/shop');

// /admin/create_products => GET 
router.get('/create_products', adminController.getAddProduct);
router.get('/products', adminController.getShopProduct);
// router.get('/products',adminController.postAddProduct);
// /admin/create_products => POST
router.post('/create_products',adminController.postAddProduct);
// router.post('/products', productsController.getAddProduct);

module.exports = router
