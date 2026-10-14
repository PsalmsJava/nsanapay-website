"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

interface TeamMember {
    name: string;
    role: string;
    initials: string;
    bio: string;
    phone: string;
    linkedin?: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Project Lead",
        role: "Project Manager",
        initials: "PM",
        bio: "Leading field operations, logistics dispatch coordination, and rollout partnerships across Akwa Ibom State.",
        phone: "+234 708 720 5205",
        linkedin: "https://linkedin.com",
    },
    {
        name: "Co-Founder",
        role: "Co-Founder & Executive Lead",
        initials: "CF",
        bio: "Driving corporate strategy, institutional partnerships, software platform architecture, and investor relations.",
        phone: "+234 816 845 1258",
        linkedin: "https://linkedin.com",
    },
];

export const Team = () => {
    return (
        <section id="team" className="py-24 sm:py-28 bg-slate-50 dark:bg-surface-dark">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <SectionHeading
                    eyebrow="Leadership"
                    title="Meet the Team"
                    description="A dedicated Nigerian team committed to solving the plastic challenge from the grassroots up."
                />

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {teamMembers.map((member, i) => (
                        <motion.article
                            key={member.role}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            whileHover={{ y: -6 }}
                            className="group p-8 rounded-3xl bg-white dark:bg-surface-dark-card border border-slate-200/80 dark:border-surface-dark-border shadow-soft hover:shadow-lift transition-shadow"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand to-brand-dark ring-1 ring-brand-dark/20 ring-offset-2 ring-offset-white dark:ring-offset-surface-dark-card flex items-center justify-center text-white text-xl font-bold shadow-brand-glow/50 mb-6 transition-transform duration-300 group-hover:scale-105">
                                {member.initials}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
                            <p className="text-[11px] font-semibold text-brand dark:text-brand-bright uppercase tracking-[0.18em] mt-1">
                                {member.role}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">{member.bio}</p>

                            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-surface-dark-border flex items-center justify-between gap-3">
                                <a
                                    href={`tel:${member.phone.replace(/\s+/g, "")}`}
                                    className="text-xs font-medium text-slate-500 hover:text-brand transition-colors"
                                >
                                    {member.phone}
                                </a>
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${member.name} on LinkedIn`}
                                        className="text-slate-400 hover:text-brand transition-colors"
                                    >
                                        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
