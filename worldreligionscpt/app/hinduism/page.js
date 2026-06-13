import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Hinduism | Religion CPT',
  description: 'A travel brochure on India, the birthplace of Hinduism.',
};

export default function Hinduism() {
  return (
    <div data-faith="hinduism" data-faith-immersive>
      {/* Hero */}
      <section className="faith-hero">
        <div className="pattern-rays" />
        <Link href="/" className="faith-hero-back">← All faiths</Link>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="faith-hero-glyph">ॐ</span>
          <span className="faith-hero-native">Dharma</span>
          <span className="faith-hero-name">Hinduism</span>
          <p className="faith-hero-desc">
            A travel brochure on India, the birthplace of Hinduism and home to over a billion Hindus.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="stat-plinth" data-faith="hinduism">
        <div className="stat-row">
          <div className="stat-item">
            <span className="stat-value">4,000+</span>
            <span className="stat-label">Years of tradition</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">1.4B</span>
            <span className="stat-label">Adherents worldwide</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">The Vedas</span>
            <span className="stat-label">Principal texts</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">India</span>
            <span className="stat-label">Spiritual homeland</span>
          </div>
        </div>
      </div>

      {/* Assignment label */}
      <div style={{ textAlign: 'center', padding: 'var(--space-7) var(--gutter) 0' }}>
        <span className="eyebrow left" style={{ justifyContent: 'center' }}>Travel Brochure (India)</span>
      </div>

      {/* The Travel Brochure centerpiece */}
      <section className={styles.brochureSection}>
        <figure className={styles.brochureFigure}>
          <Image
            src="/images/hinduism/travel-brochure.jpg"
            alt="Travel brochure on India, the birthplace of Hinduism"
            width={1999}
            height={1545}
            className={styles.brochureImg}
            priority
          />
          <figcaption className={styles.brochureCaption}>
            My travel brochure on India, the birthplace of Hinduism.
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
