"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const pillars = [
    {
        eyebrow: "For Recyclers",
        title: "Turn your waste into real income.",
        desc: "Sort your domestic plastics and cans. Drop them at verified community hubs or request collection to earn redeemable rewards.",
        features: [
            "Direct wallet cashouts",
            "Transparent per-kilogram rates",
            "Community clean impact badges",
        ],
        accent: {
            border: "border-brand/25 dark:border-brand/20",
            ring: "ring-brand/20",
            chip: "bg-brand/10 text-brand",
            check: "text-brand",
            hoverBorder: "hover:border-brand/60",
        },
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c1.5 3 1.5 5-0 7 3-1.5 5-1.5 7 0-3 1.5-5 1.5-7 0 1.5 3 1.5 5 0 7-1.5-3-1.5-5 0-7-3 1.5-5 1.5-7 0 3-1.5 5-1.5 7 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-4" />
            </svg>
        ),
    },
    {
        eyebrow: "For Vendors",
        title: "Predictable, high-grade material supply.",
        desc: "Access pre-sorted, contamination-free batches of PET bottles and aluminium cans directly from registered collectors.",
        features: [
            "Direct off-taker contracts",
            "Automated weight reconciliations",
            "Escrow security on every batch",
        ],
        accent: {
            border: "border-accent-amber/25 dark:border-accent-amber/20",
            ring: "ring-accent-amber/20",
            chip: "bg-accent-amber/10 text-accent-amber",
            check: "text-accent-amber",
            hoverBorder: "hover:border-accent-amber/60",
        },
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 21V10l6 4V10l6 4V8l4-2v15" />
            </svg>
        ),
    },
    {
        eyebrow: "For Logistics",
        title: "Move green cargo. Earn guaranteed payouts.",
        desc: "Truck and tricycle owners connect with collection hubs for scheduled haulage jobs with confirmed dispatch settlements.",
        features: [
            "Optimized pickup routes",
            "Guaranteed prompt job payments",
            "Steady volume of transport orders",
        ],
        accent: {
            border: "border-accent-indigo/25 dark:border-accent-indigo/20",
            ring: "ring-accent-indigo/20",
            chip: "bg-accent-indigo/10 text-accent-indigo",
            check: "text-accent-indigo",
            hoverBorder: "hover:border-accent-indigo/60",
        },
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 17V6a1 1 0 011-1h9v12M13 8h4l4 4v5h-2" />
            </svg>
        ),
    },
];

export const AudiencePillars = () => {
    return (
        <section id="ecosystem" className="py-24 sm:py-28 bg-slate-50 dark:bg-surface-dark">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <SectionHeading
                    eyebrow="The Ecosystem"
                    title="Built for Everyone in the Chain"
                    description="NsanaPay aligns incentives across households, collection businesses, and transporters."
                />

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {pillars.map((p, i) => (
                        <motion.article
                            key={p.eyebrow}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            whileHover={{ y: -8 }}
                            className={`rounded-3xl p-8 bg-white dark:bg-surface-dark-card border-2 ${p.accent.border} ${p.accent.hoverBorder} shadow-soft flex flex-col transition-shadow hover:shadow-lift`}
                        >
                            <div className={`w-14 h-14 rounded-2xl ${p.accent.chip} ${p.accent.ring} ring-1 flex items-center justify-center mb-6`}>
                                {p.icon}
                            </div>
                            <span className={`text-[11px] font-bold uppercase tracking-[0.18em] ${p.accent.check}`}>
                                {p.eyebrow}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1.5 leading-snug text-balance">
                                {p.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">{p.desc}</p>
                            <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-surface-dark-border pt-6">
                                {p.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2.5">
                                        <svg
                                            className={`w-4 h-4 mt-0.5 shrink-0 ${p.accent.check}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.5}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
