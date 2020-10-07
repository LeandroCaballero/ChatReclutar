import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'

let socket

const Chat = () => {
    const [nombre, setNombre] = useState('');
    const [sala, setSala] = useState('');
    const HOST = "localhost:4000" //direccion del servidor

    useEffect(() => {
        let nombre = prompt("Nombre?")
        let sala = prompt("Sala?")

        socket = io(HOST)

        setNombre(nombre)
        setSala(sala)

        socket.emit('join', { nombre, sala }, () => {

        })

        return () => {   //equivalente al componentDidUnmount
            socket.emit('desconnection')
            socket.off()
        }
    }, [HOST]) //solo se vuelve a renderizar si cambia el HOST

    return (
        <h1>
            Chat
        </h1>
    )
}

export default Chat
