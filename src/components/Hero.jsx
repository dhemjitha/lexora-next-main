'use client';

import React, { useContext, useRef } from "react";
import { Button } from "./ui/button";
import { useGSAP } from '@gsap/react';
import { TransitionContext } from "./shared/TransitionContext";
import gsap from "gsap";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function Hero() {
  const scrollToAchievements = () => {
    const achievementsSection = document.getElementById("achievements");
    if (achievementsSection) {
      achievementsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);

  // GSAP Animation Hook
  useGSAP(() => {
    const targets = container.current.querySelectorAll("p, .space-x-3"); // Select p tags within the container
    gsap.fromTo(
      targets,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.25, duration: 0.5 } // Added duration for smoother animation
    );

    // Optional timeline animation for the container
    if (timeline) {
      timeline.add(gsap.to(container.current, { opacity: 0 }));
    }
  }, { scope: container });

  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div
      className="flex items-center justify-center text-center px-6"
      style={{ height: "115vh" }}
      ref={container}
    >
      <div>
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-300 mb-4 container">
          Boosting Business Growth with Smart Technology.
        </p><br />
        <p className="text-base md:text-xl lg:text-1xl text-gray-400 max-w-3xl mx-auto px-2 container">
          We provide the <strong className="text-white">best solutions</strong> for you.
        </p>
        <p className="text-base md:text-xl lg:text-1xl text-gray-400 max-w-3xl mx-auto px-2 container">
          Tailored technologies designed to help your business grow.
        </p>
        <br />
        <div className="space-x-3">
          <Button className="font-medium">Get Started</Button>
          <Button
            variant="outline"
            className="font-bold"
            onClick={scrollToAchievements}
          >
            Discover More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
