const mongoose = require('mongoose')
const Schema = mongoose.Schema

const votesSchema = new Schema({
    topvotes: [],
    name: String
},{
    timestamps: true,
    versionKey: false
})

const votes = mongoose.model('votes', votesSchema)

module.exports = votes