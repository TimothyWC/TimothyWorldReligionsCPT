import Link from 'next/link';
import styles from './Footer.module.css';

const traditions = [
  { key: 'hinduism',    label: 'Hinduism',     glyph: 'ॐ' },
  { key: 'buddhism',    label: 'Buddhism',     glyph: '☸' },
  { key: 'judaism',     label: 'Judaism',      glyph: '✡' },
  { key: 'christianity',label: 'Christianity', glyph: '✝' },
  { key: 'islam',       label: 'Islam',        glyph: '☪' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.wordmark}>Religion <em>CPT</em></p>
          <p className={styles.tagline}>A final report on our course and my studies.</p>
        </div>
        <div className={styles.links}>
          <p className={styles.colHead}>Religions</p>
          <ul>
            {traditions.map(({ key, label, glyph }) => (
              <li key={key}>
                <Link href={`/${key}`} className={styles.link}>
                  <span aria-hidden="true">{glyph}</span> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.ornament}>◆</div>
      <div className={styles.bottom}>
        <p>© 2026 Religion CPT, Grade 11</p>
      </div>
    </footer>
  );
}
