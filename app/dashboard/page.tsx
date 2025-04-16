import { redirect } from 'next/navigation'
import { createClient } from '@/app/utils/supabase/server'
import CreatorDashboard from '@/components/CreatorDashboard'

export default async function Page() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return <CreatorDashboard />
}
