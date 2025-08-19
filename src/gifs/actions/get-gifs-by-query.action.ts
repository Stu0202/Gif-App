import axios from 'axios'
import { GiphyResponse } from '../interfaces/giphy.response'
import { Gif } from '../interfaces/gif.interface'

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    const response = await axios.get<GiphyResponse>(`https://api.giphy.com/v1/gifs/search`, {
        params: {
            q: query,
            limit: 10,
            lang: 'es',
            api_key: 'JPJ7Vs2feGk8tfU8ykfnt8hxbfoRGqAj'
        }
    })

    return response.data.data.map((gif) => (
        {
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
            width: Number(gif.images.original.width),
            height: Number(gif.images.original.height),
        }
    ))
}