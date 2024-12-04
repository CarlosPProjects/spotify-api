'use client'

import Image from "next/image"
import { FC, useContext, useEffect, useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { dumbData } from "@/data/dumbdata"
import { ISession } from "@/auth"
import { ITopTracks } from "@/types/spotify/top-tracks"
import { SpotifyContext } from "@/contexts/spotify-context"

interface Props {
  session: ISession | null
}

const MusicCardList: FC<Props> = ({ session }) => {

  const { datos } = useContext(SpotifyContext) ?? {};
  const [topTracks, setTopTracks] = useState<ITopTracks>(dumbData);

  useEffect(() => {
    if (session && datos) {
      setTopTracks(datos);
    } else {
      setTopTracks(dumbData);
    }
  }, [session, datos]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {topTracks?.items.map(({ id, album }) => (
          <CarouselItem key={id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="p-0">
              <Card className="group space-y-4 border-none shadow-none">
                <CardContent className="p-0 rounded-3xl">
                  <div className="flex flex-col gap-6 sm:gap-4 pb-5">
                    <div className={`flex justify-center items-center overflow-hidden aspect-square relative`}>
                      <div className="absolute w-full border-2 h-full -translate-x-1/2 group-hover:-translate-x-1/2 sm:translate-x-0 z-10 duration-300 transition-all">
                        <Image src={album.images[0].url} alt="album-cover" fill className="object-cover object-center" />
                      </div>
                      <Image className="max-sm:animate-spinDisc p-2" src='/assets/images/disc-vinyl.webp' alt="disco-de-vinilo" fill />
                    </div>
                    <div className="w-full h-full flex flex-col gap-1 items-center justify-center text-center">
                      <span className="text-lg sm:text-sm font-semibold">{album.name}</span>
                      <span className="text-xs text-muted-foreground">{album.artists[0].name}</span>
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