import React from "react";
import { Button } from "./ui/button";

export const CareerHero = () => {
  return (
    <div className="w-full bg-black py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Innovate the future with <br />Lexora Tech
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Join our passionate team of visionaries and tech enthusiasts. Together, we&apos;ll create cutting-edge solutions that redefine the digital landscape.
        </p>
        <Button>Explore Career Opportunities</Button>
      </div>
    </div>
  );
};