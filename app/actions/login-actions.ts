'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { AuthSchema } from './validate-schema'
import { createClient } from '@/app/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const rawData = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const result = AuthSchema.safeParse(rawData)

  if (!result.success) {
    console.error('Validation error:', result.error.flatten().fieldErrors)
    redirect('/error')
  }

  const { error } = await supabase.auth.signInWithPassword(result.data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/dashboard', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const rawData = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const result = AuthSchema.safeParse(rawData)

  if (!result.success) {
    console.error('Validation error:', result.error.flatten().fieldErrors)
    redirect('/error')
  }

  const { error } = await supabase.auth.signUp(result.data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
