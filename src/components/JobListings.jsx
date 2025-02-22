'use client';

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const jobs = [
    {
        id: 1,
        title: "Intern Software Engineer",
        department: "Development",
        location: "Remote",
        type: "Internship",
        skills: [
            "JavaScript",
            "React",
            "Node.js",
            "HTML/CSS",
            "Git",
            "Problem Solving",
            "Team Collaboration",
        ],
    },
    {
        id: 2,
        title: "UI/UX Engineer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        skills: [
            "Figma",
            "Sketch",
            "Adobe XD",
            "User Research",
            "Wireframing",
            "Prototyping",
            "HTML/CSS",
            "JavaScript",
        ],
    },
    {
        id: 3,
        title: "Full Stack Developer",
        department: "Development",
        location: "Remote",
        type: "Full-time",
        skills: [
            "JavaScript",
            "React",
            "Node.js",
            "TypeScript",
            "MongoDB",
            "REST APIs",
            "AWS",
            "CI/CD",
        ],
    },
];

export const JobListings = () => {
    const [expandedJob, setExpandedJob] = useState(null);

    // Function to handle the "Apply Now" button click
    const handleApplyClick = (jobTitle) => {
        const subject = `Application for ${jobTitle}`;
        const email = "career@lexoratech.com";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div
            className="w-full bg-black py-20 px-4"
            id="openings"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Your Next Opportunity Awaits</h2>
                <p className="text-gray-400 mb-12">
                    Join Lexora Tech: Where Innovation Meets Opportunity
                </p>
                <div className="space-y-4">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="border border-secondary rounded-lg p-6 hover:bg-secondary/50 transition-colors"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() =>
                                    setExpandedJob(expandedJob === job.id ? null : job.id)
                                }
                                aria-expanded={expandedJob === job.id}
                                aria-controls={`job-details-${job.id}`}
                            >
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                                        <span>{job.department}</span>
                                        <span>•</span>
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span>{job.type}</span>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`text-gray-400 transform transition-transform ${expandedJob === job.id ? "rotate-180" : ""}`}
                                />
                            </div>
                            {expandedJob === job.id && (
                                <div
                                    id={`job-details-${job.id}`}
                                    className="mt-6 pt-4 border-t border-secondary"
                                >
                                    <div className="flex flex-wrap gap-2">
                                        {job.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1 bg-secondary rounded-full text-sm text-gray-300 border border-secondary"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <Button onClick={() => handleApplyClick(job.title)}
                                        className="mt-6 px-6 py-2 rounded-full transition-colors"
                                    >
                                        Apply Now
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};