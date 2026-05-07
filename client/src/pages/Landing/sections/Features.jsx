import styles from './Features.module.css';

/**
 * Features — "Everything you need to Study Better" section
 * Shows the 4 core features with icons and descriptions
 * Matches the design's left-text + right-preview layout
 */

const FEATURES = [
  {
    icon: '🧠',
    tag: 'AI-Generated Study Materials',
    title: 'Turn Any Content Into Smart Study Tools',
    description:
      'AI creates summaries, flashcards, and actions in seconds — designed to help you understand and retain more.',
    preview: (
      <div className={styles.previewModules}>
        {['Introduction to the topic', 'Core Concepts', 'Key Definitions', 'Summary'].map((m) => (
          <div key={m} className={styles.previewModule}>
            <span className={styles.previewDot} />
            {m}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: '🃏',
    tag: 'Smart Flashcards',
    title: 'Learn faster with AI-powered revision cards',
    description:
      'Turn your notes into interactive flashcards tailored to your study needs, improving memory efficiency.',
    preview: (
      <div className={styles.previewFlashcard}>
        <p className={styles.flashcardQ}>What is the powerhouse of the cell?</p>
        <div className={styles.flashcardDivider} />
        <p className={styles.flashcardA}>The Mitochondria</p>
      </div>
    ),
  },
  {
    icon: '📝',
    tag: 'Quizzes & Practice Tests',
    title: 'Test your knowledge with interactive quizzes',
    description:
      'AI-designed quizzes to strengthen your understanding. Practice regularly, track your progress and improve your mastery over time.',
    preview: (
      <div className={styles.previewQuiz}>
        <p className={styles.quizQ}>What is the powerhouse of the cell?</p>
        {['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi Apparatus'].map((opt, i) => (
          <div key={opt} className={`${styles.quizOption} ${i === 1 ? styles.quizCorrect : ''}`}>
            <span className={styles.quizLetter}>{['A','B','C','D'][i]}</span>
            {opt}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: '📈',
    tag: 'Progress Tracking',
    title: 'Understand how well you\'re performing',
    description:
      'Real-time learning progress insights. Stay motivated by visualising your progress and identifying areas to improve.',
    preview: (
      <div className={styles.previewProgress}>
        {[
          { label: 'Module 1', pct: 100 },
          { label: 'Module 2', pct: 72 },
          { label: 'Module 3', pct: 45 },
          { label: 'Module 4', pct: 10 },
        ].map(({ label, pct }) => (
          <div key={label} className={styles.progressRow}>
            <span className={styles.progressLabel}>{label}</span>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: `${pct}%` }} />
            </div>
            <span className={styles.progressPct}>{pct}%</span>
          </div>
        ))}
      </div>
    ),
  },
];

const Features = () => {
  return (
    <section id="features" className={`section ${styles.features}`}>
      <div className="container">

        {/* Section header */}
        <div className={`text-center ${styles.header}`}>
          <p className={styles.sectionTag}>POWERFUL FEATURES</p>
          <h2 className={styles.title}>
            Everything you need to{' '}
            <span className="text-purple">Study Better</span>
          </h2>
        </div>

        {/* Feature rows — alternate left/right layout */}
        <div className={styles.featureList}>
          {FEATURES.map((feature, index) => (
            <div
              key={feature.tag}
              className={`${styles.featureRow} ${index % 2 !== 0 ? styles.reversed : ''}`}
            >
              {/* Text side */}
              <div className={styles.featureText}>
                <span className={styles.featureTag}>
                  {feature.icon} {feature.tag}
                </span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>

              {/* Preview side */}
              <div className={styles.featurePreview}>
                {feature.preview}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center ${styles.bottomCta}`}>
          <button className={styles.exploreBtn}>Explore All Features →</button>
        </div>

      </div>
    </section>
  );
};

export default Features;
