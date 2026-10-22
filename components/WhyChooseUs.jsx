"use client";

import "./WhyChooseUs.css";

export default function WhyChooseUs({ initialLang, data }) {
  const currentData = data?.find((item) => item.lang === initialLang) || data?.[0];

  if (!currentData) return null;

  return (
    <section className="why-section">
      <div className="why-container">
        
        {/* Վերնագիր */}
        <div className="why-header">
          <span className="why-subtitle">{currentData.subtitle}</span>
          <h2 className="why-title">{currentData.title}</h2>
        </div>

        {/* Քարտեր */}
        <div className="why-grid">
          {currentData.items.map((item) => (
            <div key={item.id} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}