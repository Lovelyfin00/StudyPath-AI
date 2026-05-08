import studypathLogo from '../../assets/studypathailogo.png';
import styles from './Footer.module.css';

/**
 * Footer — Site footer
 * Layout matches Figma:
 *  - Top: 4 columns (Product, Explore, Company, Subscribe)
 *  - Bottom bar: logo left | Terms/Privacy/Cookies center | Social icons right
 */

const FOOTER_LINKS = {
  Product: ['Autocapture', 'Data Governance', 'Virtual Events', 'Virtual Users', 'Behavioral Analytics', 'Connect'],
  Explore: ['Resources', 'Blog', 'Documents'],
  Company: ['About us', 'Partners', 'Customers', 'Contact us'],
};

const SOCIAL_ICONS = [
  { label: 'LinkedIn', icon: 'in', href: '#' },
  { label: 'Facebook', icon: 'f',  href: '#' },
  { label: 'Twitter',  icon: '𝕏',  href: '#' },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">

        {/* Top grid: links + subscribe */}
        <div className={styles.grid}>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className={styles.linkCol}>
              <h4 className={styles.colHeading}>{heading}</h4>
              <ul className={styles.linkList}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.footerLink}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe column */}
          <div className={styles.subscribeCol}>
            <h4 className={styles.colHeading}>Subscribe</h4>
            <div className={styles.subscribeRow}>
              <input
                type="email"
                placeholder="Email address"
                className={styles.emailInput}
              />
              <button className={styles.subscribeBtn}>→</button>
            </div>
            <p className={styles.subscribeDesc}>
              Stay up to date with the latest StudyPath AI features, tips, and student success stories.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom bar: logo | legal | social */}
        <div className={styles.bottomBar}>

          {/* Logo */}
          <a href="/" className={styles.logoLink}>
            <img src={studypathLogo} alt="StudyPath AI" className={styles.logoImg} />
          </a>

          {/* Legal links */}
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Terms</a>
            <a href="#" className={styles.legalLink}>Privacy</a>
            <a href="#" className={styles.legalLink}>Cookies</a>
          </div>

          {/* Social icons */}
          <div className={styles.socialIcons}>
            {SOCIAL_ICONS.map((s) => (
              <a key={s.label} href={s.href} className={styles.socialIcon} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;