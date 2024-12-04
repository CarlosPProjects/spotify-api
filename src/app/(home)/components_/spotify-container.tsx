import { auth } from "@/auth"
import MusicCardList from "@/components/music-card-list"
import SpotifyHeader from "@/components/spotify-header"
import SpotifyRangeDate from "@/components/spotify-range-date"
import { SpotifyContextProvider } from "@/contexts/spotify-context"
import { SessionProvider } from "next-auth/react"

const SpotifyContainer = async () => {

  const session = await auth()

  return (
    <SessionProvider>
      <SpotifyContextProvider>
        <div className='w-full flex flex-col flex-1 h-full bg-background rounded-3xl overflow-hidden'>
          <SpotifyHeader session={session} />
          <div className='flex-1 flex items-center'>
            <MusicCardList session={session} />
          </div>
          <SpotifyRangeDate session={session} />
        </div>
      </SpotifyContextProvider>
    </SessionProvider>
  )
}

export default SpotifyContainer