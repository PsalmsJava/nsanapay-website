"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const values = [
    "Environmental Sustainability",
    "Radical Transparency",
    "Grassroots Economic Impact",
    "Climate Innovation",
    "Community Dignity",
];

export const AboutUs = () => {
    return (
        <section id="about" className="py-24 sm:py-28 bg-white dark:bg-surface-dark">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.55 }}
                        className="lg:col-span-7"
                    >
                        <SectionHeading
                            align="left"
                            eyebrow="About Us"
                            title="Born in Nigeria. Engineered for African Scale."
                        />
                        <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            NsanaPay was founded on a simple realization: waste management in Nigeria cannot rely on
                            goodwill alone. To clean our cities permanently, waste recovery must be financially
                            rational for everyone who touches it.
                        </p>
                        <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                            Headquartered and launching in{" "}
                            <strong className="text-slate-900 dark:text-white font-semibold">Akwa Ibom State</strong>,
                            we are building digital infrastructure that ties localized collection networks directly
                            into industrial off-takers across Nigeria.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2.5">
                            {values.map((v, i) => (
                                <motion.span
                                    key={v}
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-surface-dark-card border border-slate-200 dark:border-surface-dark-border text-slate-800 dark:text-slate-200 hover:border-brand/40 hover:text-brand transition-colors duration-200"
                                >
                                    {v}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="lg:col-span-5"
                    >
                        <div className="relative bg-gradient-to-br from-brand/10 to-accent-amber/10 p-8 sm:p-10 rounded-3xl border border-brand/20 shadow-soft overflow-hidden">
                            <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand/10 rounded-full blur-2xl pointer-events-none" aria-hidden />
                            <div className="relative">
                                <div className="w-12 h-12 rounded-2xl bg-brand text-white flex items-center justify-center shadow-brand-glow">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                                        <circle cx="12" cy="12" r="3" />
                                        <path strokeLinecap="round" d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9l2.1 2.1m10 10l2.1 2.1M4.9 19.1l2.1-2.1m10-10l2.1-2.1" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-5">Our Mission & Vision</h3>
                                <div className="mt-6 space-y-6">
                                    <div>
                                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                                            The Mission
                                        </span>
                                        <p className="text-sm text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed">
                                            Eliminate plastic and aluminium pollution across Nigerian states by turning
                                            waste recovery into sustainable household income.
                                        </p>
                                    </div>
                                    <div className="border-t border-brand/15 pt-5">
                                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-amber">
                                            The Vision
                                        </span>
                                        <p className="text-sm text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed">
                                            To become West Africa&apos;s most reliable, data-backed supply chain for
                                            post-consumer recyclables.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
