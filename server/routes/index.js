const answer = require('../routes/answer')
const question = require('../routes/question')
const upvote = require('../routes/upvote')
const downvote = require('../routes/downvote')
// const tag = require('../routes/tag')
const user = require('../routes/user')
const express = require('express')
const router = express.Router()

router.use('/answer', answer)
router.use('/question', question)
router.use('/upvote', upvote)
router.use('/downvote', downvote)
// router.use('/tag', tag)
router.use('/user', user)




module.exports= router;