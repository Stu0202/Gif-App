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
//https://api.giphy.com/v1/gifs/search?api_key=JPJ7Vs2feGk8tfU8ykfnt8hxbfoRGqAj&q=hitman&limit=25&offset=0&rating=g&lang=es&bundle=messaging_non_clips