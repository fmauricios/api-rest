'use strict'

const express = require('express')
const api     = express.Router()

/*
 * Imports
 */

const ProductController = require('../controllers/product')
const UserController    = require('../controllers/user')
const auth = require('../middlewares/auth')

api.get('/product', ProductController.getProducts)
api.get('/product/:productId', ProductController.getProduct)
api.post('/product', auth, ProductController.saveProduct)
api.put('/product/:productId', auth, ProductController.updateProdct)
api.delete('/product/:productId', auth, ProductController.deleteProduct)
api.post('/signup', UserController.signUp)
api.post('/login', UserController.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes accesso' })
})

module.exports = api
