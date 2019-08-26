const downvote = require('../models/downvote')

class downvoteController {

    static createdownvote(req, res, next) {
        let UserId = req.decode.id
        let answerId = req.body.answerId
        let questionId = req.body.questionId
        let newData = {}
        newData.UserId = UserId
        answerId && (newData.answerId = answerId)
        questionId && (newData.questionId = questionId)
        downvote.create(newData)
            .then(data => {
                res.status(201).json({
                    data
                })

            }).catch(next)
    }

    static deletedownvote(req, res, next) {
        let {
            id
        } = req.params
        downvote.findByIdAndDelete(id)
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(next)
    }

}

module.exports = downvoteController