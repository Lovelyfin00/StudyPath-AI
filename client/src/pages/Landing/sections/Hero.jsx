import Button from '../../../components/common/Button';
import studentStudying from '../../../assets/studentstudying.png';
import unilagLogo from '../../../assets/unilaglogo.png';
import berkeleyLogo from '../../../assets/berkeleyuniversitylogo.png';
import stanfordLogo from '../../../assets/stanforduniversitylogo.png';
import unibadanLogo from '../../../assets/unibadanlogo.png';
import harvardLogo from '../../../assets/havardUniversitylogo.png';
import styles from './Hero.module.css';

/**
 * Hero — Landing page hero section
 * Layout:
 *  - Top: two columns (text left, image right)
 *  - Bottom: full-width university logos bar
 */

const UNIVERSITY_LOGOS = [
  { src: unilagLogo,    alt: 'University of Lagos'  },
  { src: berkeleyLogo,  alt: 'Berkeley University'  },
  { src: stanfordLogo,  alt: 'Stanford University'  },
  { src: unibadanLogo,  alt: 'University of Ibadan' },
  { src: harvardLogo,   alt: 'Harvard University'   },
];

const Hero = () => {
  return (
    <section className={styles.hero}>

      {/* Top: headline + image */}
      <div className={`container ${styles.inner}`}>

        {/* Left: Text content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            AI-Powered Study Assistant
          </div>

          <h1 className={styles.headline}>
            Turn Your Notes Into{' '}
            <span className={styles.highlight}>Structured Study Success</span>
          </h1>

          <p className={styles.subtext}>
            Upload your study materials and let AI create structured
            modules, notes, quizzes, and flashcards in seconds.
          </p>

          <div className={styles.ctaGroup}>
            <Button variant="primary" size="lg">Get Started Free →</Button>
          </div>

          <div className={styles.stats}>
            <div className={styles.statPill}>✓ No credit card required</div>
            <div className={styles.statPill}>⏱ Save 10+ hours of study time</div>
            <div className={styles.statPill}>👥 Trusted by 15k+ students</div>
          </div>
        </div>

        {/* Right: Student image */}
        <div className={styles.visual}>
          <img
            src={studentStudying}
            alt="Student studying with StudyPath AI"
            className={styles.heroImage}
          />
        </div>
      </div>

      {/* Bottom: Full-width university logos bar */}
      <div className={styles.trustedBar}>
        <div className={`container ${styles.trustedInner}`}>
          <p className={styles.trustedLabel}>Trusted by students from</p>
          <div className={styles.trustedLogos}>
            {UNIVERSITY_LOGOS.map((uni) => (
              <img
                key={uni.alt}
                src={uni.src}
                alt={uni.alt}
                className={styles.trustedLogo}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;