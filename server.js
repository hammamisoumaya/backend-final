const express = require('express')
const app = express()
const port = 5005
const connectdb = require('./config/connectdb')


connectdb()
app.use(express.json())
app.use('/contact',ContactRouter)


app.listen(port,err=>{
    err?console.log("err"):console.log(`go to port ${port}`)
    })