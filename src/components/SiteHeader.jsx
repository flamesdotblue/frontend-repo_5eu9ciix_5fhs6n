import { GraduationCap } from 'lucide-react'

function SiteHeader() {
  return (
    <header className="w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
        <div className="p-2 rounded-lg bg-blue-600 text-white">
          <GraduationCap size={20} />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">College Admissions</h1>
          <p className="text-xs sm:text-sm text-gray-500">Apply for the upcoming academic year</p>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
