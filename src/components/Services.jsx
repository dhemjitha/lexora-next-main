'use client';

import { CardHoverEffectDemo } from "./shared/CardHoverEffectDemo";

const Services = () => {
  return (
    <section id="services">
        <div className="flex items-center justify-center">
        <div className="max-w-full mx-7 py-20 bg-secondary/50 rounded-3xl">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
        bg-clip-text text-transparent bg-gradient-to-b
        from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Innovative Services for You
      </div>

      <p
        className="mt-4 text-lg font-normal
        text-neutral-300 max-w-lg 
        text-center mx-auto"
      >
        From custom software development to cloud solutions, we provide innovative technologies to streamline your operations and drive success.
      </p>

      <CardHoverEffectDemo />
    </div>
    </div>
    </section>
    
    
  );
};

export default Services;
