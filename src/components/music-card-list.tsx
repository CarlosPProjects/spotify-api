'use client'

import Image from "next/image"
import { useContext } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { ITopTracks } from "@/types/spotify/top-tracks"
import { SpotifyContext } from "@/contexts/spotify-context"
import { ITopArtists } from "@/types/spotify/top-artists"

const MusicCardList = () => {

  const { datos, filterType, loading } = useContext(SpotifyContext);

  if (loading) return <div>Loading...</div>

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
        {datos && datos.items && datos.items.length > 0 && (
          filterType === 'tracks' ? (datos as ITopTracks)?.items.map(({ id, album }) => (
            <CarouselItem key={id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="p-0">
                <Card className="group space-y-4 border-none shadow-none">
                  <CardContent className="p-0 rounded-3xl">
                    <div className="flex flex-col gap-6 sm:gap-4 pb-5">
                      <div className={`flex justify-center items-center overflow-hidden aspect-square relative`}>
                        <div className="absolute w-full border-2 h-full -translate-x-1/2 group-hover:-translate-x-1/2 sm:translate-x-0 z-10 duration-300 transition-all">
                          {album?.images?.[0]?.url && (
                            <Image src={album.images[0].url} alt="album-cover" fill className="object-cover object-center" />
                          )}
                        </div>
                        <Image className="max-sm:animate-spinDisc p-2" src='/assets/images/disc-vinyl.webp' alt="disco-de-vinilo" fill />
                      </div>
                      <div className="w-full h-full flex flex-col gap-1 items-center justify-center text-center">
                        <span className="text-lg sm:text-sm font-semibold">{album?.name || 'Nombre no disponible'}</span>
                        <span className="text-xs text-muted-foreground">{album?.artists?.[0]?.name || 'Artista desconocido'}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )) : (datos as ITopArtists).items.map(({ id, images, name, genres }) => (
            <CarouselItem key={id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="p-0">
                <Card className="group space-y-4 border-none shadow-none">
                  <CardContent className="p-0 rounded-3xl">
                    <div className="flex flex-col gap-6 sm:gap-4 pb-5">
                      <div className={`flex justify-center items-center overflow-hidden aspect-square relative`}>
                        <div className="absolute w-full border-2 h-full -translate-x-1/2 group-hover:-translate-x-1/2 sm:translate-x-0 z-10 duration-300 transition-all">
                          {images?.[0]?.url && (
                            <Image src={images[0].url} alt="artist-cover" fill className="object-cover object-center" />
                          )}
                        </div>
                        <Image className="max-sm:animate-spinDisc p-2" src='/assets/images/disc-vinyl.webp' alt="disco-de-vinilo" fill />
                      </div>
                      <div className="w-full h-full flex flex-col gap-1 items-center justify-center text-center">
                        <span className="text-lg sm:text-sm font-semibold">{name || 'Nombre no disponible'}</span>
                        {genres && genres.length > 0 && (
                          <span className="text-xs text-muted-foreground capitalize">{genres[0]}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))
        )}
      </CarouselContent>
    </Carousel>
  )
}

export default MusicCardList