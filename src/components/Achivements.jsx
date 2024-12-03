'use client'

import React from "react";

const Achievements = () => {
  const stats = [
    { value: "98%", label: "Customer Retention Rate" },
    { value: "10+", label: "Global Partners" },
    { value: "15+", label: "Successful Deliveries" },
    { value: "80 Days", label: "Average Project Turnaround" },
  ];

  return (
    <div className="relative text-white min-h-screen bg-secondary/50 rounded-3xl  mx-auto px-8 py-48 lg:max-w-7xl max-w-2xl">

        <div className="text-center mb-12">
          <p className="text-sm uppercase text-gray-400">Explore Our Milestones</p>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            Achievements That Highlight Our Dedication to Innovation
          </h2>
          <p className="text-gray-400 mt-4">
            At <strong>SYNOLUX</strong>, we strive to push boundaries. Our numbers reflect the trust 
            and success we've built with our partners. Join us as we continue this incredible journey.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <span className="text-4xl font-bold">{stat.value}</span>
              <span className="text-gray-400 mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Achievements;
