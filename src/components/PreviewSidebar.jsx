function FieldRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b last:border-none">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-gray-900 font-medium text-sm text-right break-words max-w-[60%]">
        {value || '—'}
      </span>
    </div>
  )
}

function PreviewSidebar({ data }) {
  return (
    <aside className="bg-white rounded-xl border shadow-sm p-4 sm:p-5">
      <h3 className="text-base font-semibold text-gray-900 mb-3">Application Preview</h3>
      <div className="space-y-2">
        <FieldRow label="Full Name" value={data.fullName} />
        <FieldRow label="Email" value={data.email} />
        <FieldRow label="Phone" value={data.phone} />
        <FieldRow label="Date of Birth" value={data.dob} />
        <FieldRow label="Gender" value={data.gender} />
        <FieldRow label="Program" value={data.program} />
        <FieldRow label="Address" value={data.address} />
        <FieldRow label="Guardian" value={data.guardianName} />
      </div>
      <p className="text-xs text-gray-500 mt-4">
        Review your details before submitting. You can still make changes.
      </p>
    </aside>
  )
}

export default PreviewSidebar
