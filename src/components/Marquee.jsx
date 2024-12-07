'use client'

import React from "react";
import MarqueeItem from "./shared/MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    "/assets/techstack/react.png",
    "/assets/techstack/nodejs.png", 
    "/assets/techstack/nextjs.png",
    "/assets/techstack/express.png",
    "/assets/techstack/flutter.png",
    "/assets/techstack/laravel.png",
    "/assets/techstack/mongodb.png",
    "/assets/techstack/python.png",
    "/assets/techstack/mysql.png",
    "/assets/techstack/aws.png",
  ];

//   const lowerMarquee = [
//     "/12.svg",
//     "/13.svg",
//     "/14.svg",
//     "/15.svg",
//     "/16.svg",
//     "/17.svg",
//     "/18.svg",
//     "/19.svg",
//     "/20.svg",
//     "/21.svg",
//     "/22.svg",
//   ];

  return (
    <div className="container mx-auto h-f h-[300px] text-white flex justify-center items-center overflow-x-hidden">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      {/* <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} /> */}
    </div>
  );
};

export default Marquee;