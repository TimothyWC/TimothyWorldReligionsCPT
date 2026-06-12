import Link from 'next/link';
import styles from './page.module.css';

const faiths = [
  {
    key: 'hinduism',
    name: 'Hinduism',
    native: 'Dharma',
    glyph: 'ॐ',
    descriptor: 'A travel brochure on India, the birthplace of Hinduism and home to over a billion Hindus.',
    cta: 'Travel Brochure (India)',
  },
  {
    key: 'buddhism',
    name: 'Buddhism',
    native: 'धर्म',
    glyph: '☸',
    descriptor: 'A TED Talk on mindfulness and the struggle with awareness that I deal with too.',
    cta: 'TED Talk (Mindfulness)',
  },
  {
    key: 'judaism',
    name: 'Judaism',
    native: '',
    glyph: '✡',
    descriptor: 'A media analysis of Shtisel and how it shows ultra-Orthodox Jewish life.',
    cta: 'Media Analysis (Shtisel)',
  },
  {
    key: 'christianity',
    name: 'Christianity',
    native: 'Christianitas',
    glyph: '✝',
    descriptor: 'An analysis of the beautiful through the Sagrada Família and the Sistine Chapel.',
    cta: 'Analysis of the Beautiful',
  },
  {
    key: 'islam',
    name: 'Islam',
    native: 'الإسلام',
    glyph: '☪',
    descriptor: 'A profile on Kyrie Irving and how his faith shapes his life and game.',
    cta: 'Profile (Kyrie Irving)',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={`${styles.hero} surface-parchment`}>
        <div className="pattern-halo" style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none' }} />
        <div className={styles.heroInner}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>My CPT</div>
          <h1 className={styles.heroHeadline}>
            The 5 Major Religions<br />
            <span className={styles.heroOf}>around the world</span>
          </h1>
          <p className={styles.heroLede}>
            Five major religions explored through my notes, personal reflection,
            and the things I encountered this year, from the ghats of Varanasi to the courts of Brooklyn.
          </p>
          <div className={styles.heroActions}>
            <a href="#traditions" className="btn btn-gold">Look Around</a>
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
            <div className="eyebrow">The 5 Religions</div>
            <h2 className={styles.hubTitle}>Where do you want to go?</h2>
            <p className={styles.hubSub}>
              Each religion gets its own page, going through what I studied this year using my
              own notes, my photos, and my personal reflections.
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
        {native ? <span className={styles.tileNative}>{native}</span> : null}
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
