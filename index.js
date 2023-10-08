const express = require('express')
// const dotenv = require('dotenv').config()
const port = 3000


const app = express()

app.use(express.json())
// app.use(express.urlencoded({extend:false}))

app.use('/', require('./routes/Routes'))

app.listen(port, ()=>console.log(`app running on port ${port}`))



