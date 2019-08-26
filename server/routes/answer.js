const express = require('express')
const router = express.Router()
const answerController = require('../controller/answer')

router.get('/', answerController.getanswers)
router.get('/mine', answerController.getMyanswer)
router.post('/create', answerController.createanswer)
router.patch('/:id', answerController.updateanswer)
router.delete('/:id', answerController.deleteanswer)





module.exports = router;