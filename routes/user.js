const express = require('express')
const router = express.Router()
const {controller} = require('../controller/user.controller')
const controllers = require('../controller/user.controller')

router.post('/signup',controllers.register)
router.post('/login' , controllers.login )
router.get('/profile' , controllers.profile)
router.delete('/delete',controllers.delete)

module.exports = router