const express = require('express')
var bodyParser = require('body-parser')

// const dotenv = require('dotenv').config()
const port = 3000


const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));
  

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 })

 
app.use('/', require('./routes/Routes'))

app.listen(port, ()=>console.log(`app running on port ${port}`))



