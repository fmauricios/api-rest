'use strict'

/*
 * Module dependencies
 */

const express    = require('express')
const bodyParser = require('body-parser')
const hbs        = require('express-handlebars')
const app = express()

/*
 * Imports
 */

const api = require('./routes')

app.use(bodyParser.urlencoded({ extendend: false }))
app.use(bodyParser.json())

/*
 * Config express-handlebars
 */

app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))

app.set('view engine', '.hbs')

app.use('/api', api)
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/', (req, res) => {
  res.render('product')
})

module.exports = app
