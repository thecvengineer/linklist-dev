import { SiteContent } from '@/components/Layout/SiteContent'
import { SiteHeader } from '@/components/Layout/SiteHeader'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    return redirect('/dashboard/links')
  }

  return (
    <div className="bg-[#f9f9f9] min-h-dvh">
      <SiteHeader />
      <SiteContent />
    </div>
  )
}
