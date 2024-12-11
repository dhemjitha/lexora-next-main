'use client'

import { CardHoverEffectDemo } from './shared/CardHoverEffectDemo';
import { motion } from "framer-motion";

const Services = () => {

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="animate_top"
    >
      <section id="services">
        <div className="mx-auto max-w-screen-2xl">
          <div className="max-w-full mx-7 py-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="animate_top"
            >

              <h2
                className="text-4xl pb-5 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-neutral-50 bg-opacity-50 mt-10 md:mt-20 font-semibold px-4 md:px-0"
              >
                Innovative Services for You
              </h2>

              <p
                className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4 md:px-0"
              >
                From custom software development to cloud solutions, we provide innovative technologies to streamline your operations and drive success.
              </p>

            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <CardHoverEffectDemo />
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;