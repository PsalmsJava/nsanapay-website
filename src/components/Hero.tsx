"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "100%", label: "Traceable Collection Goal", accent: "text-brand" },
    { value: "Zero", label: "Unsorted Waste Policy", accent: "text-accent-amber" },
    { value: "₦ Daily", label: "Direct Recycler Payouts", accent: "text-accent-indigo" },
    { value: "Akwa Ibom", label: "Pioneer Pilot Territory", accent: "text-slate-900 dark:text-white" },
];

const fadeUp = {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
};

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-0 overflow-hidden">
            {/* Ambient gradient wash */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[1000px] h-[500px] bg-gradient-to-tr from-brand/15 via-brand-bright/10 to-transparent blur-[130px] rounded-full pointer-events-none -z-10" />

            {/* Blueprint grid */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.35] dark:opacity-[0.15] pointer-events-none"
                style={{
                    maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
                    WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "56px 56px",
                    color: "rgb(148 163 184 / 0.35)",
                }}
                aria-hidden
            />

            {/* Floating material motifs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden>
                <div className="animate-float absolute top-32 left-[8%] w-16 h-16 rounded-full border border-brand/25 bg-brand/5 flex items-center justify-center">
                    <span className="text-brand/50 text-xs font-bold tracking-widest">PET</span>
                </div>
                <div
                    className="animate-float absolute bottom-44 right-[10%] w-20 h-20 rounded-2xl border border-accent-amber/25 bg-accent-amber/5 flex items-center justify-center"
                    style={{ animationDelay: "2.5s" }}
                >
                    <span className="text-accent-amber/60 text-xs font-bold tracking-widest">CAN</span>
                </div>
                <div
                    className="animate-float absolute top-52 right-[22%] hidden lg:flex w-14 h-14 rounded-xl border border-accent-indigo/25 bg-accent-indigo/5 items-center justify-center"
                    style={{ animationDelay: "4s" }}
                >
                    <span className="text-accent-indigo/50 text-[10px] font-bold tracking-widest">ALU</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.45 }}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand/10 dark:bg-brand/15 border border-brand/25 text-brand dark:text-brand-bright text-xs sm:text-sm font-semibold mb-8"
                    >
                        <span className="relative flex w-2 h-2">
                            <span className="absolute inline-flex w-full h-full rounded-full bg-brand opacity-60 animate-ping" />
                            <span className="relative inline-flex w-2 h-2 rounded-full bg-brand" />
                        </span>
                        Made for Nigeria · Launching in Akwa Ibom State
                    </motion.div>

                    <motion.h1
                        {...fadeUp}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] text-slate-900 dark:text-white text-balance"
                    >
                        Powering{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand via-brand-bright to-emerald-600">
                            Circular Economy
                        </span>
                    </motion.h1>

                    <motion.p
                        {...fadeUp}
                        transition={{ duration: 0.55, delay: 0.16 }}
                        className="mt-6 text-lg sm:text-2xl text-slate-600 dark:text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed text-balance"
                    >
                        We turn everyday recyclable waste into real income for households,
                        clean material for vendors, and a cleaner Nigeria for everyone.
                    </motion.p>

                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.55, delay: 0.26 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#partner"
                            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-semibold bg-brand hover:bg-brand-dark text-white shadow-brand-glow transition-all duration-300 hover:-translate-y-1"
                        >
                            Partner With Us
                            <svg
                                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>

                        <a
                            href="#solution"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-semibold border border-slate-300 dark:border-surface-dark-border bg-white/60 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-brand/40 transition-all duration-300"
                        >
                            Explore the Loop
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Impact strip */}
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-20 w-full border-t border-slate-200/80 dark:border-surface-dark-border bg-slate-50/70 dark:bg-surface-dark-card/50 backdrop-blur-sm"
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            className={`text-center ${i > 0 ? "lg:border-l lg:border-slate-200 dark:lg:border-surface-dark-border" : ""}`}
                        >
                            <p className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${s.accent}`}>
                                {s.value}
                            </p>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                                {s.label}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
