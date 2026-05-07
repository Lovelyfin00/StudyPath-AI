import styles from './Footer.module.css';

/**
 * Footer — Site footer
 * 4-column layout: Product, Explore, Company, Subscribe
 * Matches the design from Figma
 */

const FOOTER_LINKS = {
  Product: ['Automation', 'Data Governance', 'Virtual Users', 'Behavioural Reports', 'Connect'],
  Explore: ['Resources', 'Blog', 'Partners', 'Discussions'],
  Company: ['About', 'Careers', 'Contact us'],
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">

        {/* Main footer grid */}
        <div className={styles.grid}>

          {/* Logo + subscribe */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span>📘</span> StudyPath AI
            </div>
            <p className={styles.brandDesc}>
              Turn your study materials into a complete structured learning system.
            </p>

            {/* Email subscribe */}
            <div className={styles.subscribe}>
              <input
                type="email"
                placeholder="Enter address"
                className={styles.emailInput}
              />
              <button className={styles.subscribeBtn}>→</button>
            </div>
          </div>

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

        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© {new Date().getFullYear()} StudyPath AI</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Terms</a>
            <a href="#" className={styles.legalLink}>Privacy</a>
            <a href="#" className={styles.legalLink}>Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
