"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const loopStages = [
    {
        num: "01",
        title: "Segregate & Return",
        subtitle: "Households & Recyclers",
        desc: "Clean bottles and cans are dropped at community drop points or picked up on demand.",
        color: "text-brand",
        ring: "ring-brand/30",
        bg: "bg-brand/10",
    },
    {
        num: "02",
        title: "Verified Logistics",
        subtitle: "Haulers & Drivers",
        desc: "Local logistics partners move aggregated materials with digital chain-of-custody handoffs.",
        color: "text-accent-indigo",
        ring: "ring-accent-indigo/30",
        bg: "bg-accent-indigo/10",
    },
    {
        num: "03",
        title: "Direct Settlement",
        subtitle: "Escrow-Protected Payouts",
        desc: "Participants receive instant digital payouts. Every kilogram has verified financial value.",
        color: "text-accent-amber",
        ring: "ring-accent-amber/30",
        bg: "bg-accent-amber/10",
    },
    {
        num: "04",
        title: "Industrial Reprocessing",
        subtitle: "Recyclers & Off-Takers",
        desc: "Manufacturers receive continuous batches of sorted feedstock, closing the loop completely.",
        color: "text-emerald-600 dark:text-emerald-500",
        ring: "ring-emerald-500/30",
        bg: "bg-emerald-500/10",
    },
];

const CIRCUMFERENCE = 490;
const SEGMENT = CIRCUMFERENCE / 4;

export const CircularLoop = () => {
    const [activeStep, setActiveStep] = useState<number>(0);

    return (
        <section id="solution" className="py-24 sm:py-28 bg-white dark:bg-surface-dark relative overflow-hidden">
            <div
                className="absolute -top-40 -right-40 w-[480px] h-[480px] bg-brand/5 rounded-full blur-3xl pointer-events-none"
                aria-hidden
            />
            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
                <SectionHeading
                    eyebrow="The Architecture"
                    title="The NsanaPay Circular Loop"
                    description="A self-reinforcing economic loop where clean recovery feeds local enterprise, and economic reward drives environmental cleanliness."
                />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Animated loop diagram */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                        <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200" aria-hidden>
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="78"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    className="text-slate-100 dark:text-surface-dark-border"
                                />
                                <motion.circle
                                    cx="100"
                                    cy="100"
                                    r="78"
                                    fill="none"
                                    stroke="#00A86B"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    strokeDasharray={CIRCUMFERENCE}
                                    animate={{ strokeDashoffset: CIRCUMFERENCE - SEGMENT * (activeStep + 1) }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                />
                            </svg>

                            <div className="absolute inset-0 m-auto w-36 h-36 rounded-full bg-slate-50 dark:bg-surface-dark-card border border-slate-200 dark:border-surface-dark-border flex flex-col items-center justify-center p-3 text-center shadow-inner">
                                <span className="text-3xl" aria-hidden>♻</span>
                                <p className="text-xs font-bold text-slate-900 dark:text-white mt-1">Closed Loop</p>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400">Zero Waste to Nature</p>
                            </div>

                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 animate-spin-slow" aria-hidden>
                                <div className="w-3 h-3 rounded-full bg-brand shadow-brand-glow" />
                            </div>
                        </div>
                    </div>

                    {/* Stages */}
                    <div className="lg:col-span-7 flex flex-col gap-3">
                        {loopStages.map((stage, idx) => {
                            const isActive = activeStep === idx;
                            return (
                                <button
                                    key={stage.title}
                                    type="button"
                                    onClick={() => setActiveStep(idx)}
                                    onFocus={() => setActiveStep(idx)}
                                    aria-pressed={isActive}
                                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                                        isActive
                                            ? "bg-slate-50 dark:bg-surface-dark-card border-brand/60 shadow-soft"
                                            : "border-slate-200/80 dark:border-surface-dark-border hover:bg-slate-50/60 dark:hover:bg-surface-dark-card/40"
                                    }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <span
                                            className={`shrink-0 w-10 h-10 rounded-xl ${stage.bg} ${stage.color} ${stage.ring} ring-1 flex items-center justify-center text-sm font-bold`}
                                        >
                                            {stage.num}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                                                    {stage.title}
                                                </h3>
                                                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                                                    {stage.subtitle}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                                                {stage.desc}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Progress bar for active stage */}
                                    <div className="mt-4 h-0.5 rounded-full bg-slate-100 dark:bg-surface-dark-border overflow-hidden">
                                        <motion.div
                                            className="h-full bg-brand rounded-full"
                                            initial={false}
                                            animate={{ width: isActive ? "100%" : "0%" }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        />
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
