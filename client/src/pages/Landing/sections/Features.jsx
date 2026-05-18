import studyMaterialIcon from '../../../assets/study material icon.png';
import smartFlashcardsIcon from '../../../assets/Smart flashcards.png';
import doneIcon from '../../../assets/done icon.png';
import progressIcon from '../../../assets/progress icon.png';
import previewImage from '../../../assets/Rectangle 30.png';
import styles from './Features.module.css';

/**
 * Features — "Everything you need to Study Better" section
 *
 * Layout (matches Figma):
 *  Left:  vertical list of 4 features (icon + title + description)
 *  Right: floating UI preview cards image
 */

const FEATURES = [
  {
    icon: studyMaterialIcon,
    alt: 'AI Study Materials',
    title: 'AI-Generated Study Materials',
    description: 'Get structured notes, summaries, and key points instantly.',
  },
  {
    icon: smartFlashcardsIcon,
    alt: 'Smart Flashcards',
    title: 'Smart Flashcards',
    description: 'AI creates flashcards that adapt to your content.',
  },
  {
    icon: doneIcon,
    alt: 'Quizzes',
    title: 'Quizzes & Practice Tests',
    description: 'Test your knowledge with AI-generated quizzes.',
  },
  {
    icon: progressIcon,
    alt: 'Progress Tracking',
    title: 'Progress Tracking',
    description: 'Monitor your progress and stay motivated.',
  },
];

const Features = () => {
  return (
    <section id="features" className={`section ${styles.features}`}>
      <div className="container">

        {/* Section header */}
        <div className={styles.header}>
          <span className={styles.sectionTag}>POWERFUL FEATURES</span>
          <h2 className={styles.title}>
            Everything you need to{' '}
            <span className="text-purple">Study Better</span>
          </h2>
        </div>

        {/* Two column layout */}
        <div className={styles.body}>

          {/* Left: feature list */}
          <div className={styles.featureList}>
            {FEATURES.map((feature) => (
              <div key={feature.title} className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <img src={feature.icon} alt={feature.alt} className={styles.featureIcon} />
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.description}</p>
                </div>
              </div>
            ))}

            {/* Explore button */}
            <button className={styles.exploreBtn}>Explore All Features</button>
          </div>

          {/* Right: preview cards image */}
          <div className={styles.previewSide}>
            <img
              src={previewImage}
              alt="StudyPath AI feature previews"
              className={styles.previewImage}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;