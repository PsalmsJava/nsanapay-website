"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const problems = [
    {
        stat: "< 12%",
        title: "Recovered & Recycled",
        desc: "Over 88% of valuable plastic bottles and aluminium cans are lost to open burning and landfills.",
        accent: "from-red-500/10 to-transparent text-red-600 dark:text-red-400 ring-red-200 dark:ring-red-900/50",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L14.7 3.9a2 2 0 00-3.4 0z" />
            </svg>
        ),
    },
    {
        stat: "Unorganized",
        title: "Fragmented Economics",
        desc: "Informal waste collectors bear heavy physical burdens with no standardized pricing, delayed payments, or digital safety nets.",
        accent: "from-amber-500/10 to-transparent text-accent-amber ring-amber-200 dark:ring-amber-900/50",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3 1.3 3 3-1.3 3-3 3m0-12V6m0 12v-2M5 12H3m18 0h-2" />
                <circle cx="12" cy="12" r="9" />
            </svg>
        ),
    },
    {
        stat: "Broken Supply",
        title: "Empty Factories",
        desc: "Recycling plants operate below installed capacity because there is no predictable, clean supply chain bringing sorted materials to their gates.",
        accent: "from-brand/10 to-transparent text-brand ring-brand/25",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 21V10l6 4V10l6 4V8l4-2v15" />
            </svg>
        ),
    },
];

export const ProblemSection = () => {
    return (
        <section id="problem" className="py-24 sm:py-28 bg-slate-50 dark:bg-surface-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <SectionHeading
                    align="left"
                    eyebrow="The Challenge"
                    title={
                        <>
                            Nigeria produces over{" "}
                            <span className="text-brand dark:text-brand-bright">2.5 million tonnes</span> of plastic
                            waste every year.
                        </>
                    }
                    description="Most of it ends up clogging municipal drains, polluting coastal waterlines, or burning in open dumps. Yet, plastic bottles and aluminium cans are raw industrial assets with quantifiable monetary value."
                />

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {problems.map((p, i) => (
                        <motion.article
                            key={p.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="group relative p-8 rounded-3xl bg-white dark:bg-surface-dark-card border border-slate-200/80 dark:border-surface-dark-border shadow-soft hover:shadow-lift transition-shadow overflow-hidden"
                        >
                            <div
                                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${p.accent.split(" ")[0]} opacity-0 group-hover:opacity-100 transition-opacity`}
                                aria-hidden
                            />
                            <div
                                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.accent} ring-1 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}
                            >
                                {p.icon}
                            </div>
                            <p className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                {p.stat}
                            </p>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">{p.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{p.desc}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
