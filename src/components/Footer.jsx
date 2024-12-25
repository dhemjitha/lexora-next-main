'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { ConfettiButton } from './ui/confetti';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'Home', href: '/' },
            { name: 'Career', href: '/career' },
            { name: 'Services', href: '/#services' },
            { name: 'About Us', href: '/about' },
        ],
        social: [
            {
                name: 'Twitter',
                href: '#',
                icon: () => (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                ),
            },
            {
                name: 'LinkedIn',
                href: '#',
                icon: () => (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                ),
            },
        ],
    };

    return (
        <footer className="bg-black text-white">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <Separator />
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div>
                        <a className="flex h-8 mb-4 w-36 items-center rounded" href="/">
                                <Image
                                    alt="SYNOLUX Logo"
                                    loading="lazy"
                                    width="1540"
                                    height="322"
                                    decoding="async"
                                    srcSet="/assets/logo/logo.png 1x, /assets/logo/logo@2x.png 2x"
                                    src="/assets/logo/logo2.png"
                                    style="color: transparent;" />
                            </a>
                            <p className="text-muted-foreground mb-4">
                                Building the future of web development, one project at a time.
                            </p>
                            <div className="flex space-x-4">
                                {footerLinks.social.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                                    >
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon />
                                    </a>
                                ))}
                            </div>
                        </div>


                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {footerLinks.company.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div>
                            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Subscribe to our newsletter for the latest updates and news.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                                <Input
                                    type="email"
                                    placeholder="you@domain.com"
                                    className="flex-1 text-white placeholder:text-muted-foreground focustext-sm"
                                />
                                <ConfettiButton
                                    variant="secondary"
                                    className="w-full sm:w-auto px-4 sm:px-6 bg-white text-black hover:bg-gray-100 text-sm"
                                >
                                    Subscribe
                                </ConfettiButton>
                            </div>
                        </div>
                    </div>


                    <div className="border-t border-secondary mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-muted-foreground text-sm">
                                © {currentYear} Your Company. All rights reserved.
                            </p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a href="/privacy" className="text-muted-foreground hover:text-foreground text-sm">
                                    Privacy Policy
                                </a>
                                <a href="/terms" className="text-muted-foreground hover:text-foreground text-sm">
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;