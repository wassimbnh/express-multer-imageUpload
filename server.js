const express = require('express')
const app = express()
const PORT = 5000;
const dotenv = require('dotenv').config()

app.listen(PORT, ()=>{
    console.log(`Server connected on ${PORT}`)
})

