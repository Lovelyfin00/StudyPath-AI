import styles from './UseCases.module.css';

/**
 * UseCases — Who is StudyPath AI for?
 * Shows 5 user type cards: Students, Educators, Professionals, Researchers, Lifelong Learners, Teams
 */

const USE_CASES = [
  {
    icon: '🎓',
    title: 'Students',
    description: 'Summarise lecture notes and create flashcards and quizzes work in seconds.',
  },
  {
    icon: '👨‍🏫',
    title: 'Educators',
    description: 'Create structured study materials for students and qualify reports faster.',
  },
  {
    icon: '💼',
    title: 'Professionals',
    description: 'Stay ahead in your field by quickly learning and summarising industry reports.',
  },
  {
    icon: '🔬',
    title: 'Researchers',
    description: 'Analyse complex topics and find key information from your research faster.',
  },
  {
    icon: '📚',
    title: 'Lifelong Learners',
    description: 'Learn any topic and keep track of your personal learning journey.',
  },
  {
    icon: '👥',
    title: 'Teams',
    description: 'Collaborate and share knowledge with your team faster.',
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className={`section ${styles.useCases}`}>
      <div className="container">

        {/* Section header */}
        <div className={`text-center ${styles.header}`}>
          <h2 className={styles.title}>
            <span className="text-purple">Use Cases</span>
          </h2>
          <p className={styles.subtitle}>
            StudyPath AI helps students, educators, and professionals learn and create more efficiently.
          </p>
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {USE_CASES.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className={styles.banner}>
          <p className={styles.bannerText}>See how StudyPath AI can work for you</p>
          <button className={styles.bannerBtn}>Get Started Free →</button>
        </div>

      </div>
    </section>
  );
};

export default UseCases;
