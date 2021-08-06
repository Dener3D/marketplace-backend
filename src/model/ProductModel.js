const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    url: {type: String}
});

module.exports = mongoose.model('Product', ProductSchema)