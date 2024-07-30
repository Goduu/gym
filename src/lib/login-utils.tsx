"use server"
import { auth } from "./auth";
import { signIn, signOut } from "src/lib/auth";

export const singOutAsync = async () => {
    await signOut();
}

export const signInAsync = async () => {
    await signIn('github', {
        redirectTo: '/'
    })
}

export async function loggedUser() {
  const session = await auth()
  return session?.user
}