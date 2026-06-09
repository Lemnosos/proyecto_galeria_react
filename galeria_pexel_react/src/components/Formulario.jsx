import React from 'react'

export const Formulario = ({ onNuevaCategoria }) => {

    const handleSumit = ({ target }) => {
        event.preventDefault()
        const categoria = target.categoria.value.trim().toLowerCase()
        onNuevaCategoria(categoria)

    }

    return (
        <div>
            <form action="" onSubmit={handleSumit}>
                <input type="text" placeholder='Buscar' name='categoria' id='categoria' />
                <input type="submit" value='Buscar' />
            </form>
        </div>
    )
}
