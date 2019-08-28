if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'){
    require('dotenv').config();
}
const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose');
const morgan = require('morgan')
const routes = require('./routes/index')
const errorHandler = require('./helpers/errorhandler')
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
mongoose.connect(process.env.LINK, {useNewUrlParser: true})
.then(data => {
    console.log('success')
}).catch(err => {
    console.log('error')
})
app.use('/', routes)
app.use(errorHandler)

module.exports = app;
