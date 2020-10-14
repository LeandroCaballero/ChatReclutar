import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListaCursos from './ListaCursos'

const Curso = () => {
    const [cursos, setCursos] = useState([])
    const [area, setArea] = useState('')

    useEffect(() => {
        let tema = "Tecnologia"         //obtener el tema del usuarios
        setArea(tema)

        getCursos()
        
    }, [area])

    const getCursos = async () => {
        let res = await axios.get('http://localhost:1338/Cursos?area_eq=' + area)
        setCursos(res.data)
    }

    return (
        <ListaCursos datos={cursos}/>
    )
}

export default Curso