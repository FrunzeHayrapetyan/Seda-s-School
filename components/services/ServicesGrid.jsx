"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./ServicesGrid.css";

export default function ServicesGrid({ initialLang, data }) {
  const currentData = data?.find((item) => item.lang === initialLang) || data?.[0];
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".service-card");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [activeCategory]);

  if (!currentData) return null;

  const filteredItems = activeCategory === "all" 
    ? currentData.items 
    : currentData.items.filter(item => item.category === activeCategory);

  return (
    <section className="services-grid-section" ref={sectionRef}>
      <div className="services-grid-container">
        
        <div className="filter-buttons">
          {currentData.categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="cards-grid">
          {filteredItems.map((item) => (
            <Link 
              href={item.slug ? `/services/${item.slug}` : "#"} 
              key={item.id} 
              className="service-card"
            >
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.teacher} className="card-image" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-teacher">{item.teacher}</p>
                <p className="card-role">{item.role}</p>
                <p className="card-desc">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}