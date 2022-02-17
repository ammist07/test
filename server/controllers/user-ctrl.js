const bcrypt = require('bcryptjs')
const User = require('../models/user-model')

const createUser = async(req, res) => {
    const body = req.body
    body.password = await bcrypt.hash(body.password, 8);

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a username, pass',
        })
    }

    const user = await new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }
    user
        .save()
        .then(() => {
            return res.status(200).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            console.log('here')
            return res.status(400).json({
                error,
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

module.exports = {
    createUser,
    getUserById,
    getUsers
}
