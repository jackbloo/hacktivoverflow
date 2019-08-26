const upvote = require('../models/upvote')

class upvoteController {

    static createupvote(req, res, next) {
        let UserId = req.decode.id
        let answerId = req.body.answerId
        let questionId = req.body.questionId
        let newData = {}
        newData.UserId = UserId
        answerId && (newData.answerId = answerId)
        questionId && (newData.questionId = questionId)
        upvote.create(newData)
            .then(data => {
                res.status(201).json({
                    data
                })

            }).catch(next)
    }

    static deleteupvote(req, res, next) {
        let {
            id
        } = req.params
        upvote.findByIdAndDelete(id)
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(next)
    }

}

module.exports = upvoteController