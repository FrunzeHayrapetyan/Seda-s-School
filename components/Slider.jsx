"use client";

import { useState, useEffect } from "react";
import "./Slider.css";

export default function Slider({ initialLang, sliderData }) {
    const langData = sliderData?.find((item) => item.lang === initialLang) || sliderData?.[0];
    const slides = langData?.slides || [];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Ավտոմատ պտտում 4 վայրկյանը մեկ
    useEffect(() => {
        if (slides.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, [slides.length]);

    if (slides.length === 0) return null;

    const nextSlide = () => {
        setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    };

    return (
        <section className="slider-section">
            <div className="slider-container">

                {/* Սլայդների ցուցադրում */}
                <div
                    className="slider-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="slide-item">
                            <div className="slide-image-wrapper">
                                <img src={slide.image} alt={slide.title} className="slide-image" />
                            </div>
                            <div className="slide-content">
                                <h2 className="slide-title">{slide.title}</h2>
                                <p className="slide-desc">{slide.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Սլաքներ */}
                <button className="slider-arrow prev" onClick={prevSlide}>❮</button>
                <button className="slider-arrow next" onClick={nextSlide}>❯</button>

                {/* Կետիկներ */}
                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`slider-dot ${currentIndex === index ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}