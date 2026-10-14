"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SunIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5.6 5.6l1.4 1.4m10 10l1.4 1.4M3 12h2m14 0h2M5.6 18.4l1.4-1.4m10-10l1.4-1.4M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
    </svg>
);

export const Navbar = () => {
    const [isDark, setIsDark] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));

        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("nsana_theme", next ? "dark" : "light");
        setIsDark(next);
    };

    const navLinks = [
        { label: "The Problem", href: "#problem" },
        { label: "How It Works", href: "#solution" },
        { label: "Ecosystem", href: "#ecosystem" },
        { label: "About", href: "#about" },
        { label: "Team", href: "#team" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "glass-nav border-b border-slate-200/60 dark:border-surface-dark-border py-3 shadow-soft"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2.5 group rounded-lg"
                    aria-label="NsanaPay home"
                >
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-soft flex items-center justify-center bg-white dark:bg-slate-900 ring-1 ring-brand/15 transition-transform group-hover:scale-105 duration-300">
                        <Image
                            src="/logo.png"
                            alt="NsanaPay Logo"
                            width={40}
                            height={40}
                            priority
                            className="object-contain w-full h-full p-0.5"
                        />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                        Nsana<span className="text-brand">Pay</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-brand-bright hover:bg-brand/5 dark:hover:bg-brand/10 transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle color theme"
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-surface-dark-border text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand dark:hover:text-brand-bright transition-colors"
                    >
                        {isDark ? <SunIcon /> : <MoonIcon />}
                    </button>

                    <a
                        href="#partner"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand hover:bg-brand-dark text-white shadow-brand-glow hover:shadow-brand-glow/80 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Partner With Us
                    </a>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle color theme"
                        className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
                    >
                        {isDark ? <SunIcon /> : <MoonIcon />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        className="p-2 text-slate-900 dark:text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden glass-nav border-b border-slate-200 dark:border-surface-dark-border overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    className="text-base font-medium text-slate-800 dark:text-slate-100 py-2.5 px-3 rounded-lg hover:bg-brand/5 hover:text-brand dark:hover:text-brand-bright transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <a
                                href="#partner"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center mt-3 py-3 rounded-xl font-semibold bg-brand text-white shadow-brand-glow"
                            >
                                Partner With Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
