'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const counters = useRef([]);

  const stats = [
    { value: "99%", label: "Success Rate", sublabel: "in project delivery" },
    { value: "50M+", label: "Revenue Generated", sublabel: "for our clients" },
    { value: "15+", label: "Expert Engineers", sublabel: "in our team" },
    { value: "24/7", label: "Support Available", sublabel: "around the globe" }
  ];

  const smoothCountUp = (target, index) => {
    if (target === "24/7") return;
    let startValue = 0;
    const endValue = parseFloat(target.replace(/\D/g, ""));
    const duration = 2000;
    const startTime = performance.now();

    const update = (timestamp) => {
      const timeElapsed = timestamp - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const currentValue = startValue + (endValue - startValue) * progress;

      if (counters.current[index]) {
        counters.current[index].textContent = 
          Math.floor(currentValue) + (target.replace(/\d/g, ""));
      }

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          counters.current.forEach((counter, index) => {
            if (counter) smoothCountUp(stats[index].value, index);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  return (
    <div className="relative overflow-hidden" ref={sectionRef}>
      <div className="absolute" />
      
      <div className="mx-auto max-w-screen-2xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative z-10 mb-20"
        >
          <div className="h-0.5 w-12 bg-secondary/80 mb-8" />
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 mb-6">
            Innovation in Numbers
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl">
            Transforming visions into reality through technical excellence and unwavering commitment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl -rotate-3 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
              
              <div className="relative cursor-pointer bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex items-baseline gap-1">
                  <span
                    ref={(el) => (counters.current[index] = el)}
                    className="text-5xl font-bold text-white"
                  >
                    {stat.value === "24/7" ? "24/7" : "0"}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                  <p className="text-zinc-500 text-sm mt-1">{stat.sublabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;