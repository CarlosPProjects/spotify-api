import React from 'react'
import SelectSpotifyFilter from './select-spotify-filter'
import SpotifyBubble from './spotify-bubble'

const SpotifyHeader = () => {
  return (
    <header className='w-full flex justify-between items-center p-4'>
      <span className='font-semibold'>ipsum</span>
      <SelectSpotifyFilter />
      <SpotifyBubble />
    </header>
  )
}

export default SpotifyHeader