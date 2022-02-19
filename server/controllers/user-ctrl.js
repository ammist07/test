const bcrypt = require('bcryptjs')
const User = require('../models/user-model')

const createUser = async(req, res) => {
    const body = req.body
    body.password = await bcrypt.hash(body.password, 8);
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a username, pass',
        })
    }
    const users = await User.find({})
    
    for(let i = 0; i < users.length; i++) {
        if (users[i].name === body.name) {
            return res.json({success: false, message: 'User already exist'})
        }
    }

    const user = await new User(body)

    if (!user) {
        return res.json({ success: false, error: err })
    }
    user
        .save()
        .then(() => {
            return res.status(200).json({
                success: true,
                id: user._id,
                name: user.name,
            })
        })
        .catch(error => {
            console.log('here')
            return res.json({
                success: false,
                message: 'User not created!',
            })
        })
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id})
        if(!user) {
            return res.status(404).json({error: "User not found"})
        }
        res.json(user)
    }catch (err) {
        res.status(500).json({error: err})
    }
}

const getUsers = async (req, res) => {
    const users = await User.find({});
    try {
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
}

const checkUser = async (req, res) => {
    const body = req.body
    const users = await User.find({})
    for(let i = 0; i < users.length; i++) {
        if (users[i].username === body.username) {
            const match = await bcrypt.compare(body.password, users[i].password)
            if (match){
                return res.status(200).json({
                    success: true,
                    id: users[i]._id,
                    name: users[i].name,
                })
            }
        }
    }
    return res.json({success: false, message: 'Username or password incorrect'})
}

module.exports = {
    createUser,
    getUserById,
    getUsers,
    checkUser
}
