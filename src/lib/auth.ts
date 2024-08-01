"use server"
import { createClient } from './supabase/server';
import { redirect } from 'next/navigation';

export async function signInWithGithub() {
  const supabase = createClient();
  const URL = process.env.NEXT_PUBLIC_URL
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${URL}/api/auth/callback`,
    },
  })

  console.log(data, error)

  if (data.url) {
    redirect(data.url) // use the redirect API for your server framework
  }
}

export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut()
}



export const userMetadata = async () => {
  const supabase = createClient();
  const session = await supabase.auth.getUser()
  const metadata = session.data.user?.user_metadata
  if (!metadata) {
    return null
  }

  return {
    id: metadata.id,
    name: metadata?.full_name || metadata.name,
    email: session.data.user?.email,
    avatarUrl: metadata?.avatar_url,
  }
}
