'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function ScrollAnimatedText() {
  const containerRef = useRef(null);

  // Track scroll progress relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"], // Adjust scroll behavior
  });

  // Text split into words
  const text = "Building with Bits".split(" ");

  return (
    <div className="min-h-[200vh] bg-black flex justify-center items-center">
      {/* Outer scrollable container */}
      <div ref={containerRef} className="relative h-screen w-full">
        {/* Sticky text in the center */}
        <div className="sticky top-1/2 transform -translate-y-1/2 flex justify-center">
          <motion.div className="flex space-x-4 justify-center">
            {text.map((word, i) => {
              // Set unique scroll progress ranges for each word
              const start = i / text.length;
              const end = start + 1 / text.length;
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

              return (
                <motion.span
                  key={i}
                  style={{ opacity }} // Animate opacity for each word
                  className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
