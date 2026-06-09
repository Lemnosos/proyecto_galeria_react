import React from 'react'

export const Tarjeta = ({ foto }) => {

    return (
        <article>
            <h3>{foto.alt}</h3>
            <div className='imgContainer'>
                <img src={foto.src.medium} alt={foto.alt}></img>
            </div>
        </article>
    )
}
