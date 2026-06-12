import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Buddhism | Religion CPT',
  description: 'A TED Talk analysis on mindfulness through the teachings of Yongey Mingyur Rinpoche.',
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
            A TED Talk breakdown on mindfulness and the struggle with awareness that I deal with too.
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
          TED Talk on a Conflict/Struggle (Mindfulness)
        </span>
      </div>

      {/* What is the TED Talk about */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-grid">
            <div className="content-text">
              <h2>What is the TED Talk about?</h2>
              <p>
                Yongey Mingyur Rinpoche is a buddhist. He comes to the Ted Talk to share his wisdom
                and experience in medication to teach people. He first prefixes the notion that
                meditation is simple and anyone can do it anywhere, anytime. The essence of meditation
                is Awareness. Meditation does not necessarily mean stop thinking, it means to concentrate
                on what you are thinking. He uses an example and tells the audience to think of anything
                but pizza but most people only could think about pizza. That is because when you try to
                think about nothing, it's impossible, you will always think about something. He also
                explains that mediation is not looking for peace, calm, and joy; it's a byproduct of it.
                You can't just sit down and look for a calm you will only get more stressed that way.
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
                Yongey Mingyur Rinpoche
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The sky and storm */}
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
              <p>
                He then shares his own personal story to back up what he's saying. Growing up in the
                Himalayan mountains, he suffered from really bad panic attacks since he was a kid. He was
                scared of strangers, scared of thunderstorms, and the panic followed him around like a
                shadow. At 9 years old he asked his father, who happened to be a great meditation teacher,
                to teach him how to meditate. The first thing his father told him was to stop trying to
                fight the panic and stop trying to get rid of it. He explained that awareness is like the
                sky and panic is like a storm or clouds. No matter how strong the storm gets, the sky
                itself never actually changes, it's always calm and pure underneath. Mingyur says our minds
                work the exact same way; awareness is always there, we just don't know how to connect with
                it because we get caught up in our thoughts and emotions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three steps */}
      <section className="content-section">
        <div className="content-section-inner">
          <div className="content-full">
            <p>
              After this he breaks down 3 steps to connect with awareness. The first step is using an
              object as support. In the Ted Talk he uses a bell and tells the audience to just listen to
              the sound, and if thoughts or panic come up to just let them come and go without caring about
              them. The second step is meditating with the panic itself instead of trying to avoid it. He
              explains that when you actually watch your panic, you become bigger than the panic, just like
              when you see a river you are out of the river. He says when you really look at panic up close,
              it's not solid anymore, it breaks down into pieces like a sensation here, a scary image there,
              a voice in your head, and if you take any one of these pieces away the panic falls apart. He
              compares it to shaving foam that looks like a solid rock but is actually full of bubbles inside.
              This leads to awareness, wisdom, and self compassion all at once which he jokes is "buy one get
              two free."
            </p>
            <p>
              The third and final step is open awareness meditation, where you don't need any object anymore,
              you just become aware of yourself. He shares the story of how in 2011 he left behind his
              monastery, his students, and his comfortable bed to do a wandering retreat with only a few
              thousand rupees. The money ran out fast and he ended up getting really bad food poisoning alone
              on the street and genuinely thought he was going to die. In that moment he practiced open
              awareness and his mind became completely present and free even though his body was breaking
              down. After that experience the street became his home, trees became "trees of love" and even
              the wind on his face felt joyful. His main message at the end is that meditation isn't about
              stopping your thoughts or forcing yourself to feel calm, it's about being present and aware no
              matter what is happening around you, and that anyone can do it anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* What I learned */}
      <section className="content-section" style={{ background: 'var(--faith-surface)' }}>
        <div className="content-section-inner">
          <div className="content-full">
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <span className="eyebrow left">Personal Reflection</span>
            </div>
            <h2>What I learned from it</h2>
            <p>
              This Ted Talk resonated with me because like most people in the modern world I struggle with
              awareness and concentration. With instant dopamine gratification tools at my disposal like
              instagram and tiktok it is impossible to be bored when I can just look at my phone for several
              hours without moving a muscle. Meditation is something I have tried during this unit with
              minimal success because of my preconceived notions of meditation. That I have to be thinking of
              nothing and just be calm. I usually give up around the 7 minute mark which I know sounds bad,
              and it is. But I wasn't doing it right. After I watched this ted talk I tried meditating and got
              so much further than my previous time just by thinking about the present.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote (kept, no em dash) */}
      <section style={{ background: 'var(--parchment-100)', padding: 'var(--space-9) var(--gutter)' }}>
        <div className="pull-quote">
          <div className="ornament">☸</div>
          <blockquote>
            "Awareness is like the sky and panic is like a storm. No matter how strong the storm gets, the
            sky itself never actually changes, it's always calm and pure underneath."
          </blockquote>
          <cite>Yongey Mingyur Rinpoche · TED Talk</cite>
        </div>
      </section>
    </div>
  );
}
