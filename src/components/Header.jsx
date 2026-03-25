import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NAV_LINKS } from '../data'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const cartTotal = useSelector((state) => state.cart.totalItems)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          KARIGAR<span>.</span>
        </Link>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.mobileOpen : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link to={link.path} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className={styles.cartIcon}>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              🛒
              {cartTotal > 0 && <span className={styles.badge}>{cartTotal}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
