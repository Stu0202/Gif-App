import React from 'react'
import { mockGifs } from './mock-data/gifs.mock'

export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <div className='content-center'>
                <h1>Buscador de Gifs</h1>

                <p>Descubre y comparte el gif perfecto</p>

            </div>

            {/* Search */}

            <div className="search-container">
                <input type="text" placeholder='Buscar gifs' />
                <button>Buscar</button>
            </div>
            {/* Búsquedas  Previas */}
            <div className="previous-searches ">
                <h2>Busquedas Previas</h2>
                <ul className='previous-searches-list'>
                    <li>Goku</li>
                    <li>Leon.Scoot.Kennedy</li>
                    <li>Resident Evil</li>
                    <li>HitMan</li>
                </ul>
            </div>

            {/* Gifs */}
            <div className="gifs-container">
                {
                    mockGifs.map((gif) => (
                        <div key={gif.id} className='gif-card'>
                            <img src={gif.url} alt={gif.url} />
                            <h3>{gif.title}</h3>
                            <p>
                                {gif.width}*{gif.height} (1.5mb)
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
