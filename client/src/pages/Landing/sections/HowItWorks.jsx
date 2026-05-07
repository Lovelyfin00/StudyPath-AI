import styles from './HowItWorks.module.css';

/**
 * HowItWorks — 3-step explainer section
 * Shows the core user flow: Upload → AI processes → Study & Track
 */

const STEPS = [
  {
    number: '01',
    icon: '📤',
    title: 'Upload your materials',
    description:
      'Upload your notes, PDFs, slides, or any study material. We support all common file formats.',
  },
  {
    number: '02',
    icon: '⚙️',
    title: 'AI processes and organises',
    description:
      'Our AI analyses your content and creates structured modules, timelines, notes, quizzes, and guides.',
  },
  {
    number: '03',
    icon: '📊',
    title: 'Study and Track progress',
    description:
      'Follow your personalised study path and track your progress to achieve your academic goals.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={`section ${styles.howItWorks}`}>
      <div className="container">

        {/* Section header */}
        <div className={`text-center ${styles.header}`}>
          <h2 className={styles.title}>
            Learn smarter in <span className="text-purple">3 simple steps</span>
          </h2>
          <p className={styles.subtitle}>
            Go from raw study material to a full structured learning system — in seconds.
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {STEPS.map((step, index) => (
            <div key={step.number} className={styles.step}>
              {/* Connector line (between steps) */}
              {index < STEPS.length - 1 && (
                <div className={styles.connector} />
              )}

              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
