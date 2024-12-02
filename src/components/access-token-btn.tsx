'use client'

import { getSpotifyToken } from '@/actions/spotify'
import React from 'react'
import { DropdownMenuItem } from './ui/dropdown-menu'

const AccessTokenBtn = () => {

  const [isLoading, setIsLoading] = React.useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const token = await getSpotifyToken()
      window.localStorage.setItem('spotify_token', JSON.stringify(token))
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DropdownMenuItem onClick={handleClick} >
      {isLoading ? 'Loading...' : 'Get Token'}
    </DropdownMenuItem>
  )
}

export default AccessTokenBtn