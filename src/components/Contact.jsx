import { useState } from 'react'
import { CONTACT_DETAILS } from '../data'
import styles from './Contact.module.css'

const INITIAL_FORM = { firstName: '', lastName: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(INITIAL_FORM)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="section-inner">
        <div className="section-header">
          <span className="tag">Reach Us</span>
          <h2>Collaborate With Us</h2>
          <p>Support artisans, partner with us, or source traditional crafts.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.info}>
            <h3>Craft Support Center</h3>
            <p>
              We coordinate directly with artisan communities and self-help groups across India.
            </p>
            {CONTACT_DETAILS.map((d) => (
              <div className={styles.detail} key={d.text}>
                <span>{d.icon}</span>
                <span>{d.text}</span>
              </div>
            ))}
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.submit}>
              {submitted ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
