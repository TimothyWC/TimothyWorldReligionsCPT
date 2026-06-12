import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Judaism — Religion CPT',
  description: 'A media analysis of Shtisel — exploring how the Israeli drama portrays Ultra-Orthodox Jewish life with accuracy and humanity.',
};

export default function Judaism() {
  return (
    <div data-faith="judaism" data-faith-immersive>
      {/* Hero */}
      <section className="faith-hero">
        <div className="pattern-rays" />
        <Link href="/" className="faith-hero-back">← All faiths</Link>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="faith-hero-glyph">✡</span>
          <span className="faith-hero-native">יַהֲדוּת · Yahadut</span>
          <span className="faith-hero-name">Judaism</span>
          <p className="faith-hero-desc">
            An ancient covenant — faith, law, and peoplehood woven through 3,500 years
            of history, language, and shared memory.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="stat-plinth" data-faith="judaism">
        <div className="stat-row">
          <div className="stat-item">
            <span className="stat-value">3,500+</span>
            <span className="stat-label">Years of tradition</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">15M</span>
            <span className="stat-label">Adherents worldwide</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Torah</span>
            <span className="stat-label">Principal text</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Israel &amp; diaspora</span>
            <span className="stat-label">Spiritual heartland</span>
          </div>
        </div>
      </div>

      {/* Assignment label */}
      <div style={{ textAlign: 'center', padding: 'var(--space-6) var(--gutter) 0' }}>
        <span className="eyebrow left" style={{ justifyContent: 'center' }}>Media Analysis — Shtisel (שטיסל)</span>
      </div>

      {/* About the show */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-grid">
            <div className="content-text">
              <h2>About the Show</h2>
              <p>
                <em>Shtisel</em> is an Israeli TV drama that premiered in 2013. It focuses on the lives
                of the Shtisel family — Ultra-Orthodox Haredi Jews living in the Geula district of
                Jerusalem. The central characters are Shulem, a 60-year-old rabbi and educator;
                his son Akiva, a bachelor who dreams of being an artist; his daughter Giti Weiss;
                and Giti's daughter Ruchami.
              </p>
              <p>
                The series revolves around the way of life of an ultra-religious family, navigating
                the challenges of love and loss — with every little aspect of their lives saturated
                by Judaism: their clothing, their language, even the blessings before taking a sip of water.
              </p>
            </div>
            <div className={styles.posterImage}>
              <Image
                src="/images/judaism/shtisel-poster.jpg"
                alt="Shtisel — Israeli TV series poster"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stereotypes and Accuracy */}
      <section className="content-section" style={{ background: 'var(--faith-surface)' }}>
        <div className="content-section-inner">
          <div className="content-grid">
            <div className={styles.streetImage}>
              <Image
                src="/images/judaism/hasidic-family.jpg"
                alt="Hasidic family in Borough Park, Brooklyn"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="content-text">
              <h2>Stereotypes &amp; Accuracy</h2>
              <p>
                One of the most widespread misconceptions about Ultra-Orthodox Jews is that they are
                insular, backwards, and unable to relate to modern times. Shtisel rejects all of this.
                The show has been praised for depicting Haredi people as real personalities with real
                issues — not religious clichés. Judaism is not the spectacle; it is simply the
                environment these people live in.
              </p>
              <p>
                One powerful example of realism is the issue of <em>shidduchim</em> (arranged marriages).
                Akiva goes through humiliating matchmaking sessions in hotel lounges, with his father
                Shulem desperately wanting him to marry at 26. The co-creators — Yehonatan Indursky
                and Ori Elon — insisted on authenticity: the secular cast spent hours learning to speak
                specific Hebrew and Yiddish dialects.
              </p>
              <p>
                There are minor inaccuracies: some religious viewers noticed characters eating without
                hand-washing rituals, and some costumes aren't quite typical. But these are minor
                compared to how faithfully the emotional and spiritual landscape is rendered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Impact */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-grid">
            <div className="content-text">
              <h2>The Cultural Impact</h2>
              <p>
                The cultural significance of Shtisel is enormous. A Facebook community called
                "Shtisel – Let's Talk About It" grew to over 33,000 subscribers, with people from
                around the world discussing the show and learning about Hebrew, Yiddish, Ultra-Orthodox
                lifestyle, and life in Israel.
              </p>
              <p>
                While most Jewish-themed shows in America strip away religious detail to broaden appeal,
                Shtisel allows both humour and sorrow in equal measure. It also helped Haredi Jews see
                themselves reflected positively in the media — most people of this faith rarely have
                respectful portrayals.
              </p>
              <p>
                This connects directly to our class discussion on how religion is represented in media:
                Shtisel demonstrates that respectful representation creates genuine understanding.
              </p>
            </div>
            <div className={styles.sceneImage}>
              <Image
                src="/images/judaism/shtisel-scene.webp"
                alt="A scene from Shtisel"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal reflection */}
      <section className="content-section" style={{ background: 'var(--faith-surface)' }}>
        <div className="content-section-inner">
          <div className="content-full">
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <span className="eyebrow left">Personal Reflection</span>
            </div>
            <h2>My Personal Thoughts</h2>
            <p>
              I watched a part of this show to get a deeper perspective on Jewish media and what it
              means to be Jewish for this CPT. What stood out to me immediately is how personal
              everything feels. I expected the show to feel foreign and disconnected from my life —
              but the family dynamics, the father-son tension between Shulem and Akiva, the pressure
              to live up to their parents' expectations — I could relate to all of it.
            </p>
            <div className="reflection-block">
              <p>
                Akiva wants to be an artist, but his community doesn't really support that path.
                I can relate to that feeling of wanting something different from what people expect
                of you. This show taught me that Ultra-Orthodox Jews aren't just "rule-following,
                suit-wearing, strict, non-modern" people — they are obviously people with the same
                emotions, love, grief, ambitions, and loneliness as everyone else.
              </p>
            </div>
            <p>
              Shtisel does exactly what good media should do: it makes you understand a group of
              people you thought were completely different from you, and realize you have more in
              common than you think.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ background: 'var(--parchment-100)', padding: 'var(--space-9) var(--gutter)' }}>
        <div className="pull-quote">
          <div className="ornament">✡</div>
          <blockquote>
            "Shtisel does exactly what good media should do: it makes you understand a group of people
            you thought were completely different from you — and realize you have more in common
            than you think."
          </blockquote>
          <cite>Personal Reflection — Religion CPT</cite>
        </div>
      </section>
    </div>
  );
}
