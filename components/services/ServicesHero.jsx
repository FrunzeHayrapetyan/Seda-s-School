"use client";

import "./ServicesHero.css";

export default function ServicesHero({ initialLang, data }) {
  const currentData = data?.find((item) => item.lang === initialLang) || data?.[0];

  if (!currentData) return null;

  return (
    <section className="services-hero-section">
      <div className="services-hero-container">
        <span className="services-subtitle">{currentData.hero.subtitle}</span>
        <h1 className="services-title">{currentData.hero.title}</h1>
        <p className="services-desc">{currentData.hero.desc}</p>
      </div>
    </section>
  );
}