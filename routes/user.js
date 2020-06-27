const express = require('express')
const router = express.Router()
const controllers = require('../controller/user.controller')
const signup = require('../validation/user.signup.validation')
const validate =  require('../validation/user.signup.validation')

//const login = require('../validation/user.login.validation')

router.post('/signup',signup,controllers.register)
router.post('/login' ,controllers.login )
router.get('/profile' , controllers.profile)
router.delete('/delete',controllers.delete)

module.exports = router