import styles from './Button.module.css';

/**
 * Button — Reusable button component
 *
 * Props:
 *  - variant: 'primary' | 'outline' | 'ghost'  (default: 'primary')
 *  - size:    'sm' | 'md' | 'lg'               (default: 'md')
 *  - onClick: function
 *  - children: button label / content
 *  - className: extra class names if needed
 */
const Button = ({ variant = 'primary', size = 'md', onClick, children, className = '' }) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
