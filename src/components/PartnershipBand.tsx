import React from "react";
import Link from "next/link";

export const PartnershipBand = () => {
    return (
        <section
            id="partner"
            className="relative py-24 sm:py-28 bg-surface-dark text-white overflow-hidden"
        >
            {/* gradient mesh */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute -top-40 left-1/4 w-[520px] h-[520px] bg-brand/25 rounded-full blur-[120px]" />
                <div className="absolute -bottom-48 right-1/4 w-[420px] h-[420px] bg-accent-indigo/20 rounded-full blur-[120px]" />
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright mb-4">
                        <span className="inline-block h-px w-6 bg-brand-bright/50" aria-hidden />
                        Join the Loop
                        <span className="inline-block h-px w-6 bg-brand-bright/50" aria-hidden />
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-balance">
                        Partner With NsanaPay
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
                        Whether you collect waste, supply materials, or want to invest in a sustainable Nigeria,
                        there is a seat for you at the table. Let us build the circular economy together.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/60">
                        {["Strategic Partnerships", "Off-taker Supply", "Grant & Investment", "RVM Sponsorship"].map(
                            (item) => (
                                <span key={item} className="inline-flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-bright" aria-hidden />
                                    {item}
                                </span>
                            ),
                        )}
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand hover:bg-brand-dark text-white font-semibold shadow-brand-glow transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Start a Conversation
                        </Link>
                        <a
                            href="mailto:officialnsanapay@gmail.com?subject=Partnership%20Inquiry"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/25 hover:border-white/50 hover:bg-white/5 text-white font-semibold transition-colors duration-300"
                        >
                            Email Us Directly
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
