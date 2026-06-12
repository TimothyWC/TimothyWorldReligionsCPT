import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Religion CPT — The Sacred Traditions of the World',
  description: 'A scholarly exploration of Hinduism, Buddhism, Judaism, Christianity, and Islam.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
