'use strict'

/*
 * Models
 */

const Product = require('../models/product.js')

function getProduct (req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
    if (!product) return res.status(404).send({ message: 'El producto no existe' })

    res.status(200).send({ product })
  })
}

function getProducts (req, res) {
  Product.find({}, (err, products) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
    if (!products) return res.status(404).send({ message: 'No existen products' })

    res.send(200, { products })
  })
}

function saveProduct (req, res) {
  console.log('POST /api/product')
  console.log(req.body)

  let product = new Product()
  product.name = req.body.name
  product.picture = req.body.picture
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  product.save((err, productStored) => {
    if (err) res.status(500).send({ message: `Error al salvar en la base de datos: ${err}`
    })

    res.status(200).send({ product: productStored })
  })
}

function updateProdct (req, res) {
  let productId = req.params.productId
  let update = req.body

  Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
    if (err) res.status(500).send({ message: `Error al actualizar el product: ${err}` })

    res.status(200).send({ product: productUpdated })
  })
}

function deleteProduct (req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
    if (err) res.status(500).send({ message: `Error al borrar el product: ${err}` })

    product.remove(err => {
      if (err) res.status(500).send({ message: `Error al borrar el product: ${err}` })
      res.status(200).send({ message: 'El product ha sido eliminado' })
    })
  })
}

module.exports = {
  getProduct,
  getProducts,
  updateProdct,
  deleteProduct,
  saveProduct
}
