const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageName: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    fullDescription: {
        type: String,
        required: true
    },
    features: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    salePrice: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    review: {
        type: Array,
        // required: true
    }

});



const CustomerSchema = mongoose.Schema({
    name: {
        type: String
    },
    cart: {
        type: Array
    }


});


const cust = module.exports = mongoose.model('custs', CustomerSchema, 'customer');
const items = module.exports = mongoose.model('items', UserSchema, 'items');

module.exports.product = function(callback) {

    items.find({}, callback);
}
module.exports.item = function(name, callback) {

    items.findOne({ 'name': '' + name + '' }, callback);
}

module.exports.view = function(id, callback) {

    items.findOne({ '_id': '' + id + '' }, callback);
}

module.exports.cust = function(name, callback) {

    cust.findOne({ 'name': '' + name + '' }, callback);

}

module.exports.addProduct = function(newProduct, callback) {
    newProduct.save(callback);
}