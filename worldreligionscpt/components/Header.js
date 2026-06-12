'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const faithNav = [
  { key: 'hinduism',    label: 'Hinduism',    glyph: 'ॐ' },
  { key: 'buddhism',    label: 'Buddhism',    glyph: '☸' },
  { key: 'judaism',     label: 'Judaism',     glyph: '✡' },
  { key: 'christianity',label: 'Christianity',glyph: '✝' },
  { key: 'islam',       label: 'Islam',       glyph: '☪' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark}>
          Religion <em>CPT</em>
        </Link>
        <nav className={styles.nav} aria-label="Faith navigation">
          {faithNav.map(({ key, label, glyph }) => (
            <Link
              key={key}
              href={`/${key}`}
              data-faith={key}
              className={`${styles.navItem} ${pathname === `/${key}` ? styles.active : ''}`}
            >
              <span className={styles.navGlyph} aria-hidden="true">{glyph}</span>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
