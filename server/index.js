const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const { use } = require('./routes/chat')
const router = require('./routes/chat')

const { addUsers, removeUsers, getUser, getUsersInRoom } = require("./users")

const PORT = process.env.PORT || 4000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
    socket.on('join', ({ nombre, sala }, callback) => {
        const {error, user} = addUsers({id: socket.id, name: nombre, room: sala}) //se obtiene la respuesta de addUser pasandole como paramentros los datos obtenidos por react en el emit
        
        if(error) return callback(error) //en el caso de existir el error del nombre ocupado

        socket.emit('message', {user: 'Sistema', text: `${user.name}, bienvenido/a a la sala`})   //mensaje al usuario cuando se conecta

        socket.broadcast.to(user.room).emit('message', {user: 'Sistema', text: `${user.name}, se ha conectado`})  //aviso a todos los usuarios de la sala que se conecto alguien

        socket.join(user.room)

        callback()
    })

    socket.on('disconnect', () => {
        console.log("Alguien se fue")
    })
})


app.use(router)

server.listen(PORT, () => {
    console.log('Server on port 4000')
})