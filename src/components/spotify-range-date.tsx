'use client'

import { cn } from '@/lib/utils'
import { Button } from './ui/button'

const datesBtn = [
  {
    value: '4 Wks',
    active: true
  },
  {
    value: '6 Mths',
    active: false
  },
  {
    value: 'All Time',
    active: false
  }
]

const SpotifyRangeDate = () => {

  return (
    <div className='flex justify-center items-center mb-4'>
      <div className='flex border shadow rounded-full overflow-hidden'>
        {datesBtn.map((btn, index) => (
          <Button key={index} className={cn('rounded-none hover:bg-foreground text-xs hover:text-white', btn.active && 'bg-foreground text-white')} size='sm' variant='ghost'>
            {btn.value}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default SpotifyRangeDate