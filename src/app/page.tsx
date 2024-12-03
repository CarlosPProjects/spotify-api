import Container from '@/components/container'
import MusicCardList from '@/components/music-card-list'
import SpotifyHeader from '@/components/spotify-header'
import SpotifyRangeDate from '@/components/spotify-range-date'
import React from 'react'

const Home = () => {

  return (
    <Container className='flex-1 flex flex-col'>
      <h2 className='font-medium text-lg sm:text-2xl md:text-3xl sm:ml-4 mt-2 mb-6 text-center sm:text-start'>interaction with spotify api 🎵</h2>
      <div className='flex flex-1 justify-center md:py-16 rounded-3xl __hero-section'>
        <div className='flex flex-1 w-full max-w-5xl justify-center items-center rounded-3xl p-2 bg-gray-300/80 backdrop-blur'>
          <div className='w-full flex flex-col flex-1 h-full bg-background rounded-3xl overflow-hidden'>
            <SpotifyHeader />
            <div className='flex-1 flex items-center'>
              <MusicCardList />
            </div>
            <SpotifyRangeDate />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home