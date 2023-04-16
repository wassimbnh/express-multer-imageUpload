const express = require('express')
const app = express()
const PORT = 5000;
const dotenv = require('dotenv').config()
const uploadRoutes = require('./routes/uploadRoutes')


//server
app.listen(PORT, ()=>{
    console.log(`Server connected on ${PORT}`)
})

app.use('/uploads', express.static('uploads'))


//route
app.use(uploadRoutes)