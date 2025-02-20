'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function TechnologyMarquee() {
  const technologies = [
    { imageUrl: "/assets/techstack/react.png", altText: "React" },
    { imageUrl: "/assets/techstack/next.png", altText: "Next.js" },
    { imageUrl: "/assets/techstack/node.png", altText: "Node.js" },
    { imageUrl: "/assets/techstack/python.png", altText: "Python" },
    { imageUrl: "/assets/techstack/mongodb.png", altText: "MongoDB" },
    { imageUrl: "/assets/techstack/flutter.png", altText: "Flutter" },
    { imageUrl: "/assets/techstack/laravel.png", altText: "Laravel" },
    { imageUrl: "/assets/techstack/firebase.png", altText: "Firebase" },
  ];

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="animate_top"
    >
      <div className="container mx-auto h-f h-[300px] text-white justify-center items-center overflow-x-hidden">
        <p className="text-sm text-center font-semibold text-gray-400 px-4">
          Pioneering the Future with Cutting-Edge Technologies.
        </p>
        <div className="group flex overflow-hidden p-4 gap-4 flex-row relative">
          <div
            className="flex flex-row gap-8 marquee-container"
            style={{
              animation: "scroll-marquee 20s linear infinite",
            }}
          >
            {/* Add duplicated items for seamless looping */}
            {technologies.concat(technologies).map((technology, index) => (
              <figure
                key={index}
                className="relative w-64 cursor-pointer overflow-hidden rounded-xl p-4"
              >
                <Image
                  width={technology.width || 144} // Default width if not provided
                  height={technology.height || 144} // Default height if not provided
                  src={technology.imageUrl}
                  alt={technology.altText}
                  className="opacity-50 hover:opacity-100 duration-300 ease-linear w-36 object-contain"
                />
              </figure>
            ))}
          </div>
          {/* Blur effect on both sides */}
          <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default TechnologyMarquee;
