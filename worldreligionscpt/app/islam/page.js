import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Islam | Religion CPT',
  description: 'A profile on Kyrie Irving and how Islam shapes his life and career.',
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
            A profile on Kyrie Irving and how his faith shapes his life and his game.
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
        <span className="eyebrow left" style={{ justifyContent: 'center' }}>Profile on a Famous Person (Kyrie Irving)</span>
      </div>

      {/* Short Biography */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-grid">
            <div className="content-text">
              <h2>Short Biography</h2>
              <p>
                Kyrie Irving is a Muslim Australian NBA player who was born in Melbourne, Australia and grew
                up in a Christian household where he loved basketball from a young age. His dad Drederick
                Irving played college basketball for Boston University and then played professionally in
                Australia. Kyrie ended up growing up in New Jersey where he became a standout high school
                player before accepting a scholarship to play under Coach Mike Krzyzewski at Duke University
                in 2010.
              </p>
              <h2 style={{ marginTop: 'var(--space-6)' }}>His Most Recognizable Moment</h2>
              <p>
                In 2011 he was selected 1st overall in the NBA draft by the Cleveland Cavaliers and quickly
                claimed the NBA Rookie of the Year award. His defining moment in Cleveland came during the
                2016 NBA Finals against the Golden State Warriors. With the Cavaliers trailing 3-1 in the
                series, Irving and LeBron James led a historic comeback. In the deciding Game 7, Irving hit
                the championship clinching three-pointer over Stephen Curry which secured the franchise's
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

      {/* Muslim Influence */}
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
              <div className={styles.imageLabel}>Ramadan Kyrie</div>
            </div>
            <div className="content-text">
              <h2>Muslim Influence</h2>
              <p>
                The influence of Islam in his day to day life is most notably seen during the Islamic holy
                month of Ramadan. During Ramadan, Irving observes the fast which means he doesn't eat or
                drink anything from sunrise to sunset. Even though this takes a huge toll on the body, he has
                famously thrived during this period on the basketball court which got him the nickname
                "Ramadan Kyrie" on social media. Irving has expressed that his service to God and fasting
                during the NBA season actually helps him block out the noise and ground him in mental and
                spiritual discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Influence */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-grid">
            <div className="content-text">
              <h2>Cultural Influence</h2>
              <p>
                Irving's conversion to Islam has had a big impact on Muslim American communities. For a
                community that has often been looking for prominent cultural heroes in sports, Irving openly
                embracing the religion has been widely celebrated. His off-court interests, philosophical
                beliefs, and vocal stances on different issues have sometimes made him a polarizing figure,
                but his identity as a Muslim has continued to be a defining part of his life and career.
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

      {/* Why I chose Kyrie */}
      <section className="content-section" style={{ background: 'var(--faith-surface)' }}>
        <div className="content-section-inner">
          <div className="content-full">
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <span className="eyebrow left">Personal Reflection</span>
            </div>
            <h2>Why did I choose Kyrie Irving?</h2>
            <p>
              Kyrie is one of my favorite NBA players of all time he is one of the reasons I chose to wear
              #11 for my basketball rep team. His shifty handles and tough finishes are some of my favorite
              parts of his game and he is one of the kindest NBA players out there. It is well known in the
              basketball world that Kyrie is Muslim and his faith is very impressive to me especially during
              Ramadan. Playing so hard for 48 minutes without drinking water or eating anything is very
              demanding on the body especially at the highest level, you would expect him to play terribly or
              at least worse but that isn't the case for him. He averaged 26.3 points per game during the
              2024 Ramadan with an elite efficiency of 62% (true shooting percentage) which are well over his
              averages. Even outside of Ramadan before games start Kyrie is sometimes seen praying on his
              knees and is active in the muslim community outside of basketball. So overall, Kyrie is a good
              example of a muslim celebrity who isn't afraid of showing his faith and inspires millions of
              people including me.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
