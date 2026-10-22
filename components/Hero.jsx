"use client";

import "./Hero.css";

export default function Hero({ initialLang, heroData }) {
  const currentHero = heroData?.find((item) => item.lang === initialLang) || heroData?.[0];

  if (!currentHero) return null;

  return (
    <section className="hero-section">
      <div className="hero-container">
        <span className="hero-subtitle">{currentHero.subtitle}</span>
        
        <h1 className="hero-title">
          {currentHero.title}
        </h1>
        
        <p className="hero-desc">
          {currentHero.description}
        </p>
      </div>
    </section>
  );
}