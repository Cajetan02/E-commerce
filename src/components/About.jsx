import { STATS } from '../data'
import styles from './About.module.css'

export default function About() {
  return (
    <section style={{ padding: 0 }}>
      <div id="about" className={styles.about}>
        <div className={styles.imageWrap}>
          <img
            src="https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=800&q=80"
            alt="Indian artisan working"
          />
        </div>

        <div className={styles.content}>
          <span className={styles.tag}>Crafted in India – Direct From Artisans</span>

          <h1>Handmade by India's Master Artisans</h1>

          <p>
            KARIGAR connects traditional Indian craftsmen directly to modern buyers.
            Every product on our platform is handmade — not factory produced — by skilled
            artisans from rural craft clusters across India.
          </p>
          <p>
            From the deserts of Rajasthan to the weaving villages of West Bengal, each piece
            carries generations of knowledge, culture, and identity. When you purchase from
            KARIGAR, you are supporting a real artisan family.
          </p>

          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          <a href="#products" className="btn-primary">Explore Crafts</a>
          <a href="#contact" className="btn-outline">Contact the Artisans</a>
        </div>
      </div>
    </section>
  )
}
