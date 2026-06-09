import React, { useEffect, useState } from 'react'
import { Tarjeta } from './Tarjeta'

const key = "I1dugFYldajKvI1gCSdWrV5ftv1EP5QoeqogsQrz5Nlhll2UItZJAvPR";
const urlBase = 'https://api.pexels.com/v1';

export const GridGaleria = ({ categoria }) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const recuperarImagenes = async () => {
        try {
            const url = `${urlBase}/search?query=${categoria}&per_page=9&pag`;

            const resp = await fetch(url, {
                headers: { Authorization: key }
            });

            if (!resp.ok) {
                throw new Error(`Error HTTP: ${resp.status}`);
            }

            const json = await resp.json();

            setData(json.photos);
            setError(null);

        } catch (err) {
            console.error("Error al cargar imágenes:", err);
            setError(err.message);
        }
    };

    useEffect(() => {
        recuperarImagenes();
    }, [categoria]);

    return (
        <>
            <h3>{categoria}</h3>

            <div className='flexContainer'>

                {error && <p>Error: {error}</p>}

                {
                    data.map((foto) => (
                        <Tarjeta key={foto.id} foto={foto} />
                    ))
                }
            </div>
        </>
    )
}