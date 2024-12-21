'use client';

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const FeatureShowcase = () => {
  const tags = ['Innovation', 'Global Impact', 'Tech-Driven', 'Efficiency', 'Sustainability'];

  return (
    <div className="mx-auto max-w-screen-2xl">
    <div className=" text-white py-16 px-8">
        <Separator/>
        <br /><br />
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Achieve More, Together{' '} <br />
          <span className="font-light text-gray-400">Driving Success Through Innovation</span>
        </h1>
      </div>

      <div className="flex justify-center gap-3 flex-wrap mb-8">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="px-3 py-1">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        <p>
          At <strong>SYNOLUX</strong>, we are committed to pushing boundaries and redefining possibilities. 
          Together with our partners, we deliver transformative solutions that make a lasting impact.
        </p>
        <p className="mt-4">
          Our mission is simple: To innovate, empower, and build a sustainable future through technology.
        </p>
      </div>

      <div className="text-center mt-12">
        <Button>Join Our Journey →</Button>
      </div>
        <br /><br />
      <Separator/>
    </div>
    </div>
  );
};

export default FeatureShowcase;
