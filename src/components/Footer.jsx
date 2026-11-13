import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaCalendarCheck } from 'react-icons/fa'
import { trackButtonClick } from '../lib/tracking'
import styles from './footer.module.css'

const WHATSAPP_NUMBER = '14356667674'
const WHATSAPP_DISPLAY = '+1 435 666 7674'
const EMAIL = 'support@flashfirejobs.com'
const WEBSITE = 'https://www.flashfirejobs.com'

export default function Footer({ content }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I'm interested in Flashfire's AI-powered job search automation. Can you help me get started?"
  )}`

  function handleBook() {
    trackButtonClick('Book Free Strategy Call', 'footer')
    document.getElementById('capture')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{content.heading}</h2>
        <p className={styles.sub}>
          {content.sub}
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <FaPhoneAlt className={styles.icon} />
            <h3>Call Us</h3>
            <a href={`tel:+${WHATSAPP_NUMBER}`}>{WHATSAPP_DISPLAY}</a>
          </div>

          <div className={styles.card}>
            <FaWhatsapp className={`${styles.icon} ${styles.wa}`} />
            <h3>WhatsApp Support</h3>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a>
          </div>

          <div className={styles.card}>
            <FaEnvelope className={styles.icon} />
            <h3>Email &amp; Web</h3>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={WEBSITE} target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>

          <button type="button" className={`${styles.card} ${styles.cardLight}`} onClick={handleBook}>
            <FaCalendarCheck className={styles.icon} />
            <h3>Free Strategy Call</h3>
            <span className={styles.cardCta}>Book your slot →</span>
          </button>
        </div>

      </div>

      <div className={styles.bar}>
        <span>© 2026 FlashFire Jobs. All rights reserved.</span>
        <a href={`mailto:${EMAIL}`}>Contact Support</a>
      </div>
    </footer>
  )
}
