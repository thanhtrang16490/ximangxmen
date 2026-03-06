/**
 * TrustBadgesCarousel Component
 * 
 * Scroll-driven carousel displaying partner logos and certifications.
 * Features scroll-based animation, pause on hover, and grayscale-to-color transition.
 * 
 * Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7
 */

import React, { useState, useEffect, useRef } from 'react';
import type { TrustBadgesCarouselSection } from '../data/homepage-content';

interface TrustBadgesCarouselProps {
  section: TrustBadgesCarouselSection;
}

export default function TrustBadgesCarousel({ section }: TrustBadgesCarouselProps) {
  const { title, subtitle, badges } = section;
  const [isPaused, setIsPaused] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Triple the badges for seamless infinite loop
  const triplicatedBadges = [...badges, ...badges, ...badges];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isPaused) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress when section is in viewport
      // Progress goes from 0 to 1 as user scrolls through the section
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Start animating when section enters viewport
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        // Calculate progress based on how much of the section has been scrolled
        const scrolled = windowHeight - sectionTop;
        const total = windowHeight + sectionHeight;
        const progress = Math.max(0, Math.min(1, scrolled / total));
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPaused]);

  // Calculate transform based on scroll progress
  // Move from 0 to -33.33% (one full set of badges)
  const translateX = -scrollProgress * 33.33;

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Chứng nhận & Đối tác</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays for fade effect - smaller on mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 lg:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 lg:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="carousel-track-wrapper">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: isPaused ? 'none' : 'transform 0.1s linear'
              }}
            >
              {triplicatedBadges.map((badge, index) => (
                <div
                  key={`${badge.id}-${index}`}
                  className="carousel-item"
                >
                  <img
                    src={badge.logo}
                    alt={badge.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-110"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accessibility: Screen reader only text */}
        <div className="sr-only">
          <h3>Đối tác và chứng nhận:</h3>
          <ul>
            {badges.map((badge) => (
              <li key={badge.id}>
                {badge.name} - {badge.type === 'partner' ? 'Đối tác' : 'Chứng nhận'}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        .carousel-track-wrapper {
          overflow: hidden;
          width: 100%;
        }

        .carousel-track {
          display: flex;
          gap: 1rem;
          width: fit-content;
          will-change: transform;
        }

        @media (min-width: 640px) {
          .carousel-track {
            gap: 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .carousel-track {
            gap: 3rem;
          }
        }

        .carousel-item {
          flex-shrink: 0;
          width: 6rem;
          height: 6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease;
        }

        @media (min-width: 640px) {
          .carousel-item {
            width: 8rem;
            height: 8rem;
            padding: 1rem;
          }
        }

        @media (min-width: 768px) {
          .carousel-item {
            width: 10rem;
            height: 10rem;
            padding: 1.5rem;
          }
        }

        .carousel-item:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        /* Screen reader only utility */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </section>
  );
}
