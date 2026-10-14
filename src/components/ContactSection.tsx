"use client";

import React, { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-surface-dark-border bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow";

const labelClass = "block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-[0.12em] mb-1.5";

export const ContactSection = () => {
    const [copied, setCopied] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        intent: "Strategic Partnership",
        message: "",
    });

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("officialnsanapay@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message. Please try again or use direct email.");
            }

            setSubmitted(true);
        } catch (err: any) {
            const subject = `[${formData.intent}] Inquiry from ${formData.name}`;
            const body = `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\n\nMessage: ${formData.message}`;
            window.location.href = `mailto:officialnsanapay@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setErrorMessage("Could not send directly via server; opened your email client instead.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 sm:py-28 bg-slate-50 dark:bg-surface-dark transition-colors">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                    <div className="lg:col-span-5">
                        <SectionHeading
                            align="left"
                            eyebrow="Connect Directly"
                            title="Get in Touch"
                            description="Partner with us in building Nigeria's circular economy. Our communications desk is responsive."
                        />

                        <div className="mt-8 space-y-3.5">
                            <div className="p-5 rounded-2xl bg-white dark:bg-surface-dark-card border border-slate-200/80 dark:border-surface-dark-border shadow-soft flex items-center justify-between gap-3">
                                <div className="min-w-0">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                        Official Email
                                    </p>
                                    <a
                                        href="mailto:officialnsanapay@gmail.com"
                                        className="text-sm font-semibold text-slate-900 dark:text-white hover:text-brand transition-colors break-all"
                                    >
                                        officialnsanapay@gmail.com
                                    </a>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleCopyEmail}
                                    className="shrink-0 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand/10 hover:text-brand transition-colors"
                                >
                                    {copied ? "Copied ✓" : "Copy"}
                                </button>
                            </div>

                            <div className="p-5 rounded-2xl bg-white dark:bg-surface-dark-card border border-slate-200/80 dark:border-surface-dark-border shadow-soft space-y-3">
                                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                    Direct Telephone
                                </p>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">Project Manager</span>
                                    <a href="tel:+2347087205205" className="font-semibold text-brand hover:underline">
                                        +234 708 720 5205
                                    </a>
                                </div>
                                <div className="flex items-center justify-between text-sm border-t border-slate-100 dark:border-surface-dark-border pt-3">
                                    <span className="text-slate-500 dark:text-slate-400">Co-Founder</span>
                                    <a href="tel:+2348168451258" className="font-semibold text-brand hover:underline">
                                        +234 816 845 1258
                                    </a>
                                </div>
                            </div>

                            <div className="p-5 rounded-2xl bg-white dark:bg-surface-dark-card border border-slate-200/80 dark:border-surface-dark-border shadow-soft flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                        Headquarters
                                    </p>
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                        Akwa Ibom State, Nigeria
                                    </p>
                                </div>
                                <a
                                    href="https://www.facebook.com/share/19VCg7nqsa/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-semibold text-brand hover:underline whitespace-nowrap"
                                >
                                    Facebook →
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="bg-white dark:bg-surface-dark-card p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-surface-dark-border shadow-soft">
                            {submitted ? (
                                <div className="py-16 text-center">
                                    <div className="w-16 h-16 rounded-full bg-brand-light dark:bg-brand/20 text-brand text-2xl flex items-center justify-center mx-auto mb-4 ring-1 ring-brand/20">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                                        Message Delivered
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-sm mx-auto">
                                        Thank you for reaching out. A representative from the NsanaPay executive team
                                        will reply within 24 hours.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setSubmitted(false)}
                                        className="mt-6 px-5 py-2.5 text-xs font-semibold text-brand border border-brand/30 rounded-xl hover:bg-brand/10 transition-colors"
                                    >
                                        Send Another Inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="contact-name" className={labelClass}>
                                                Full Name *
                                            </label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="e.g. Victor Ekanem"
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-email" className={labelClass}>
                                                Email Address *
                                            </label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="name@company.com"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="contact-org" className={labelClass}>
                                                Organization
                                            </label>
                                            <input
                                                id="contact-org"
                                                type="text"
                                                value={formData.organization}
                                                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                                                placeholder="Company, Fund, or NGO"
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-intent" className={labelClass}>
                                                Intent
                                            </label>
                                            <select
                                                id="contact-intent"
                                                value={formData.intent}
                                                onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                                                className={inputClass}
                                            >
                                                <option value="Strategic Partnership">Strategic Partnership</option>
                                                <option value="Grant / Investment">Grant / Investment Inquiry</option>
                                                <option value="Sponsorship">Sponsorship (RVM Units / Hubs)</option>
                                                <option value="Vendor / Off-taker">Vendor / Material Off-taker</option>
                                                <option value="General Inquiry">General Inquiry</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="contact-message" className={labelClass}>
                                            Message *
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            rows={5}
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tell us what you would like to discuss..."
                                            className={inputClass}
                                        />
                                    </div>

                                    {errorMessage && (
                                        <p className="text-xs text-amber-600 dark:text-amber-400">{errorMessage}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3.5 rounded-xl text-sm font-semibold bg-brand hover:bg-brand-dark disabled:opacity-50 text-white shadow-brand-glow/60 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Submit Inquiry"
                                        )}
                                    </button>
                                    <p className="text-[11px] text-slate-400 text-center">
                                        We reply within one business day. Your details stay confidential.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
