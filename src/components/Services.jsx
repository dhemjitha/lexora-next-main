'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CardHoverEffectDemo } from './shared/CardHoverEffectDemo';

const Services = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7 // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const tl = gsap.timeline();

        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, delay:0.2 }
        )
        .fromTo(
          descriptionRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, delay: 0.1 }
        );

        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services">
      <div className="mx-auto max-w-screen-2xl">
        <div className="max-w-full mx-7 py-20 bg-secondary/50 rounded-3xl">
          <h2
            ref={titleRef}
            className="text-4xl pb-5 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-neutral-50 bg-opacity-50 mt-20 font-semibold"
          >
            Innovative Services for You
          </h2>

          <p
            ref={descriptionRef}
            className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto"
          >
            From custom software development to cloud solutions, we provide innovative technologies to streamline your operations and drive success.
          </p>

          <CardHoverEffectDemo />
        </div>
      </div>
    </section>
  );
};

export default Services;