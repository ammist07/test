const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LeaderBoard = new Schema({
	userId: { type: String, required: true },
	playedAt: { type: Date, required: true },
	gameTime: { type: Number, required: true },
})

module.exports = mongoose.model('leaderboard', LeaderBoard)
