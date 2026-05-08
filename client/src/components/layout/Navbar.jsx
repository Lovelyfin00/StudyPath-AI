import { useState } from 'react';
import Button from '../common/Button';
import studypathLogo from '../../assets/studypathailogo.png';
import styles from './Navbar.module.css';

/**
 * Navbar — Top navigation bar
 * Uses the official StudyPath AI logo image
 * Includes nav links, login + CTA button, and mobile hamburger menu
 */

const NAV_LINKS = [
  { label: 'Features',     href: '#features'     },
  { label: 'How It Works', href: '#how-it-works'  },
  { label: 'Use Cases',    href: '#'     },
  { label: 'Pricing',      href: '#pricing'       },
  { label: 'Resources',    href: '#resources'     },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>

        {/* Logo — image already includes the StudyPath AI text */}
        <a href="/" className={styles.logo}>
          <img src={studypathLogo} alt="StudyPath AI" className={styles.logoImg} />
        </a>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Buttons */}
        <div className={styles.navActions}>
          <Button variant="ghost" size="sm">Log In</Button>
          <Button variant="primary" size="sm">Get Started Free</Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <Button variant="outline" size="md">Log In</Button>
            <Button variant="primary" size="md">Get Started Free</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;