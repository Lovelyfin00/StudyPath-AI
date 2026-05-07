import styles from './CTA.module.css';

/**
 * CTA — "Ready to transform the way you study?" section
 * Dark background banner with bullet points and a CTA button
 */

const BENEFITS = [
  'Save hours of study time',
  'Ace your exams with confidence',
  'Boost your understanding',
];

const CTA = () => {
  return (
    <section className={`section ${styles.cta}`}>
      <div className="container">
        <div className={styles.inner}>

          {/* Left text */}
          <div className={styles.content}>
            <h2 className={styles.title}>
              Ready to transform the way you study?
            </h2>
            <p className={styles.subtitle}>
              Join thousands of students who are already studying smarter with StudyPath AI.
            </p>
          </div>

          {/* Middle benefits */}
          <ul className={styles.benefits}>
            {BENEFITS.map((b) => (
              <li key={b} className={styles.benefit}>
                <span className={styles.checkIcon}>✓</span>
                {b}
              </li>
            ))}
          </ul>

          {/* Right CTA */}
          <div className={styles.action}>
            <button className={styles.ctaBtn}>Get Started Free →</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
