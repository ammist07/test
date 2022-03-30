const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/user', UserCtrl.getUsers)
router.post('/login', UserCtrl.checkUser)
router.post('/game', UserCtrl.addNewGame)
router.post('/leader', UserCtrl.addLeaderBoard)
router.post('/getall', UserCtrl.getAllbyId)

module.exports = router
