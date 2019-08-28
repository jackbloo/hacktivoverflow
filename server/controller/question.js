const question = require('../models/question')

class questionController {
    static createQuestion(req, res, next) {
        let {
            title,
            pertanyaan
        } = req.body
        let UserId = req.decode.id
        console.log('sampe sini')
        question.create({
            title,
            pertanyaan,
            UserId
        }).then(data => {
            res.status(201).json({
                data
            })
        }).catch(next)
    }

    static deleteQuestion(req, res, next) {
        let {
            id
        } = req.params
        question.findByIdAndDelete(id)
            .then(data => {
                res.status(200).json({
                    data
                })
            })
    }

    static updateQuestion(req, res, next) {
        let {
            id
        } = req.params
        let updateData = {}
        req.body.title && (updateData.title = req.body.title)
        req.body.pertanyaan && (updateData.pertanyaan = req.body.pertanyaan)
        question.findByIdAndUpdate(id, updateData, {
                new: true
            })
            .then(data => {
                res.status(200).json({
                    data
                })
            })
    }

    static getQuestions(req, res, next) {
        question.find().populate('UserId').sort({createdAt: -1})
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(next)
    }

    static getMyQuestion(req, res, next) {
        let {
            id
        } = req.decode
        question.find({
                UserId: id
            }).sort({createdAt: -1}).populate('UserId')
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(next)
    }

    static getOneQuestion(req,res,next){
        let {id} = req.params
        question.findById(id).populate('answer').populate('UserId')
        .then(data => {
            res.send(data)
        }).catch(next)
    }

    static upvote(req, res, next) {
        let UserId = req.decode.id
        let {
            id
        } = req.params
        question.findOne({
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
                    return question.findOne({
                        _id: id,
                        downvote: UserId
                    })
                }
            })
            .then(response => {
                if (response) {
                    return question.findByIdAndUpdate(id, {
                        $pull: {
                            downvote: UserId
                        }
                    }, {
                        new: true
                    })
                } else {
                    return question.findByIdAndUpdate(id, {
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
        question.findOne({
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
                    return question.findOne({
                        _id: id,
                        upvote: UserId
                    })
                }
            })
            .then(response => {
                if (response) {
                    return question.findByIdAndUpdate(id, {
                        $pull: {
                            upvote: UserId
                        }
                    }, {
                        new: true
                    })
                } else {
                    return question.findByIdAndUpdate(id, {
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

    static createTags(req, res, next) {
        let {
            id,
            tagku
        } = req.body
        question.findById(id)
            .then(data => {
                let filtered = data.tags.filter(el => {
                    return el.includes(tagku)
                })
                if (filtered.length == 0) {
                    question.findByIdAndUpdate(id, {
                            $push: {
                                tags: tagku
                            }
                        }, {
                            new: true,
                            runValidators: true
                        })
                        .then(data => {
                            res.status(200).json({
                                data
                            })
                        })
                } else {
                    res.status(400).json({
                        message: 'Tags cannot be duplicate'
                    })
                }
            }).catch(next)

    }


    static getTagsbyName(req, res, next) {
        let tagku = req.params.tag
        question.find()
        .then(data => {
          let filtered = data.filter(el => {return el.tags.includes(tagku)})
            res.json({
                filtered
            })
        }).catch(next)
    }


}

module.exports = questionController