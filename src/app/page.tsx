import Container from '@/components/container'
import MusicCardList from '@/components/music-card-list'
import React from 'react'

const Home = () => {

  return (
    <Container className='flex-1 flex flex-col gap-4'>
      <h2 className='font-medium text-3xl ml-4'>Interaction with spotify api 🎵</h2>
      <div className='flex flex-1 justify-center py-16 rounded-3xl __hero-section'>
        <div className='flex flex-1 max-w-5xl justify-center items-center rounded-3xl p-2 bg-gray-300/80 backdrop-blur'>
          <div className='flex flex-1 items-center h-full bg-background rounded-3xl'>
            <MusicCardList />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home