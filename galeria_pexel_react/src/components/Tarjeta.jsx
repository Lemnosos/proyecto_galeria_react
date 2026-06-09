import React from 'react'

export const Tarjeta = ({ foto }) => {
    return (
        <article>
            <h3>{foto.url}</h3>
            <h3>{foto.titulo}</h3>
            <img src={foto.url} alt={"Titulo de la foto " + foto.id}></img>
        </article>
    )
}
