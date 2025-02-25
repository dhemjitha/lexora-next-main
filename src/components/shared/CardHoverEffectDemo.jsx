import { HoverEffect } from "./HoverEffect";
import { PiCloud, PiCode, PiShieldCheck, PiChartBar } from "react-icons/pi";
import { FaMobile } from 'react-icons/fa';
import { AiFillRobot } from 'react-icons/ai';

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    icon: (
      <div className="bg-blue-50 p-4 rounded-full">
        <PiCode className="w-8 h-8 text-black" />
      </div>
    ),
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your business needs, ensuring efficiency, scalability, and innovation.",
  },
  {
    icon: (
      <div className="bg-blue-50 p-4 rounded-full">
        <FaMobile className="w-8 h-8 text-black" />
      </div>
    ),
    title: "Mobile App Development",
    description:
      "Developing high-performance iOS and Android apps that deliver exceptional user experiences and seamless functionality.",
  },
  {
    icon: (
      <div className="bg-blue-50 p-4 rounded-full">
        <PiCloud className="w-8 h-8 text-black" />
      </div>
    ),
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and integration services that empower your business to innovate and grow efficiently.",
  },
  {
    icon: (
      <div className="bg-blue-50 p-4 rounded-full">
        <PiShieldCheck className="w-8 h-8 text-black" />
      </div>
    ),
    title: "Cybersecurity",
    description:
      "Advanced cybersecurity solutions to protect your systems, applications, and data from evolving threats.",
  },
  {
    icon: (
      <div className="bg-blue-50 p-4 rounded-full">
        <PiChartBar className="w-8 h-8 text-black" />
      </div>
    ),
    title: "Data Analytics",
    description:
      "Actionable insights through advanced analytics, helping your business make data-driven decisions for sustained growth.",
  },
  {
    icon: (
      <div className="bg-blue-50 p-4 rounded-full">
        <AiFillRobot className="w-8 h-8 text-black" />
      </div>
    ),
    title: "AI-Powered Solutions",
    description:
      "Unlock the power of artificial intelligence to automate processes, enhance decision-making, and improve customer experiences with cutting-edge AI models and solutions.",
  },
];
