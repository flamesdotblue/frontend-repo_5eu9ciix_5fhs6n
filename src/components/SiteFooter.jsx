function SiteFooter() {
  return (
    <footer className="w-full mt-10">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} College Admissions. All rights reserved.
      </div>
    </footer>
  )
}

export default SiteFooter
