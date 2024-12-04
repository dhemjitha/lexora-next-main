import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Poppins } from "next/font/google";

const font = Poppins(
  {
    subsets: ["latin"],
    weight: '400'
  }
);

const FAQS = () => {
  return (
    <div className={font.className}>
      <div className="mt-10 md:py-10 bg-[#f6f5f4] rounded-3xl m-7">
        <div className="p-10 md:p-4 md:px-20">
          <div className="text-3xl md:text-7xl font-bold text-black">
            Have questions?
          </div>
          <div className="font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
            Get answers.
          </div>
          <Accordion type="single" collapsible className="text-black">
            <AccordionItem value="item-1">
              <AccordionTrigger className="underline decoration-white hover:decoration-white">
                What software development services do you offer?
              </AccordionTrigger>
              <AccordionContent>
                We offer a range of software development services, including custom web applications, mobile apps, and enterprise solutions. Our expertise spans across various technologies like React, Node.js, Python, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="underline decoration-white hover:decoration-white">
                How long does it take to build a software solution?
              </AccordionTrigger>
              <AccordionContent>
                The timeline for developing a software solution varies depending on the project scope and complexity. Typically, it takes anywhere from a few weeks to several months. We'll provide a timeline estimate after understanding your requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="underline decoration-white hover:decoration-white">
                What is the pricing for your services?
              </AccordionTrigger>
              <AccordionContent>
                Our pricing is tailored to the scope of the project. We offer flexible pricing models, including hourly rates and fixed-price contracts. Contact us for a personalized quote based on your project requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="underline decoration-white hover:decoration-white">
                Do you provide ongoing maintenance and support?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer ongoing maintenance and support for all our software solutions. We provide both corrective and preventive maintenance to ensure the smooth operation of your system post-launch.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="underline decoration-white hover:decoration-white">
                Can you help with software integration?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! We specialize in integrating third-party tools, APIs, and platforms to ensure seamless workflows across your business systems. Let us know what tools you need integrated, and we'll handle the rest.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQS;
