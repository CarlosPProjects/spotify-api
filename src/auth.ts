import NextAuth from "next-auth"
import { Provider } from "next-auth/providers"
import spotify from "next-auth/providers/spotify"

const providers: Provider[] = [
  spotify({
    clientId: process.env.AUTH_SPOTIFY_ID,
    clientSecret: process.env.AUTH_SPOTIFY_SECRET
  })
]


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
})