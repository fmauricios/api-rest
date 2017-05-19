'use strict'

const express = require('express')
const api     = express.Router()

/*
 * Imports
 */

const ProductController = require('../controllers/product')
const auth = require('../middlewares/auth')

api.get('/product', ProductController.getProducts)
api.get('/product/:productId', ProductController.getProduct)
api.post('/product', ProductController.saveProduct)
api.put('/product/:productId', ProductController.updateProdct)
api.delete('/product/:productId', ProductController.deleteProduct)
api.get('/private', auth.isAuth, function (req, res) {
  res.status(200).send({ message: 'Tienes accesso' })
})

module.exports = api
