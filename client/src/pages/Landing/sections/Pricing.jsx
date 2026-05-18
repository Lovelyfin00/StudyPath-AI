import styles from './Pricing.module.css';

/**
 * Pricing — 3 tier pricing section
 * Free / Pro / Premium — matching the Figma design
 * The "Pro" plan is highlighted as "Most Popular"
 */

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Get started with basic study tools.',
    cta: 'Get Started',
    ctaVariant: 'outline',
    popular: false,
    features: [
      'AI study available',
      'Upload up to 3 files',
      'Flashcards & quizzes',
      'Basic summaries',
    ],
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    description: 'Unlock power for advanced study workflows.',
    cta: 'Start Free Trial',
    ctaVariant: 'primary',
    popular: true,
    features: [
      'Unlimited file uploads',
      'Advanced AI modules',
      'Priority processing',
      'Advanced analytics',
      'Export & organise',
    ],
  },
  {
    name: 'Premium',
    price: '$19.99',
    period: '/month',
    description: 'For power users and teams.',
    cta: 'Start Free Trial',
    ctaVariant: 'outline',
    popular: false,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Advanced analytics',
      'Dedicated support',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className={`section ${styles.pricing}`}>
      <div className="container">

        {/* Header */}
        <div className={`text-center ${styles.header}`}>
          <h2 className={styles.title}>
            Simple Transparent <span className="text-purple">Pricing</span>
          </h2>
          <p className={styles.subtitle}>
            Choose the plan that's right for you. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}

              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.planPrice}>
                {plan.price}
                <span className={styles.planPeriod}>{plan.period}</span>
              </div>
              <p className={styles.planDesc}>{plan.description}</p>

              <ul className={styles.featureList}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`${styles.planBtn} ${plan.popular ? styles.planBtnPrimary : styles.planBtnOutline}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className={`text-center ${styles.footerNote}`}>
          All plans include enterprise-grade security and privacy.
        </p>

      </div>
    </section>
  );
};

export default Pricing;
