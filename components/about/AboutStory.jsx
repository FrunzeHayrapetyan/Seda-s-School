"use client";

import { useEffect, useRef } from "react";
import "./AboutStory.css";

export default function AboutStory({ initialLang, data }) {
  const currentData = data?.find((item) => item.lang === initialLang) || data?.[0];
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

    const elements = sectionRef.current.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  if (!currentData) return null;

  return (
    <section className="about-story-section" ref={sectionRef}>
      <div className="about-story-container">
        
        <div className="story-intro reveal">
          <p className="story-text">{currentData.intro.text1}</p>
          <p className="story-text">{currentData.intro.text2}</p>
          
          <div className="story-location-box reveal">
            <div className="location-icon">📍</div>
            <p className="story-location-text">{currentData.intro.location}</p>
          </div>
        </div>

        <div className="founder-section reveal">
          <h2 className="founder-title">{currentData.founder.title}</h2>
          <p className="story-text">{currentData.founder.text1}</p>
          <p className="story-text">{currentData.founder.text2}</p>
          
          <div className="founder-quote-box">
            <div className="quote-icon">“</div>
            <p className="founder-quote">{currentData.founder.quote}</p>
            <p className="founder-author">{currentData.founder.author}</p>
          </div>
        </div>

      </div>
    </section>
  );
}