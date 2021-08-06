const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());
server.use(express.static('public'))

const ProductRoute = require('./routes/ProductRoute');

server.use(express.urlencoded({extended: true}));
server.use('/', ProductRoute);
server.use(morgan('dev'));

server.listen(process.env.PORT || 3000, () => {
    console.log("API ONLINE");
})