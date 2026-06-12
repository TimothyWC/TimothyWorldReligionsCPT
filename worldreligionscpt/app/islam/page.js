import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Islam — Religion CPT',
  description: 'A profile of Kyrie Irving — how Islam shapes the life and career of one of the NBA\'s most compelling players.',
};

export default function Islam() {
  return (
    <div data-faith="islam" data-faith-immersive>
      {/* Hero */}
      <section className="faith-hero">
        <div className="pattern-rays" />
        <Link href="/" className="faith-hero-back">← All faiths</Link>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="faith-hero-glyph">☪</span>
          <span className="faith-hero-native">الإسلام · Al-Islām</span>
          <span className="faith-hero-name">Islam</span>
          <p className="faith-hero-desc">
            Submission and devotion — a faith of 1.8 billion people, lived through prayer,
            fasting, community, and a discipline that goes far beyond the basketball court.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="stat-plinth" data-faith="islam">
        <div className="stat-row">
          <div className="stat-item">
            <span className="stat-value">1,400+</span>
            <span className="stat-label">Years of tradition</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">1.8B</span>
            <span className="stat-label">Adherents worldwide</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">The Quran</span>
            <span className="stat-label">Principal text</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Five Pillars</span>
            <span className="stat-label">Core practice</span>
          </div>
        </div>
      </div>

      {/* Assignment label */}
      <div style={{ textAlign: 'center', padding: 'var(--space-6) var(--gutter) 0' }}>
        <span className="eyebrow left" style={{ justifyContent: 'center' }}>Profile on a Famous Muslim — Kyrie Irving</span>
      </div>

      {/* Biography */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-grid">
            <div className="content-text">
              <h2>Short Biography</h2>
              <p>
                Kyrie Irving is a Muslim Australian-American NBA player born in Melbourne, Australia,
                who grew up in a Christian household where he loved basketball from a young age.
                His father, Drederick Irving, played college basketball for Boston University and then
                played professionally in Australia. Kyrie grew up in New Jersey, where he became a
                standout high school player before accepting a scholarship to play under Coach Mike
                Krzyzewski at Duke University in 2010.
              </p>
              <p>
                In 2011 he was selected 1st overall in the NBA draft by the Cleveland Cavaliers and
                quickly claimed the Rookie of the Year award. His defining moment came during the
                2016 NBA Finals against the Golden State Warriors. With the Cavaliers trailing 3–1,
                Irving and LeBron James led a historic comeback. In the deciding Game 7, Irving hit
                the championship-clinching three-pointer over Stephen Curry — securing the franchise's
                first ever NBA title.
              </p>
            </div>
            <div className={styles.gameImage}>
              <Image
                src="/images/islam/kyrie-irving-game.webp"
                alt="Kyrie Irving in an NBA game"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Muslim influence */}
      <section className="content-section" style={{ background: 'var(--faith-surface)' }}>
        <div className="content-section-inner">
          <div className="content-grid">
            <div className={styles.ramadanImage}>
              <Image
                src="/images/islam/ramadan-kyrie.webp"
                alt="Kyrie Irving during Ramadan season"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.imageLabel}>Ramadan Kyrie — averaging 26.3 PPG at 62% TS%</div>
            </div>
            <div className="content-text">
              <h2>Muslim Influence</h2>
              <p>
                The influence of Islam in Kyrie's daily life is most notably seen during Ramadan —
                the Islamic holy month of fasting. During Ramadan, Irving observes the fast, which
                means no eating or drinking from sunrise to sunset. Even though this takes a huge
                toll on the body, he has famously <em>thrived</em> on the basketball court during
                this period, earning him the nickname <strong>"Ramadan Kyrie"</strong> on social media.
              </p>
              <p>
                Irving has expressed that his service to God and fasting during the NBA season
                actually helps him block out the noise and ground him in mental and spiritual discipline.
              </p>
              <h3>The Numbers</h3>
              <p>
                During the 2024 Ramadan, Kyrie averaged <strong>26.3 points per game</strong> with
                an elite efficiency of <strong>62% true shooting percentage</strong> — well above
                his career averages — while fasting for 16+ hours a day.
              </p>
              <p>
                Even outside of Ramadan, before games start Kyrie is often seen praying on his knees,
                and he is active in the Muslim community outside of basketball.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kaaba and cultural influence */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-grid">
            <div className="content-text">
              <h2>Cultural Influence</h2>
              <p>
                Kyrie's conversion to Islam has had a significant impact on Muslim American
                communities. For a community that has often been looking for prominent cultural
                heroes in sports, Irving openly embracing the religion has been widely celebrated.
              </p>
              <p>
                Islam is a complete way of life for its 1.8 billion followers — centered on the
                Five Pillars: Shahada (declaration of faith), Salat (prayer five times a day),
                Zakat (charitable giving), Sawm (fasting during Ramadan), and Hajj (pilgrimage
                to Mecca). The Kaaba in Mecca is the holiest site in Islam — the direction all
                Muslims face when they pray.
              </p>
              <p>
                Kyrie's identity as a Muslim has continued to be a defining part of his life and
                career, demonstrating that faith and elite performance at the highest level are
                not mutually exclusive.
              </p>
            </div>
            <div className={styles.kaabaImage}>
              <Image
                src="/images/islam/kaaba-mecca.png"
                alt="The Kaaba at Masjid al-Haram, Mecca"
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
            <h2>Why I Chose Kyrie Irving</h2>
            <p>
              Kyrie is one of my favourite NBA players of all time — one of the reasons I chose to
              wear #11 for my basketball rep team. His shifty handles and tough finishes are some of
              my favourite parts of his game, and he is one of the kindest NBA players out there.
            </p>
            <div className="reflection-block">
              <p>
                It is well known in the basketball world that Kyrie is Muslim, and his faith is very
                impressive to me, especially during Ramadan. Playing so hard for 48 minutes without
                drinking water or eating anything is very demanding on the body — especially at the
                highest level. You would expect him to play terribly, but that isn't the case.
                He averaged 26.3 points per game during the 2024 Ramadan with an elite 62% true
                shooting percentage. That's not despite his faith — it's because of it.
              </p>
            </div>
            <p>
              Kyrie is a good example of a Muslim celebrity who isn't afraid of showing his faith,
              and who inspires millions of people — including me.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ background: 'var(--parchment-100)', padding: 'var(--space-9) var(--gutter)' }}>
        <div className="pull-quote">
          <div className="ornament">☪</div>
          <blockquote>
            "He averaged 26.3 points per game during Ramadan at 62% true shooting — fasting for
            16 hours a day. That's not despite his faith. That's because of it."
          </blockquote>
          <cite>Personal Reflection — Religion CPT</cite>
        </div>
      </section>
    </div>
  );
}
