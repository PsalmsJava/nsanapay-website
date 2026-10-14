"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const steps = [
    {
        num: "01",
        title: "Gather Clean Recyclables",
        desc: "Separate plastic bottles and aluminium beverage cans from organic waste in your home or shop.",
    },
    {
        num: "02",
        title: "Drop or Schedule Pickup",
        desc: "Take them to an official NsanaPay collection point or book a verified local hauler on the platform.",
    },
    {
        num: "03",
        title: "Get Credited Instantly",
        desc: "Your batch is weighed and verified. Payouts arrive directly into your account with zero delays.",
    },
];

export const Steps = () => {
    return (
        <section className="relative py-24 sm:py-28 bg-gradient-to-br from-brand-dark via-brand to-emerald-600 text-white overflow-hidden">
            {/* decorative blobs */}
            <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-white/10 rounded-full blur-3xl pointer-events-none" aria-hidden />
            <div className="absolute -bottom-40 -right-20 w-[380px] h-[380px] bg-brand-bright/20 rounded-full blur-3xl pointer-events-none" aria-hidden />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
                <SectionHeading
                    tone="light"
                    eyebrow="Simple by Design"
                    title="How It Works in Practice"
                    description="Three steps between a household full of bottles and money in the bank."
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* connector line */}
                    <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px border-t-2 border-dashed border-white/25" aria-hidden />

                    {steps.map((s, i) => (
                        <motion.div
                            key={s.num}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="relative z-10 text-center md:text-left"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 mb-6">
                                <span className="text-3xl font-black text-white tracking-tight">{s.num}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">{s.title}</h3>
                            <p className="mt-2.5 text-sm sm:text-base text-white/75 leading-relaxed max-w-xs mx-auto md:mx-0">
                                {s.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
