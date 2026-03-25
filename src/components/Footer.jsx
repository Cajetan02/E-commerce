import { FOOTER_COLS } from '../data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              KARIGAR<span>.</span>
            </a>
            <p>
              KARIGAR is a social commerce platform preserving India's traditional crafts by
              connecting rural artisans directly to digital markets and ensuring fair compensation.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div className={styles.col} key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2026 KARIGAR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
