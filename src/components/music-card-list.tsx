import { getUserAccessToken } from "@/actions/auth"
import { getCurrentUserPlayLists } from "@/actions/spotify"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { IPlayList } from "@/types/spotify/playlist"
import Image from "next/image"
// import { useEffect, useState } from "react"

const MusicCardList = () => {

  // const [playList, setPlaylist] = useState<IPlayList>();

  // useEffect(() => {
  //   const getPlaylist = async () => {
  //     const accessToken = await getUserAccessToken()
  //     if (!accessToken) {
  //       console.log('No access token found');
  //       return
  //     }
  //     const list = await getCurrentUserPlayLists(accessToken)
  //     setPlaylist(list)
  //   }
  //   getPlaylist()
  // }, [])

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/4 lg:basis-1/5 pl-2">
            <div className="p-0">
              <Card className="rounded-none group">
                <CardContent className="aspect-square p-0">
                  <div className="flex justify-center items-center overflow-hidden h-full relative __disc-cover">
                    <span className="text-3xl font-semibold">
                      <Image className="group-hover:scale-105 transition-all duration-300" src='/assets/images/disco-de-vinilo-removebg-preview.png' alt="disco-de-vinilo" width={150} height={150} />
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-col space-y-1 items-center justify-center">
                    <span className="font-semibold">Music Title(by Xt)</span>
                    <span className="text-sm text-muted-foreground">Author1, Author2</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default MusicCardList