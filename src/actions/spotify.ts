'use server'

import axios from "axios"

const SPOTIFY_TOKEN_URI = "https://accounts.spotify.com/api/token"
const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1"

export interface AccessTokenResponse {
  access_token: string
  token_type: string
  expires_in: number
}

export const getSpotifyToken = async (): Promise<AccessTokenResponse> => {

  const response = await axios.post(SPOTIFY_TOKEN_URI, {
    grant_type: "client_credentials",
    client_id: process.env.AUTH_SPOTIFY_ID,
    client_secret: process.env.AUTH_SPOTIFY_SECRET
  }, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })

  return response.data as AccessTokenResponse
}

export const getCurrentUserPlayLists = async (access_token: string) => {
  const response = await axios.get(`${SPOTIFY_ENDPOINT}/me/playlists`, {
    headers: {
      "Authorization": `Bearer ${access_token}`
    },
  })

  return response.data
}

export const getCurrentUserSavedTracks = async (access_token: string) => {
  const response = await axios.get(`${SPOTIFY_ENDPOINT}/me/tracks?limit=7`, {
    headers: {
      "Authorization": `Bearer ${access_token}`
    },
  })

  return response.data
}