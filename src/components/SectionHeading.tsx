import React from "react";

interface SectionHeadingProps {
    eyebrow: string;
    title: React.ReactNode;
    description?: string;
    align?: "left" | "center";
    tone?: "default" | "light";
}

export const SectionHeading = ({
    eyebrow,
    title,
    description,
    align = "center",
    tone = "default",
}: SectionHeadingProps) => {
    const isCenter = align === "center";
    const isLight = tone === "light";

    return (
        <div className={isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
            <span
                className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase ${
                    isLight ? "text-brand-bright" : "text-brand dark:text-brand-bright"
                }`}
            >
                <span
                    className={`inline-block h-px w-6 ${isLight ? "bg-brand-bright/50" : "bg-brand/50"}`}
                    aria-hidden
                />
                {eyebrow}
                {isCenter && (
                    <span
                        className={`inline-block h-px w-6 ${isLight ? "bg-brand-bright/50" : "bg-brand/50"}`}
                        aria-hidden
                    />
                )}
            </span>
            <h2
                className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-balance ${
                    isLight ? "text-white" : "text-slate-900 dark:text-white"
                }`}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={`mt-4 text-base sm:text-lg leading-relaxed ${
                        isLight ? "text-white/70" : "text-slate-600 dark:text-slate-400"
                    }`}
                >
                    {description}
                </p>
            )}
        </div>
    );
};
