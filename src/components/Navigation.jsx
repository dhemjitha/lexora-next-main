'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="dark bg-black text-white">
            <header className="fixed top-0 left-0 w-full shadow-md z-50 backdrop-blur-lg bg-opacity-60">
                <div className="container mx-auto px-6 py-3 flex items-center justify-between">

                    <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
                        Synolux
                    </Link>

                    <nav className="hidden md:flex items-center space-x-11 text-sm font-semibold">
                        <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                            Home
                        </Link>
                        <Link href="/career" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                            Career
                        </Link>
                        <Link href="/services" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                            Services
                        </Link>
                        <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                            About Us
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-2">
                        <Button variant="outline" className="font-semibold">Let's talk</Button>
                        <button
                            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none focus:ring-0 focus:ring-gray-600 dark:focus:ring-gray-300"
                            onClick={toggleMenu}
                        >
                            {/* Toggle button icon changes based on menu state */}
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
                            className="hover:text-gray-400"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            href="/career"
                            className="hover:text-gray-400"
                            onClick={toggleMenu}
                        >
                            Career
                        </Link>
                        <Link
                            href="/services"
                            className="hover:text-gray-400"
                            onClick={toggleMenu}
                        >
                            Services
                        </Link>
                        <Link
                            href="/about"
                            className="hover:text-gray-400"
                            onClick={toggleMenu}
                        >
                            About Us
                        </Link>
                    </nav>
                    <button
                        className="absolute top-6 right-6 text-gray-400"
                        onClick={toggleMenu}
                    >
                        {/* Close button */}
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
