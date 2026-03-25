import { FEATURES } from '../data'
import styles from './Features.module.css'

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.grid}>
        {FEATURES.map((f) => (
          <div className={styles.item} key={f.title}>
            <div className={styles.icon}>{f.icon}</div>
            <div className={styles.title}>{f.title}</div>
            <div className={styles.desc}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
