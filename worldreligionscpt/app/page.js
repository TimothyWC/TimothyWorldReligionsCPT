import Link from 'next/link';
import styles from './page.module.css';

const faiths = [
  {
    key: 'hinduism',
    name: 'Hinduism',
    native: 'सनातन धर्म',
    glyph: 'ॐ',
    descriptor: 'The eternal dharma — one of the oldest living religions, rooted in 4,000 years of Indian civilization.',
    cta: 'Travel Brochure — India',
  },
  {
    key: 'buddhism',
    name: 'Buddhism',
    native: 'धर्म',
    glyph: '☸',
    descriptor: 'The path of awakening — liberation through mindfulness, awareness, and the cessation of suffering.',
    cta: 'TED Talk — Mindfulness',
  },
  {
    key: 'judaism',
    name: 'Judaism',
    native: 'יַהֲדוּת',
    glyph: '✡',
    descriptor: 'An ancient covenant — faith, law, and peoplehood woven through 3,500 years of history.',
    cta: 'Media Analysis — Shtisel',
  },
  {
    key: 'christianity',
    name: 'Christianity',
    native: 'Christianitas',
    glyph: '✝',
    descriptor: 'A faith of incarnation and beauty — truth expressed through art, architecture, and transcendent light.',
    cta: 'Art Analysis — The Beautiful',
  },
  {
    key: 'islam',
    name: 'Islam',
    native: 'الإسلام',
    glyph: '☪',
    descriptor: 'Submission and devotion — a faith of 1.8 billion, lived through discipline, prayer, and community.',
    cta: 'Profile — Kyrie Irving',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={`${styles.hero} surface-parchment`}>
        <div className="pattern-halo" style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none' }} />
        <div className={styles.heroInner}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>An Encyclopedia of Faith</div>
          <h1 className={styles.heroHeadline}>
            The Sacred Traditions<br />
            <span className={styles.heroOf}>of the World</span>
          </h1>
          <p className={styles.heroLede}>
            Five great religious traditions explored through scholarship, personal reflection,
            and direct encounter — from the ghats of Varanasi to the courts of Brooklyn.
          </p>
          <div className={styles.heroActions}>
            <a href="#traditions" className="btn btn-gold">Explore the Faiths</a>
          </div>
          <div className={styles.heroGlyphs} aria-hidden="true">
            {faiths.map(({ key, glyph }) => (
              <Link key={key} href={`/${key}`} data-faith={key} className={styles.glyphBtn} title={key}>
                {glyph}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Five Traditions Hub */}
      <section id="traditions" className={`${styles.hub} section`}>
        <div className="container">
          <div className={styles.hubHeader}>
            <div className="eyebrow">The Five Traditions</div>
            <h2 className={styles.hubTitle}>Choose a Path to Follow</h2>
            <p className={styles.hubSub}>
              Each tradition receives its own immersive study — exploring history, sacred sites,
              media, art, and what it means to live by faith today.
            </p>
          </div>
          <div className={styles.faithGrid}>
            {faiths.map(({ key, name, native, glyph, descriptor, cta }) => (
              <FaithTile key={key} faith={key} name={name} native={native} glyph={glyph} descriptor={descriptor} cta={cta} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FaithTile({ faith, name, native, glyph, descriptor, cta }) {
  return (
    <Link href={`/${faith}`} data-faith={faith} className={styles.faithTile}>
      <div className={`${styles.tileField} pattern-rays`}>
        <span className={styles.tileGlyph}>{glyph}</span>
      </div>
      <div className={styles.tilePlinth}>
        <span className={styles.tileNative}>{native}</span>
        <h3 className={styles.tileName}>{name}</h3>
        <p className={styles.tileDesc}>{descriptor}</p>
        <div className={styles.tileCta}>
          <span>{cta}</span>
          <span className={styles.tileArrow} aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}
