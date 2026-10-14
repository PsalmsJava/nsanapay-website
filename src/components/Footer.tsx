"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    Platform: [
        { label: "The Problem", href: "#problem" },
        { label: "The Loop", href: "#solution" },
        { label: "Ecosystem", href: "#ecosystem" },
        { label: "How It Works", href: "#partner" },
    ],
    Company: [
        { label: "About Us", href: "#about" },
        { label: "Team", href: "#team" },
        { label: "Partner With Us", href: "#partner" },
        { label: "Contact", href: "#contact" },
    ],
};

export const Footer = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800/80">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center gap-3 w-fit" aria-label="NsanaPay home">
                            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center p-1.5 ring-1 ring-white/10">
                                <Image
                                    src="/logo.png"
                                    alt="NsanaPay Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Nsana<span className="text-brand-bright">Pay</span>
                            </span>
                        </Link>
                        <p className="mt-4 text-sm max-w-sm leading-relaxed text-slate-400">
                            Powering Circular Economy. Turning Nigerian plastic and aluminium waste into verified
                            wealth.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/share/19VCg7nqsa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="NsanaPay on Facebook"
                                className="w-9 h-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-brand/20 hover:ring-brand/40 hover:text-white transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:officialnsanapay@gmail.com"
                                aria-label="Email NsanaPay"
                                className="w-9 h-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-brand/20 hover:ring-brand/40 hover:text-white transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
                                </svg>
                            </a>
                            <a
                                href="tel:+2347087205205"
                                aria-label="Call NsanaPay"
                                className="w-9 h-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-brand/20 hover:ring-brand/40 hover:text-white transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.3a1 1 0 01.96.73l1 3.5a1 1 0 01-.45 1.06l-1.4.93a12.05 12.05 0 005.4 5.4l.93-1.4a1 1 0 011.06-.45l3.5 1a1 1 0 01.73.96V19a2 2 0 01-2 2h-1C9.16 21 3 14.84 3 7V5z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div key={heading} className="md:col-span-2">
                            <p className="font-semibold text-white uppercase text-[11px] tracking-[0.18em]">
                                {heading}
                            </p>
                            <ul className="mt-4 space-y-2.5 text-sm">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="hover:text-white transition-colors duration-200">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="md:col-span-3">
                        <p className="font-semibold text-white uppercase text-[11px] tracking-[0.18em]">Contact</p>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li>
                                <a href="mailto:officialnsanapay@gmail.com" className="hover:text-white transition-colors break-all">
                                    officialnsanapay@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+2347087205205" className="hover:text-white transition-colors">
                                    +234 708 720 5205
                                </a>
                            </li>
                            <li className="text-slate-500">Akwa Ibom State, Nigeria</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                    <p>© 2026 NsanaPay Technologies. All rights reserved.</p>

                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
                    >
                        <span>Back to top</span>
                        <div className="relative w-8 h-8">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" aria-hidden>
                                <path
                                    className="text-slate-800"
                                    strokeWidth="3"
                                    stroke="currentColor"
                                    fill="none"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                    className="text-brand transition-all duration-150"
                                    strokeDasharray={`${scrollProgress}, 100`}
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] group-hover:-translate-y-0.5 transition-transform">
                                ↑
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};
