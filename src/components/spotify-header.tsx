import { auth } from '@/auth'
import SpotifyFilter from './spotify-filter'
import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const SpotifyHeader = async () => {

  const session = await auth()

  return (
    <header className='w-full flex justify-center sm:justify-between items-center p-4'>
      <span className='hidden sm:block font-semibold'>ipsum</span>
      {session && <SpotifyFilter />}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='hidden sm:block rounded-full size-7 border overflow-hidden shadow'>
              <div className={cn('w-full h-full bg-gradient-to-r', session ? 'from-green-300 to-green-600 blur' : 'from-red-300 to-red-500')} />
            </div>
          </TooltipTrigger>
          <TooltipContent className='bg-foreground'>
            <p className='text-xs'>{session ? 'Online' : 'Offline'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </header>
  )
}

export default SpotifyHeader