'use client'

import { getSpotifyToken } from '@/actions/spotify'
import React from 'react'
import { DropdownMenuItem } from './ui/dropdown-menu'
import { useSession } from 'next-auth/react'

const AccessTokenBtn = () => {

  const [isLoading, setIsLoading] = React.useState(false)
  const { data: session } = useSession();

  const handleClick = async () => {
    if (!session) return

    const accessToken = session.sessionToken;
    console.log('Access Token:', accessToken);
  }

  return (
    <DropdownMenuItem onClick={handleClick} >
      {isLoading ? 'Loading...' : 'Get Token'}
    </DropdownMenuItem>
  )
}

export default AccessTokenBtn