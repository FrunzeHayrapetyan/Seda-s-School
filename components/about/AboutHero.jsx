"use client";

import "./AboutHero.css";

export default function AboutHero({ initialLang, data }) {
  const currentData = data?.find((item) => item.lang === initialLang) || data?.[0];

  if (!currentData) return null;

  return (
    <section className="about-hero-section">
      <div className="about-hero-container">
        <span className="about-subtitle">{currentData.hero.subtitle}</span>
        <h1 className="about-title">{currentData.hero.title}</h1>
        <p className="about-desc">{currentData.hero.desc}</p>
      </div>
    </section>
  );
}