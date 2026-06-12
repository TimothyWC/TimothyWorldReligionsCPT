import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Christianity — Religion CPT',
  description: 'An analysis of beauty in Christianity — exploring the Sagrada Família and the Sistine Chapel through the lens of Thomas Aquinas.',
};

export default function Christianity() {
  return (
    <div data-faith="christianity" data-faith-immersive>
      {/* Hero */}
      <section className="faith-hero">
        <div className="pattern-rays" />
        <Link href="/" className="faith-hero-back">← All faiths</Link>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="faith-hero-glyph">✝</span>
          <span className="faith-hero-native">Christianitas</span>
          <span className="faith-hero-name">Christianity</span>
          <p className="faith-hero-desc">
            A faith of incarnation and transcendent beauty — where truth is not just spoken
            but carved into stone, painted onto ceilings, and flooded in coloured light.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="stat-plinth" data-faith="christianity">
        <div className="stat-row">
          <div className="stat-item">
            <span className="stat-value">2,000+</span>
            <span className="stat-label">Years of tradition</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">2.4B</span>
            <span className="stat-label">Adherents worldwide</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">The Bible</span>
            <span className="stat-label">Principal text</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Beauty</span>
            <span className="stat-label">Core theological theme</span>
          </div>
        </div>
      </div>

      {/* Assignment label */}
      <div style={{ textAlign: 'center', padding: 'var(--space-6) var(--gutter) 0' }}>
        <span className="eyebrow left" style={{ justifyContent: 'center' }}>Analysis of "The Beautiful"</span>
      </div>

      {/* The Beauty of Christianity */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-full">
            <h2>The Beauty of Christianity</h2>
            <p>
              Christianity has always used art, architecture, music, and ritual as ways to direct
              believers toward God. Beauty isn't just decoration in Christianity — it's a form of
              teaching and worship in itself. Thomas Aquinas taught that beauty is one of the
              <em> Transcendentals</em>, alongside truth, goodness, oneness, and being. This means
              beauty is a property of God Himself: pointing to beauty is pointing to God.
            </p>
            <p>
              Aquinas said true beauty has three characteristics:
            </p>
            <p>
              <strong>Integritas</strong> — wholeness or completeness; nothing missing.<br />
              <strong>Consonantia</strong> — proportion and harmony between the parts.<br />
              <strong>Claritas</strong> — radiance or clarity; the way something reveals truth.
            </p>
            <p>
              Two of the strongest examples of Christian beauty that meet all three of Aquinas'
              standards are the <em>Sagrada Família</em> in Barcelona and the <em>Sistine Chapel</em>
              in Vatican City.
            </p>
          </div>
        </div>
      </section>

      {/* Sagrada Família */}
      <section className="content-section" style={{ background: 'var(--faith-surface)' }}>
        <div className="content-section-inner">
          <div style={{ marginBottom: 'var(--space-5)' }}>
            <span className="eyebrow left">Sacred Site #1 — Barcelona</span>
          </div>
          <div className="content-grid">
            <div className="content-text">
              <h2>Sagrada Família</h2>
              <p>
                The Sagrada Família is a massive unfinished Roman Catholic basilica in Barcelona,
                Spain designed by Antoni Gaudí. Construction started in 1882 and is still ongoing,
                with completion expected around 2026 — making it one of the longest construction
                projects in history. Gaudí was a devout Catholic who saw his architecture as a form
                of prayer. He once said: <em>"My client is not in a hurry"</em> — referring to God.
              </p>
              <p>
                Every part of the basilica was designed to teach the Christian faith through symbolism.
                The three main facades represent the Nativity, the Passion, and the Glory. Inside,
                the columns look like a forest of branching trees, and stained glass floods the space
                with warm orange and red light on one side, and cool blue and green on the other —
                representing the warmth of God's love and the coolness of His mystery.
              </p>
              <p>
                There are 18 towers total: the 12 apostles, 4 evangelists, the Virgin Mary, and
                Jesus Christ — intentionally one metre shorter than Montjuïc hill because Gaudí
                believed nothing man-made should exceed God's creation.
              </p>

              <h3>Through Aquinas' Eyes</h3>
              <p>
                <strong>Integritas:</strong> Every detail — towers, columns, doors — serves the same
                purpose of telling the story of Christ. Nothing is random.
              </p>
              <p>
                <strong>Consonantia:</strong> Gaudí mathematically planned proportions based on natural
                shapes from God's creation: spirals, branches, honeycomb patterns.
              </p>
              <p>
                <strong>Claritas:</strong> The moment you walk inside, the radiance of the stained glass
                and the towering forest-like columns make you feel something bigger than yourself.
                The Sagrada Família isn't just a building — it's a sermon built out of stone and light.
              </p>
            </div>
            <div className={styles.churchImages}>
              <div className={styles.extImage}>
                <Image
                  src="/images/christianity/sagrada-familia-exterior.webp"
                  alt="Sagrada Família exterior, Barcelona"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className={styles.gaudiFig}>
                <div className={styles.gaudiImg}>
                  <Image
                    src="/images/christianity/antoni-gaudi.webp"
                    alt="Antoni Gaudí, architect"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div className={styles.gaudiCaption}>
                  Antoni Gaudí · Architect &amp; devout Catholic · 1852–1926
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal photo — stained glass */}
      <section className={styles.glassSection}>
        <div className={styles.glassImage}>
          <Image
            src="/images/christianity/sagrada-familia-stained-glass.jpg"
            alt="Stained glass interior of Sagrada Família — personal photograph"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.glassCaption}>
          <span className="eyebrow left" style={{ color: 'var(--parchment-200)' }}>Personal photograph</span>
          <p>The stained glass interior of the Sagrada Família, photographed during a family visit in summer 2024.</p>
        </div>
      </section>

      {/* Sistine Chapel */}
      <section className="content-section">
        <div className="content-section-inner">
          <div style={{ marginBottom: 'var(--space-5)' }}>
            <span className="eyebrow left">Sacred Site #2 — Vatican City</span>
          </div>
          <div className="content-full">
            <h2>The Sistine Chapel</h2>
            <p>
              The Sistine Chapel is a chapel inside the Vatican in Rome, most famous for the frescoes
              painted by Michelangelo between 1508 and 1541. The ceiling tells the story of Genesis
              through nine main scenes, from the creation of the world to the story of Noah, while
              the altar wall shows The Last Judgement — Christ's return at the end of time.
            </p>
            <p>
              The most famous image is <em>The Creation of Adam</em>, where God reaches out and almost
              touches Adam's finger to give him life — one of the most recognized religious artworks
              in human history. The chapel is still an active sacred space where cardinals gather to
              elect a new Pope during a conclave.
            </p>

            <h3>Through Aquinas' Eyes</h3>
            <p>
              <strong>Integritas:</strong> Michelangelo connected every scene on the ceiling into one
              complete story of salvation history — from creation to judgment. Nothing is disconnected.
            </p>
            <p>
              <strong>Consonantia:</strong> The anatomical perfection of the figures and the balance
              between panels. Michelangelo studied human anatomy obsessively to get proportions exactly right.
            </p>
            <p>
              <strong>Claritas:</strong> The radiance of the colors and the way each scene reveals a
              specific truth about God's relationship with humanity. Aquinas said beauty leads us to God
              through both the senses and the intellect — and the Sistine Chapel does exactly that.
              It overwhelms your eyes while also teaching your mind Christian theology at the same time.
            </p>
          </div>
        </div>
      </section>

      {/* Personal reflection */}
      <section className="content-section" style={{ background: 'var(--faith-surface)' }}>
        <div className="content-section-inner">
          <div className="content-full">
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <span className="eyebrow left">Personal Experience</span>
            </div>
            <h2>My Experience</h2>
            <p>
              My family went on vacation in the summer of 2024 and got to see the magnificent Sagrada
              Família. The sheer size of the cathedral is enough to appreciate, but when looking inside
              at all the little works of art, it is seriously the most beautiful man-made thing in this world.
            </p>
            <div className="reflection-block">
              <p>
                The beauty of Christianity comes in many different ways — not just the impressive
                cathedrals and physical objects, but also in spiritual ways like the scriptures and
                traditions. <em>"The heavens declare the glory of God; the skies proclaim the work
                of his hands."</em> (Psalm 19:1). The use of profound metaphors in the Bible, along
                with the emphasis on family, makes this religion beautiful in every way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ background: 'var(--parchment-100)', padding: 'var(--space-9) var(--gutter)' }}>
        <div className="pull-quote">
          <div className="ornament">✝</div>
          <blockquote>
            "The Sagrada Família isn't just a building — it's a sermon built out of stone and light.
            Gaudí believed beauty is not decoration. It is the language of God."
          </blockquote>
          <cite>Personal Reflection — Religion CPT · Summer 2024</cite>
        </div>
      </section>
    </div>
  );
}
