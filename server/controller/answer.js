const answer = require('../models/answer')
const question = require('../models/question')

class answerController {
    static createanswer(req, res, next) {
        let {
            jawaban,
            questionId,
            title
        } = req.body
        let UserId = req.decode.id
        answer.create({
            jawaban,
            UserId,
            title
        }).then(data => {
            return question.findByIdAndUpdate(questionId, {$push:{answer: data._id}},{new:true, runValidators:true})
            .then(data => {
                res.status(200).json({
                    data
                })
            })
        }).catch(next)
    }

    static deleteanswer(req, res, next) {
        let {
            id
        } = req.params
        answer.findByIdAndDelete(id)
            .then(data => {
                res.status(200).json({
                    data
                })
            })
    }

    static updateanswer(req, res, next) {
        let {
            id
        } = req.params
        let updateData = {}
        req.body.jawaban && (updateData.jawaban = req.body.jawaban)
        req.body.title && (updateData.title = req.body.title)
        answer.findByIdAndUpdate(id, updateData, {
                new: true
            })
            .then(data => {
                res.status(200).json({
                    data
                })
            })
    }

    static getanswers(req, res, next) {
        answer.find().populate('UserId')
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(next)
    }

    static getOneAnswer(req,res,next){
        let {id} = req.params
        answer.findById(id)
        .then(data => {
            res.status(200).json({
                data
            })
        }).catch(next)
    }

    static getMyanswer(req, res, next) {
        let {
            id
        } = req.decode
        answer.find({
                UserId: id
            })
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(next)
    }
    static upvote(req, res, next) {
        let UserId = req.decode.id
        let {
            id
        } = req.params
        answer.findOne({
                _id: id,
                upvote: UserId
            })
            .then(data => {
                if (data) {
                    throw {
                        httpStatus: 400,
                        message: "You can't Upvote"
                    }
                } else {
                    return answer.findOne({
                        _id: id,
                        downvote: UserId
                    })
                }
            })
            .then(response => {
                if (response) {
                    return answer.findByIdAndUpdate(id, {
                        $pull: {
                            downvote: UserId
                        }
                    }, {
                        new: true
                    })
                } else {
                    return answer.findByIdAndUpdate(id, {
                        $push: {
                            upvote: UserId
                        }
                    }, {
                        new: true
                    })
                }
            })
            .then(results => {
                res.status(200).json(results)
            })
            .catch(next)

    }
    static downvote(req, res, next) {
        let UserId = req.decode.id
        let {
            id
        } = req.params
        answer.findOne({
                _id: id,
                downvote: UserId
            })
            .then(data => {
                if (data) {
                    throw {
                        httpStatus: 400,
                        message: "You can't Upvote"
                    }
                } else {
                    return answer.findOne({
                        _id: id,
                        upvote: UserId
                    })
                }
            })
            .then(response => {
                if (response) {
                    return answer.findByIdAndUpdate(id, {
                        $pull: {
                            upvote: UserId
                        }
                    }, {
                        new: true
                    })
                } else {
                    return answer.findByIdAndUpdate(id, {
                        $push: {
                            downvote: UserId
                        }
                    }, {
                        new: true
                    })
                }
            })
            .then(results => {
                res.status(200).json(results)
            })
            .catch(next)

    }
}

module.exports = answerController