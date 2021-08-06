const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const fs = require('fs');

const ProductModel = require('../model/ProductModel')

const ProductController = require('../controller/ProductController');

let filename = ""

router.post('/', async (req, res) => {
    console.log(filename)
    const product = new ProductModel({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        url: `http://localhost:3000/images/${filename}`
    })
    await product
    .save()
    .then(response => {
        return res.status(200).json(response)
    })
    .catch(error => {
        return res.status(500).json(error);
    })
});

router.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
    filename = req.file.filename;
    return res.json();
})

router.get('/filter/all', ProductController.getAll);

module.exports = router;