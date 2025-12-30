import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { ArrowRight, Sparkles, Zap, Shield, Palette } from 'lucide-react'

async function getUser() {
  try {
    // Only import and use Supabase if env vars are set
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return null
    }
    const { createClient } = await import('@/lib/supabase/server')
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    return user
  } catch {
    return null
  }
}

export default async function HomePage() {
  const user = await getUser()

  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div 
          className="absolute inset-0 h-28 backdrop-blur-md"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 70%, rgba(255,255,255,0) 100%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo href="/" />
          <div className="flex items-center gap-4">
            {user ? (
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700">
                  Dashboard
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                    Sign in
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Free & Open Source
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Forms that feel{' '}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
              human
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Create beautiful, engaging forms that people actually want to fill out. 
            One question at a time, just like a conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/login">
              <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 shadow-lg shadow-violet-500/25">
                Start creating for free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-gray-300">
                See how it works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-200">
            <div className="aspect-video bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-lg text-center">
                <h3 className="text-3xl font-bold text-white mb-4">What&apos;s your name?</h3>
                <div className="bg-white/20 rounded-lg h-14 flex items-center px-4">
                  <span className="text-white/60 text-lg">Type your answer here...</span>
                </div>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <span className="text-white/60 text-sm">Press</span>
                  <kbd className="px-3 py-1 bg-white/20 rounded text-white text-sm font-medium">Enter ↵</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to create amazing forms
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features that make form building a breeze
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-white border border-violet-100">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">One at a Time</h3>
              <p className="text-gray-600">
                Questions appear one by one, creating a focused, distraction-free experience for respondents.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Beautiful Themes</h3>
              <p className="text-gray-600">
                Choose from stunning preset themes that make your forms look professional and on-brand.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600">
                Your data stays yours. Export responses anytime, delete when you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Question Types */}
      <section className="relative z-10 py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              13 question types to choose from
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From simple text to file uploads, we&apos;ve got you covered
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Short Text', 'Long Text', 'Multiple Choice', 'Multi Select',
              'Email', 'Phone', 'Number', 'Date', 'Rating', 'Opinion Scale',
              'Yes/No', 'File Upload', 'Website URL'
            ].map((type) => (
              <span
                key={type}
                className="px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 text-sm font-medium shadow-sm"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-violet-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to create your first form?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join thousands of people using OpenForm to collect responses.
            </p>
            <Link href="/login">
              <Button size="lg" className="h-14 px-8 text-lg bg-white text-violet-600 hover:bg-gray-100">
                Get started for free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 OpenForm. Open source and free forever.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com" className="text-gray-500 hover:text-gray-700 text-sm">
              GitHub
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
