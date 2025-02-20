'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

// Separate Word component to properly handle hooks
const Word = ({ word, progress, start, end }) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  
  return (
    <motion.span
      style={{ opacity }}
      className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
    >
      {word}
    </motion.span>
  );
};

export default function ScrollAnimatedText() {
  const containerRef = useRef(null);
  const text = "Building with Bits".split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <div className="min-h-[200vh] bg-black flex justify-center items-center">
      <div ref={containerRef} className="relative h-screen w-full">
        <div className="sticky top-1/2 transform -translate-y-1/2 flex justify-center">
          <motion.div className="flex space-x-4 justify-center">
            {text.map((word, i) => {
              const start = i / text.length;
              const end = start + 1 / text.length;
              
              return (
                <Word
                  key={i}
                  word={word}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}