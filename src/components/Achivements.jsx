'use client'

import React, { useEffect, useRef } from "react";

const Achievements = () => {
  const stats = [
    { value: "98%", label: "Customer Retention Rate" },
    { value: "10+", label: "Global Partners" },
    { value: "15+", label: "Successful Deliveries" },
    { value: "80 Days", label: "Average Project Turnaround" },
  ];

  const counters = useRef([]);


  const smoothCountUp = (target, index) => {
    let startValue = 0;
    const endValue = parseFloat(target.replace(/\D/g, "")); 
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();

    const update = (timestamp) => {
      const timeElapsed = timestamp - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const currentValue = startValue + (endValue - startValue) * progress;


      counters.current[index].innerText = currentValue.toFixed(0) + target.replace(/\d/g, ""); 

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  useEffect(() => {
    counters.current.forEach((counter, index) => {
      const stat = stats[index];
      smoothCountUp(stat.value, index); // Animate with the full value including symbols
    });
  }, []);

  return (
    <div className="mx-auto max-w-screen-2xl ">
      <div className="relative text-white bg-secondary/50 rounded-3xl m-7 px-8 py-48">
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-gray-400">Explore Our Milestones</p>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            Achievements That Highlight Our Dedication to Innovation
          </h2>
          <p className="text-gray-400 mt-4">
            At <strong>SYNOLUX</strong>, we strive to push boundaries. Our numbers reflect the trust
            and success we've built with our partners. Join us as we continue this incredible journey.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span
                ref={(el) => (counters.current[index] = el)}
                className="text-4xl font-bold"
              >
                0
              </span>
              <span className="text-gray-400 mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
