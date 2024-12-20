'use client'

import React from 'react';
import SparklesText from './ui/sparkles-text';
import { ConfettiButton } from './ui/confetti';
import { motion } from "framer-motion";

const AIPoweredHero = () => {
    return (
        <div className="mx-auto max-w-screen-2xl h-screen">
            <div className="relative  text-white overflow-hidden py-4">
                <div className="container mx-auto px-6 py-20 text-center">
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
                        transition={{ duration: 0.3, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="animate_top"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                            Revolutionizing the Future with <SparklesText text="AI-Powered Innovation" />
                        </h1>
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
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="animate_top"
                    >
                        <p className="text-lg md:text-xl text-gray-400 mb-8">
                            Our cutting-edge AI technologies streamline operations, enhance decision-making, and deliver transformative results tailored to your needs.
                        </p>
                    </motion.div>

                    <div className="">
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
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="animate_top"
                        >
                            <ConfettiButton>Let's Move to Work 🎉</ConfettiButton>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIPoweredHero;
