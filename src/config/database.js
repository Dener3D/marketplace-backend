const mongoose = require('mongoose');

const url = "mongodb+srv://admin:den159456123@cluster0.ix1vv.mongodb.net/myFirstDatabase?retryWrites=true/products"
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;