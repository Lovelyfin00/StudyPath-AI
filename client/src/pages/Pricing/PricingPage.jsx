import { Link } from 'react-router-dom';

/**
 * PricingPage — Standalone Pricing page
 * Route: /pricing
 * Built with Tailwind CSS
 */

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Get started with basic features',
    cta: 'Get Started',
    ctaStyle: 'outline',
    popular: false,
    features: [
      'AI study assistant!',
      'Upload up to 5 files',
      'Flashcards & quizzes',
      'Basic summaries',
    ],
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    description: 'Unlock powerful features and save time',
    cta: 'Start Free Trial',
    ctaStyle: 'solid',
    popular: true,
    features: [
      'Unlimited file uploads',
      'Advanced AI models',
      'Priority processing',
      'Export and organize',
    ],
  },
  {
    name: 'Premium',
    price: '$19.99',
    period: '/month',
    description: 'For power users and teams.',
    cta: 'Start Free Trial',
    ctaStyle: 'outline',
    popular: false,
    features: [
      'Everything in pro',
      'Team collaboration',
      'Advanced analytics',
      'Dedicated support',
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="py-16 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Simple Transparent{' '}
          <span className="text-purple-600">Pricing</span>
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          Choose the plan thats right for you. Upgrade, downgrade, or cancel anytime.
        </p>
      </div>

      {/* Pricing cards */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 flex flex-col gap-6 transition-all duration-200
                ${plan.popular
                  ? 'border-2 border-purple-600 shadow-xl shadow-purple-100 md:-mt-4 md:mb-4'
                  : 'border border-gray-200 shadow-sm hover:shadow-md'
                }`}
            >
              {/* Most Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-purple-600 font-bold text-base flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200
                  ${plan.ctaStyle === 'solid'
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-transparent text-purple-600 border-2 border-purple-600 hover:bg-purple-50'
                  }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <p className="text-center text-gray-700 font-semibold text-sm pb-16 px-4">
        All plans include enterprise-grade security and privacy.
      </p>

    </div>
  );
};

export default PricingPage;
