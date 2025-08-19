import React from 'react'
import { Gif, mockGifs } from '../../mock-data/gifs.mock'

interface Props {
    gifs: Gif[]
}

export const GifList = ({ gifs }: Props) => {
    return (
        <div className="gifs-container">
            {
                gifs.map((gif) => (
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
    )
}
