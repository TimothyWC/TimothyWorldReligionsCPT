import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Religion CPT | The 5 Major Religions',
  description: 'A final report on our course and my studies of Hinduism, Buddhism, Judaism, Christianity, and Islam.',
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
