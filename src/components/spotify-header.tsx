import React from 'react'
import SelectSpotifyFilter from './select-spotify-filter'

const SpotifyHeader = () => {
  return (
    <header className='w-full flex justify-between items-center p-4'>
      <span className='font-semibold text-sm'>ipsum</span>
      <SelectSpotifyFilter />
    </header>
  )
}

export default SpotifyHeader