import { auth } from '@/auth'
import SelectSpotifyFilter from './select-spotify-filter'

const SpotifyHeader = async () => {

  const session = await auth()

  return (
    <header className='w-full flex justify-center sm:justify-between items-center p-4'>
      <span className='hidden sm:block font-semibold'>ipsum</span>
      {session && <SelectSpotifyFilter />}
    </header>
  )
}

export default SpotifyHeader