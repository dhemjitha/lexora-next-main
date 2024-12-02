import React from 'react'
import { Button } from './ui/button';

function Hero() {
  return (
    <div className="flex items-center justify-center  text-center px-6" style={{ height: "115vh" }}>
      <div>
        <p className="text-4xl md:text-5xl lg:text-8xl font-bold text-gray-300 mb-4 container">
          Boosting Business Growth with Smart Technology.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto px-2 container">
          We provide the best solutions for you. Tailored technologies designed to help your business grow.
        </p><br />
        <div className="space-x-3">
        <Button className="font-medium">Get Started</Button>
        <Button variant="outline" className="font-bold">Discover More</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
