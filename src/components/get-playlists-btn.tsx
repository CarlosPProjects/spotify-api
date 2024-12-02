'use client'

import { AccessTokenResponse, getCurrentUserPlayLists } from '@/actions/spotify'
import { DropdownMenuItem } from './ui/dropdown-menu'

const GetPlaylistBtn = () => {

  const handleClick = async () => {
    const access_token = window.localStorage.getItem('access_token') as AccessTokenResponse | null
    if (!access_token) {
      console.log('No access token found')
      return
    }
    const res = await getCurrentUserPlayLists(access_token.access_token)
    console.log(res);
  }

  return (
    <DropdownMenuItem onClick={handleClick}>
      Get Playlists
    </DropdownMenuItem>
  )
}

export default GetPlaylistBtn