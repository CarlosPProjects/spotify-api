'use server'

import { auth, ISession, signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
}

export const logout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/")
}

export const getUserAccessToken = async () => {
  const session = await auth() as ISession
  return session.accessToken
}