import Image from 'next/image'
import React from 'react'

const SpotifyBubble = () => {
  return (
    <div className='relative size-8 rounded-full border overflow-hidden'>
      <Image className='object-cover object-center blur' src='/assets/images/blured-f.webp' alt='spot-ify' fill />
    </div>
  )
}

export default SpotifyBubble