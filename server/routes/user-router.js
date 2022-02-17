const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/user', UserCtrl.getUsers)

module.exports = router