import Container from '@/components/container'
import MusicCardList from '@/components/music-card-list'
import React from 'react'

const Home = () => {

  return (
    <Container className='flex-1 flex flex-col gap-4'>
      <h2 className='font-medium text-xl sm:text-2xl md:text-3xl sm:ml-4'>Interaction with spotify api 🎵</h2>
      <div className='flex flex-1 justify-center md:py-16 rounded-3xl __hero-section'>
        <div className='flex flex-1 w-full max-w-5xl justify-center items-center rounded-3xl p-2 bg-gray-300/80 backdrop-blur'>
          <div className='w-full flex flex-1 items-center h-full bg-background rounded-3xl'>
            <MusicCardList />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home