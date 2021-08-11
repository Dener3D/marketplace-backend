const express = require('express');
const router = express.Router();
const fs = require('fs');

const ProductModel = require('../model/ProductModel')

const ProductController = require('../controller/ProductController');

let filename = ""

router.post('/', ProductController.create);

router.get('/filter/all', ProductController.getAll);

module.exports = router;
