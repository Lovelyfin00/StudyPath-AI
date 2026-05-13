import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import studypathLogo from '../../assets/studypathailogo.png';
import styles from './Navbar.module.css';

/**
 * Navbar — Top navigation bar
 * isRoute: true  → React Router <Link> (navigates to a new page)
 * isRoute: false → plain <a> (scrolls within the same page)
 */

const NAV_LINKS = [
  { label: 'Features',     href: '/features',    isRoute: true  },
  { label: 'How It Works', href: '#how-it-works', isRoute: false },
  { label: 'Use Cases',    href: '/use-cases',   isRoute: true  },
  { label: 'Pricing',      href: '/pricing',     isRoute: true  },
  { label: 'Resources',    href: '#resources',   isRoute: false },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img src={studypathLogo} alt="StudyPath AI" className={styles.logoImg} />
        </Link>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {link.isRoute ? (
                <Link to={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              )}
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
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
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