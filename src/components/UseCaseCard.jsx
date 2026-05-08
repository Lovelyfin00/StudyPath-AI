export default function UseCaseCard({ icon: Icon, title, description, delay }) {
  return (
    <div
      className={`fade-in-up stagger-${delay} group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
    >
      {/* Icon */}
      <div className="mb-4 w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-200">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}
