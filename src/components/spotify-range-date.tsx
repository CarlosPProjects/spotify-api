
import { Button } from './ui/button'

const SpotifyRangeDate = () => {
  return (
    <div className='flex justify-center items-center mb-4'>
      <div className='flex border shadow rounded-full'>
        <Button className='rounded-none rounded-s-full hover:bg-foreground active:bg-foreground text-xs hover:text-white active:text-white' size='sm' variant='ghost'>
          4 Wks
        </Button>
        <Button className='rounded-none hover:bg-foreground active:bg-foreground text-xs hover:text-white active:text-white' size='sm' variant='ghost'>
          6 Mths
        </Button>
        <Button className='rounded-none rounded-r-3xl hover:bg-foreground active:bg-foreground text-xs hover:text-white active:text-white' size='sm' variant='ghost'>
          All Time
        </Button>
      </div>
    </div>
  )
}

export default SpotifyRangeDate