const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="#ede9fe" />
    <path
      d="M4.5 8.5L6.5 10.5L11.5 5.5"
      stroke="#7c3aed"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function PricingCard({ plan, delay }) {
  const { name, price, period, description, highlight, badge, features, cta, ctaStyle } = plan

  return (
    <div
      className={`
        fade-in-up stagger-${delay}
        relative flex flex-col rounded-2xl p-7 transition-all duration-300 group cursor-pointer
        bg-white border-2 border-gray-200 shadow-sm
        hover:border-purple-500 hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1
      `}
    >
      {/* Badge */}
      {badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-bold shadow-sm whitespace-nowrap">
          {badge}
        </span>
      )}

      {/* Plan name */}
      <h3 className="text-base font-bold text-gray-900 mb-3">{name}</h3>

      {/* Price */}
      <div className="flex items-end gap-1 mb-1">
        <span className="text-4xl font-extrabold text-gray-900 leading-none">
          ${price}
        </span>
        <span className="text-sm text-gray-400 mb-1">{period}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-6">{description}</p>

      {/* Divider */}
      <div className="border-t border-gray-100 mb-6" />

      {/* Features */}
      <ul className="space-y-3 flex-1 mb-8">
        {features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5 text-sm text-gray-600">
            <CheckIcon />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="#"
        className="block text-center rounded-xl px-5 py-3 text-sm font-bold transition-all duration-200 border border-gray-300 text-gray-700 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-sm"
      >
        {cta}
      </a>
    </div>
  )
}
