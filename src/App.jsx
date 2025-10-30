import { useMemo, useState } from 'react'
import SiteHeader from './components/SiteHeader'
import FormSection from './components/FormSection'
import PreviewSidebar from './components/PreviewSidebar'
import SiteFooter from './components/SiteFooter'

function App() {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    program: '',
    gender: '',
    address: '',
    guardianName: '',
    terms: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const errors = useMemo(() => {
    const e = {}
    if (!data.fullName.trim()) e.fullName = 'Full name is required'
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email'
    if (!data.phone.trim() || data.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid phone number'
    if (!data.dob) e.dob = 'Date of birth is required'
    if (!data.program) e.program = 'Please select a program'
    if (!data.gender) e.gender = 'Please select gender'
    if (!data.address.trim()) e.address = 'Address is required'
    if (!data.terms) e.terms = 'You must accept the terms to continue'
    return e
  }, [data])

  const handleSubmit = async () => {
    if (Object.keys(errors).length) return
    setSubmitting(true)
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <SiteHeader />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Admission Form</h2>
          <p className="text-gray-600 mt-2">Fill out the form below to submit your application</p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-xl border shadow-sm p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900">Application Submitted</h3>
            <p className="text-gray-600 mt-2">Thank you, {data.fullName || 'Applicant'}! We have received your application.</p>
            <button
              className="mt-5 inline-flex justify-center items-center gap-2 rounded-lg border bg-white text-gray-700 font-medium px-4 py-2.5 hover:bg-gray-50 transition"
              onClick={() => {
                setSubmitted(false)
                setData({ fullName: '', email: '', phone: '', dob: '', program: '', gender: '', address: '', guardianName: '', terms: false })
              }}
            >
              Submit another response
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_340px] gap-6 items-start">
            <FormSection
              data={data}
              setData={setData}
              onSubmit={handleSubmit}
              errors={errors}
              submitting={submitting}
            />
            <PreviewSidebar data={data} />
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
