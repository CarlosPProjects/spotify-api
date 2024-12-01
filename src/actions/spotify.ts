'use server'

import axios from "axios"

const SPOTIFY_TOKEN_URI = "https://accounts.spotify.com/api/token"

export const getSpotifyToken = async () => {
  
  const response = await axios.post(SPOTIFY_TOKEN_URI, {
    grant_type: "client_credentials",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET
  }, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })

  return response.data
}