'use client'

import { getUserAccessToken } from "@/actions/auth"
import { getCurrentUserSavedTracks } from "@/actions/spotify"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { IPlayList } from "@/types/spotify/playlist"
import { SavedTracks } from "@/types/spotify/saved-tracks"
import Image from "next/image"
import { useEffect, useState } from "react"

const MusicCardList = () => {

  const [savedTracks, setSavedTracks] = useState<SavedTracks>();

  useEffect(() => {
    const getPlaylist = async () => {
      const accessToken = await getUserAccessToken()
      if (!accessToken) {
        console.log('No access token found');
        return
      }
      const list = await getCurrentUserSavedTracks(accessToken)
      setSavedTracks(list)
    }
    getPlaylist()
  }, [])

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        skipSnaps: false,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {savedTracks?.items.map(({ track }) => (
          <CarouselItem key={track.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <div className="p-0">
              <Card className="group space-y-4 border-none shadow-none">
                <CardContent className="p-0 rounded-3xl">
                  <div className="flex flex-col gap-6 sm:gap-4 pb-5">
                    <div className={`flex justify-center items-center overflow-hidden aspect-square relative`}>
                      <div className="absolute w-full border-2 h-full -translate-x-1/2 group-hover:-translate-x-1/2 sm:translate-x-0 z-10 duration-300 transition-all">
                        <Image src={track.album.images[0].url} alt="album-cover" fill className="object-cover object-center" />
                      </div>
                      <span className="text-3xl font-semibold h-full">
                        <Image className="max-sm:animate-spinDisc p-2" src='/assets/images/disc-vinil.webp' alt="disco-de-vinilo" fill />
                      </span>
                    </div>
                    <div className="w-full h-full flex flex-col gap-1 items-center justify-center text-center">
                      <span className="text-lg sm:text-sm font-semibold">{track.name}</span>
                      <span className="text-xs text-muted-foreground">{track.artists[0].name}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default MusicCardList