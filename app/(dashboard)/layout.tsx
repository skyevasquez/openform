import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { DashboardNav } from '@/components/dashboard/nav'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen relative">
      {/* Subtle gradient background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #fafafa 0%, #f5f3ff 50%, #f0fdfa 100%)',
        }}
      />
      <DashboardNav user={user} />
      <main className="relative z-10 pt-16">
        {children}
      </main>
    </div>
  )
}

