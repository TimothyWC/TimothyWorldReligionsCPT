import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Hinduism — Religion CPT',
  description: 'A travel brochure exploring Hinduism in India — history, sacred geography, and the two greatest pilgrimage sites.',
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
          <span className="faith-hero-native">सनातन धर्म · Sanātana Dharma</span>
          <span className="faith-hero-name">Hinduism</span>
          <p className="faith-hero-desc">
            The eternal dharma — one of the oldest living religions on Earth, shaped by
            4,000 years of sacred geography, devotion, and the rhythms of Indian civilization.
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
      <div style={{ textAlign: 'center', padding: 'var(--space-6) var(--gutter) 0' }}>
        <span className="eyebrow left" style={{ justifyContent: 'center' }}>Travel Brochure — India</span>
      </div>

      {/* About India */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-grid">
            <div className="content-text">
              <h2>About India</h2>
              <p>
                India is a country in South Asia that borders Pakistan, China, Nepal, and Bangladesh.
                The climate is super diverse — in the north you have the snowy Himalayan mountains,
                in the south there are tropical beaches in Goa, and in the west lies the dry Thar Desert.
              </p>
              <p>
                The geography is just as varied, with the sacred Ganges River, huge plains, jungles,
                and coastal regions on both sides of the country. India is the most populated country
                in the world with around 1.4 billion people, and about 80% of them are Hindu — making
                it the largest Hindu population on Earth by a long shot.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/hinduism/varanasi-pilgrims.webp"
                alt="Pilgrims at the Ganges River, Varanasi"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="content-section" style={{ background: 'var(--faith-surface)' }}>
        <div className="content-section-inner">
          <div className="content-full">
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <span className="eyebrow left">History</span>
            </div>
            <h2>History of Hinduism in India</h2>
            <p>
              Hinduism is one of the oldest religions in the world with roots going back over 4,000 years
              to the Indus Valley Civilization. The oldest sacred texts of Hinduism, called the Vedas, were
              written during the Vedic Period (1500–500 BCE). What makes Hinduism different from most religions
              is that there is no single founder and no central authority like a pope — it just grew naturally
              out of Indian culture over thousands of years.
            </p>
            <p>
              Today Hinduism is a huge part of daily life in India, from food choices like vegetarianism,
              to festivals like Diwali and Holi, to even the way people greet each other with "Namaste."
            </p>
          </div>
        </div>
      </section>

      {/* Holy Site 1 — Varanasi */}
      <section className="content-section">
        <div className="content-section-inner">
          <div style={{ marginBottom: 'var(--space-5)' }}>
            <span className="eyebrow left">Holy Site #1</span>
          </div>
          <div className="content-grid">
            <div className="content-text">
              <h2>Varanasi — Kashi Vishwanath Temple</h2>
              <p>
                Varanasi is considered the holiest city in Hinduism and is also one of the oldest
                continuously inhabited cities in the world, dating back more than 3,000 years.
                The city sits right on the banks of the Ganges River, which Hindus believe is sacred
                and can wash away your sins.
              </p>
              <p>
                The most important place in Varanasi is the Kashi Vishwanath Temple, dedicated to the
                god Shiva, and it is one of the 12 Jyotirlingas — the most sacred shrines of Shiva.
                Hindus believe that if you die in Varanasi and get cremated on the ghats (the steps
                leading down into the river), your soul achieves <em>moksha</em>: escape from samsara,
                the endless cycle of death and rebirth.
              </p>
              <p>
                Every evening, thousands of pilgrims gather along the ghats for the Ganga Aarti,
                a fire ceremony that honours the river goddess Ganga.
              </p>
            </div>
            <div className={styles.siteImages}>
              <div className="content-image" style={{ height: 260 }}>
                <Image
                  src="/images/hinduism/kashi-vishwanath-temple.jpg"
                  alt="Kashi Vishwanath Temple, Varanasi"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="content-image" style={{ height: 200, marginTop: 'var(--space-4)' }}>
                <Image
                  src="/images/hinduism/ganga-aarti-varanasi.jpeg"
                  alt="Ganga Aarti ceremony at Dashashwamedh Ghat, Varanasi"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holy Site 2 — Tirumala */}
      <section className="content-section" style={{ background: 'var(--faith-surface)' }}>
        <div className="content-section-inner">
          <div style={{ marginBottom: 'var(--space-5)' }}>
            <span className="eyebrow left">Holy Site #2</span>
          </div>
          <div className="content-grid" style={{ direction: 'rtl' }}>
            <div className="content-text" style={{ direction: 'ltr' }}>
              <h2>Tirumala Venkateswara Temple</h2>
              <p>
                This temple is located on top of a mountain in the southern state of Andhra Pradesh
                and is dedicated to Lord Venkateswara — a form of the god Vishnu. It is actually the
                most visited religious site in the entire world, with 30 to 40 million pilgrims every
                year, which is way more than Mecca or the Vatican.
              </p>
              <p>
                A lot of pilgrims shave their heads as an offering of humility to the god and donate
                huge amounts of money and gold to the temple, which makes it one of the wealthiest
                temples on Earth. The temple is the perfect example of <em>bhakti</em> — the Hindu
                concept of pure devotional love for a personal god. Some devotees wait in line for
                over 12 hours just to get a few seconds of <em>darshan</em> (the sacred viewing of
                the deity), which shows how serious the devotion is at this place.
              </p>
            </div>
            <div className={styles.siteImages} style={{ direction: 'ltr' }}>
              <div className="content-image" style={{ height: 260 }}>
                <Image
                  src="/images/hinduism/tirumala-temple.jpg"
                  alt="Tirumala Venkateswara Temple, Andhra Pradesh"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="content-image" style={{ height: 200, marginTop: 'var(--space-4)' }}>
                <Image
                  src="/images/hinduism/tirumala-crowd.jpeg"
                  alt="Pilgrims gathered at Tirumala Temple"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ background: 'var(--parchment-100)', padding: 'var(--space-9) var(--gutter)' }}>
        <div className="pull-quote">
          <div className="ornament">ॐ</div>
          <blockquote>
            "Hinduism is a huge part of daily life in India — from the sacred Ganges, to
            the fire of the Ganga Aarti, to the 12-hour wait just for a few seconds of
            darshan. Devotion here isn't occasional. It's everything."
          </blockquote>
          <cite>Personal Reflection — Religion CPT</cite>
        </div>
      </section>
    </div>
  );
}
