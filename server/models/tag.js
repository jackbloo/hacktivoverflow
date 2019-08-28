const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    UserId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'questions'
    }
}, {
    timestamps: true,
    versionKey: false
})

const tags = mongoose.model('tag', tagSchema)

module.exports = tags