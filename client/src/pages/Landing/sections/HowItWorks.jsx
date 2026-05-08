import uploadIcon from '../../../assets/Upload icon.png';
import aiRotateIcon from '../../../assets/ai rotate icon.png';
import checkmarkIcon from '../../../assets/Checkmark icon.png';
import pdfIcon from '../../../assets/pdf icon.png';
import docxIcon from '../../../assets/Docx icon.png';
import pptIcon from '../../../assets/PPT icon.png';
import txtIcon from '../../../assets/Txt icon.png';
import moreBadge from '../../../assets/+More.png';
import styles from './HowItWorks.module.css';

/**
 * HowItWorks — 3-step explainer section
 * Step 1: Upload (with file type icons)
 * Step 2: AI processes
 * Step 3: Study & Track
 */

const STEPS = [
  {
    number: '01',
    icon: uploadIcon,
    iconAlt: 'Upload materials',
    title: 'Upload your materials',
    description: 'Upload your notes, PDF, slides or any other study materials.',
    extra: (
      <div className={styles.fileTypes}>
        <img src={pdfIcon}   alt="PDF"  className={styles.fileIcon} />
        <img src={docxIcon}  alt="DOCX" className={styles.fileIcon} />
        <img src={pptIcon}   alt="PPT"  className={styles.fileIcon} />
        <img src={txtIcon}   alt="TXT"  className={styles.fileIcon} />
        <img src={moreBadge} alt="+More" className={styles.fileIcon} />
      </div>
    ),
  },
  {
    number: '02',
    icon: aiRotateIcon,
    iconAlt: 'AI processing',
    title: 'AI processes and organising',
    description: 'Our AI analyzes your content and creates structured modules, notes, quizzes, and flashcards.',
    extra: null,
  },
  {
    number: '03',
    icon: checkmarkIcon,
    iconAlt: 'Study and track',
    title: 'Study and Track progress',
    description: 'Study interactive content and track your progress to achieve your academic goals.',
    extra: null,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={`section ${styles.howItWorks}`}>
      <div className="container">

        {/* Section header */}
        <div className={`text-center ${styles.header}`}>
          <span className={styles.sectionTag}>How It Works</span>
          <h2 className={styles.title}>
            Learn smarter in <span className="text-purple">3 simple steps</span>
          </h2>
          <p className={styles.subtitle}>
            Our AI does the heavy lifting, so you can focus on what matters — understanding and retaining.
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {STEPS.map((step, index) => (
            <div key={step.number} className={styles.stepWrapper}>

              {/* Connector line between cards */}
              {index < STEPS.length - 1 && (
                <div className={styles.connector} />
              )}

              {/* Floating icon above card */}
              <div className={styles.floatingIcon}>
                <img src={step.icon} alt={step.iconAlt} className={styles.stepIconImg} />
              </div>

              {/* Card */}
              <div className={styles.card}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                {step.extra}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;