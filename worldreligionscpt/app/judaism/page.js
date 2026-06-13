import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Judaism | Religion CPT',
  description: 'A media analysis of Shtisel and how it portrays ultra-Orthodox Jewish life.',
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
          <span className="faith-hero-name">Judaism</span>
          <p className="faith-hero-desc">
            A media analysis of Shtisel and how it shows ultra-Orthodox Jewish life in Jerusalem.
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
            <span className="stat-value">Israel</span>
            <span className="stat-label">Homeland</span>
          </div>
        </div>
      </div>

      {/* Assignment label */}
      <div style={{ textAlign: 'center', padding: 'var(--space-6) var(--gutter) 0' }}>
        <span className="eyebrow left" style={{ justifyContent: 'center' }}>Media Analysis (Shtisel)</span>
      </div>

      {/* About the show */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-grid">
            <div className="content-text">
              <h2>About the Show</h2>
              <p>
                Shtisel is a TV drama series produced in Israel that premiered in 2013. It focuses on the
                lives of the Shtisel family who are ultra-Orthodox Jews living in the Geula district of
                Jerusalem. The main characters in this show include Shulem who is a 60-year-old rabbi and
                educator, Akiva who is Shulem's young son and a bachelor with aspirations to be an artist,
                Giti Weiss who is Shulem's daughter and Akiva's sister, and lastly Ruchami, who is Giti's
                daughter. This is a series that revolves around the way of life of an ultra-religious family
                through the challenges of love and loss.
              </p>
            </div>
            <div className={styles.posterImage}>
              <Image
                src="/images/judaism/shtisel-poster.jpg"
                alt="Shtisel, Israeli TV series poster"
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
                alt="Hasidic family in the street"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="content-text">
              <h2>Stereotypes and Accuracy</h2>
              <p>
                One of the most widespread misconceptions about ultra-Orthodox Jews is that they are
                insular, backwards, and unable to relate to modern times. However, Shtisel rejects all
                these stereotypes. The series has gained a lot of praise for its realistic depiction of
                Haredi people as real-life personalities with real-life issues instead of just religious
                cliches. The main topic of the show is not Judaism but the environment where Jews live their
                lives, every little aspect of their life is saturated with Judaism, including their clothing
                style, language, or blessings before taking a sip of water. The series does not present
                Judaism as the spectacle but rather as something that surrounds Haredis.
              </p>
              <p>
                One of the examples of the series' realism and accuracy is the issue of shidduchim, or
                arranged marriages. The protagonist, Akiva, goes through humiliating matchmaking sessions in
                hotels' lounges. His father, Shulem, who desperately wants his son to marry as soon as
                possible since he is considered a late bloomer at age 26, is a typical example. This is
                particularly true of the ultra-Orthodox Jews whose culture emphasizes marriage which is
                often done by a matchmaker (shadchan). According to the co-creators, Yehonatan Indursky and
                Ori Elon, the ultra-Orthodox community should be portrayed authentically. As such, the cast,
                who were all secular Jews, had to spend several hours learning to speak in a particular
                Hebrew and Yiddish language in order to portray authenticity.
              </p>
              <p>
                Nonetheless, there are instances in which the Jewish community feels some inaccuracies. For
                instance, some religious Jews noticed some errors with regard to lifestyle. There have been
                instances where a character starts eating without engaging in hand washing rituals. Further,
                some have noticed that the costumes worn by ultra-Orthodox ladies are not typical. However,
                it can be argued that while the show may be authentic, it is only representative of
                ultra-Orthodox Jews and presents a dysfunctional family to attract viewership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact on Culture */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-grid">
            <div className="content-text">
              <h2>The Impact on Culture</h2>
              <p>
                The cultural significance of Shtisel is enormous; there was even a Facebook community named
                "Shtisel – Let's Talk About It," which has grown to over 33,000 subscribers discussing the
                show and learning about Hebrew, Yiddish languages, ultra-Orthodox lifestyle, and life in
                Israel. For many people from all over the world, Shtisel made Haredi Judaism much more
                comprehensible and relatable. While most Jewish shows in America strip away many details of
                their lives to make them less overwhelming, Shtisel allows both humor and sorrow in these
                stories.
              </p>
              <p>
                Moreover, it helped the Haredim view themselves differently in the media. Most people of this
                faith rarely have a positive portrayal in the media, while others are shown leaving their
                culture. This is why the show became special as many Haredi people could see themselves
                reflected in Shtisel's story. This relates to our class discussion of how religion is
                represented in the media because Shtisel demonstrates that respectful representation creates
                understanding.
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

      {/* My Personal Thoughts */}
      <section className="content-section" style={{ background: 'var(--faith-surface)' }}>
        <div className="content-section-inner">
          <div className="content-full">
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <span className="eyebrow left">Personal Reflection</span>
            </div>
            <h2>My Personal Thoughts</h2>
            <p>
              I chose to do Ultra-Orthadox Judaism because its the most well known denomination apart from
              maybe reform and I watched a part of this show with my mom a couple of years ago because she
              wanted me to be a little more in touch with my jewish roots. What stood out to me immediately is
              how personal everything feels like I expected the show to feel foreign and disconnected from my
              life, but the family dynamics, the father-son tension between Shulem and Akiva, the pressure to
              live up to their parents' expectations I could relate to all of it. Akiva wants to be an artist
              but his community doesn't really support this path, and I can relate to that feeling of wanting
              something different from what people actually expect from you. This show taught me that
              Ultra-Orthadox jews aren't just “rule following, suit wearing, Strict, non-modern” Jews but they
              are obviously people with the same emotions, love, grief, ambitions, loneliness like everyone
              else. Shtisel does exactly what good media should do: it makes you understand a group of people
              you thought were completely different from you and realize you have more in common than you
              think.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
