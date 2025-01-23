'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";
import Image from "next/image";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="dark bg-black text-white">
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-secondary">
                <div className="container mx-auto px-6 py-3 flex items-center justify-between">

                    {/* Logo */}
                    <Link className="flex h-12 w-36 items-center rounded" href="/">
                        <Image
                            alt="SYNOLUX Logo"
                            loading="lazy"
                            width="1540"
                            height="322"
                            decoding="async"
                            srcSet="/assets/logo/logo.png 1x, /assets/logo/logo@2x.png 2x"
                            src="/assets/logo/logo.png"
                            style="color: transparent;" />
                    </Link>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-11 text-sm font-semibold">
                        <Link href="/" className=" dark:text-gray-300  dark:hover:text-white">
                            Home
                        </Link>
                        <Link href="/career" className=" dark:text-gray-300  dark:hover:text-white">
                            Career
                        </Link>
                        <Link href="/#services" className=" dark:text-gray-300  dark:hover:text-white">
                            Services
                        </Link>
                        <Link href="/about" className=" dark:text-gray-300  dark:hover:text-white">
                            About Us
                        </Link>
                    </nav>

                    {/* Button Section */}
                    <div className="flex items-center space-x-2">
                        <Button variant="outline" className="font-semibold">Let's talk</Button>
                        <button
                            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none focus:ring-0 focus:ring-gray-600 dark:focus:ring-gray-300"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </header>

            {/* Full-screen mobile navigation menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg z-50 flex justify-center items-center">
                    <nav className="flex flex-col items-center space-y-6 text-white text-2xl font-semibold">
                        <Link
                            href="/"
                            className="dark:text-gray-300 dark:hover:text-white"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            href="/career"
                            className="dark:text-gray-300 dark:hover:text-white"
                            onClick={toggleMenu}
                        >
                            Career
                        </Link>
                        <Link
                            href="/#services"
                            className="dark:text-gray-300 dark:hover:text-white"
                            onClick={toggleMenu}
                        >
                            Services
                        </Link>
                        <Link
                            href="/about"
                            className="dark:text-gray-300 dark:hover:text-white"
                            onClick={toggleMenu}
                        >
                            About Us
                        </Link>
                    </nav>
                    <button
                        className="absolute top-6 right-6 text-gray-300"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navigation;
