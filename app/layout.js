import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConsultationButton from '../components/ConsultationButton';
import ScrollToTop from '../components/ScrollToTop'; // Ներմուծում ենք
import db from '../db.json';
import Lang from '../lib/lang';

export const metadata = {
  title: "Seda's School",
  description: "Seda's School — կրթություն և զարգացում",
};

export default async function RootLayout({ children }) {
  const lang = await Lang();

  return (
    <html lang={lang}>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0 }}>
        <Header navbar={db.navbar} langs={db.langs} initialLang={lang} />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer footerData={db.footer_label} initialLang={lang} />
        
        {/* Կոճակները */}
        <ScrollToTop />
        <ConsultationButton initialLang={lang} consultationData={db.consultation} />
      </body>
    </html>
  );
}