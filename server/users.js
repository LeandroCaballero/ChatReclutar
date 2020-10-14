const users = []

const addUsers = ({ id, name, room }) => {
    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase() //se eleminan los espacios en blanco y se coloca todo en minuscula

    const existingUser = users.find((user) => user.room === room && user.name === name) //se verifica que el nombre de usuario para ingresar al chat no este ocupado

    if (existingUser) {
        return { error: "Nombre de usuario no disponible" }
    }

    const user = { id, name, room }

    users.push(user)

    return { user }
}

const removeUsers = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => users.find((user) => user.id === id)


const getUsersInRoom = (room) => users.find((user) => user.room === room)

module.exports = {addUsers, removeUsers, getUser, getUsersInRoom}