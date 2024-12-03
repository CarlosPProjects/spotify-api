import { auth } from "@/auth"
import MusicCardList from "@/components/music-card-list"
import SpotifyHeader from "@/components/spotify-header"
import SpotifyRangeDate from "@/components/spotify-range-date"

const SpotifyContainer = async () => {

  const session = auth()

  return (
    <div className='w-full flex flex-col flex-1 h-full bg-background rounded-3xl overflow-hidden'>
      <SpotifyHeader />
      <div className='flex-1 flex items-center'>
        <MusicCardList />
      </div>
      <SpotifyRangeDate />
    </div>
  )
}

export default SpotifyContainer