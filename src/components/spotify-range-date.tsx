'use client'

import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

interface DateButton {
  value: string;
  active: boolean;
}

const initialDatesBtn: DateButton[] = [
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

  const [datesBtn, setDatesBtn] = useState(initialDatesBtn)
  const { data: session } = useSession()

  const handleButtonClick = (clickedIndex: number) => {
    setDatesBtn((prevButtons) =>
      prevButtons.map((btn: DateButton, index: number) => ({
        ...btn,
        active: index === clickedIndex
      }))
    )
  }

  return (
    <div className='flex justify-center items-center mb-4'>
      <div className='flex shadow rounded-full overflow-hidden'>
        {datesBtn.map((btn, index) => (
          <Button
            disabled={!session}
            key={index}
            className={cn('rounded-none hover:bg-foreground text-xs hover:text-white', btn.active && 'bg-foreground text-white')}
            size='sm'
            variant='ghost'
            onClick={() => handleButtonClick(index)}
          >
            {btn.value}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default SpotifyRangeDate