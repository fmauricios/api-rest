'use strict'

const express = require('express')
const api     = express.Router()

/*
 * Imports
 */

const ProductController = require('../controllers/product')

api.get('/product', ProductController.getProducts)
api.get('/product/:productId', ProductController.getProduct)
api.post('/product', ProductController.saveProduct)
api.put('/product/:productId', ProductController.updateProdct)
api.delete('/product/:productId', ProductController.deleteProduct)

module.exports = api
