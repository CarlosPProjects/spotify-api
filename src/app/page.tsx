import Container from '@/components/container'
import MusicCardList from '@/components/music-card-list'
import React from 'react'

const Home = () => {
  return (
    <Container className='flex-1 flex'>
      <main className='w-full rounded-3xl bg-gray-200/50 backdrop-blur p-2'>
        <div className='flex justify-center items-center w-full h-full rounded-3xl bg-green-300 __hero-section'>
          <MusicCardList />
        </div>
      </main>
    </Container>
  )
}

export default Home