import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Christianity | Religion CPT',
  description: 'An analysis of the beautiful through the Sagrada Família and the Sistine Chapel.',
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
            An analysis of the beautiful through the Sagrada Família and the Sistine Chapel.
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
        <span className="eyebrow left" style={{ justifyContent: 'center' }}>Analysis of the Beautiful (Sagrada Família &amp; Sistine Chapel)</span>
      </div>

      {/* The Beauty of Christianity */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-full">
            <h2>The Beauty of Christianity</h2>
            <p>
              Christianity has always used art, architecture, music, and ritual as ways to direct believers
              toward God. Beauty isn't just decoration in Christianity, it's actually a form of teaching and
              worship in itself. Thomas Aquinas taught that beauty is one of the Transcendentals along with
              truth, goodness, oneness, and being, which means beauty is a property of God Himself and
              pointing to beauty is pointing to God. Aquinas said true beauty has three characteristics:
              integritas (wholeness or completeness, nothing missing), consonantia (proportion and harmony
              between the parts), and claritas (radiance or clarity, the way it reveals truth). Two of the
              strongest examples of Christian beauty that meet all three of Aquinas' standards are the
              Sagrada Família in Barcelona and the Sistine Chapel in Vatican City.
            </p>
          </div>
        </div>
      </section>

      {/* Sagrada Família */}
      <section className="content-section" style={{ background: 'var(--faith-surface)' }}>
        <div className="content-section-inner">
          <div className="content-grid">
            <div className="content-text">
              <h2>Sagrada Família</h2>
              <p>
                The Sagrada Família is a massive unfinished Roman Catholic basilica in Barcelona, Spain that
                was designed by Antoni Gaudí. Construction started in 1882 and is still going today with
                completion expected around 2026, which makes it one of the longest construction projects in
                history. Gaudí was a really devout Catholic and saw his architecture as a form of prayer, he
                once said "my client is not in a hurry" referring to God. Every single part of the basilica
                was designed to teach the Christian faith through symbolism. The three main facades represent
                the Nativity (Christ's birth), the Passion (Christ's death), and the Glory (resurrection and
                eternal life). Inside the columns are designed to look like a forest of trees branching out
                toward the ceiling, and the stained glass floods the inside with warm orange and red light on
                one side and cool blue and green light on the other, which represents the warmth of God's
                love and the coolness of His mystery. There are 18 towers in total, each one representing a
                biblical figure, the 12 apostles, the 4 evangelists, the Virgin Mary, and the tallest one is
                Jesus Christ at 172.5 metres. Gaudí intentionally made it one metre shorter than Montjuïc hill
                in Barcelona because he believed nothing man-made should be taller than God's creation.
              </p>
              <p>
                Using Aquinas' teachings the Sagrada Família fits all three criteria of beauty. It has
                integritas because every detail from the towers to the columns to the doors all serves the
                same purpose of telling the story of Christ, nothing in it is random. It has consonantia
                because Gaudí mathematically planned the proportions based on natural shapes found in God's
                creation like spirals, branches, and honeycomb patterns, so the harmony between the building
                and nature is intentional. And it has claritas because the moment you walk inside, the
                radiance of the stained glass and the towering forest-like columns make you feel something
                bigger than yourself, which is exactly what Aquinas meant when he said beauty directs the soul
                to God. The Sagrada Família isn't just a building, it's basically a sermon built out of stone
                and light.
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
              <figure className={styles.gaudiFig}>
                <Image
                  src="/images/christianity/antoni-gaudi.webp"
                  alt="Antoni Gaudí, architect of the Sagrada Família"
                  width={250}
                  height={340}
                  className={styles.gaudiImg}
                />
                <figcaption className={styles.gaudiCaption}>
                  Antoni Gaudí, architect of the Sagrada Família
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Personal photo (mom) */}
      <section className={styles.momSection}>
        <figure className={styles.momFigure}>
          <Image
            src="/images/christianity/sagrada-familia-mom.jpg"
            alt="Inside the Sagrada Família, Barcelona"
            width={1500}
            height={2000}
            className={styles.momImg}
          />
          <figcaption className={styles.momCaption}>
            <span className={styles.momTitle}>My photo</span>
            <span>Taken by my mom in the summer of 2024.</span>
          </figcaption>
        </figure>
      </section>

      {/* Sistine Chapel */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-full">
            <h2>Sistine Chapel</h2>
            <p>
              The Sistine Chapel is a chapel inside the Vatican in Rome and is most famous for the frescoes
              painted by Michelangelo between 1508 and 1541. The ceiling tells the story of Genesis through
              nine main scenes, from the creation of the world to the story of Noah, while the altar wall
              shows The Last Judgement which depicts Christ's return at the end of time. The most famous image
              in the entire chapel is The Creation of Adam, where God reaches out and almost touches Adam's
              finger to give him life, this single image has become one of the most recognized religious
              artworks in human history. The chapel isn't just art though, it's still an active sacred space
              today and it's where the cardinals gather to elect a new Pope during what is called a conclave.
            </p>
            <p>
              Connecting back to Aquinas, the Sistine Chapel hits all three criteria of beauty in its own way.
              Integritas is shown in how Michelangelo connected every scene on the ceiling into one complete
              story of salvation history from creation to judgement, nothing is disconnected. Consonantia
              shows up in the anatomical perfection of the figures and the balance between every panel,
              Michelangelo actually studied human anatomy obsessively to get the proportions exactly right.
              Claritas is probably the most obvious one, the radiance of the colors and the way each scene
              reveals a specific truth about God's relationship with humanity. Aquinas said beauty leads us to
              God through both the senses and the intellect, and the Sistine Chapel does exactly that, it
              overwhelms your eyes while also teaching your mind Christian theology at the same time.
            </p>
          </div>
        </div>
      </section>

      {/* My Experience */}
      <section className="content-section" style={{ background: 'var(--faith-surface)' }}>
        <div className="content-section-inner">
          <div className="content-full">
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <span className="eyebrow left">Personal Reflection</span>
            </div>
            <h2>My Experience</h2>
            <p>
              Me and my family went on a vacation in the summer of 2024 and got to see the magnificent Sagrada
              Familia. The sheer size of the cathedral is enough to appreciate but when looking inside at all
              the little works of art it is seriously the most beautiful manmade thing in this world. The
              beauty of christianity comes in many different ways not just the impressive cathedrals and other
              physical objects but also in spiritual ways like the scriptures and traditions. “The heavens
              declare the glory of God; the skies proclaim the work of his hands" (Psalm 19:1). The use of
              profound metaphors in the bible along with the emphasis on family makes this religion beautiful
              in every way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
