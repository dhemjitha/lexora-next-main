'use client';

import React from 'react';
import Image from 'next/image';

const Contact = () => {
    return (
        <div>
            <div className="mx-auto max-w-screen-2xl px-8">
                <div className="relative z-20 shadow-2xl shadow-background bg-white py-12 sm:py-32 px-6 lg:px-20 rounded-3xl">
                    <div className="w-full max-w-screen-2xl mx-auto space-y-12 sm:space-y-0 md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">

                        <div className="sm:col-span-2 lg:col-span-5">
                            <p className="text-lg sm:text-xl text-background">Let us help you achieve</p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight leading-10 text-background sm:text-4xl lg:text-6xl">
                                Your Goals, Your Way.
                            </h2>
                        </div>

                        <div className="sm:col-span-2 lg:col-span-7 flex flex-col justify-end text-black">
                            <p className="text-xl sm:text-2xl text-background sm:text-end">Get in touch</p>
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold sm:text-end tracking-tighter">
                                info@synolux.com
                            </div>
                            <div className="mt-4 flex justify-center sm:justify-end">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-500 h-11 px-6 py-2 shadow-md"
                                >
                                    Book a Session
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative mt-10 sm:-mt-2">
                <div className="bg-blend-screen -mt-12 z-10 absolute h-full  to-transparent from-background/75 w-full"></div>
                <div style={{ transform: 'translateY(-40.25px) translateZ(0px)' }}>
                    <Image
                        alt="xleron Tech"
                        loading="lazy"
                        width="1678"
                        height="483"
                        decoding="async"
                        className="w-full max-w-5xl mx-auto opacity-45 duration-1000"
                        src="/assets/logo/logo.png"
                        style={{ color: 'transparent' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
