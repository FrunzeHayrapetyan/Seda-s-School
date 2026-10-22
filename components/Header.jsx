"use client";

import { useState, useEffect } from "react"; 
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Header.css";

export default function Header({ navbar, langs, initialLang }) {
  const [lang, setLang] = useState(initialLang);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 
  const router = useRouter();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = navbar.filter((item) => item.lang === lang);

  const changeLang = (code) => {
    document.cookie = `lang=${code}; path=/; max-age=${60 * 60 * 24 * 365}`;
    setLang(code);
    router.refresh();
  };

  return (
    <header className={`header-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        <Link href="/" className="header-logo-link">
          <div className="header-logo-box">
            <Image src="/logo.jpg" alt="Seda's School Logo" fill className="header-logo-img" priority />
          </div>
        </Link>

        <div className="header-right">
          <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
            {links.map((item) => (
              <Link key={item.id} href={item.route} className="header-nav-link" onClick={() => setIsMenuOpen(false)}>
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="header-lang-switcher">
            {langs.map((l) => (
              <button
                key={l.id}
                onClick={() => changeLang(l.code)}
                className={`header-lang-btn ${lang === l.code ? "active" : ""}`}
              >
                {l.code.toUpperCase()}
              </button>
            ))}
          </div>

          <button className="header-burger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <span className={isMenuOpen ? "open" : ""}></span>
            <span className={isMenuOpen ? "open" : ""}></span>
            <span className={isMenuOpen ? "open" : ""}></span>
          </button>
        </div>
      </div>
    </header>
  );
}