import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileQuestion } from 'lucide-react'

export default function FormNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
          <FileQuestion className="w-10 h-10 text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Form not found</h1>
        <p className="text-gray-600 mb-8">
          This form doesn&apos;t exist or is no longer available.
        </p>
        <Link href="/">
          <Button>Go to homepage</Button>
        </Link>
      </div>
    </div>
  )
}

