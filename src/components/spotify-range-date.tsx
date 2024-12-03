import React from 'react'
import { Button } from './ui/button'

const SpotifyRangeDate = () => {
  return (
    <div className='flex justify-center items-center space-x-2 mb-4'>
      <Button className='rounded-full hover:bg-foreground active:bg-foreground text-xs hover:text-white active:text-white' size='sm' variant='ghost'>
        4 Wks
      </Button>
      <Button className='rounded-full hover:bg-foreground active:bg-foreground text-xs hover:text-white active:text-white' size='sm' variant='ghost'>
        6 Mths
      </Button>
      <Button className='rounded-full hover:bg-foreground active:bg-foreground text-xs hover:text-white active:text-white' size='sm' variant='ghost'>
        All Time
      </Button>
    </div>
  )
}

export default SpotifyRangeDate