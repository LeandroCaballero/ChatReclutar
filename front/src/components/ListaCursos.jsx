import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ListaCursos = ({ datos }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(datos)
    }, [datos])                //cuando cambie "datos" se renderiza de nuevo por eso no mostraba nada con []

    return (
        <div>
            {data.map((curso, i) => (
                <div key={i}>
                    {console.log(curso.imagen.url)}
                    <div className="card mb-3" style={{ marginTop: 20 }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={"http://localhost:1338" + curso.imagen.url} className="card-img" ></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{curso.Nombre}</h4>
                                    <h5 className="card-title">{curso.Fuente}</h5>
                                    <p className="card-text">{curso.Descripcion}</p>
                                    <p className="card-text">Enlace: {curso.direccion}</p>
                                    <p className="card-text"><small className="text-muted">Duración: {curso.Duracion} horas</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default ListaCursos
