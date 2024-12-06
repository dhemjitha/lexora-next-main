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
    <div className="mx-auto max-w-screen-2xl ">
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
                  What services do you offer?
                </AccordionTrigger>
                <AccordionContent>
                  We specialize in web and mobile app development, custom solutions, and enterprise software.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="underline decoration-white hover:decoration-white">
                  How long is the development process?
                </AccordionTrigger>
                <AccordionContent>
                  It depends on the project, usually from a few weeks to a few months.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
              <AccordionTrigger className="underline decoration-white hover:decoration-white">
                What is your pricing structure?
              </AccordionTrigger>
              <AccordionContent>
                We offer flexible pricing models, including hourly rates and fixed-price contracts.
              </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
              <AccordionTrigger className="underline decoration-white hover:decoration-white">
                Do you provide maintenance?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer post-launch support and maintenance to keep your system running smoothly.
              </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
              <AccordionTrigger className="underline decoration-white hover:decoration-white">
                Can you handle integrations?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! We integrate third-party tools and APIs to streamline your business processes.
              </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQS;
