const answer = require('./answer')
const question = require('../routes/question')
const vote = require('../routes/vote')
const user = require('../routes/user')
const express = require('express')
const router = express.Router()

router.use('/answer', answer)
router.use('/question', question)
router.use('/vote', vote)
router.use('/user', user)




module.exports= router;