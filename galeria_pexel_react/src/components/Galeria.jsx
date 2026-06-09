import { useState } from 'react'
import { Formulario } from './Formulario'
import { GridGaleria } from './GridGaleria'

export const Galeria = () => {

    //const categorias = ['perros', 'burros', 'gatos']
    const [categorias, setCategorias] = useState([])


    const onNuevaCategoria = (categoria) => {

        console.log({ categorias })
        console.log({ categoria })
        if (categorias.includes(categoria)) {
            alert("Categoria ya incluida");
        } else {
            alert("Categoria añadida con exito");
            setCategorias([
                ...categorias,
                categoria]
            )
        }

    }

    return (
        <>
            <h1>Practica de galeria de pexels con React</h1>
            <Formulario onNuevaCategoria={onNuevaCategoria} />
            {
                categorias?.map((categoria) => (
                    <>
                        <section>
                            <GridGaleria categoria={categoria} />
                        </section>
                    </>
                )
                )
            }
        </>
    )
}
