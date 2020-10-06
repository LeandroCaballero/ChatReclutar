const express = require('express')
const app = express()
const server = require('http').Server(app)

const socket = require('socket.io')(server)

app.listen(3000, ()=>{
    console.log("Server on port 3000")
})