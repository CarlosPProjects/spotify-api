'use client'

import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { FC, useContext, useState } from 'react'
import { ISession } from '@/auth'
import { SpotifyContext } from '@/contexts/spotify-context'
import { getCurrentUserTopArtists, getCurrentUserTopTracks } from '@/actions/spotify'
import { getUserAccessToken } from '@/actions/auth'

interface DateButton {
  label: string;
  value: 'short_term' | 'medium_term' | 'long_term';
  active: boolean;
}

const initialDatesBtn: DateButton[] = [
  {
    label: '4 Wks',
    value: 'short_term',
    active: true
  },
  {
    label: '6 Wks',
    value: 'medium_term',
    active: false
  },
  {
    label: 'All Time',
    value: 'long_term',
    active: false
  }
]

interface Props {
  session: ISession | null
}

const SpotifyRangeDate: FC<Props> = ({ session }) => {

  const [datesBtn, setDatesBtn] = useState(initialDatesBtn)
  const { setDatos, loading, filterType, setLoading } = useContext(SpotifyContext)

  const handleButtonClick = async (clickedIndex: number, value: 'short_term' | 'medium_term' | 'long_term') => {
    setLoading(true)
    setDatesBtn((prevButtons) =>
      prevButtons.map((btn: DateButton, index: number) => ({
        ...btn,
        active: index === clickedIndex
      }))
    )

    const accessToken = await getUserAccessToken();

    if (!accessToken) {
      console.error('Access token is undefined');
      return;
    }

    let data
    if (filterType === 'tracks') {
      data = await getCurrentUserTopTracks(accessToken, value)
      console.log('data', data);
    } else {
      data = await getCurrentUserTopArtists(accessToken, value)
      console.log('data', data);
    }
    setDatos(data)
    setLoading(false)
  }

  return (
    <div className='flex justify-center items-center mb-4'>
      <div className='flex shadow rounded-full overflow-hidden'>
        {datesBtn.map((btn, index) => (
          <Button
            disabled={!session || loading}
            key={index}
            className={cn('rounded-none hover:bg-foreground text-xs hover:text-white', btn.active && 'bg-foreground text-white')}
            size='sm'
            variant='ghost'
            value={btn.value}
            onClick={() => handleButtonClick(index, btn.value)}
          >
            {btn.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default SpotifyRangeDate