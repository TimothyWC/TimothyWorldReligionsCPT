import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Buddhism — Religion CPT',
  description: 'A TED Talk analysis exploring mindfulness and meditation through the teachings of Yongey Mingyur Rinpoche.',
};

export default function Buddhism() {
  return (
    <div data-faith="buddhism" data-faith-immersive>
      {/* Hero */}
      <section className="faith-hero">
        <div className="pattern-rays" />
        <Link href="/" className="faith-hero-back">← All faiths</Link>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="faith-hero-glyph">☸</span>
          <span className="faith-hero-native">धर्म · Dharma</span>
          <span className="faith-hero-name">Buddhism</span>
          <p className="faith-hero-desc">
            The path of awakening — liberation through mindfulness, awareness, and
            learning to sit with your own mind rather than fight it.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="stat-plinth" data-faith="buddhism">
        <div className="stat-row">
          <div className="stat-item">
            <span className="stat-value">2,500+</span>
            <span className="stat-label">Years of tradition</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">520M</span>
            <span className="stat-label">Adherents worldwide</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Tripitaka</span>
            <span className="stat-label">Principal text</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Awareness</span>
            <span className="stat-label">Core practice</span>
          </div>
        </div>
      </div>

      {/* Assignment label */}
      <div style={{ textAlign: 'center', padding: 'var(--space-6) var(--gutter) 0' }}>
        <span className="eyebrow left" style={{ justifyContent: 'center' }}>
          TED Talk — Conflict &amp; Struggle: Mindfulness
        </span>
      </div>

      {/* About the talk */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-grid">
            <div className="content-text">
              <h2>About the TED Talk</h2>
              <p>
                Yongey Mingyur Rinpoche is a Tibetan Buddhist teacher who came to TED to share
                his wisdom and experience in meditation. He first establishes that meditation is
                simple — anyone can do it, anywhere, anytime. The essence of meditation is
                <em> Awareness</em>.
              </p>
              <p>
                Meditation does not mean stopping your thoughts — it means concentrating on what
                you are thinking. He uses the famous example: try to think of anything but pizza.
                Most people can only think about pizza. When you try to think of nothing, you always
                think of something.
              </p>
              <p>
                He also explains that meditation is not looking for peace, calm, and joy — those are
                byproducts. You can't just sit down and force yourself to feel calm; you will only get
                more stressed trying.
              </p>
            </div>
            <div className={styles.speakerImage}>
              <Image
                src="/images/buddhism/mingyur-rinpoche.webp"
                alt="Yongey Mingyur Rinpoche"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                priority
              />
              <div className={styles.speakerCaption}>
                Yongey Mingyur Rinpoche · Buddhist teacher &amp; meditation master
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The sky and storm metaphor */}
      <section className="content-section" style={{ background: 'var(--faith-surface)' }}>
        <div className="content-section-inner">
          <div className="content-grid">
            <div className={styles.monasteryImage}>
              <Image
                src="/images/buddhism/ladakh-monastery.jpg"
                alt="Buddhist monastery in Ladakh, India"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="content-text">
              <h2>The Sky and the Storm</h2>
              <p>
                Growing up in the Himalayan mountains, Rinpoche suffered from serious panic attacks
                since he was a child. He was scared of strangers, scared of thunderstorms, and the
                panic followed him like a shadow. At 9 years old he asked his father — a great
                meditation teacher — to teach him how to meditate.
              </p>
              <p>
                His father told him to stop fighting the panic. He explained that awareness is like
                the sky, and panic is like a storm or clouds. No matter how strong the storm gets,
                the sky itself never actually changes — it's always calm and pure underneath. Our
                minds work the exact same way.
              </p>
              <h3>Three Steps to Awareness</h3>
              <p>
                <strong>Step 1:</strong> Use an object as support. Focus on a sound (like a bell) and
                let thoughts come and go without engaging them.
              </p>
              <p>
                <strong>Step 2:</strong> Meditate <em>with</em> the panic itself. When you actually
                watch your panic, you become bigger than it — like watching a river from the bank.
                Up close, panic breaks into pieces: a sensation, a scary image, a voice. Take one away
                and the whole thing falls apart. Like shaving foam that looks solid but is full of bubbles.
              </p>
              <p>
                <strong>Step 3:</strong> Open awareness — no object needed. Just become aware of yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The wandering retreat story */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-grid">
            <div className="content-text">
              <h2>The Wandering Retreat</h2>
              <p>
                In 2011, Rinpoche left behind his monastery, his students, and his comfortable bed
                to do a wandering retreat with only a few thousand rupees. The money ran out fast and
                he ended up getting really bad food poisoning, alone on the street, genuinely thinking
                he was going to die.
              </p>
              <p>
                In that moment he practiced open awareness — and his mind became completely present and
                free, even though his body was breaking down. After that experience the street became
                his home, trees became "trees of love," and even the wind on his face felt joyful.
              </p>
              <p>
                His message: meditation is not about stopping your thoughts or forcing yourself to feel
                calm. It is about being present and aware no matter what is happening around you —
                and anyone can do it, anywhere.
              </p>
            </div>
            <div className={styles.meditationImage}>
              <Image
                src="/images/buddhism/meditation-sunset.jpg"
                alt="Meditation at sunset in the mountains"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal reflection */}
      <section className="content-section" style={{ background: 'var(--parchment-100)' }}>
        <div className="content-section-inner">
          <div className="content-full">
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <span className="eyebrow left">Personal Reflection</span>
            </div>
            <h2>What I Learned</h2>
            <p>
              This TED Talk resonated with me because like most people in the modern world, I struggle
              with awareness and concentration. With instant dopamine gratification tools like Instagram
              and TikTok at my disposal, it's impossible to be bored — I can just look at my phone for
              several hours without moving a muscle.
            </p>
            <div className="reflection-block">
              <p>
                Meditation is something I had tried during this unit with minimal success because of my
                preconceived notions — that I have to be thinking of nothing and just be calm. I usually
                gave up around the 7-minute mark, which I know sounds bad. But I wasn't doing it right.
                After watching this TED Talk, I tried meditating and got so much further than my
                previous time, just by thinking about the present.
              </p>
            </div>
            <p>
              The idea that you don't fight your thoughts but simply observe them — the sky and the storm —
              is something I wish I had understood earlier. Buy one, get two free: awareness, wisdom,
              and self-compassion all at once.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ background: 'var(--faith-surface)', padding: 'var(--space-9) var(--gutter)' }}>
        <div className="pull-quote">
          <div className="ornament">☸</div>
          <blockquote>
            "Awareness is like the sky. Panic is like a storm. No matter how strong the storm gets,
            the sky itself never actually changes — it is always calm and pure underneath."
          </blockquote>
          <cite>Yongey Mingyur Rinpoche · TED Talk, 2019</cite>
        </div>
      </section>
    </div>
  );
}
