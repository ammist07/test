const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    games: [
        {
            playedAt: { type: Date, required: true },
            gameTime: { type: Number, required: true },
        },
    ],
})

module.exports = mongoose.model('users', Users)
