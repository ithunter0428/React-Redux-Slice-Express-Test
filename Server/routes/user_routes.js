'use strict'

const router = require('express').Router()
const {
  getRandomUser,
} = require('../controllers/user_controller')

router.route('/users/random')
  .get(getRandomUser)

module.exports = router
