const answer = require('./answer')
const question = require('../routes/question')
// const tag = require('../routes/tag')
const user = require('../routes/user')
const express = require('express')
const router = express.Router()

router.use('/answer', answer)
router.use('/question', question)
// router.use('/tag', tag)
router.use('/user', user)




module.exports= router;