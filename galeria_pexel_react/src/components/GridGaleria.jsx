import React from 'react'
import { Tarjeta } from './Tarjeta'

export const GridGaleria = ({ categoria }) => {

    const data = [
        {
            id: 1,
            url: 'url de la foto',
            titulo: 'Tituli foto 1'
        },
        {
            id: 2,
            url: 'url de la foto',
            titulo: 'Tituli foto 2'
        },
        {
            id: 3,
            url: 'url de la foto',
            titulo: 'Tituli foto 3'
        },
        {
            id: 4,
            url: 'url de la foto',
            titulo: 'Tituli foto 4'
        }
    ]

    return (
        <>
            <h3>{categoria}</h3>

            {
                data.map((foto) => (
                    <>

                        <Tarjeta foto={foto} />

                    </>
                ))
            }
        </>
    )
}
