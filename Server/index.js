'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()

app.use(cors());
app.use(bodyParser.json())
app.disable('x-powered-by')

app.use('/', [
  require('./routes/user_routes'),
])

app.use(require('./middleware/error_middleware').all)

module.exports = app
