import React from 'react'

import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { mockGifs } from './mock-data/gifs.mock'

export const GifsApp = () => {
    return (
        <>
            {/* Header */}

            <CustomHeader title='Buscador de Gifs' description='Descrube y comparte el gif perfecto' />

            {/* Search */}

            <SearchBar placeholder='Buscar Gifs' />
            {/* Búsquedas  Previas */}

            <PreviousSearches searches={['Goku', 'Dragon Ball z', 'HitMan', 'Resident Evil']} />

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}
