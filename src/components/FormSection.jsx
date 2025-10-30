import { useMemo } from 'react'

const programs = [
  'Bachelor of Science (B.Sc.)',
  'Bachelor of Arts (B.A.)',
  'Bachelor of Commerce (B.Com.)',
  'Bachelor of Engineering (B.E.)',
  'Bachelor of Computer Applications (BCA)'
]

function Input({ label, id, type = 'text', value, onChange, required, placeholder, error }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}

function Select({ label, id, value, onChange, options, required, error }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <option value="">Select a program</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}

function Textarea({ label, id, value, onChange, required, placeholder, error }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className={`w-full resize-y rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}

function RadioGroup({ label, name, options, value, onChange, required, error }) {
  return (
    <div className="space-y-1.5">
      <span className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <label key={opt} className="inline-flex items-center gap-2 text-sm">
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={(e) => onChange(e.target.value)}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}

function FormSection({ data, setData, onSubmit, errors, submitting }) {
  const isFormValid = useMemo(() => Object.keys(errors).length === 0, [errors])

  const set = (key) => (e) => {
    const value = e?.target ? e.target.value : e
    setData((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
      className="bg-white rounded-xl border shadow-sm p-5 sm:p-6 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          id="fullName"
          value={data.fullName}
          onChange={set('fullName')}
          placeholder="John Doe"
          required
          error={errors.fullName}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          value={data.email}
          onChange={set('email')}
          placeholder="john@example.com"
          required
          error={errors.email}
        />
        <Input
          label="Phone"
          id="phone"
          type="tel"
          value={data.phone}
          onChange={set('phone')}
          placeholder="+1 555 123 4567"
          required
          error={errors.phone}
        />
        <Input
          label="Date of Birth"
          id="dob"
          type="date"
          value={data.dob}
          onChange={set('dob')}
          required
          error={errors.dob}
        />
        <Select
          label="Program Applying For"
          id="program"
          value={data.program}
          onChange={set('program')}
          options={programs}
          required
          error={errors.program}
        />
        <RadioGroup
          label="Gender"
          name="gender"
          options={["Male", "Female", "Other"]}
          value={data.gender}
          onChange={set('gender')}
          required
          error={errors.gender}
        />
      </div>

      <Textarea
        label="Address"
        id="address"
        value={data.address}
        onChange={set('address')}
        placeholder="House No, Street, City, State, ZIP"
        required
        error={errors.address}
      />

      <Input
        label="Parent/Guardian Name"
        id="guardianName"
        value={data.guardianName}
        onChange={set('guardianName')}
        placeholder="Jane Doe"
        error={errors.guardianName}
      />

      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={!!data.terms}
          onChange={(e) => setData((p) => ({ ...p, terms: e.target.checked }))}
          className="mt-1.5"
        />
        <span className="text-sm text-gray-700">
          I confirm that the information provided is accurate and I agree to the terms.
          <span className="text-red-500"> *</span>
        </span>
      </label>
      {errors.terms && <p className="text-xs text-red-600 -mt-2">{errors.terms}</p>}

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={!isFormValid || submitting}
          className="inline-flex justify-center items-center gap-2 rounded-lg bg-blue-600 text-white font-medium px-4 py-2.5 disabled:opacity-50 hover:bg-blue-700 transition"
        >
          {submitting ? 'Submitting...' : 'Submit Application'}
        </button>
        <button
          type="button"
          onClick={() => setData({
            fullName: '', email: '', phone: '', dob: '', program: '', gender: '', address: '', guardianName: '', terms: false
          })}
          className="inline-flex justify-center items-center gap-2 rounded-lg border bg-white text-gray-700 font-medium px-4 py-2.5 hover:bg-gray-50 transition"
        >
          Reset
        </button>
      </div>
    </form>
  )
}

export default FormSection
