const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const router = require('./routes/chat')

const PORT = process.env.PORT || 4000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) =>{
    console.log("Se conecto alguien")

    socket.on('join', ({nombre, sala}) =>{
        console.log(nombre, sala)
    })

    socket.on('disconnect', ()=>{
        console.log("Alguien se fue")
    })
})


app.use(router)

server.listen(PORT, () => {
    console.log('Server on port 4000')
})