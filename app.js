'use strict'

/*
 * Module dependencies
 */

const express    = require('express')
const bodyParser = require('body-parser')
const app = express()

/*
 * Imports
 */

const api = require('./routes')

app.use(bodyParser.urlencoded({ extendend: false }))
app.use(bodyParser.json())
app.use('/api', api)

module.exports = app
