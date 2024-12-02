'use client';

import React from "react";

function TechnologyMarquee() {
  const technologies = [
    { imageUrl: "/assets/reactjs.webp", altText: "React" },
    { imageUrl: "/assets/next.webp", altText: "Next.js" },
    { imageUrl: "/assets/nodejs.webp", altText: "Node.js" },
    { imageUrl: "/assets/python.webp", altText: "Python" },
    { imageUrl: "/assets/mongodb.webp", altText: "MongoDB" },
    { imageUrl: "/assets/flutter.webp", altText: "Flutter" },
  ];

  return (
    <>
    
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
            <img
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
    </>
  );
}

export default TechnologyMarquee;
