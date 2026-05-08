import PricingCard from './PricingCard'

const plans = [
  {
    name: 'Free',
    price: '0',
    period: '/month',
    description: 'Get started with basic features.',
    highlight: false,
    badge: null,
    features: [
      'Articulate assistant',
      'Upload up to 5 files',
      'Flashcards & quizzes',
      'Basic summaries',
    ],
    cta: 'Get Started',
    ctaStyle: 'outline',
  },
  {
    name: 'Pro',
    price: '9.99',
    period: '/mo',
    description: 'Unlock powerful features and save time.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Unlimited file uploads',
      'Advanced AI models',
      'Priority processing',
      'Export and organize',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'solid',
  },
  {
    name: 'Premium',
    price: '19.99',
    period: '/month',
    description: 'Full power, start anytime.',
    highlight: false,
    badge: null,
    features: [
      'Everything in pro',
      'Team collaboration',
      'Advanced analytics',
      'Dedicated support',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'outline',
  },
]

export default function PricingSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Subtle dot background */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pdots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#7c3aed" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pdots)" />
        </svg>
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-purple-100 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Simple Transparent{' '}
            <span className="text-purple-600">Pricing</span>
          </h1>
          <p className="text-gray-500 text-base max-w-sm mx-auto">
            Choose the plan that's right for you. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} delay={i + 1} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-400 mt-10 fade-in-up stagger-5">
          All plans include enterprise-grade security and privacy.
        </p>
      </div>
    </section>
  )
}