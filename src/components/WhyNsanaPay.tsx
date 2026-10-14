"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const points = [
    {
        title: "Escrow-Protected Transactions",
        desc: "Nobody gets shortchanged. Funds are securely locked and automatically released once weight and grade are digitally verified at drop-off.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V7l8-4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "Verified Hand-off Integrity",
        desc: "Every kilogram of PET or aluminium is scanned and logged with dynamic handoff codes, removing disputes across collectors and aggregators.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <rect x="7" y="2" width="10" height="20" rx="2.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 18h2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 8.5l1.5 1.5 3-3" />
            </svg>
        ),
    },
    {
        title: "Built for Nigerian Realities",
        desc: "Optimized for mobile-first users, intermittent connectivity, and direct instant withdrawals to local Nigerian bank accounts (NUBAN).",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c2.5 2.7 4 5.7 4 9s-1.5 6.3-4 9c-2.5-2.7-4-5.7-4-9s1.5-6.3 4-9z" />
            </svg>
        ),
    },
    {
        title: "Measurable ESG Metrics",
        desc: "Real-time auditing of plastic diversion volume and reduced carbon footprints for institutional partners and impact funds.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V10m6 10V4m6 16v-7m4 7H2" />
            </svg>
        ),
    },
];

export const WhyNsanaPay = () => {
    return (
        <section className="py-24 sm:py-28 bg-white dark:bg-surface-dark">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <SectionHeading
                    align="left"
                    eyebrow="Institutional Trust"
                    title="Why NsanaPay Stands Out"
                    description="We are not building another informal collection group. We are building the institutional digital backbone for Nigeria's circular economy."
                />

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {points.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                            className="group p-6 rounded-2xl bg-slate-50 dark:bg-surface-dark-card border border-slate-200/80 dark:border-surface-dark-border hover:border-brand/40 hover:shadow-soft transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-surface-dark-border group-hover:ring-brand/30 text-brand flex items-center justify-center transition-all duration-300 group-hover:-translate-y-0.5">
                                {p.icon}
                            </div>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white mt-4 leading-snug">{p.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
