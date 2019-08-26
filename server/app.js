if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'){
    require('dotenv').config();
}
const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose');
const morgan = require('morgan')
const routes = require('./routes/index')
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
app.use(function(err,req,res,next){
    const { start, httpStatus, message, previousError, stack } = err
    
    if(err.code == 11000){
        httpStatus = 400
         message = 'Email is Already Registered'
    }
    res.status(httpStatus || 406).json({
      status: false,
      code: httpStatus || 406,
      message,
      data: previousError,
      error: stack
    })

})

module.exports = app;