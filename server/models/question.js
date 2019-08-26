const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    pertanyaan: {
        type: String,
        required: true,
    },
    UserId: {
        type: Schema.Types.ObjectId, ref: 'users'
    }
},{
    timestamps: true,
    versionKey: false
})

const questions = mongoose.model('questions', questionSchema)

module.exports = questions